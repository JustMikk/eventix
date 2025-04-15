'use client'

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

interface TicketSalesProps {
  totalTickets: number
  soldOut: number
  fullyBooked: number
  available: number
}

export function TicketSales({ totalTickets, soldOut, fullyBooked, available }: TicketSalesProps) {
  // Calculate percentages for the chart
  const soldOutPercentage = Math.round((soldOut / totalTickets) * 100)
  const fullyBookedPercentage = Math.round((fullyBooked / totalTickets) * 100)
  const availablePercentage = Math.round((available / totalTickets) * 100)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Ticket Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[240px] w-full">
          {/* Donut chart */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[180px] w-[180px]">
              <svg className="h-full w-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  className="fill-none stroke-muted stroke-[10]"
                  cx="50"
                  cy="50"
                  r="40"
                />
                {/* Sold Out segment - Magenta */}
                <circle
                  className="fill-none stroke-[#FF4ECD] stroke-[10]"
                  cx="50"
                  cy="50"
                  r="40"
                  strokeDasharray={`${soldOutPercentage * 2.51} 251`}
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
                {/* Fully Booked segment - Navy */}
                <circle
                  className="fill-none stroke-[#394263] stroke-[10]"
                  cx="50"
                  cy="50"
                  r="40"
                  strokeDasharray={`${fullyBookedPercentage * 2.51} 251`}
                  strokeDashoffset={`${-soldOutPercentage * 2.51}`}
                  transform="rotate(-90 50 50)"
                />
                {/* Available segment - Gray */}
                <circle
                  className="fill-none stroke-gray-200 stroke-[10]"
                  cx="50"
                  cy="50"
                  r="40"
                  strokeDasharray={`${availablePercentage * 2.51} 251`}
                  strokeDashoffset={`${-(soldOutPercentage + fullyBookedPercentage) * 2.51}`}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-sm text-muted-foreground">Total Ticket</span>
                <span className="text-2xl font-bold">{totalTickets.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-0 left-0 right-0 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[#FF4ECD] rounded-sm"></div>
                <span className="text-sm">Sold Out</span>
              </div>
              <span className="text-sm font-medium">{soldOut.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[#394263] rounded-sm"></div>
                <span className="text-sm">Fully Booked</span>
              </div>
              <span className="text-sm font-medium">{fullyBooked.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-gray-200 rounded-sm"></div>
                <span className="text-sm">Available</span>
              </div>
              <span className="text-sm font-medium">{available.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 