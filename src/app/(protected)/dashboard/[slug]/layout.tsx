import InfoBar from "@/components/custom/Infobar";
import { AppSidebar } from "@/components/custom/siderbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = ({ children, params }: Props) => {
  return (
    <div className="p-3">
      <SidebarProvider defaultOpen={true}>
        {/* SIDEBAR */}
        <AppSidebar slug={params.slug}/>

        <main className="w-full">
          <InfoBar slug={params.slug}/>
          {children}
        </main>
      </SidebarProvider>
      ;{/* NAVIGATION */}
    </div>
  );
};

export default Layout;
