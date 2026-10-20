export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  intro: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface TrackItem {
  id: string;
  title: string;
  artist: string;
  subtitle: string;
  duration: string;
  coverImage: string;
  audioUrl?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  timeAgo: string;
  rating: number;
  text: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface BookingFormData {
  service: string;
  date: string;
  timeSlot: string;
  duration: string;
  fullName: string;
  phone: string;
  email: string;
  projectNotes: string;
}
