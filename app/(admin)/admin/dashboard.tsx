'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  ChevronDown,
  Clock,
  DollarSign,
  Search,
  Ticket,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  statsData, 
  ticketSalesData, 
  revenueData, 
  popularCategoriesData,
  recentBookingsData,
  featuredEventData,
  calendarEventData,
} from "@/constants/dashboard"

export default function Dashboard() {
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
        <Card className="border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-5 w-5 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statsData.upcomingEvents}</div>
          </CardContent>
        </Card>
        
        <Card className="border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Users className="h-5 w-5 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statsData.totalBookings}</div>
          </CardContent>
        </Card>
        
        <Card className="border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tickets Sold</CardTitle>
            <Ticket className="h-5 w-5 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statsData.ticketsSold}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-12">
        {/* Ticket Sales Donut Chart */}
        <div className="md:col-span-4">
          <Card className="border shadow-sm">
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
                    <span className="text-2xl font-bold">{ticketSalesData.total.toLocaleString()}</span>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="mt-8 w-full space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-pink-500 rounded-sm"></div>
                      <span className="text-sm">Sold Out</span>
                    </div>
                    <span className="text-sm font-medium">{ticketSalesData.soldOut.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-slate-800 rounded-sm"></div>
                      <span className="text-sm">Fully Booked</span>
                    </div>
                    <span className="text-sm font-medium">{ticketSalesData.fullyBooked.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-gray-200 rounded-sm"></div>
                      <span className="text-sm">Available</span>
                    </div>
                    <span className="text-sm font-medium">{ticketSalesData.available.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Sales Revenue Chart */}
        <div className="md:col-span-8">
          <Card className="border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-base font-medium">Sales Revenue</CardTitle>
                <p className="text-sm text-muted-foreground">Last 8 Months</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Total Revenue</p>
                <p className="text-2xl font-bold">
                  ${revenueData.reduce((sum, d) => sum + d.revenue, 0).toLocaleString()}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] relative">
                <div className="flex items-end justify-between h-full gap-2">
                  {revenueData.map((item, index) => {
                    const maxValue = Math.max(...revenueData.map(d => Math.max(d.revenue, d.profit)));
                    return (
                      <div key={index} className="flex gap-1 w-full">
                        <div className="w-3 bg-primary/20 rounded-full relative">
                          <div 
                            className="absolute bottom-0 w-full bg-primary rounded-full transition-all"
                            style={{ 
                              height: `${(item.revenue / maxValue) * 100}%`
                            }}
                          />
                        </div>
                        <div className="w-3 bg-pink-100 rounded-full relative">
                          <div 
                            className="absolute bottom-0 w-full bg-pink-500 rounded-full transition-all"
                            style={{ 
                              height: `${(item.profit / maxValue) * 100}%`
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between mt-2">
                  {revenueData.map((item, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      {item.month}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-12">
        {/* Popular Events */}
        <div className="md:col-span-6">
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-medium">Popular Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {popularCategoriesData.map((category) => (
                <div key={category.name}>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium">{category.name}</p>
                    <span className="text-sm text-muted-foreground">
                      {category.count.toLocaleString()} Events
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
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
                    src={featuredEventData.imageUrl}
                    alt={featuredEventData.title}
                    className="object-cover"
                    fill
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-black bg-opacity-60 text-white px-2 py-1 rounded-md text-xs">
                      {featuredEventData.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-semibold">{featuredEventData.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {featuredEventData.location}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {featuredEventData.date} · {featuredEventData.time} - {featuredEventData.endTime}
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
          {calendarEventData.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-lg border bg-background"
            >
              <div className="relative h-[180px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">{event.title}</span>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-white text-black px-2 py-1 rounded-md text-xs">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.subtitle}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {event.time}
                  </div>
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
        <Card className="border shadow-sm">
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
                {recentBookingsData.map((booking) => (
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