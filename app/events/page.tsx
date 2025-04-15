import { dummyEvents } from "../data/dummy";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Events</h1>
        <Button asChild>
          <Link href="/events/create">Create Event</Link>
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search events..."
            className="max-w-sm"
          />
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="arts">Arts & Culture</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dummyEvents.map((event) => (
          <div
            key={event.id}
            className="group relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src={event.imageUrl}
                alt={event.title}
                width={400}
                height={225}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {event.category}
                </span>
                <span className="text-sm font-medium">
                  ${event.price.toFixed(2)}
                </span>
              </div>
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {event.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <div className="text-sm text-muted-foreground">
                  {event.date} at {event.time}
                </div>
                <Button asChild size="sm">
                  <Link href={`/events/${event.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 