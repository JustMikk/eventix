// Dashboard static data

// Stats data
export const statsData = {
  upcomingEvents: "345",
  totalBookings: "1,798",
  ticketsSold: "1,250",
};

// Ticket sales data
export const ticketSalesData = {
  total: 2780,
  soldOut: 1251,
  fullyBooked: 834,
  available: 695,
};

// Chart data for ticket sales
export const ticketChartData = [
  { name: "Sold Out", value: 1251, color: "#f364f3" },
  { name: "Fully Booked", value: 834, color: "#2d3a5d" },
  { name: "Available", value: 695, color: "#e6e6e6" },
];

// Revenue chart data
export const revenueData = [
  { month: "Jan", revenue: 40000, profit: 25000 },
  { month: "Feb", revenue: 35000, profit: 22000 },
  { month: "Mar", revenue: 45000, profit: 28000 },
  { month: "Apr", revenue: 56320, profit: 35200 },
  { month: "May", revenue: 48000, profit: 30000 },
  { month: "Jun", revenue: 38000, profit: 24000 },
  { month: "Jul", revenue: 35000, profit: 22000 },
  { month: "Aug", revenue: 42000, profit: 26000 },
];

// Popular categories data
export const popularCategoriesData = [
  { name: "Music", count: 20000, percentage: 40, color: "#f364f3" },
  { name: "Sports", count: 17500, percentage: 35, color: "#2d3a5d" },
  { name: "Fashion", count: 12500, percentage: 25, color: "#e6e6e6" },
];

// Recent bookings data
export const recentBookingsData = [
  {
    id: "INV10011",
    customerName: "Jackson Moore",
    eventName: "Symphony Under the Stars",
    date: "2024/02/15",
    amount: 100,
    status: "confirmed" as const,
  },
  {
    id: "INV10012",
    customerName: "Alicia Smithson",
    eventName: "Runway Revolution 2024",
    date: "2024/02/16",
    amount: 120,
    status: "pending" as const,
  },
  {
    id: "INV10013",
    customerName: "Marcus Rawless",
    eventName: "Global Wellness Summit",
    date: "2024/02/17",
    amount: 240,
    status: "confirmed" as const,
  },
  {
    id: "INV10014",
    customerName: "Patrick Cooper",
    eventName: "Champions League Screening Night",
    date: "2024/02/18",
    amount: 120,
    status: "cancelled" as const,
  },
  {
    id: "INV10015",
    customerName: "Gilda Ramos",
    eventName: "Artistry Unveiled: Modern Art Expo",
    date: "2024/02/18",
    amount: 50,
    status: "confirmed" as const,
  },
];

// Calendar event data
export const calendarEventData = [
  {
    id: "3",
    title: "Panel Discussion",
    subtitle: "Tech Beyond 2024",
    date: "Mar 3",
    time: "10:00 AM - 12:00 PM",
    category: "Technology",
  },
  {
    id: "5",
    title: "Live Concert",
    subtitle: "Echo Beats Festival",
    date: "Mar 5",
    time: "6:00 PM - 11:00 PM",
    category: "Music",
  },
  {
    id: "23",
    title: "Fashion Showcase",
    subtitle: "Spring Trends Runway Show",
    date: "Mar 23",
    time: "3:00 PM - 5:00 PM",
    category: "Fashion",
  },
];

// Featured event data
export const featuredEventData = {
  id: "1",
  title: "Rhythm & Beats Music Festival",
  location: "Sunset Park, Los Angeles, CA",
  date: "Apr 20, 2029",
  time: "12:00 PM",
  endTime: "11:00 PM",
  imageUrl: "/images/music-festival.jpg",
  category: "Music",
  description: "Immerse yourself in electrifying performances by top pop, rock, EDM, and hip-hop artists, indulge in delicious food, and create unforgettable memories.",
};

// Recent activity data
export const recentActivityData = [
  {
    id: 1,
    user: "Admin Stefanus Weber",
    action: "reviewed a refund request for invoice ID:",
    reference: "INV1004",
    time: "05:30 PM",
    icon: "info",
  },
  {
    id: 2,
    user: "Wells McGrath",
    action: "updated ticket prices for the event:",
    reference: "Runway Revolution 2024",
    detail: 'under the category "Fashion"',
    time: "02:00 PM",
    icon: "edit",
  },
  {
    id: 3,
    user: "Patrick Cooper",
    action: "cancelled a booking with invoice ID:",
    reference: "INV10014",
    time: "11:15 AM",
    icon: "cancel",
  },
  {
    id: 4,
    user: "Andrew Shaw",
    action: "created a new event:",
    reference: "Symphony Under the Stars",
    detail: 'under the category "Music"',
    time: "09:30 AM",
    icon: "new",
  },
]; 