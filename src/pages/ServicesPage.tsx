import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Services } from '../components/Services';
import { WhyUs } from '../components/WhyUs';
import { BookingCTA } from '../components/BookingCTA';
import { ScrollReveal } from '../components/ScrollReveal';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F9F5EF] text-[#1C1917] relative">
      <Navbar onOpenBooking={() => onNavigate('/booking')} onNavigate={onNavigate} currentPath="/services" />

      <main className="pt-28 pb-20">
        <Services onOpenBooking={() => onNavigate('/booking')} />
        <WhyUs />
        <BookingCTA onOpenBooking={() => onNavigate('/booking')} />
      </main>

      <Footer onOpenBooking={() => onNavigate('/booking')} />
    </div>
  );
};
