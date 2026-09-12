export interface DrinkPackage {
  id: string;
  name: string;
  badge?: string;
  category: 'standard' | 'premium' | 'special';
  bottleInfo: string;
  price: number; // in KRW
  description: string;
  included: string[];
  popular?: boolean;
}

export interface RoomInfo {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  tag: string;
  features: string[];
  image: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'pricing' | 'service' | 'first-timer' | 'reservation';
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  headcount: number;
  selectedPackage?: string;
  needsPickup: boolean;
  pickupLocation?: string;
  stylePreference?: string;
  notes?: string;
}
