'use client'

import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"
import { CalendarIcon } from "lucide-react"

interface UpcomingEventProps {
  event: {
    id: string
    title: string
    date: string
    time: string
    location: string
    imageUrl: string
    category: string
  }
}

export function UpcomingEvent({ event }: UpcomingEventProps) {
  return (
    <div className="rounded-lg overflow-hidden border bg-card">
      <div className="relative">
        <div className="relative h-[180px] w-full overflow-hidden">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute top-2 right-2">
          <span className="bg-black bg-opacity-60 text-white px-2 py-1 rounded-md text-xs">
            {event.category}
          </span>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-lg font-medium">{event.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{event.location}</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          <span>
            {event.date} · {event.time} PM
          </span>
        </div>
        <Button asChild className="w-full">
          <Link href={`/events/${event.id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  )
} 