export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'super_admin';
  preferences?: string[];
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price: number;
  capacity: number;
  availableTickets: number;
  organizer: {
    id: string;
    name: string;
  };
  imageUrl: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export interface Ticket {
  id: string;
  eventId: string;
  userId: string;
  qrCode: string;
  status: 'valid' | 'used' | 'cancelled';
  purchaseDate: string;
  price: number;
}

export interface EventStats {
  totalTickets: number;
  soldTickets: number;
  revenue: number;
  attendees: {
    id: string;
    name: string;
    checkInStatus: boolean;
  }[];
} 