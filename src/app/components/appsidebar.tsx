"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import SiteNavbar from "./navbar"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { italianno } from "@/lib/fonts"

const links = [
  { href: "/", label: "Home" },

]

export function AppShell({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()

  return (
    <SidebarProvider>
      {isMobile && (
        <Sidebar collapsible="offcanvas" variant="sidebar">
          <SidebarHeader className="px-3 pt-3">
            <div className="px-2 py-1.5">
              <span className={cn(italianno.className, "text-2xl leading-none")}>Yung Ravage</span>
            </div>
            <SidebarInput placeholder="Search..." />
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <NavMenu />
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Discover</SidebarGroupLabel>
              <SidebarGroupContent>
                <DiscoverMenu />
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="text-xs text-foreground/60">
            <div className="px-2 py-1.5">© {new Date().getFullYear()} Yung Ravage</div>
          </SidebarFooter>
        </Sidebar>
      )}

      <SidebarInset>
        <SiteNavbar />
        <main id="main" className="min-h-[calc(100svh-4rem)] p-4 md:p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

function NavMenu() {
  const pathname = usePathname()
  const { setOpenMobile } = useSidebar()

  const handleClick = () => {
    // Close sidebar on mobile when link is clicked
    setOpenMobile(false)
  }

  return (
    <SidebarMenu>
      {links.map(({ href, label }) => {
        const active = pathname === href
        return (
          <SidebarMenuItem key={href}>
            <SidebarMenuButton asChild isActive={active}>
              <Link href={href} onClick={handleClick}>
                {label}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  )
}

function DiscoverMenu() {
  const { setOpenMobile } = useSidebar()

  const handleClick = () => {
    // Close sidebar on mobile when link is clicked
    setOpenMobile(false)
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/music" onClick={handleClick}>
            Latest Tracks
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/platforms" onClick={handleClick}>
            Platforms
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}