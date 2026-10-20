import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ReviewItem } from '../types';

export const Reviews: React.FC = () => {
  const reviews: ReviewItem[] = [
    {
      id: '1',
      name: 'Aditya Deshmukh',
      initials: 'AD',
      timeAgo: '2 weeks ago',
      rating: 5,
      text:
        'Recorded my acoustic single at Sharrix Studios using their Neumann TLM 103 microphone. The vocal clarity and studio acoustics are phenomenal! The engineer guided me through every take.',
    },
    {
      id: '2',
      name: 'Sneha Patil',
      initials: 'SP',
      timeAgo: '1 month ago',
      rating: 5,
      text:
        'Sharrix turned my basic voice note humming into a full commercial track ready for Spotify! Amazing beat production, modern arrangement, and super quick turnaround. Highly recommended in Pune/PCMC.',
    },
    {
      id: '3',
      name: 'Vikram Kulkarni',
      initials: 'VK',
      timeAgo: '3 weeks ago',
      rating: 5,
      text:
        'Best mixing and mastering quality in Pimpri-Chinchwad! My song sounds so loud and balanced across all car speakers and headphones. Same Game, Different Level indeed!',
    },
    {
      id: '4',
      name: 'Rohan Mehta',
      initials: 'RM',
      timeAgo: '2 months ago',
      rating: 5,
      text:
        'Great vibe, clean studio atmosphere, professional gear, and patient sound engineers. Recorded Instagram reel covers here and the audio quality blew my followers away.',
    },
    {
      id: '5',
      name: 'Pooja Sharma',
      initials: 'PS',
      timeAgo: '1 week ago',
      rating: 5,
      text:
        'Siddhant and the Sharrix team are absolute masters of their craft. Vocal tuning was completely natural, and the mix sounds pristine on Apple Music lossless!',
    },
    {
      id: '6',
      name: 'Tanmay Joshi',
      initials: 'TJ',
      timeAgo: '3 months ago',
      rating: 5,
      text:
        'I recorded an indie hip-hop EP here. The acoustic treatment in the booth creates zero bleed, and the bass response from the monitoring setup is pinpoint accurate.',
    },
    {
      id: '7',
      name: 'Ananya Roy',
      initials: 'AR',
      timeAgo: '1 month ago',
      rating: 5,
      text:
        'Top-notch audio engineering! They transformed my rough demo into a radio-ready track with punchy 808s and crisp high-end clarity. Will definitely book again.',
    },
    {
      id: '8',
      name: 'Karan Malhotra',
      initials: 'KM',
      timeAgo: '4 weeks ago',
      rating: 5,
      text:
        'Super professional environment! Booking was effortless and the final master LUFS loudness passed streaming compliance without any distortion.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 2 SECONDS (2000ms) as requested!
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#F9F5EF] relative overflow-hidden border-t border-[#1C1917]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#1C1917]/10 text-[#FF5500] font-grotesk text-xs font-bold tracking-widest uppercase shadow-sm">
              GOOGLE VERIFIED REVIEWS
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-grotesk font-bold tracking-tight text-[#1C1917]">
              What Musicians Say <br />
              <span className="text-[#FF5500]">About Us</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-[#78716C] leading-relaxed">
              Real experiences from artists, singers, and content creators. Auto-slides inline every 2 seconds.
            </p>
          </ScrollReveal>
        </div>

        {/* Swipeable Review Card */}
        <ScrollReveal direction="up" delay={0.4}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -40) {
                nextReview();
              } else if (info.offset.x > 40) {
                prevReview();
              }
            }}
            className="relative max-w-4xl mx-auto bg-white border border-[#1C1917]/10 rounded-3xl p-8 sm:p-12 shadow-xl cursor-grab active:cursor-grabbing"
          >
            <div className="flex items-center justify-between border-b border-[#1C1917]/10 pb-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF5500] text-white font-grotesk font-bold text-lg flex items-center justify-center shadow-md">
                  {reviews[currentIndex].initials}
                </div>
                <div>
                  <h4 className="font-grotesk font-bold text-lg text-[#1C1917]">
                    {reviews[currentIndex].name}
                  </h4>
                  <span className="text-xs text-[#78716C]">{reviews[currentIndex].timeAgo}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[#FF5500]">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF5500]" />
                ))}
              </div>
            </div>

            <div className="relative py-4 mb-8 min-h-[120px] flex items-center">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[#1C1917]/5 pointer-events-none" />
              <p className="text-lg sm:text-2xl font-grotesk font-medium text-[#1C1917] leading-relaxed">
                "{reviews[currentIndex].text}"
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-[#1C1917]/10">
              <div className="flex items-center gap-1.5 flex-wrap">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-[#FF5500]' : 'w-2 bg-[#1C1917]/20'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevReview}
                  className="p-3 rounded-full bg-[#1C1917]/5 hover:bg-[#FF5500] hover:text-white text-[#1C1917] transition-colors border border-[#1C1917]/10"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-3 rounded-full bg-[#1C1917]/5 hover:bg-[#FF5500] hover:text-white text-[#1C1917] transition-colors border border-[#1C1917]/10"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </motion.div>
        </ScrollReveal>

      </div>
    </section>
  );
};
