"use client";
import React from "react";
import AutomationButton from "../automation-button";
import NotificationButton from "../notification-button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePaths } from "@/hooks/use-user-nav";
import { PAGE_BREAD_CRUMBS } from "@/constants/page";
import MainBreadCrumb from "../main-bread-crumb";
type Props = {
  slug: string;
};

const InfoBar = ({ slug }: Props) => {
  const { page } = usePaths();
  console.log(page);
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;
  return (
    currentPage && (
      <div>
        <nav className="flex justify-between items-center">
          <SidebarTrigger />
          <div className="flex items-center gap-x-4">
            <AutomationButton />
            <NotificationButton />
          </div>
        </nav>
        <MainBreadCrumb 
          page={PAGE_BREAD_CRUMBS.includes(page) ? page : 'Home'}
          slug={slug}
        />
      </div>
    )
  );
};

export default InfoBar;
