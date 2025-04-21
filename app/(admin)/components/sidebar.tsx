"use client"

import { Calendar, CreditCard, FileText, Home, ImageIcon, Inbox, MessageSquare, Search, Settings, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Menu items.
const items = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: "Bookings",
    href: "/admin/bookings",
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    label: "Invoices",
    href: "/admin/invoices",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    label: "Inbox",
    href: "/admin/inbox",
    icon: <Inbox className="w-5 h-5" />,
  },
  {
    label: "Calendar",
    href: "/admin/calendar",
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    label: "Events",
    href: "/admin/events",
    icon: <Users className="w-5 h-5" />,
  },
  {
    label: "Financials",
    href: "/admin/financials",
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    label: "Gallery",
    href: "/admin/gallery",
    icon: <ImageIcon className="w-5 h-5" />,
  },
  {
    label: "Feedback",
    href: "/admin/feedback",
    icon: <MessageSquare className="w-5 h-5" />,
  },
];


export function AppSidebar() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  const pathname = usePathname();
  return (
    <Sidebar >
      <SidebarHeader><div className="p-4 border-b flex items-center gap-2">
        <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center text-white font-bold">
          <Link href="/admin">V</Link>
        </div>
        <span className="font-semibold text-lg">Ventixe</span>
      </div></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mt-2 px-3 py-2 mx-2 rounded-md flex items-center gap-2 ${
                isActive
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
        <div className="p-4 ">
        <div className="bg-purple-100 rounded-lg p-4 text-center">
          <div className="mx-auto mb-2 w-16 h-16">
            {/* <img src="/placeholder.svg?height=64&width=64" alt="Mobile app" className="w-full h-full" /> */}
          </div>
          <p className="text-xs text-gray-700 mb-2">
            Experience enhanced features and a smoother interface with the latest version of Ventixe
          </p>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs">Try New Version</Button>
        </div>

        <Button variant="outline" className="w-full mt-4 text-gray-600 text-sm">
          Sign Out
        </Button>
      </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
