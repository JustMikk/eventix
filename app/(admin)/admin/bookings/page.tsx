"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  HelpCircle,
  ImageIcon,
  Inbox,
  Instagram,
  Linkedin,
  LogOut,
  MessageSquare,
  Search,
  Settings,
  Twitter,
  Users,
} from "lucide-react"
import { Area, AreaChart, Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Header from "@/(admin)/components/header"
import { artDesignData, bookingsData, bookingsTableData, categoryData } from "@/constants/bookings"

export default function BookingsPage() {
  // Stats data
  const statsData = [
    {
      title: "Total Bookings",
      value: "55,000",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      ),
      iconBg: "bg-pink-500",
    },
    {
      title: "Total Tickets Sold",
      value: "45,000",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M2 12h20" />
          <path d="M6 8v8" />
          <path d="M18 8v8" />
          <path d="m2 8 2 8" />
          <path d="m20 8 2 8" />
          <path d="M8 8v8" />
          <path d="M16 8v8" />
        </svg>
      ),
      iconBg: "bg-pink-500",
    },
    {
      title: "Total Earnings",
      value: "$275,450",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </svg>
      ),
      iconBg: "bg-pink-500",
    },
  ]

  // State for filters
  const [activeFilter, setActiveFilter] = useState("All")
  const [entriesPerPage, setEntriesPerPage] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Header link="Bookings" />

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {statsData.map((stat, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.iconBg} rounded-full flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Bookings Overview Chart */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Bookings Overview</h3>
                  <Button variant="outline" size="sm" className="text-xs">
                    This Week <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>

                <div className="relative h-[200px]">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-sm text-gray-500">Mar 13, 2029</p>
                    <p className="text-xl font-semibold">1,396</p>
                    <p className="text-xs text-gray-500">Bookings</p>
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={bookingsData}>
                      <defs>
                        <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f364f3" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#f364f3" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#f364f3"
                        fillOpacity={1}
                        fill="url(#colorBookings)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center mt-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-xs text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bookings Category Chart */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Bookings Category</h3>
                  <Button variant="outline" size="sm" className="text-xs">
                    This Week <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>

                <div className="flex">
                  <div className="w-1/3 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <p className="text-sm text-gray-500">Total Bookings</p>
                      <p className="text-xl font-semibold">44,115</p>
                    </div>
                    <ResponsiveContainer width="100%" height={180}>
                      <PieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={0}
                          dataKey="value"
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="w-2/3 pl-4">
                    <div className="space-y-4">
                      {categoryData.map((category, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">
                                {category.name} <span className="text-gray-500 text-xs">({category.percentage})</span>
                              </span>
                              <span className="text-sm font-medium">{category.value.toLocaleString()}</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: category.percentage,
                                  backgroundColor: category.color,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Art & Design Section */}
          <Card className="border-0 shadow-sm mb-6">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">
                  Art & Design <span className="text-gray-500 text-sm">(7,661 Bookings)</span>
                </h3>
              </div>

              <div className="space-y-4">
                {artDesignData.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-64 flex-shrink-0">
                      <p className="text-sm">{item.name}</p>
                    </div>
                    <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-900 rounded-full"
                        style={{
                          width: `${(item.value / item.total) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <div className="w-24 text-right">
                      <p className="text-sm font-medium">
                        {item.value.toLocaleString()}/{item.total.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bookings Table */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <Button
                    variant={activeFilter === "All" ? "default" : "outline"}
                    size="sm"
                    className={activeFilter === "All" ? "bg-pink-500 hover:bg-pink-600" : ""}
                    onClick={() => setActiveFilter("All")}
                  >
                    All
                  </Button>
                  <Button
                    variant={activeFilter === "Confirmed" ? "default" : "outline"}
                    size="sm"
                    className={activeFilter === "Confirmed" ? "bg-pink-500 hover:bg-pink-600" : ""}
                    onClick={() => setActiveFilter("Confirmed")}
                  >
                    Confirmed
                  </Button>
                  <Button
                    variant={activeFilter === "Pending" ? "default" : "outline"}
                    size="sm"
                    className={activeFilter === "Pending" ? "bg-pink-500 hover:bg-pink-600" : ""}
                    onClick={() => setActiveFilter("Pending")}
                  >
                    Pending
                  </Button>
                  <Button
                    variant={activeFilter === "Cancelled" ? "default" : "outline"}
                    size="sm"
                    className={activeFilter === "Cancelled" ? "bg-pink-500 hover:bg-pink-600" : ""}
                    onClick={() => setActiveFilter("Cancelled")}
                  >
                    Cancelled
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Input placeholder="Search name, event, etc." className="w-64 h-8 text-sm pl-8" />
                    <Search className="absolute left-2 top-1.5 h-4 w-4 text-gray-400" />
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    All Category <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    This Month <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">
                      Invoice ID <ChevronDown className="inline h-3 w-3" />
                    </TableHead>
                    <TableHead className="text-xs">
                      Date <ChevronDown className="inline h-3 w-3" />
                    </TableHead>
                    <TableHead className="text-xs">
                      Name <ChevronDown className="inline h-3 w-3" />
                    </TableHead>
                    <TableHead className="text-xs">
                      Event <ChevronDown className="inline h-3 w-3" />
                    </TableHead>
                    <TableHead className="text-xs">
                      Ticket Category <ChevronDown className="inline h-3 w-3" />
                    </TableHead>
                    <TableHead className="text-xs text-right">
                      Price <ChevronDown className="inline h-3 w-3" />
                    </TableHead>
                    <TableHead className="text-xs text-center">
                      Qty <ChevronDown className="inline h-3 w-3" />
                    </TableHead>
                    <TableHead className="text-xs text-right">
                      Amount <ChevronDown className="inline h-3 w-3" />
                    </TableHead>
                    <TableHead className="text-xs text-center">
                      Status <ChevronDown className="inline h-3 w-3" />
                    </TableHead>
                    <TableHead className="text-xs">
                      E-Voucher <ChevronDown className="inline h-3 w-3" />
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookingsTableData
                    .filter((booking) => activeFilter === "All" || booking.status === activeFilter)
                    .map((booking) => (
                      <TableRow key={booking.invoiceId}>
                        <TableCell className="font-medium">{booking.invoiceId}</TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">{booking.date}</p>
                            <p className="text-xs text-gray-500">{booking.time}</p>
                          </div>
                        </TableCell>
                        <TableCell>{booking.name}</TableCell>
                        <TableCell>
                          <div>
                            <p>{booking.event}</p>
                            <p className="text-xs text-gray-500">{booking.category}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              booking.ticketCategory === "Diamond" || booking.ticketCategory === "Platinum"
                                ? "bg-purple-100 text-purple-800"
                                : booking.ticketCategory === "Gold"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : booking.ticketCategory === "Silver"
                                    ? "bg-gray-100 text-gray-800"
                                    : "bg-gray-100 text-gray-800"
                            }
                          >
                            {booking.ticketCategory}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{booking.price}</TableCell>
                        <TableCell className="text-center">{booking.qty}</TableCell>
                        <TableCell className="text-right">{booking.amount}</TableCell>
                        <TableCell className="text-center">
                          <Badge
                            className={
                              booking.status === "Confirmed"
                                ? "bg-pink-100 text-pink-800"
                                : booking.status === "Pending"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                            }
                          >
                            {booking.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{booking.eVoucher}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>

              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-500">
                  Showing <span className="font-medium">{entriesPerPage}</span> out of{" "}
                  <span className="font-medium">312</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="default" size="sm" className="h-8 w-8 bg-pink-500 hover:bg-pink-600">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    3
                  </Button>
                  <span>...</span>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    16
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        
      </div>
    </div>
  )
}
