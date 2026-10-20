import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { BookingCTA } from '../components/BookingCTA';

interface GalleryPageProps {
  onNavigate: (path: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F9F5EF] text-[#1C1917] relative">
      <Navbar onOpenBooking={() => onNavigate('/booking')} onNavigate={onNavigate} currentPath="/gallery" />

      <main className="pt-28 pb-20">
        <Gallery />
        <BookingCTA onOpenBooking={() => onNavigate('/booking')} />
      </main>

      <Footer onOpenBooking={() => onNavigate('/booking')} />
    </div>
  );
};
