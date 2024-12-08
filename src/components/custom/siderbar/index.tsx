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
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { SubscriptionPlan } from "../subscription";
import UpgradeCard from "./UpgradeCard";
import { usePaths } from "@/hooks/use-user-nav";
import { PAGE_BREAD_CRUMBS } from "@/constants/page";
import Link from "next/link";
import { removeSpecialChars } from "@/lib/utils";


export async function AppSidebar({slug}: {slug: string}) {
  const { user } = useUser();
  const userSlug = removeSpecialChars(`${user?.firstName}-${user?.lastName}`);
  let items = [
    {
      title: "Home",
      url: `/dashboard/${userSlug}`,
      icon: Home,
      isActive: false
    },
    {
      title: "Automation",
      url: `/dashboard/${userSlug}/automations`,
      icon: Workflow,
      isActive: false
    },
    {
      title: "Integration",
      url: `/dashboard/${userSlug}/integrations`,
      icon: Unplug,
      isActive: false
    },
  ];
  const { page } = usePaths();
   console.log("PAGE FROM HOOK", page, slug)
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
                  <SidebarMenuButton asChild isActive={(item.url === slug) || (!PAGE_BREAD_CRUMBS.includes(page) && item.title === "Home")}>
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
                  <Link href={`/dashboard/${userSlug}/settings`}>Setting</Link>
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
