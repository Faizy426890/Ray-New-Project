"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { italianno } from "@/lib/fonts"
import { useIsMobile } from "@/hooks/use-mobile" // import for conditional trigger

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/music", label: "Music" },
  { href: "/platforms", label: "Platforms" },
]

export default function SiteNavbar() {
  const pathname = usePathname()
  const isMobile = useIsMobile() // determine if mobile

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] rounded bg-foreground px-3 py-2 text-background font-medium"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        {isMobile && (
          <div className="md:hidden">
            <SidebarTrigger aria-label="Open sidebar" />
          </div>
        )}

        {/* Brand - Italianno font, no logo */}
        <Link
          href="/"
          className={cn(italianno.className, "text-pretty text-2xl md:text-3xl leading-none")}
          aria-label="Yung Ravage home"
        >
          Uno Vee 
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden md:flex">
          <ul className="flex items-center gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                      active
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
