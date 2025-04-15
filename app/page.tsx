import { Button } from "@/components/ui/button";
import { dummyEvents } from "./data/dummy";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredEvents = dummyEvents.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="py-20 text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Discover Amazing Events
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Book tickets for the best events in your area. From music festivals to tech conferences, find your next unforgettable experience.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/events">Browse Events</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/events/create">Create Event</Link>
          </Button>
        </div>
      </section>

      {/* Featured Events */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Featured Events</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredEvents.map((event) => (
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
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    ${event.price.toFixed(2)}
                  </span>
                  <Button asChild size="sm">
                    <Link href={`/events/${event.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
