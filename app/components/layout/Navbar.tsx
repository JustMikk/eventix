import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserNav } from './UserNav';

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="font-bold text-xl">
          SwiftPass
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/events">
            <Button variant="ghost">Events</Button>
          </Link>
          <Link href="/tickets">
            <Button variant="ghost">My Tickets</Button>
          </Link>
          <UserNav />
        </div>
      </div>
    </nav>
  );
} 