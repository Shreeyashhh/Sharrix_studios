import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  onNavigate: (path: string) => void;
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigate, currentPath = '/' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', isComingSoon: false },
    { name: 'Services', path: '/services', isComingSoon: false },
    { name: 'Gallery', path: '/gallery', isComingSoon: false },
    { name: 'Academics', path: '#', isComingSoon: true },
    { name: 'Distribution', path: '#', isComingSoon: true },
    { name: 'About & Contact', path: '/about-contact', isComingSoon: false },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string, isComingSoon: boolean) => {
    e.preventDefault();
    if (isComingSoon) return;
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F9F5EF]/90 backdrop-blur-xl border-b border-[#1C1917]/10 py-3 shadow-md shadow-black/5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo 3 */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/', false)}
            className="flex items-center gap-3 group cursor-pointer"
            aria-label="Sharrix Studios Home"
          >
            <img
              src="/logo3.png"
              alt="Sharrix Studios Logo"
              className="h-9 sm:h-10 2xl:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 2xl:gap-3 bg-white/80 border border-[#1C1917]/10 backdrop-blur-md px-5 py-2 rounded-full shadow-sm">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <div key={link.name} className="relative flex items-center">
                  <button
                    onClick={(e) => handleLinkClick(e, link.path, link.isComingSoon)}
                    disabled={link.isComingSoon}
                    className={`px-3.5 py-1.5 2xl:px-4 2xl:py-2 text-xs 2xl:text-sm font-grotesk font-bold tracking-wider uppercase transition-all duration-200 rounded-full flex items-center gap-1.5 ${
                      link.isComingSoon
                        ? 'text-[#1C1917]/40 cursor-not-allowed'
                        : isActive
                        ? 'text-[#FF5500] bg-[#FF5500]/10 shadow-inner'
                        : 'text-[#1C1917]/80 hover:text-[#FF5500] hover:bg-[#1C1917]/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.isComingSoon && (
                      <span className="px-1.5 py-0.5 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-[0.55rem] font-extrabold uppercase">
                        SOON
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <MagneticButton
              onClick={() => onNavigate('/booking')}
              className="px-5 py-2.5 2xl:px-7 2xl:py-3 bg-[#FF5500] hover:bg-[#E64A00] text-white rounded-full font-grotesk font-bold text-xs 2xl:text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_4px_20px_rgba(255,85,0,0.35)] hover:shadow-[0_6px_25px_rgba(255,85,0,0.5)]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Session</span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => onNavigate('/booking')}
              className="px-3.5 py-1.5 bg-[#FF5500] text-white text-xs font-grotesk font-bold rounded-full flex items-center gap-1.5"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1917] hover:text-[#FF5500] bg-white rounded-lg border border-[#1C1917]/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#F9F5EF]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 pt-24"
          >
            <div className="flex flex-col gap-3 max-w-sm mx-auto w-full">
              <div className="mb-4 flex justify-center">
                <img src="/logo3.png" alt="Sharrix Studios Logo" className="h-10 w-auto object-contain" />
              </div>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="flex items-center justify-between py-2 border-b border-[#1C1917]/5"
                >
                  <button
                    onClick={(e) => handleLinkClick(e, link.path, link.isComingSoon)}
                    disabled={link.isComingSoon}
                    className={`text-xl font-grotesk font-bold tracking-tight text-left flex items-center justify-between w-full ${
                      link.isComingSoon
                        ? 'text-[#1C1917]/40 cursor-not-allowed'
                        : currentPath === link.path
                        ? 'text-[#FF5500]'
                        : 'text-[#1C1917] hover:text-[#FF5500]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.isComingSoon && (
                      <span className="px-2 py-0.5 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-[0.6rem] font-bold">
                        COMING SOON
                      </span>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="max-w-sm mx-auto w-full pt-6 border-t border-[#1C1917]/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/booking');
                }}
                className="w-full py-4 bg-[#FF5500] text-white font-grotesk font-bold text-sm tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(255,85,0,0.4)]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Session Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
