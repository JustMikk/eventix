'use client'

import { Button } from "@/components/ui/button"
import { StatsCard } from "@/components/dashboard/stats-card"
import { RecentBookings } from "@/components/dashboard/recent-bookings"
import { SalesChart } from "@/components/dashboard/sales-chart"
import { PopularEvents } from "@/components/dashboard/popular-events"
import { Calendar, Clock, DollarSign, Ticket, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { dummyEvents } from "../data/dummy"

// This would come from your API in a real application
const dashboardData = {
  stats: {
    upcomingEvents: "345",
    totalBookings: "1,798",
    ticketsSold: "1,250",
  },
  ticketSales: {
    total: 2780,
    soldOut: 1251,
    fullyBooked: 834,
    available: 695,
  },
  salesData: [
    { month: "Jan", revenue: 40000, profit: 25000 },
    { month: "Feb", revenue: 35000, profit: 22000 },
    { month: "Mar", revenue: 45000, profit: 28000 },
    { month: "Apr", revenue: 56320, profit: 35200 },
    { month: "May", revenue: 48000, profit: 30000 },
    { month: "Jun", revenue: 38000, profit: 24000 },
    { month: "Jul", revenue: 35000, profit: 22000 },
    { month: "Aug", revenue: 42000, profit: 26000 },
  ],
  popularCategories: [
    { name: "Music", count: 20000, percentage: 40 },
    { name: "Sports", count: 17500, percentage: 35 },
    { name: "Fashion", count: 12500, percentage: 25 },
  ],
  recentBookings: [
    {
      id: "INV10011",
      customerName: "Jackson Moore",
      eventName: "Symphony Under the Stars",
      date: "2024/02/15",
      amount: 100,
      status: "confirmed" as const,
    },
    {
      id: "INV10012",
      customerName: "Alicia Smithson",
      eventName: "Runway Revolution 2024",
      date: "2024/02/16",
      amount: 120,
      status: "pending" as const,
    },
    {
      id: "INV10013",
      customerName: "Marcus Rawless",
      eventName: "Global Wellness Summit",
      date: "2024/02/17",
      amount: 240,
      status: "confirmed" as const,
    },
    {
      id: "INV10014",
      customerName: "Patrick Cooper",
      eventName: "Champions League Screening",
      date: "2024/02/18",
      amount: 120,
      status: "cancelled" as const,
    },
    {
      id: "INV10015",
      customerName: "Gilda Ramos",
      eventName: "Artistry Unveiled: Modern Art Expo",
      date: "2024/02/18",
      amount: 50,
      status: "confirmed" as const,
    },
  ],
  featuredEvents: dummyEvents.slice(0, 3),
}

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Hello Orlando, welcome back!</span>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard
          title="Upcoming Events"
          value={dashboardData.stats.upcomingEvents}
          icon={<Calendar className="h-5 w-5 text-pink-500" />}
        />
        <StatsCard
          title="Total Bookings"
          value={dashboardData.stats.totalBookings}
          icon={<Users className="h-5 w-5 text-pink-500" />}
        />
        <StatsCard
          title="Tickets Sold"
          value={dashboardData.stats.ticketsSold}
          icon={<Ticket className="h-5 w-5 text-pink-500" />}
        />
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-12">
        {/* Ticket Sales Donut Chart */}
        <div className="md:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">Ticket Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[300px] flex flex-col items-center justify-center">
                {/* Donut chart - Simplified version */}
                <div className="relative h-[180px] w-[180px]">
                  <div className="absolute inset-0 rounded-full border-[20px] border-pink-500/20"></div>
                  <div className="absolute inset-0 rounded-full border-[20px] border-transparent border-t-pink-500 border-r-pink-500 border-b-pink-500 transform -rotate-[35deg]"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-sm text-muted-foreground">Total Ticket</span>
                    <span className="text-2xl font-bold">{dashboardData.ticketSales.total.toLocaleString()}</span>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="mt-8 w-full space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-pink-500 rounded-sm"></div>
                      <span className="text-sm">Sold Out</span>
                    </div>
                    <span className="text-sm font-medium">{dashboardData.ticketSales.soldOut.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-slate-800 rounded-sm"></div>
                      <span className="text-sm">Fully Booked</span>
                    </div>
                    <span className="text-sm font-medium">{dashboardData.ticketSales.fullyBooked.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-gray-200 rounded-sm"></div>
                      <span className="text-sm">Available</span>
                    </div>
                    <span className="text-sm font-medium">{dashboardData.ticketSales.available.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Sales Revenue Chart */}
        <div className="md:col-span-8">
          <SalesChart 
            data={dashboardData.salesData}
            period="Last 8 Months"
          />
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-12">
        {/* Popular Events */}
        <div className="md:col-span-6">
          <PopularEvents categories={dashboardData.popularCategories} />
        </div>
        
        {/* Upcoming Event */}
        <div className="md:col-span-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Upcoming Event</h2>
              <Button variant="ghost" size="sm" className="text-xs">
                <Link href="/admin/events">View all</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden border">
              <div className="relative">
                <div className="relative h-[200px] w-full">
                  <Image
                    src={dashboardData.featuredEvents[0]?.imageUrl || "/images/placeholder.jpg"}
                    alt={dashboardData.featuredEvents[0]?.title || "Event"}
                    className="object-cover"
                    fill
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-black bg-opacity-60 text-white px-2 py-1 rounded-md text-xs">
                      Music
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-semibold">{dashboardData.featuredEvents[0]?.title || "No upcoming events"}</h3>
                <p className="text-sm text-muted-foreground">
                  {dashboardData.featuredEvents[0]?.location || ""}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {dashboardData.featuredEvents[0]?.date || ""} · {dashboardData.featuredEvents[0]?.time || ""} PM
                  </span>
                </div>
                <Button className="w-full">View Details</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Events */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">All Events</h2>
          <Button variant="outline" size="sm">
            <Link href="/admin/events">View all</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardData.featuredEvents.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-lg border bg-background"
            >
              <div className="relative h-[180px] w-full overflow-hidden">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-white text-black px-2 py-1 rounded-md text-xs">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{event.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                  <p className="text-sm font-medium">${event.price}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Bookings */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Bookings</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm">This Week</span>
            <Button variant="outline" size="sm">
              <Link href="/admin/bookings">View all</Link>
            </Button>
          </div>
        </div>
        <Card>
          <CardContent className="p-0">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-3 px-4 font-medium text-sm">Invoice ID</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Event</th>
                  <th className="text-center py-3 px-4 font-medium text-sm">Qty</th>
                  <th className="text-right py-3 px-4 font-medium text-sm">Amount</th>
                  <th className="text-right py-3 px-4 font-medium text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b last:border-0">
                    <td className="py-3 px-4 text-sm font-medium">{booking.id}</td>
                    <td className="py-3 px-4 text-sm">{booking.customerName}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{booking.eventName}</td>
                    <td className="py-3 px-4 text-sm text-center">2</td>
                    <td className="py-3 px-4 text-sm text-right">${booking.amount}</td>
                    <td className="py-3 px-4 text-sm text-right">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          booking.status === "confirmed"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 