import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Lightbulb, Sliders, Volume2, Award, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Idea To Release',
      description:
        'We transform raw concepts, simple voice notes, or humming into fully produced, arranged, mixed, and mastered commercial tracks ready for Spotify & Apple Music.',
    },
    {
      icon: Sliders,
      title: 'Professional Equipment',
      description:
        'Powered by world-class Neumann TLM 103 condenser microphones, pristine audio interfaces, top-tier studio monitors, and industry-standard digital audio workstations.',
    },
    {
      icon: Volume2,
      title: 'Creative Environment',
      description:
        'Engineered recording booth with custom bass traps, diffusers, and absorption panels designed to capture crystal-clear vocals and acoustic instruments without room noise.',
    },
    {
      icon: Award,
      title: 'Industry Standard Quality',
      description:
        'Get radio-ready loudness, pristine tonal balance, deep stereo width, and streaming-compliant mastering that stands out on high-end speakers and earbuds alike.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#F9F5EF] relative overflow-hidden border-t border-[#1C1917]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#1C1917]/10 text-[#FF5500] font-grotesk text-xs font-bold tracking-widest uppercase shadow-sm">
              ABOUT SHARRIX STUDIOS
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-grotesk font-bold tracking-tight text-[#1C1917]">
              Your Ultimate Destination <br />
              <span className="text-[#FF5500]">From Idea To Release</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-[#78716C] leading-relaxed">
              Dedicated music production studio crafted for modern artists, singers, songwriters, content creators, and independent musicians.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} delay={0.1 * idx} direction="up">
                <div className="group h-full p-8 rounded-2xl bg-white border border-[#1C1917]/10 hover:border-[#FF5500]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500] mb-6 group-hover:bg-[#FF5500] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-grotesk font-bold text-[#1C1917] mb-3 group-hover:text-[#FF5500] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#78716C] leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Console Showcase Banner */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="relative rounded-3xl overflow-hidden border border-[#1C1917]/10 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12 shadow-lg">
            
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-video lg:aspect-auto h-full min-h-[260px]">
              <img
                src="/assets/console.png"
                alt="Sharrix Recording Studio Console"
                className="w-full h-full object-cover rounded-2xl filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-grotesk font-bold tracking-widest text-[#FF5500] uppercase">
                EXCELLENCE IN AUDIO ENGINEERING
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-[#1C1917] leading-tight">
                Creating Music That Resonates Globally
              </h3>

              <p className="text-sm sm:text-base text-[#78716C] leading-relaxed">
                At Sharrix Studios, we believe that great music comes from a blend of technical mastery and artistic freedom. Whether you are cutting your first single, recording a cover, or scoring for a film, our doors are open for your vision.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  '1-on-1 Artist Guidance & Vocal Direction',
                  'Custom Beat Production & Modern Soundscapes',
                  'Quick Turnaround Times & Streaming Ready Exports',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-[#1C1917] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
