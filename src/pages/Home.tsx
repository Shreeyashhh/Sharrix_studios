import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Trending } from '../components/Trending';
import { Reviews } from '../components/Reviews';
import { Location } from '../components/Location';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { LogoPortalAnimation } from '../components/LogoPortalAnimation';
import { MessageSquare, Calendar } from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F5EF] text-[#1C1917] relative selection:bg-[#FF5500] selection:text-white">
      
      {/* Crazy Animated Rotating Logo 1 Background Portal */}
      <LogoPortalAnimation />

      <Navbar onOpenBooking={handleOpenBooking} onNavigate={onNavigate} currentPath="/" />
      
      <main id="main-content" className="relative z-10">
        <Hero onOpenBooking={handleOpenBooking} onNavigate={onNavigate} />
        <About />
        <Services onOpenBooking={handleOpenBooking} />
        <Trending />
        <Reviews />
        <Location />
        <ContactCTA onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Direct Message Button */}
      <a
        href="https://wa.me/917507726146?text=Hello%20Sharrix%20Studios,%20I%20would%20like%20to%20inquire%20about%20a%20music%20session."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct Message"
        className="hidden md:flex fixed bottom-6 right-6 z-40 p-4 bg-[#FF5500] text-white rounded-full shadow-[0_6px_30px_rgba(255,85,0,0.4)] hover:shadow-[0_8px_40px_rgba(255,85,0,0.6)] transition-transform hover:scale-110 items-center justify-center group"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-grotesk font-bold text-xs uppercase tracking-wider pl-0 group-hover:pl-2">
          Direct Message
        </span>
      </a>

      {/* Mobile Sticky Floating Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F9F5EF]/90 backdrop-blur-xl border-t border-[#1C1917]/10 p-3 flex items-center gap-3">
        <a
          href="https://wa.me/917507726146?text=Hello%20Sharrix%20Studios,%20I%20would%20like%20to%20inquire%20about%20a%20music%20session."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#FF5500] text-white rounded-xl flex items-center justify-center shrink-0 shadow-md"
          aria-label="Direct Message"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
        </a>

        <button
          onClick={() => onNavigate('/booking')}
          className="flex-1 py-3 bg-[#FF5500] text-white font-grotesk font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,85,0,0.35)]"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Studio Session</span>
        </button>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
};
