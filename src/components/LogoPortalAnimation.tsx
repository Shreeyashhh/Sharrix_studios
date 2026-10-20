import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const LogoPortalAnimation: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Scroll transforms for crazy page-inside-page logo animation
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 0.9, 0.5]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
      {/* 3D Rotating Logo Portal Container */}
      <motion.div
        style={{
          rotateY,
          rotateZ,
          scale,
          opacity,
          perspective: 1000,
        }}
        className="relative w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] flex items-center justify-center"
      >
        {/* Glowing Orange Backdrop Aura */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF5500]/20 via-[#FFA800]/15 to-transparent blur-[90px] animate-pulse-slow" />
        
        {/* Rotating Concentric Rings */}
        <div className="absolute inset-0 rounded-full border border-[#FF5500]/30 animate-spin-slow" />
        <div className="absolute inset-8 rounded-full border border-dashed border-[#FF5500]/20 animate-spin-reverse" />

        {/* Floating Rotating Logo 1 Graphic */}
        <motion.img
          src="/logo1.png"
          alt="Sharrix Studios Animated Logo Portal"
          className="w-full h-auto max-h-[300px] object-contain filter drop-shadow-[0_0_45px_rgba(255,85,0,0.35)] opacity-20 hover:opacity-40 transition-opacity duration-500"
        />
      </motion.div>
    </div>
  );
};
