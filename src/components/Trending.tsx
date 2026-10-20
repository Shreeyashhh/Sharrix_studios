import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { AudioPlayerComponent } from './AudioPlayer';
import { TrackItem } from '../types';
import { ChevronLeft, ChevronRight, Disc } from 'lucide-react';

export const Trending: React.FC = () => {
  const tracks: TrackItem[] = [
    {
      id: '1',
      title: 'Cyber Beats (Sharrix Original)',
      artist: 'Sharrix Studios Producer Collective',
      subtitle: 'Production & Mastering',
      duration: '3:45',
      coverImage: '/assets/album1.png',
    },
    {
      id: '2',
      title: 'Midnight Vocal Symphony',
      artist: 'Artist Featuring Neumann TLM 103',
      subtitle: 'Vocal Recording & Mixing',
      duration: '4:12',
      coverImage: '/assets/booth.png',
    },
    {
      id: '3',
      title: 'Pimpri Nights (Indie Anthem)',
      artist: 'Local Independent Collective',
      subtitle: 'Full Song Production',
      duration: '3:18',
      coverImage: '/assets/console.png',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeTrack = tracks[activeSlide];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(false);
  };

  return (
    <section id="spotify" className="py-24 bg-[#F9F5EF] relative overflow-hidden border-t border-[#1C1917]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#1C1917]/10 text-[#FF5500] font-grotesk text-xs font-bold tracking-widest uppercase shadow-sm">
              SPOTIFY & STREAMING HIGHLIGHTS
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-grotesk font-bold tracking-tight text-[#1C1917]">
              Trending At <br />
              <span className="text-[#FF5500]">Sharrix Studios</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-[#78716C] leading-relaxed">
              Swipe left or right to switch songs. Only 1 featured song displays at a time.
            </p>
          </ScrollReveal>
        </div>

        {/* SINGLE SONG SWIPE CAROUSEL (One song at a time) */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="max-w-4xl mx-auto relative">
            
            {/* Top Bar Indicator & Nav Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-xs font-grotesk font-bold text-[#FF5500] uppercase tracking-wider">
                <Disc className="w-4 h-4 animate-spin-slow" />
                <span>SONG {activeSlide + 1} OF {tracks.length}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white hover:bg-[#FF5500] hover:text-white text-[#1C1917] transition-colors border border-[#1C1917]/10 shadow-sm"
                  aria-label="Previous Song"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white hover:bg-[#FF5500] hover:text-white text-[#1C1917] transition-colors border border-[#1C1917]/10 shadow-sm"
                  aria-label="Next Song"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Framer Motion Touch/Drag Swipe Container for Single Active Song */}
            <motion.div
              key={activeTrack.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) {
                  handleNext();
                } else if (info.offset.x > 50) {
                  handlePrev();
                }
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="cursor-grab active:cursor-grabbing"
            >
              <AudioPlayerComponent
                track={activeTrack}
                isPlaying={isPlaying}
                onTogglePlay={() => setIsPlaying(!isPlaying)}
              />
            </motion.div>

            {/* Slide Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {tracks.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveSlide(idx);
                    setIsPlaying(false);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === idx ? 'w-8 bg-[#FF5500]' : 'w-2.5 bg-[#1C1917]/20'
                  }`}
                  aria-label={`Go to song ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
