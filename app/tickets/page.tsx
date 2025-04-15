import { dummyTickets, dummyEvents } from "../data/dummy";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function TicketsPage() {
  // In a real app, this would come from an API call
  const tickets = dummyTickets.map((ticket) => {
    const event = dummyEvents.find((e) => e.id === ticket.eventId);
    return {
      ...ticket,
      event,
    };
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">My Tickets</h1>
      </div>

      <div className="grid gap-6">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="flex flex-col gap-4 rounded-lg border p-6 md:flex-row md:items-center"
          >
            <div className="aspect-video w-full overflow-hidden rounded-lg md:w-48">
              <Image
                src={ticket.event?.imageUrl || ""}
                alt={ticket.event?.title || ""}
                width={192}
                height={108}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold">{ticket.event?.title}</h3>
              <p className="text-sm text-muted-foreground">
                {ticket.event?.date} at {ticket.event?.time}
              </p>
              <p className="text-sm text-muted-foreground">
                {ticket.event?.location}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="text-right">
                <p className="text-sm font-medium">Status</p>
                <p
                  className={`text-sm ${
                    ticket.status === "valid"
                      ? "text-green-600"
                      : ticket.status === "used"
                      ? "text-gray-600"
                      : "text-red-600"
                  }`}
                >
                  {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                </p>
              </div>
              <Button asChild>
                <Link href={`/tickets/${ticket.id}`}>View Ticket</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 