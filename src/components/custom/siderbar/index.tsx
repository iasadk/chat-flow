"use client";
import { ChevronUp, Home, MessageCircle, Unplug, Workflow } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { PAGE_BREAD_CRUMBS } from "@/constants/page";
import { usePaths } from "@/hooks/use-user-nav";
import { getRedirectLinkWithUser, removeSpecialChars } from "@/lib/utils";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { SubscriptionPlan } from "../subscription";
import UpgradeCard from "./UpgradeCard";

export async function AppSidebar() {
  const { user } = useUser();
  let items = [
    {
      title: "Home",
      slug: "/",
      url: getRedirectLinkWithUser(""),
      icon: Home,
      isActive: false,
    },
    {
      title: "Automation",
      slug: "automations",
      url: getRedirectLinkWithUser("automations"),
      icon: Workflow,
      isActive: false,
    },
    {
      title: "Integration",
      slug: "integrations",
      url: getRedirectLinkWithUser("integrations"),
      icon: Unplug,
      isActive: false,
    },
  ];
  const { page } = usePaths();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center text-white">
            <MessageCircle className=" !w-[32px] !h-[32px] p-1 rounded-lg bg-primary" />
            <span className="ml-2 text-2xl font-normal">ChatFlow</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="ml-1 mt-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      item.slug === page ||
                      (!PAGE_BREAD_CRUMBS.includes(page) &&
                        item.title === "Home")
                    }
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarSeparator className="mb-10 mt-4" />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarContent className="mb-4">
          <SidebarContent>
            <SubscriptionPlan type="FREE">
              <div className="flex-1 flex flex-col justify-end">
                <UpgradeCard />
              </div>
            </SubscriptionPlan>
          </SidebarContent>
        </SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <UserButton /> {user?.firstName} {user?.lastName}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <Link href={getRedirectLinkWithUser("settings")}>
                    Setting
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Help</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SignOutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
