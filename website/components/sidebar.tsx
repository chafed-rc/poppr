import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, BookOpen, Package, PartyPopper, Drama } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function AppSidebar() {
  return (
    <Sidebar>
      {/* Top Header */}
      <SidebarHeader>
        <div className="text-lg font-bold tracking-tight">Poppr </div>
      </SidebarHeader>

      {/* Sidebar body */}
      <SidebarContent>
        {/* Docs group */}
        <SidebarGroup>
          <SidebarGroupLabel>Basics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/getting-started">
                    <Home className="w-4 h-4" />
                    <span>Getting Started</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings group */}
        <SidebarGroup>
          <SidebarGroupLabel>API</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/poppr">
                    <PartyPopper className="w-4 h-4" />
                    <span>poppr()</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/configuration">
                    <Package className="w-4 h-4" />
                    <span>PopprModal</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/modal-showcase">
                    <Drama className="w-4 h-4" />
                    <span>Modal Showcase</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Github</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="https://github.com/chafed-rc/poppr">
                    <FaGithub className="w-4 h-4" />
                    <span>Poppr</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <p className="text-xs text-muted-foreground pl-2">Made by @rcuffdev</p>
      </SidebarFooter>
    </Sidebar>
  );
}
