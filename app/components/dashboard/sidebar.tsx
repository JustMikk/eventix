import { Calendar, CreditCard, FileText, ImageIcon, Inbox, MessageSquare, Users } from "lucide-react";
import { Button } from "../ui/button";

import React from 'react'

export default function sidebar () {
  return (
    <div className="w-[180px] bg-white border-r flex flex-col">
    <div className="p-4 border-b flex items-center gap-2">
      <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center text-white font-bold">
        V
      </div>
      <span className="font-semibold text-lg">Ventixe</span>
    </div>

    <nav className="flex-1 py-4">
      <div className="px-3 py-2 mx-2 bg-purple-100 text-purple-600 rounded-md flex items-center gap-2">
        <div className="w-5 h-5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        </div>
        <span>Dashboard</span>
      </div>

      <div className="mt-2 px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2">
        <Calendar className="w-5 h-5" />
        <span>Bookings</span>
      </div>

      <div className="mt-2 px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2">
        <FileText className="w-5 h-5" />
        <span>Invoices</span>
      </div>

      <div className="mt-2 px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2">
        <Inbox className="w-5 h-5" />
        <span>Inbox</span>
      </div>

      <div className="mt-2 px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2">
        <Calendar className="w-5 h-5" />
        <span>Calendar</span>
      </div>

      <div className="mt-2 px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2">
        <Users className="w-5 h-5" />
        <span>Events</span>
      </div>

      <div className="mt-2 px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2">
        <CreditCard
         className="w-5 h-5" />
        <span>Financials</span>
      </div>

      <div className="mt-2 px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2">
        <ImageIcon className="w-5 h-5" />
        <span>Gallery</span>
      </div>

      <div className="mt-2 px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2">
        <MessageSquare className="w-5 h-5" />
        <span>Feedback</span>
      </div>
    </nav>

    <div className="p-4 border-t mt-auto">
      <div className="bg-purple-100 rounded-lg p-4 text-center">
        <div className="mx-auto mb-2 w-16 h-16">
          <img src="/placeholder.svg?height=64&width=64" alt="Mobile app" className="w-full h-full" />
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
  </div>
  )
}


