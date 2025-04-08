import React from "react";
import { AppSidebar } from "@/components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import MobileNavbar from "@/components/navbar";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      {/* Mobile Navbar */}
      <div className="block lg:hidden fixed top-0 left-0 right-0 z-50">
        <MobileNavbar />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <AppSidebar />
      </div>

      {/* Main content wrapper */}
      <div className="flex justify-center px-4 sm:px-6 lg:px-8 mt-16 lg:mt-0 w-full">
        <div className="w-full max-w-3xl">{children}</div>
      </div>
    </SidebarProvider>
  );
};

export default DocsLayout;
