import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Phone, MessageSquare, Instagram, Calendar, Flame } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface ContactCTAProps {
  onOpenBooking: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-24 bg-[#F9F5EF] relative overflow-hidden border-t border-[#1C1917]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-[#1C1917]/10 rounded-3xl p-8 sm:p-16 text-center space-y-10 shadow-xl relative">
          
          <ScrollReveal direction="up" delay={0.1}>
            <span className="px-3.5 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] font-grotesk text-xs font-bold tracking-widest uppercase inline-flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 fill-[#FF5500]" />
              <span>LET'S COLLABORATE</span>
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-4xl sm:text-6xl font-grotesk font-bold text-[#1C1917] tracking-tight">
              Let's Create Your <br />
              <span className="text-[#FF5500]">Next Hit.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-[#78716C] max-w-2xl mx-auto leading-relaxed">
              Have a song concept, vocal recording session, or mixing project in mind? Reach out to us directly or book your slot right now.
            </p>
          </ScrollReveal>

          {/* Contact Methods Grid */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              
              <a
                href="tel:+917507726146"
                className="p-6 rounded-2xl bg-[#F9F5EF] border border-[#1C1917]/10 hover:border-[#FF5500]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3 text-center group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-grotesk font-bold text-[#78716C] uppercase tracking-widest">
                  Call Us
                </span>
                <strong className="text-sm sm:text-base font-grotesk text-[#1C1917] group-hover:text-[#FF5500] transition-colors">
                  +91 7507726146
                </strong>
              </a>

              <a
                href="https://wa.me/917507726146?text=Hello%20Sharrix%20Studios,%20I%20would%20like%20to%20inquire%20about%20a%20music%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#F9F5EF] border border-[#1C1917]/10 hover:border-[#25D366]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3 text-center group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-xs font-grotesk font-bold text-[#78716C] uppercase tracking-widest">
                  WhatsApp Us
                </span>
                <strong className="text-sm sm:text-base font-grotesk text-[#1C1917] group-hover:text-[#25D366] transition-colors">
                  Chat Instantly
                </strong>
              </a>

              <a
                href="https://instagram.com/sharrixstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#F9F5EF] border border-[#1C1917]/10 hover:border-[#E1306C]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3 text-center group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C] group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-xs font-grotesk font-bold text-[#78716C] uppercase tracking-widest">
                  Instagram
                </span>
                <strong className="text-sm sm:text-base font-grotesk text-[#1C1917] group-hover:text-[#E1306C] transition-colors">
                  @sharrixstudios
                </strong>
              </a>

            </div>
          </ScrollReveal>

          {/* Direct Booking CTA */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className="pt-4 flex justify-center">
              <MagneticButton
                onClick={onOpenBooking}
                className="px-9 py-4 bg-[#FF5500] hover:bg-[#E64A00] text-white font-grotesk font-bold text-sm tracking-wider uppercase rounded-full flex items-center gap-3 shadow-[0_4px_25px_rgba(255,85,0,0.35)] hover:shadow-[0_8px_35px_rgba(255,85,0,0.55)] transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Session Now</span>
              </MagneticButton>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
