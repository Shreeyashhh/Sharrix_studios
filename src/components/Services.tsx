import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Sparkles, Mic, SlidersHorizontal, ArrowRight, Check, ChevronRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface ServicesProps {
  onOpenBooking: (serviceName?: string) => void;
  onNavigate?: (path: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking, onNavigate }) => {
  const servicesList = [
    {
      number: '01',
      title: 'Music Production',
      intro: 'Turning your ideas into professional, release-ready songs.',
      description:
        'From lyrics, melodies, or simple voice notes, we produce full professional tracks with modern sound design, arrangements, beatmaking, and industry-standard quality ready for release across all streaming platforms.',
      icon: Sparkles,
      features: [
        'Custom Beat & Arrangement',
        'Modern Sound Design & Synths',
        'Song Structure & Composition',
        'Full Multi-track Stems Export',
      ],
      ctaText: 'Book Music Production',
      isPopular: false,
    },
    {
      number: '02',
      title: 'Professional Recording',
      intro: 'Record vocals in an acoustically treated booth.',
      description:
        'Utilizing the world-renowned Neumann TLM 103 Condenser Microphone, receive expert guidance to capture your best emotional and vocal performance for Songs, Covers, Voiceovers, and Instagram Reels.',
      icon: Mic,
      features: [
        'Neumann TLM 103 Mic Capture',
        'Acoustically Isolated Vocal Booth',
        'Vocal Coaching & Tuning Support',
        'High-Res Audio Export (24-bit/96kHz)',
      ],
      ctaText: 'Book Recording Session',
      isPopular: true,
    },
    {
      number: '03',
      title: 'Mix & Master',
      intro: 'Industry Standard Sound Balance & Polish.',
      description:
        'Balance, enhance, and polish your raw tracks into powerful, clean, streaming-ready sound across Spotify, Apple Music, YouTube, and club audio systems with precise EQ, compression, and loudness mastering.',
      icon: SlidersHorizontal,
      features: [
        'Surgical EQ & Dynamic Compression',
        'Vocal Cleaning & Pitch Correction',
        'Stereo Imaging & Spatial Width',
        'Streaming Loudness Optimization (LUFS)',
      ],
      ctaText: 'Book Mix & Master',
      isPopular: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#F9F5EF] relative overflow-hidden border-t border-[#1C1917]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#1C1917]/10 text-[#FF5500] font-grotesk text-xs font-bold tracking-widest uppercase shadow-sm">
              OUR CORE SERVICES
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-grotesk font-bold tracking-tight text-[#1C1917]">
              Crafting Sounds That <br />
              <span className="text-[#FF5500]">Define Generations</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-[#78716C] leading-relaxed">
              Comprehensive audio engineering and music production tailored to elevate your music to professional standards.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Stack */}
        <div className="space-y-8 mb-12">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.number} delay={0.15 * idx} direction="up">
                <div
                  className={`group relative rounded-3xl p-8 sm:p-12 transition-all duration-500 border ${
                    service.isPopular
                      ? 'bg-white border-[#FF5500]/50 shadow-[0_10px_40px_rgba(255,85,0,0.12)]'
                      : 'bg-white/80 border-[#1C1917]/10 hover:border-[#FF5500]/30 hover:shadow-lg'
                  }`}
                >
                  {service.isPopular && (
                    <div className="absolute top-6 right-8 px-3.5 py-1 rounded-full bg-[#FF5500] text-white font-grotesk font-bold text-[0.65rem] tracking-widest uppercase shadow-md">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Number & Header */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl sm:text-6xl font-grotesk font-bold text-[#1C1917]/20 group-hover:text-[#FF5500] transition-colors duration-300">
                          {service.number}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500]">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-grotesk font-bold text-[#1C1917]">
                        {service.title}
                      </h3>

                      <p className="text-[#FF5500] font-grotesk font-semibold text-base">
                        {service.intro}
                      </p>
                    </div>

                    {/* Description & Features */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                      <p className="text-sm sm:text-base text-[#78716C] leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1C1917] font-semibold">
                            <div className="w-4 h-4 rounded-full bg-[#FF5500]/15 text-[#FF5500] flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4">
                        <MagneticButton
                          onClick={() => onOpenBooking(service.title)}
                          className={`px-6 py-3.5 rounded-full font-grotesk font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-300 ${
                            service.isPopular
                              ? 'bg-[#FF5500] hover:bg-[#E64A00] text-white shadow-[0_4px_20px_rgba(255,85,0,0.3)]'
                              : 'bg-[#1C1917]/5 hover:bg-[#FF5500] hover:text-white text-[#1C1917] border border-[#1C1917]/10'
                          }`}
                        >
                          <span>{service.ctaText}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </MagneticButton>
                      </div>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* BUTTON AT THE END RIGHT SIDE: Explore More Services */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="flex justify-end pt-4">
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate('/services');
                } else {
                  window.location.href = '/services';
                }
              }}
              className="px-8 py-4 bg-[#FF5500] hover:bg-[#E64A00] text-white font-grotesk font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-3 shadow-[0_6px_25px_rgba(255,85,0,0.35)] transition-transform hover:scale-105"
            >
              <span>Explore More Services</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
