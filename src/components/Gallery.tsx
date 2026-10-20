import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const items = [
    {
      id: '1',
      title: 'Control Room Atmosphere',
      category: 'Studio A',
      src: '/assets/hero.png',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      id: '2',
      title: 'Mixing Console & Outboard Gear',
      category: 'Audio Desk',
      src: '/assets/console.png',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: '3',
      title: 'Acoustic Vocal Booth',
      category: 'Neumann TLM 103 Suite',
      src: '/assets/booth.png',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: '4',
      title: 'Sound Design & Production Suite',
      category: 'Production Room',
      src: '/assets/album1.png',
      span: 'md:col-span-2 md:row-span-1',
    },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % items.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section id="gallery" className="py-24 bg-[#F9F5EF] relative overflow-hidden border-t border-[#1C1917]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#1C1917]/10 text-[#FF5500] font-grotesk text-xs font-bold tracking-widest uppercase shadow-sm">
              INSIDE SHARRIX STUDIOS
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-grotesk font-bold tracking-tight text-[#1C1917]">
              Where The <br />
              <span className="text-[#FF5500]">Magic Happens</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-[#78716C] leading-relaxed">
              Take a visual tour inside our vocal booths, mixing desk, and production suite. Swipe left or right to explore.
            </p>
          </ScrollReveal>
        </div>

        {/* Swipeable Carousel Container */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="relative">
            
            {/* Desktop Masonry Grid / Mobile Swipe Slider */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40) nextSlide();
                else if (info.offset.x > 40) prevSlide();
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px] cursor-grab active:cursor-grabbing"
            >
              {items.map((item, idx) => (
                <div key={item.id} className={item.span}>
                  <div
                    onClick={() => setSelectedImage({ src: item.src, caption: item.title })}
                    className="group relative w-full h-full rounded-2xl overflow-hidden border border-[#1C1917]/10 bg-white shadow-sm hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100 pointer-events-none"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[0.65rem] font-grotesk font-bold text-[#FF5500] uppercase tracking-widest">
                            {item.category}
                          </span>
                          <h3 className="text-lg font-grotesk font-bold text-white mt-1 group-hover:translate-x-1 transition-transform">
                            {item.title}
                          </h3>
                        </div>

                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#FF5500] transition-all duration-300">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </ScrollReveal>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-h-[75vh] w-auto object-contain rounded-2xl border border-white/10 shadow-2xl"
              />
              <p className="text-center font-grotesk font-bold text-lg text-white">
                {selectedImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
