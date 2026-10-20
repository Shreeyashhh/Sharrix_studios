import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import {
  Cpu,
  DoorClosed,
  Sliders,
  Disc,
  Activity,
  UserCheck,
  Zap,
  Headphones,
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  const benefits = [
    {
      number: '01',
      icon: Cpu,
      title: 'Professional Equipment',
      description:
        'Industry-grade gear including Neumann microphones, SSL plugins, high-end studio monitoring, and universal audio preamps.',
    },
    {
      number: '02',
      icon: DoorClosed,
      title: 'Acoustically Treated Room',
      description:
        'Precision soundproofing and bass traps ensuring zero room bleed and maximum vocal warmth and clarity.',
    },
    {
      number: '03',
      icon: Sliders,
      title: 'Industry Standard Mixing',
      description:
        'Pristine instrument balance, depth, and spatial enhancement for commercial radio & streaming platforms.',
    },
    {
      number: '04',
      icon: Disc,
      title: 'Creative Production',
      description:
        'In-house music producers who bring fresh arrangement ideas, chord progressions, and modern soundscapes.',
    },
    {
      number: '05',
      icon: Activity,
      title: 'Modern Sound Design',
      description:
        'Custom synth programming, punchy 808s, cinematic risers, and unique sonic textures built for hit songs.',
    },
    {
      number: '06',
      icon: UserCheck,
      title: 'Professional Guidance',
      description:
        'Friendly studio engineers who assist with vocal delivery, harmony layering, tuning, and performance pacing.',
    },
    {
      number: '07',
      icon: Zap,
      title: 'Quick Delivery',
      description:
        'Fast turnarounds without compromising on sonic quality, stems, or mix revisions.',
    },
    {
      number: '08',
      icon: Headphones,
      title: 'Premium Audio Quality',
      description:
        'Crystal clear 24-bit/96kHz audio exports formatted specifically for Spotify, Apple Music, and vinyl pressing.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#F9F5EF] relative overflow-hidden border-t border-[#1C1917]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#1C1917]/10 text-[#FF5500] font-grotesk text-xs font-bold tracking-widest uppercase shadow-sm">
              WHY SHARRIX STUDIOS
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-grotesk font-bold tracking-tight text-[#1C1917]">
              Built For Artists Who Demand <br />
              <span className="text-[#FF5500]">Perfection</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* 8 Benefit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.title} delay={0.08 * idx} direction="up">
                <div className="group h-full p-6 rounded-2xl bg-white border border-[#1C1917]/10 hover:border-[#FF5500]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#FF5500] tracking-widest">
                        {benefit.number}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-lg font-grotesk font-bold text-[#1C1917] mb-2 group-hover:text-[#FF5500] transition-colors">
                      {benefit.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
