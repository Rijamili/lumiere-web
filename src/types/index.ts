export interface Service {
  id: string;
  name: string;
  category: string;
  salon: string;
  pro: string;
  rating: number;
  reviews: number;
  price: number;
  duration: string;
  distance: string;
  img: string;
  desc: string;
  includes: string[];
  benefits: string[];
}

export interface Salon {
  id: string;
  name: string;
  verified: boolean;
  rating: number;
  reviews: number;
  location: string;
  hours: string;
  phone: string;
  cover: string;
  about: string;
  team: string[];
}

export interface Professional {
  id: string;
  name: string;
  title: string;
  salon: string;
  experience: string;
  specialization: string;
  rating: number;
  reviews: number;
  bookings: number;
  img: string;
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  service: string;
}

export interface Offer {
  title: string;
  desc?: string;
  code?: string;
  original?: number;
  final?: number;
  note?: string;
  expiry: string;
}

export type LocationType = "salon" | "home";

export interface Customer {
  name: string;
  email: string;
  phone: string;
}

export interface BookingResult {
  service: Service;
  date: Date | null;
  time: string | null;
  locationType: LocationType;
  address: string;
  customer: Customer;
  total: string;
}
