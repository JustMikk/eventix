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

export const dummyUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    preferences: ['music', 'sports', 'technology'],
    createdAt: '2024-01-01',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'admin',
    createdAt: '2024-01-02',
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'super_admin',
    createdAt: '2024-01-01',
  },
];

export const dummyEvents: Event[] = [
  {
    id: '1',
    title: 'Summer Music Festival',
    description: 'A three-day music festival featuring top artists from around the world.',
    date: '2024-07-15',
    time: '14:00',
    location: 'Central Park, New York',
    category: 'Music',
    price: 99.99,
    capacity: 1000,
    availableTickets: 750,
    organizer: {
      id: '2',
      name: 'Jane Smith',
    },
    imageUrl: '/images/music-festival.jpg',
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'Tech Conference 2024',
    description: 'Annual technology conference with industry leaders and innovators.',
    date: '2024-06-20',
    time: '09:00',
    location: 'Convention Center, San Francisco',
    category: 'Technology',
    price: 299.99,
    capacity: 500,
    availableTickets: 200,
    organizer: {
      id: '2',
      name: 'Jane Smith',
    },
    imageUrl: '/images/tech-conference.jpg',
    status: 'upcoming',
  },
  {
    id: '3',
    title: 'Art Exhibition',
    description: 'Contemporary art showcase featuring local and international artists.',
    date: '2024-05-15',
    time: '10:00',
    location: 'Modern Art Gallery, Los Angeles',
    category: 'Arts',
    price: 25.00,
    capacity: 200,
    availableTickets: 150,
    organizer: {
      id: '3',
      name: 'Admin User',
    },
    imageUrl: '/images/art-exhibition.jpg',
    status: 'upcoming',
  },
];

export const dummyTickets: Ticket[] = [
  {
    id: '1',
    eventId: '1',
    userId: '1',
    qrCode: 'QR_CODE_STRING_1',
    status: 'valid',
    purchaseDate: '2024-03-15',
    price: 99.99,
  },
  {
    id: '2',
    eventId: '2',
    userId: '1',
    qrCode: 'QR_CODE_STRING_2',
    status: 'valid',
    purchaseDate: '2024-03-10',
    price: 299.99,
  },
];

export const dummyEventStats: EventStats = {
  totalTickets: 1000,
  soldTickets: 250,
  revenue: 24999.75,
  attendees: [
    {
      id: '1',
      name: 'John Doe',
      checkInStatus: true,
    },
    {
      id: '4',
      name: 'Alice Johnson',
      checkInStatus: false,
    },
  ],
}; 