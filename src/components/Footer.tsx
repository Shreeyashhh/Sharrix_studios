import React from 'react';
import { Phone, Instagram, MessageSquare, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#F2ECE1] text-[#1C1917] pt-16 pb-12 border-t border-[#1C1917]/10 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#1C1917]/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block">
              <img
                src="/logo3.png"
                alt="Sharrix Studios Logo"
                className="h-10 2xl:h-12 w-auto object-contain"
              />
            </a>
            <p className="text-xs font-grotesk font-bold tracking-widest text-[#FF5500] uppercase">
              SAME GAME, DIFFERENT LEVEL
            </p>
            <p className="text-sm 2xl:text-base text-[#78716C] max-w-sm leading-relaxed">
              All Your Music Needs, From Idea To Release, Under One Roof! Premium music production, Neumann TLM 103 recording, mixing & mastering.
            </p>

            {/* Mini Equalizer animation */}
            <div className="flex items-end gap-1 h-5 pt-2">
              <span className="w-1 bg-[#FF5500] rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-3" />
              <span className="w-1 bg-[#FF5500] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.1s] h-5" />
              <span className="w-1 bg-[#FF5500] rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.2s] h-2" />
              <span className="w-1 bg-[#FF5500] rounded-full animate-[pulse_0.7s_ease-in-out_infinite_0.15s] h-4" />
              <span className="w-1 bg-[#FF5500] rounded-full animate-[pulse_0.8s_ease-in-out_infinite_0.3s] h-3" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-grotesk font-bold text-sm text-[#1C1917] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#78716C] font-semibold">
              <li>
                <a href="/" className="hover:text-[#FF5500] transition-colors">Home</a>
              </li>
              <li>
                <a href="/about-contact" className="hover:text-[#FF5500] transition-colors">About Sharrix</a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#FF5500] transition-colors">Services</a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-[#FF5500] transition-colors">Gallery</a>
              </li>
              <li>
                <button onClick={() => onOpenBooking()} className="hover:text-[#FF5500] transition-colors text-left">
                  Book Session
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-grotesk font-bold text-sm text-[#1C1917] uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#78716C] font-semibold">
              <li>
                <button onClick={() => onOpenBooking('Music Production')} className="hover:text-[#FF5500] transition-colors text-left">
                  Music Production
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('Professional Recording')} className="hover:text-[#FF5500] transition-colors text-left">
                  Neumann Recording
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('Mix & Master')} className="hover:text-[#FF5500] transition-colors text-left">
                  Mixing & Mastering
                </button>
              </li>
              <li>
                <a href="/services" className="hover:text-[#FF5500] transition-colors">Release & Streaming</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-grotesk font-bold text-sm text-[#1C1917] uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#78716C] font-medium">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span>+91 7507726146</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span>@sharrixstudios</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                <span>Thergaon, Pimpri-Chinchwad</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/sharrixstudios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-[#1C1917]/10 flex items-center justify-center text-[#1C1917] hover:text-white hover:bg-[#E1306C] transition-colors shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917507726146"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white border border-[#1C1917]/10 flex items-center justify-center text-[#1C1917] hover:text-white hover:bg-[#25D366] transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="tel:+917507726146"
                aria-label="Phone"
                className="w-9 h-9 rounded-full bg-white border border-[#1C1917]/10 flex items-center justify-center text-[#1C1917] hover:text-white hover:bg-[#FF5500] transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#78716C] space-y-4 sm:space-y-0 font-medium">
          <p>© 2026 <strong className="text-[#1C1917] font-grotesk">Sharrix Studios</strong>. All Rights Reserved.</p>
          <p className="font-grotesk tracking-wider uppercase text-[#FF5500] font-bold">
            Crafted for Extraordinary Music.
          </p>
        </div>

      </div>
    </footer>
  );
};
