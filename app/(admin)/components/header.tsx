import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Search, Settings } from "lucide-react";
import Link from "next/link";

import React from 'react'

const Header = ({link}: {link: string}) => {
  return (
    <header className="bg-white border-b p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
          <SidebarTrigger />
            <h1 className="text-2xl font-semibold mt-1">{link}</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Input placeholder="Search anything" className="w-64 pl-10 bg-gray-50 border-gray-200" />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>

            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
              <Bell className="h-4 w-4" />
            </div>

            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
              <Settings className="h-4 w-4" />
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium">Orlando Laurentius</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </header>
  )
}

export default Header