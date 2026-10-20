import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { CalendarCheck, Zap } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface BookingCTAProps {
  onOpenBooking: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#F9F5EF] relative overflow-hidden border-t border-[#1C1917]/5">
      
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF5500]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="rounded-3xl p-10 sm:p-16 bg-white border border-[#FF5500]/30 text-center space-y-6 shadow-[0_10px_40px_rgba(255,85,0,0.12)]">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] font-grotesk text-xs font-bold tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5 fill-[#FF5500]" />
              <span>INSTANT RESERVATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-grotesk font-bold text-[#1C1917] tracking-tight">
              Ready To Record Your <br />
              <span className="text-[#FF5500]">Next Masterpiece?</span>
            </h2>

            <p className="text-sm sm:text-lg text-[#78716C] max-w-xl mx-auto">
              Reserve your recording slot, vocal session, or mixing project in less than 60 seconds.
            </p>

            <div className="pt-4 flex justify-center">
              <MagneticButton
                onClick={onOpenBooking}
                className="px-9 py-4 bg-[#FF5500] hover:bg-[#E64A00] text-white font-grotesk font-bold text-sm tracking-wider uppercase rounded-full flex items-center gap-3 shadow-[0_8px_30px_rgba(255,85,0,0.4)] hover:shadow-[0_12px_40px_rgba(255,85,0,0.6)] transition-all duration-300"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Session Now</span>
              </MagneticButton>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
