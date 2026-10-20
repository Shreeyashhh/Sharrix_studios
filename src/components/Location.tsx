import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { MapPin, Phone, Instagram, Map, Navigation } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#F9F5EF] relative overflow-hidden border-t border-[#1C1917]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#1C1917]/10 rounded-3xl p-8 sm:p-12 shadow-xl">
          
          {/* Address & Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="px-3.5 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] font-grotesk text-xs font-bold tracking-widest uppercase inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>VISIT OUR STUDIO</span>
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-[#1C1917] tracking-tight">
                Located In The Heart Of <br />
                <span className="text-[#FF5500]">Pimpri-Chinchwad</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="p-6 rounded-2xl bg-[#F9F5EF] border border-[#1C1917]/10 space-y-3">
                <h4 className="text-lg font-grotesk font-bold text-[#1C1917]">Sharrix Studios</h4>
                <p className="text-sm text-[#78716C] leading-relaxed font-sans">
                  Ground Floor, Shri Hari Niwas,<br />
                  RNB School Road, Pawar Nagar,<br />
                  Samarth Colony, Thergaon,<br />
                  Pimpri-Chinchwad, Maharashtra – 411033
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="tel:+917507726146"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#F9F5EF] hover:bg-[#FF5500] hover:text-white border border-[#1C1917]/10 text-[#1C1917] font-grotesk text-xs font-semibold tracking-wider uppercase transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#FF5500] group-hover:text-white" />
                  <span>+91 7507726146</span>
                </a>

                <a
                  href="https://instagram.com/sharrixstudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#F9F5EF] hover:bg-[#FF5500] hover:text-white border border-[#1C1917]/10 text-[#1C1917] font-grotesk text-xs font-semibold tracking-wider uppercase transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-[#FF5500] group-hover:text-white" />
                  <span>@sharrixstudios</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://maps.google.com/?q=Sharrix+Studios+Thergaon+Pimpri-Chinchwad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MagneticButton className="px-6 py-3.5 bg-[#FF5500] hover:bg-[#E64A00] text-white font-grotesk font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(255,85,0,0.35)]">
                    <Map className="w-4 h-4" />
                    <span>Open Google Maps</span>
                  </MagneticButton>
                </a>

                <a
                  href="https://www.google.com/maps/dir//Thergaon,+Pimpri-Chinchwad,+Maharashtra+411033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#1C1917]/5 hover:bg-[#1C1917]/10 text-[#1C1917] font-grotesk font-bold text-xs uppercase tracking-wider rounded-full border border-[#1C1917]/15 flex items-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#FF5500]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Map Frame */}
          <div className="lg:col-span-6 h-[360px] lg:h-[450px] w-full rounded-2xl overflow-hidden border border-[#1C1917]/10 relative shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.365416248317!2d73.7820!3d18.6015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9a7fbffffff%3A0x1234567890abcdef!2sThergaon%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411033!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sharrix Studios Google Maps Location"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
