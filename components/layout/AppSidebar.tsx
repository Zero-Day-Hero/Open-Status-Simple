"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Activity,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Network,
  ChevronRight,
  Server,
  Database,
  Globe
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const navItems = [
  {
    title: "NOC Dashboard",
    icon: LayoutDashboard,
    url: "/",
  },
  {
    title: "Network Nodes",
    icon: Network,
    url: "/nodes",
  },
  {
    title: "Traffic Analysis",
    icon: Activity,
    url: "/traffic",
  },
  {
    title: "Server Health",
    icon: Server,
    url: "/servers",
  },
]

const managementItems = [
  {
    title: "IP Management",
    icon: Globe,
    url: "/ip-management",
  },
  {
    title: "Storage Status",
    icon: Database,
    url: "/storage",
  },
  {
    title: "Access Policy",
    icon: ShieldCheck,
    url: "/access-policy",
  },
  {
    title: "SRS Settings",
    icon: Settings,
    url: "/srs-settings",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="border-r border-white/10 shadow-2xl">
      <SidebarHeader className="h-20 flex items-center justify-center border-b border-white/5 bg-primary/5">
        <div className="flex items-center gap-3 px-4 w-full">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
            <Network className="text-white h-6 w-6" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-headline font-bold text-lg tracking-tight text-primary">NetOps 2025</span>
            <span className="text-[10px] font-medium text-accent uppercase tracking-widest">Build 2025.Q4.NOC</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2 pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/50 font-semibold px-4 mb-2">Operations</SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.url}
                  tooltip={item.title}
                  className="h-11 rounded-xl transition-all duration-200 hover:bg-accent/10 hover:text-accent data-[active=true]:bg-primary data-[active=true]:text-white"
                >
                  <Link href={item.url} className="flex items-center gap-3 px-3">
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium group-data-[collapsible=icon]:hidden">{item.title}</span>
                    {pathname === item.url && <ChevronRight className="ml-auto h-4 w-4 group-data-[collapsible=icon]:hidden" />}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="text-muted-foreground/50 font-semibold px-4 mb-2">Management</SidebarGroupLabel>
          <SidebarMenu>
            {managementItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.url}
                  tooltip={item.title}
                  className="h-11 rounded-xl transition-all duration-200 hover:bg-accent/10 hover:text-accent data-[active=true]:bg-primary data-[active=true]:text-white"
                >
                  <Link href={item.url} className="flex items-center gap-3 px-3">
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium group-data-[collapsible=icon]:hidden">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-white/5 bg-primary/5">
        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
          <div className="h-8 w-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center overflow-hidden">
            <img 
              src="https://picsum.photos/seed/noc-admin-2025/100/100" 
              alt="Admin" 
              className="h-full w-full object-cover"
              data-ai-hint="engineer face"
            />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden overflow-hidden">
            <span className="text-xs font-bold truncate">ZeroDayHero</span>
            <span className="text-[10px] text-muted-foreground truncate">hamidreza.mobin@gmail.com</span>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
