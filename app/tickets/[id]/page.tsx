import { dummyTickets, dummyEvents } from "../../data/dummy";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface TicketPageProps {
  params: {
    id: string;
  };
}

export default function TicketPage({ params }: TicketPageProps) {
  const ticket = dummyTickets.find((t) => t.id === params.id);
  const event = ticket ? dummyEvents.find((e) => e.id === ticket.eventId) : null;

  if (!ticket || !event) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Ticket Details</h1>
        <Button variant="outline" asChild>
          <Link href="/tickets">Back to Tickets</Link>
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Ticket QR Code */}
        <div className="space-y-4">
          <div className="rounded-lg border p-6">
            <div className="aspect-square w-full max-w-sm mx-auto bg-white p-4 rounded-lg">
              {/* In a real app, this would be a QR code component */}
              <div className="w-full h-full flex items-center justify-center border-2 border-dashed">
                <p className="text-sm text-muted-foreground">QR Code</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-medium">Ticket #{ticket.id}</p>
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
          </div>
          <Button className="w-full" size="lg">
            Download Ticket
          </Button>
        </div>

        {/* Event Details */}
        <div className="space-y-6">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date</span>
                <span>{event.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time</span>
                <span>{event.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location</span>
                <span>{event.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Price</span>
                <span>${ticket.price.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">Important Information</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Please arrive at least 30 minutes before the event</li>
              <li>• Bring a valid ID that matches the ticket holder's name</li>
              <li>• The QR code must be scanned at the venue entrance</li>
              <li>• This ticket is non-transferable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 