import { dummyEvents } from "../../data/dummy";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { notFound } from "next/navigation";

interface EventPageProps {
  params: {
    id: string;
  };
}

export default function EventPage({ params }: EventPageProps) {
  const event = dummyEvents.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Event Header */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-4xl font-bold">{event.title}</h1>
          <p className="mt-2 text-lg">{event.location}</p>
          <p className="text-sm">
            {event.date} at {event.time}
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Event Details */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">About this event</h2>
            <p className="mt-2 text-muted-foreground">{event.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Organizer</h2>
            <p className="mt-2 text-muted-foreground">{event.organizer.name}</p>
          </div>
        </div>

        {/* Ticket Purchase */}
        <div className="space-y-4">
          <div className="rounded-lg border p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">${event.price}</span>
              <span className="text-sm text-muted-foreground">
                {event.availableTickets} tickets left
              </span>
            </div>
            <Button className="w-full" size="lg">
              Get Tickets
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              By purchasing tickets, you agree to our terms and conditions
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">Event Details</h3>
            <dl className="mt-4 space-y-2">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Date</dt>
                <dd>{event.date}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Time</dt>
                <dd>{event.time}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Location</dt>
                <dd>{event.location}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Category</dt>
                <dd>{event.category}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 