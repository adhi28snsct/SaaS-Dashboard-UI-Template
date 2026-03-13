"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart,
  Settings,
  Users,
  Activity,
  PieChart,
  LayoutDashboard,
  Menu,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const routes = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/overview",
    color: "text-sky-500",
  },
  {
    label: "Analytics",
    icon: BarChart,
    href: "/analytics",
    color: "text-violet-500",
  },
  {
    label: "Users",
    icon: Users,
    href: "/users",
    color: "text-pink-700",
  },
  {
    label: "Activity",
    icon: Activity,
    href: "/activity",
    color: "text-orange-700",
  },
  {
    label: "Reports",
    icon: PieChart,
    href: "/reports",
    color: "text-emerald-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-500",
  },
]

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname()

  const SidebarContent = (
    <div className="space-y-4 py-4 flex flex-col h-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-3 py-2 flex-1">

        {/* Logo */}
        <Link href="/overview" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4 flex items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LayoutDashboard className="h-5 w-5" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            DashLite
          </h1>
        </Link>

        {/* Navigation */}
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger
          render={
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          }
        />

        <SheetContent side="left" className="p-0 border-r-0 w-72">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          {SidebarContent}
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50 border-r bg-background",
          className
        )}
      >
        {SidebarContent}
      </div>
    </>
  )
}