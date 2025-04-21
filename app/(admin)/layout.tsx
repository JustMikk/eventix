import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import  { AppSidebar } from "./components/sidebar"
import { cn } from "@/lib/utils"
import { Toaster } from "react-hot-toast"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ventixe - Event Management Dashboard",
  description: "Manage your events, bookings, and tickets with Ventixe",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body  className={cn(
          "min-h-screen w-full bg-white text-black flex",
          inter.className,
          {
            "debug-screens": process.env.NODE_ENV === "development",
          }
        )}>
          <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-8">
        
        {children}
      </main>
    </SidebarProvider>
      </body>

      <Footer />
    </html>
  )
}
