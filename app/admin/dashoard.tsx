"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Calendar,
  ChevronDown,
  Clock,
  CreditCard,
  FileText,
  HelpCircle,
  ImageIcon,
  Inbox,
  Info,
  Instagram,
  Linkedin,
  MessageSquare,
  MoreHorizontal,
  Search,
  Settings,
  Twitter,
  Users,
  X,
  Plus,
} from "lucide-react"
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, XAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Dashboard() {
  const [currentMonth, setCurrentMonth] = useState("March 2029")

  // Sample data for charts
  const ticketData = [
    { name: "Sold Out", value: 1251, color: "#f364f3" },
    { name: "Fully Booked", value: 834, color: "#2d3a5d" },
    { name: "Available", value: 695, color: "#e6e6e6" },
  ]

  const revenueData = [
    { month: "Jan", revenue: 28000, profit: 15000 },
    { month: "Feb", revenue: 22000, profit: 12000 },
    { month: "Mar", revenue: 32000, profit: 18000 },
    { month: "Apr", revenue: 42000, profit: 25000 },
    { month: "May", revenue: 35000, profit: 20000 },
    { month: "Jun", revenue: 30000, profit: 16000 },
    { month: "Jul", revenue: 25000, profit: 14000 },
    { month: "Aug", revenue: 38000, profit: 22000 },
  ]

  const popularEvents = [
    { category: "Music", percentage: 40, count: "20,000", color: "#f364f3" },
    { category: "Sports", percentage: 35, count: "17,500", color: "#f364f3" },
    { category: "Fashion", percentage: 15, count: "12,500", color: "#2d3a5d" },
  ]

  const allEvents = [
    {
      id: 1,
      title: "Champions League Screening Night",
      location: "SkyDome Stadium, Toronto, ON",
      date: "Apr 20, 2029",
      price: "$30",
      image: "/placeholder.svg?height=200&width=400",
      category: "Sport",
    },
    {
      id: 2,
      title: "Culinary Delights Festival",
      location: "Gourmet Plaza, San Francisco, CA",
      date: "Mar 3, 2029",
      price: "$40",
      image: "/placeholder.svg?height=200&width=400",
      category: "Food & Culinary",
    },
    {
      id: 3,
      title: "Artistry Unveiled: Modern Art Expo",
      location: "Vogue Hall, Los Angeles, CA",
      date: "Mar 10, 2029",
      price: "$110",
      image: "/placeholder.svg?height=200&width=400",
      category: "Fashion",
    },
  ]

  const recentBookings = [
    {
      invoiceId: "INV10011",
      date: "2029/02/15 10:30 AM",
      name: "Jackson Moore",
      event: "Symphony Under the Stars",
      category: "Music",
      qty: 2,
      amount: "$100",
      status: "Confirmed",
    },
    {
      invoiceId: "INV10012",
      date: "2029/02/16 03:45 PM",
      name: "Alicia Smithson",
      event: "Runway Revolution 2024",
      category: "Fashion",
      qty: 1,
      amount: "$120",
      status: "Pending",
    },
    {
      invoiceId: "INV10013",
      date: "2029/02/17 01:15 PM",
      name: "Marcus Rawless",
      event: "Global Wellness Summit",
      category: "Beauty & Wellness",
      qty: 3,
      amount: "$240",
      status: "Confirmed",
    },
    {
      invoiceId: "INV10014",
      date: "2029/02/18 09:00 AM",
      name: "Patrick Cooper",
      event: "Champions League Screening Night",
      category: "Sport",
      qty: 4,
      amount: "$120",
      status: "Cancelled",
    },
    {
      invoiceId: "INV10015",
      date: "2029/02/18 05:30 PM",
      name: "Gilda Ramos",
      event: "Artistry Unveiled: Modern Art Expo",
      category: "Art & Design",
      qty: 2,
      amount: "$50",
      status: "Confirmed",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      user: "Admin Stefanus Weber",
      action: "reviewed a refund request for invoice ID:",
      reference: "INV1004",
      time: "05:30 PM",
      icon: "info",
    },
    {
      id: 2,
      user: "Wells McGrath",
      action: "updated ticket prices for the event:",
      reference: "Runway Revolution 2024",
      detail: 'under the category "Fashion"',
      time: "02:00 PM",
      icon: "edit",
    },
    {
      id: 3,
      user: "Patrick Cooper",
      action: "cancelled a booking with invoice ID:",
      reference: "INV10014",
      time: "11:15 AM",
      icon: "cancel",
    },
    {
      id: 4,
      user: "Andrew Shaw",
      action: "created a new event:",
      reference: "Symphony Under the Stars",
      detail: 'under the category "Music"',
      time: "09:30 AM",
      icon: "new",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Rhythm & Beats Music Festival",
      location: "Sunset Park, Los Angeles, CA",
      date: "Apr 20, 2029",
      time: "12:00 PM - 11:00 PM",
      category: "Music",
      image: "/placeholder.svg?height=200&width=400",
      description:
        "Immerse yourself in electrifying performances by top pop, rock, EDM, and hip-hop artists, indulge in delicious food, and create unforgettable memories.",
    },
    {
      id: 2,
      title: "Panel Discussion",
      subtitle: "Tech Beyond 2024",
      date: "Mar 3, 2029",
      time: "10:00 AM - 12:00 PM",
      category: "Technology",
    },
    {
      id: 3,
      title: "Live Concert",
      subtitle: "Echo Beats Festival",
      date: "Mar 5, 2029",
      time: "6:00 PM - 11:00 PM",
      category: "Music",
    },
    {
      id: 4,
      title: "Fashion Showcase",
      subtitle: "Spring Trends Runway Show",
      date: "Mar 23, 2029",
      time: "3:00 PM - 5:00 PM",
      category: "Fashion",
    },
  ]

  // Calendar data
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
  const calendarDays = [
    { day: 25, month: "Feb", current: false },
    { day: 26, month: "Feb", current: false },
    { day: 27, month: "Feb", current: false },
    { day: 28, month: "Feb", current: false },
    { day: 1, month: "Mar", current: true },
    { day: 2, month: "Mar", current: true },
    { day: 3, month: "Mar", current: true, hasEvent: true },
    { day: 4, month: "Mar", current: true },
    { day: 5, month: "Mar", current: true, hasEvent: true },
    { day: 6, month: "Mar", current: true },
    { day: 7, month: "Mar", current: true },
    { day: 8, month: "Mar", current: true },
    { day: 9, month: "Mar", current: true },
    { day: 10, month: "Mar", current: true },
    { day: 11, month: "Mar", current: true },
    { day: 12, month: "Mar", current: true },
    { day: 13, month: "Mar", current: true },
    { day: 14, month: "Mar", current: true, isToday: true },
    { day: 15, month: "Mar", current: true },
    { day: 16, month: "Mar", current: true },
    { day: 17, month: "Mar", current: true },
    { day: 18, month: "Mar", current: true },
    { day: 19, month: "Mar", current: true },
    { day: 20, month: "Mar", current: true },
    { day: 21, month: "Mar", current: true },
    { day: 22, month: "Mar", current: true },
    { day: 23, month: "Mar", current: true, hasEvent: true },
    { day: 24, month: "Mar", current: true },
    { day: 25, month: "Mar", current: true },
    { day: 26, month: "Mar", current: true },
    { day: 27, month: "Mar", current: true },
    { day: 28, month: "Mar", current: true },
    { day: 29, month: "Mar", current: true },
    { day: 30, month: "Mar", current: true },
    { day: 31, month: "Mar", current: true },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <p className="text-gray-500 text-sm">Hello Orlando, welcome back!</p>
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

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Upcoming Events</p>
                  <p className="text-2xl font-semibold">345</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Bookings</p>
                  <p className="text-2xl font-semibold">1798</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tickets Sold</p>
                  <p className="text-2xl font-semibold">1250</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Ticket Sales Chart */}
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Ticket Sales</h3>
                  <Button variant="outline" size="sm" className="text-xs">
                    This Week <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>

                <div className="flex">
                  <div className="w-1/2">
                    <ResponsiveContainer width="100%" height={220}>
                      <PieChart>
                        <Pie
                          data={ticketData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={0}
                          dataKey="value"
                        >
                          {ticketData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="w-1/2 flex flex-col justify-center">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-purple-500 rounded"></div>
                        <span className="text-sm text-gray-600">Sold Out</span>
                      </div>
                      <p className="text-xl font-semibold">1,251</p>
                      <p className="text-xs text-gray-500">45%</p>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-indigo-900 rounded"></div>
                        <span className="text-sm text-gray-600">Fully Booked</span>
                      </div>
                      <p className="text-xl font-semibold">834</p>
                      <p className="text-xs text-gray-500">30%</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-gray-200 rounded"></div>
                        <span className="text-sm text-gray-600">Available</span>
                      </div>
                      <p className="text-xl font-semibold">695</p>
                      <p className="text-xs text-gray-500">25%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sales Revenue Chart */}
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Sales Revenue</h3>
                  <Button variant="outline" size="sm" className="text-xs">
                    Last 8 Months <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <p className="text-2xl font-semibold">$348,805</p>
                </div>

                <div className="flex gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Revenue</p>
                    <p className="text-sm font-medium">$56,320</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Profit</p>
                    <p className="text-sm font-medium">$32,650</p>
                  </div>
                </div>

                <div className="h-[180px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData}>
                      <CartesianGrid vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} />
                      <Bar dataKey="revenue" fill="#f364f3" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Popular Events */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Popular Events</h3>
                <Button variant="outline" size="sm" className="text-xs">
                  Popular <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </div>

              <div className="space-y-4">
                {popularEvents.map((event, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-20">
                      <p className="text-sm">{event.category}</p>
                    </div>
                    <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${event.percentage}%`,
                          backgroundColor: event.color,
                        }}
                      ></div>
                    </div>
                    <div className="w-24 text-right">
                      <p className="text-sm">
                        {event.count} <span className="text-xs text-gray-500">Events</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* All Events */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">All Events</h3>
              <Button variant="outline" size="sm" className="text-xs">
                View All Event
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {allEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="relative h-40">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-white text-gray-800">{event.category}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1">{event.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">{event.location}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <p className="text-purple-600 font-semibold">{event.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Bookings */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Recent Bookings</h3>
                <div className="flex items-center gap-2">
                  <Input placeholder="Search name, event, etc." className="w-64 h-8 text-sm" />
                  <Button variant="outline" size="sm" className="text-xs">
                    This Week <ChevronDown className="ml-1 h-3 w-3" />
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
                    <TableHead className="text-xs text-center">
                      Qty <ChevronDown className="inline h-3 w-3" />
                    </TableHead>
                    <TableHead className="text-xs text-right">
                      Amount <ChevronDown className="inline h-3 w-3" />
                    </TableHead>
                    <TableHead className="text-xs text-right">
                      Status <ChevronDown className="inline h-3 w-3" />
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentBookings.map((booking) => (
                    <TableRow key={booking.invoiceId}>
                      <TableCell className="font-medium">{booking.invoiceId}</TableCell>
                      <TableCell className="text-sm">{booking.date}</TableCell>
                      <TableCell>{booking.name}</TableCell>
                      <TableCell>
                        <div>
                          <p>{booking.event}</p>
                          <p className="text-xs text-gray-500">{booking.category}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">{booking.qty}</TableCell>
                      <TableCell className="text-right">{booking.amount}</TableCell>
                      <TableCell className="text-right">
                        <Badge
                          className={
                            booking.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : booking.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }
                        >
                          {booking.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[320px] border-l bg-white">
        {/* Upcoming Event */}
        <div className="p-4 border-b">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Upcoming Event</h3>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <img src="/placeholder.svg?height=200&width=400" alt="Event" className="w-full h-full object-cover" />
              <Badge className="absolute top-3 left-3 bg-white text-gray-800">Music</Badge>
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-1">Rhythm & Beats Music Festival</h4>
              <p className="text-sm text-gray-600 mb-2">Sunset Park, Los Angeles, CA</p>
              <p className="text-xs text-gray-500 mb-3">
                Immerse yourself in electrifying performances by top pop, rock, EDM, and hip-hop artists, indulge in
                delicious food, and create unforgettable memories.
              </p>

              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Apr 20, 2029</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm">12:00 PM - 11:00 PM</span>
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700">View Details</Button>
            </CardContent>
          </Card>
        </div>

        {/* Calendar */}
        <div className="p-4 border-b">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{currentMonth}</h3>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-xs font-medium text-gray-500">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`
                  h-8 flex items-center justify-center text-sm rounded-full
                  ${!day.current ? "text-gray-400" : "text-gray-700"}
                  ${day.isToday ? "bg-purple-500 text-white" : ""}
                  ${day.hasEvent && !day.isToday ? "font-bold" : ""}
                `}
              >
                {day.day}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events List */}
        <div className="p-4 border-b">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Panel Discussion</h3>
            <Badge className="bg-indigo-100 text-indigo-800">3 Sat</Badge>
          </div>

          <div className="mb-2">
            <p className="text-sm text-gray-600">Tech Beyond 2024</p>
          </div>

          <div className="flex items-center gap-2 mb-1">
            <Badge className="bg-gray-100 text-gray-800">Technology</Badge>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>10:00 AM - 12:00 PM</span>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Live Concert</h3>
            <Badge className="bg-indigo-100 text-indigo-800">5</Badge>
          </div>

          <div className="mb-2">
            <p className="text-sm text-gray-600">Echo Beats Festival</p>
          </div>

          <div className="flex items-center gap-2 mb-1">
            <Badge className="bg-gray-100 text-gray-800">Music</Badge>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>6:00 PM - 11:00 PM</span>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Fashion Showcase</h3>
            <Badge className="bg-indigo-100 text-indigo-800">23 Fri</Badge>
          </div>

          <div className="mb-2">
            <p className="text-sm text-gray-600">Spring Trends Runway Show</p>
          </div>

          <div className="flex items-center gap-2 mb-1">
            <Badge className="bg-gray-100 text-gray-800">Fashion</Badge>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>3:00 PM - 5:00 PM</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Recent Activity</h3>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                  {activity.icon === "info" && <Info className="h-4 w-4 text-blue-500" />}
                  {activity.icon === "edit" && <FileText className="h-4 w-4 text-orange-500" />}
                  {activity.icon === "cancel" && <X className="h-4 w-4 text-red-500" />}
                  {activity.icon === "new" && <Plus className="h-4 w-4 text-green-500" />}
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                    <span className="font-medium"> "{activity.reference}"</span>
                    {activity.detail && <span> {activity.detail}</span>}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t mt-auto">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <p>Copyright © 2025 Peterdraw</p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <HelpCircle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
