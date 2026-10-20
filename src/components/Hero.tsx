import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Sliders } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface HeroProps {
  onOpenBooking: (serviceName?: string) => void;
  onNavigate?: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigate }) => {
  const { scrollY } = useScroll();

  // Ultra-Zoom Scroll Transition for logo2 centerpiece
  const logoScale = useTransform(scrollY, [0, 600], [1, 4.5]);
  const logoY = useTransform(scrollY, [0, 600], [0, -120]);
  const logoOpacity = useTransform(scrollY, [0, 500, 700], [1, 0.85, 0.1]);

  // CRAZYSurge 3D Zoom for bottom small logo1 indicator (Pops right into user's face on scroll!)
  const smallLogoScale = useTransform(scrollY, [0, 450], [1, 9.5]);
  const smallLogoY = useTransform(scrollY, [0, 450], [0, -200]);
  const smallLogoOpacity = useTransform(scrollY, [0, 200, 450], [1, 1, 0.2]);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#F9F5EF]"
    >
      {/* Ambient Warm Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FF5500]/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#FFA800]/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col items-center justify-center text-center space-y-12 py-8">
        
        {/* Showcase Image of LOGO 2 with Ultra-Zoom Scroll Effect */}
        <motion.div
          style={{ scale: logoScale, y: logoY, opacity: logoOpacity }}
          className="relative max-w-3xl w-full flex justify-center py-6 origin-center pointer-events-none"
        >
          <img
            src="/logo2.png"
            alt="Sharrix Studios Primary Logo"
            className="w-full max-w-2xl h-auto object-contain filter drop-shadow-[0_20px_45px_rgba(255,85,0,0.25)]"
          />
        </motion.div>

        {/* Hero Headline Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-4 max-w-2xl"
        >
          <h1 className="text-3xl sm:text-5xl font-grotesk font-bold text-[#1C1917] tracking-tight leading-tight">
            Where Every Sound <span className="text-[#FF5500]">Becomes Art.</span>
          </h1>
        </motion.div>

        {/* AT THE BOTTOM: TWO BUTTONS (Book Session & Explore Services) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-5 pt-4"
        >
          <MagneticButton
            onClick={() => {
              if (onNavigate) {
                onNavigate('/booking');
              } else {
                onOpenBooking();
              }
            }}
            className="px-9 py-4 bg-[#FF5500] hover:bg-[#E64A00] text-white font-grotesk font-bold text-sm tracking-wider uppercase rounded-full flex items-center gap-3 shadow-[0_8px_30px_rgba(255,85,0,0.4)] hover:shadow-[0_12px_40px_rgba(255,85,0,0.6)] transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Session</span>
          </MagneticButton>

          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('/services');
              } else {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-9 py-4 bg-white/90 hover:bg-white text-[#1C1917] font-grotesk font-bold text-sm tracking-wider uppercase rounded-full border border-[#1C1917]/15 shadow-md flex items-center gap-3 transition-all duration-300 hover:border-[#FF5500]"
          >
            <Sliders className="w-4 h-4 text-[#FF5500]" />
            <span>Explore Services</span>
          </button>
        </motion.div>

      </div>

      {/* CRAZY Surge Zoom logo1 indicator popping into user's face on scroll */}
      <motion.div
        style={{ scale: smallLogoScale, y: smallLogoY, opacity: smallLogoOpacity }}
        className="relative z-20 flex justify-center py-4 origin-center"
      >
        <a
          href="#services"
          className="flex flex-col items-center gap-2 cursor-pointer group"
          aria-label="Scroll to services"
        >
          <img
            src="/logo1.png"
            alt="Sharrix Studios Small Logo Indicator"
            className="h-10 sm:h-14 w-auto object-contain filter drop-shadow-[0_8px_25px_rgba(255,85,0,0.4)]"
          />
        </a>
      </motion.div>
    </section>
  );
};
