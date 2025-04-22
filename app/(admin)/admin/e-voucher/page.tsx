"use client"

import Link from "next/link"
import {
  ArrowLeft,
  Bell,
  Calendar,
  CreditCard,
  Expand,
  FileText,
  HelpCircle,
  ImageIcon,
  Inbox,
  Instagram,
  Linkedin,
  LogOut,
  MessageSquare,
  MoreHorizontal,
  Search,
  Settings,
  Twitter,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function EVoucherPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-[180px] bg-[#f0f4ff] border-r flex flex-col">
        <div className="p-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center text-white font-bold">
            V
          </div>
          <span className="font-semibold text-lg">Ventixe</span>
        </div>

        <nav className="flex-1 py-4">
          <Link
            href="/"
            className="block px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2"
          >
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
          </Link>

          <Link
            href="/bookings"
            className="block px-3 py-2 mx-2 bg-purple-100 text-purple-600 rounded-md flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Bookings</span>
          </Link>

          <Link
            href="#"
            className="block px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            <span>Invoices</span>
          </Link>

          <Link
            href="#"
            className="block px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2"
          >
            <Inbox className="w-5 h-5" />
            <span>Inbox</span>
          </Link>

          <Link
            href="#"
            className="block px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Calendar</span>
          </Link>

          <Link
            href="#"
            className="block px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2"
          >
            <Users className="w-5 h-5" />
            <span>Events</span>
          </Link>

          <Link
            href="#"
            className="block px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2"
          >
            <CreditCard className="w-5 h-5" />
            <span>Financials</span>
          </Link>

          <Link
            href="#"
            className="block px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2"
          >
            <ImageIcon className="w-5 h-5" />
            <span>Gallery</span>
          </Link>

          <Link
            href="#"
            className="block px-3 py-2 mx-2 text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Feedback</span>
          </Link>
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

          <Button
            variant="outline"
            className="w-full mt-4 text-gray-600 text-sm flex items-center justify-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">
                Dashboard
              </Link>
              <span>/</span>
              <Link href="/bookings" className="hover:text-gray-700">
                Bookings
              </Link>
              <span>/</span>
              <span className="text-gray-700">E-Voucher</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Link href="/bookings" className="text-gray-600 hover:text-gray-800">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl font-semibold">E-Voucher</h1>
            </div>
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

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Event Banner Card */}
            <Card className="border-0 shadow-sm col-span-1">
              <CardContent className="p-0 overflow-hidden">
                <div className="relative h-[250px] bg-purple-900">
                  <img
                    src="/placeholder.svg?height=250&width=400&text=Concert"
                    alt="Event"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-purple-900/30"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">Rhythm & Beats Music Festival</h3>
                    <p className="text-sm opacity-90">DJ Nova, The Rockerz, ElectroBeats, Harmony Crew</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ticket Details */}
            <Card className="border-0 shadow-sm col-span-1">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Name</p>
                    <p className="font-medium">Jackson Moore</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Invoice ID</p>
                    <p className="font-medium">INV202945</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Ticket Category</p>
                    <Badge className="bg-purple-100 text-purple-800">Platinum</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Seat Number</p>
                    <p className="font-medium">B12</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="font-medium">Sunset Park, Los Angeles, CA</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Date</p>
                    <p className="font-medium">3</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Date</p>
                    <p className="font-medium">April 20, 2029</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Time</p>
                    <p className="font-medium">12:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* QR Code / Barcode */}
            <Card className="border-0 shadow-sm col-span-1">
              <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                <h3 className="font-semibold text-lg mb-4">Scan to Enter</h3>
                <div className="mb-4">
                  <img
                    src="/placeholder.svg?height=100&width=200&text=Barcode"
                    alt="Barcode"
                    className="h-20 w-48 object-contain"
                  />
                </div>
                <p className="text-sm text-center text-gray-600 mb-1">Thank you for your purchase!</p>
                <p className="text-sm text-center text-gray-600">
                  Enjoy the festival and experience the rhythm like never before.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Event Schedule */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Event Schedule</h3>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center py-3 border-b border-gray-100">
                    <div className="w-32 text-sm text-gray-600">10:00 AM - 11:00 AM</div>
                    <div className="flex-1 font-medium">Gate Opens</div>
                  </div>
                  <div className="flex items-center py-3 border-b border-gray-100">
                    <div className="w-32 text-sm text-gray-600">11:00 AM - 12:00 PM</div>
                    <div className="flex-1 font-medium">Pre-Show Activities</div>
                  </div>
                  <div className="flex items-center py-3 border-b border-gray-100">
                    <div className="w-32 text-sm text-gray-600">12:00 PM - 12:30 PM</div>
                    <div className="flex-1 font-medium">Opening Ceremony</div>
                  </div>
                  <div className="flex items-center py-3">
                    <div className="w-32 text-sm text-gray-600">12:30</div>
                    <div className="flex-1 font-medium">Concert Begin</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Venue Map */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Venue Map</h3>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mb-4 overflow-hidden rounded-md">
                  <img
                    src="/placeholder.svg?height=220&width=500&text=Venue+Map"
                    alt="Venue Map"
                    className="w-full h-[220px] object-cover"
                  />
                </div>

                <h4 className="font-medium mb-2">Legend</h4>
                <div className="grid grid-cols-3 gap-y-3 gap-x-2">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                      P
                    </div>
                    <span className="text-sm">Parking Area</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs">
                      R
                    </div>
                    <span className="text-sm">Restrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">
                      K
                    </div>
                    <span className="text-sm">Kid's Zone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                      S
                    </div>
                    <span className="text-sm">Security Checkpoints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs">
                      M
                    </div>
                    <span className="text-sm">Merchandise Booths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">
                      V
                    </div>
                    <span className="text-sm">VIP Lounge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                      G
                    </div>
                    <span className="text-sm">General Admission Area</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs">
                      A
                    </div>
                    <span className="text-sm">Art Installations Zone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">
                      F
                    </div>
                    <span className="text-sm">First Aid Station</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                      I
                    </div>
                    <span className="text-sm">Information Booth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs">
                      F
                    </div>
                    <span className="text-sm">Food & Beverage Area</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Main Stage</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-6">
            {/* Terms & Conditions */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Terms & Conditions</h3>
                  <Button variant="ghost" size="icon">
                    <Expand className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">1. Ticket Purchase and Entry</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                      <li>All attendees must possess a valid ticket for entry.</li>
                      <li>Tickets are non-refundable and non-transferable unless specified by the event organizer.</li>
                      <li>Attendees must present a valid government-issued ID along with their ticket at the gate.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">2. Security and Safety</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                      <li>Attendees are subject to security checks, including bag inspections, upon entry.</li>
                      <li>
                        Prohibited items include weapons, drugs, alcohol, fireworks, and other hazardous materials.
                      </li>
                      <li>
                        The event organizer reserves the right to deny entry to individuals deemed a security risk.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">3. Code of Conduct</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                      <li>Attendees are expected to behave responsibly and respectfully toward others.</li>
                      <li>
                        Any disruptive behavior, harassment, or illegal activity will result in immediate removal from
                        the event without refund.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">4. Event Schedule and Changes</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                      <li>The event schedule is subject to change without prior notice.</li>
                      <li>
                        The event organizer is not responsible for delays or cancellations caused by weather, technical
                        issues, or unforeseen circumstances.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">5. Photography and Recording</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                      <li>
                        Professional cameras and recording devices are prohibited unless authorized by the organizer.
                      </li>
                      <li>By attending, you consent to being photographed or filmed for promotional purposes.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">6. Health and Safety</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                      <li>
                        Attendees must comply with health and safety guidelines, including those related to COVID-19 (if
                        applicable).
                      </li>
                      <li>
                        The organizer reserves the right to enforce mask mandates or other health measures as necessary.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">7. Liability</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                      <li>
                        The event organizer is not responsible for any personal injury, loss, or damage to personal
                        property during the event.
                      </li>
                      <li>By attending, you consent to being photographed or filmed for promotional purposes.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prohibited Items */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Prohibited Items</h3>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-4 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 p-3 mb-2 relative">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=🔪"
                        alt="Weapons"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-center">Weapons and Dangerous Items</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 p-3 mb-2 relative">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=💊"
                        alt="Illegal Substances"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-center">Illegal Substances</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 p-3 mb-2 relative">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=🍺"
                        alt="Alcohol"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-center">Alcohol and Beverages</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 p-3 mb-2 relative">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=📸"
                        alt="Recording Equipment"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-center">Recording Equipment</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 p-3 mb-2 relative">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=⚠️"
                        alt="Hazardous Items"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-center">Large or Hazardous Items</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 p-3 mb-2 relative">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=📢"
                        alt="Noise Makers"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-center">Noise Makers and Disruptive Items</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 p-3 mb-2 relative">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=👕"
                        alt="Merchandise"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-center">Unauthorized Merchandise</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 p-3 mb-2 relative">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=🐕"
                        alt="Pets"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-center">Pets and Animals</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 p-3 mb-2 relative">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=🛹"
                        alt="Bicycles"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-center">Bicycles, Skateboards, or Hoverboards</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 p-3 mb-2 relative">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=🧺"
                        alt="Coolers"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-center">Coolers or Picnic Baskets</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 p-3 mb-2 relative">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=☂️"
                        alt="Umbrellas"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-center">Umbrellas or Large Parasols</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 p-3 mb-2 relative">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=⛺"
                        alt="Camping Gear"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-center">Camping Gear</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-4 border-t mt-auto">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <p>Copyright © 2025 Peterdraw</p>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Term and conditions</span>
              <span>Contact</span>
            </div>
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
        </footer>
      </div>
    </div>
  )
}
