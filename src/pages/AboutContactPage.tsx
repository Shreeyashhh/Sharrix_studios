import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Location } from '../components/Location';
import { ScrollReveal } from '../components/ScrollReveal';
import { User, Phone, Mail, FileText, Send, Award, Mic, Sliders, CheckCircle2 } from 'lucide-react';

interface AboutContactPageProps {
  onNavigate: (path: string) => void;
}

export const AboutContactPage: React.FC<AboutContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Music Production',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const message = `Hello Sharrix Studios! Studio Inquiry:

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
${formData.email ? `✉️ Email: ${formData.email}\n` : ''}📌 Service Interest: ${formData.service}
${formData.notes ? `📝 Project Details: ${formData.notes}\n` : ''}`;

    const encoded = encodeURIComponent(message);
    const directLink = `https://wa.me/917507726146?text=${encoded}`;
    window.open(directLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F9F5EF] text-[#1C1917] relative">
      <Navbar onOpenBooking={() => onNavigate('/booking')} onNavigate={onNavigate} currentPath="/about-contact" />

      <main className="pt-28 pb-20">
        
        {/* Header */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#1C1917]/10 text-[#FF5500] font-grotesk text-xs font-bold tracking-widest uppercase shadow-sm">
              CREATIVE DIRECTION & CONTACT
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-[#1C1917]">
              About & <span className="text-[#FF5500]">Contact Us</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-[#78716C] max-w-2xl mx-auto">
              Meet the visionary behind Sharrix Studios and get in touch directly to bring your musical project from concept to release.
            </p>
          </ScrollReveal>
        </section>

        {/* SECTION 1: ABOUT FOUNDER — SIDDHANT KANDALKAR */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#1C1917]/10 rounded-3xl p-8 sm:p-16 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founder Visual & Specs */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#1C1917]/10 bg-[#F2ECE1] shadow-lg">
                <img
                  src="/assets/booth.png"
                  alt="Siddhant Kandalkar - Founder & Lead Audio Engineer"
                  className="w-full h-full object-cover filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-grotesk font-bold text-[#FF5500] uppercase tracking-widest">
                    STUDIO FOUNDER
                  </span>
                  <h3 className="text-2xl font-grotesk font-bold text-white mt-1">
                    Siddhant Kandalkar
                  </h3>
                  <p className="text-xs text-white/80 font-medium">Founder & Lead Audio Engineer</p>
                </div>
              </div>
            </div>

            {/* Founder Story & Vision */}
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] font-grotesk text-xs font-bold tracking-widest uppercase">
                ABOUT FOUNDER
              </span>

              <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-[#1C1917]">
                Siddhant Kandalkar
              </h2>

              <p className="text-base text-[#78716C] leading-relaxed">
                Founded by producer and audio engineer <strong>Siddhant Kandalkar</strong>, Sharrix Studios was born out of a passion to bridge the gap between creative raw ideas and commercial radio-ready music releases.
              </p>

              <p className="text-sm sm:text-base text-[#78716C] leading-relaxed">
                Guided by the ethos <strong className="text-[#FF5500]">"Same Game, Different Level"</strong>, Siddhant engineered Sharrix Studios in Pimpri-Chinchwad around legendary equipment—featuring the iconic <strong>Neumann TLM 103 Condenser Microphone</strong>, SSL & Universal Audio processing, and precision acoustic treatment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Over 100+ Commercial Tracks Produced',
                  'Neumann TLM 103 Vocal Suite Specialist',
                  'Precision LUFS Loudness Mastering',
                  '1-on-1 Artist Coaching & Guidance',
                ].map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1C1917]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: CONTACT FORM (NO WHATSAPP KEYWORD ON BUTTONS/LABELS) */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#1C1917]/10 rounded-3xl p-8 sm:p-16 shadow-xl max-w-4xl mx-auto space-y-10">
            
            <div className="text-center space-y-3">
              <span className="px-3.5 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] font-grotesk text-xs font-bold tracking-widest uppercase">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-[#1C1917]">
                Send a <span className="text-[#FF5500]">Direct Message</span>
              </h2>
              <p className="text-sm text-[#78716C]">
                Fill out the form below to submit your project inquiry directly to Siddhant and the Sharrix team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-grotesk font-bold text-[#1C1917] uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aditya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F9F5EF] border border-[#1C1917]/15 rounded-xl p-3.5 text-[#1C1917] font-sans text-sm focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-grotesk font-bold text-[#1C1917] uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F9F5EF] border border-[#1C1917]/15 rounded-xl p-3.5 text-[#1C1917] font-sans text-sm focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-grotesk font-bold text-[#1C1917] uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. artist@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F9F5EF] border border-[#1C1917]/15 rounded-xl p-3.5 text-[#1C1917] font-sans text-sm focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-grotesk font-bold text-[#1C1917] uppercase tracking-wider block">
                    Service Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#F9F5EF] border border-[#1C1917]/15 rounded-xl p-3.5 text-[#1C1917] font-grotesk text-sm focus:outline-none focus:border-[#FF5500]"
                  >
                    <option value="Music Production">Music Production</option>
                    <option value="Professional Recording">Professional Recording</option>
                    <option value="Mix & Master">Mix & Master</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-grotesk font-bold text-[#1C1917] uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Message / Project Details</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your song, vocal recording needs, or timeline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#F9F5EF] border border-[#1C1917]/15 rounded-xl p-3.5 text-[#1C1917] font-sans text-sm focus:outline-none focus:border-[#FF5500]"
                />
              </div>

              {/* Direct Submit CTA without mentioning WhatsApp */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="px-9 py-4 bg-[#FF5500] hover:bg-[#E64A00] text-white font-grotesk font-bold text-sm uppercase tracking-wider rounded-full inline-flex items-center gap-3 shadow-[0_4px_25px_rgba(255,85,0,0.35)] transition-transform hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </button>
              </div>
            </form>

          </div>
        </section>

        {/* SECTION 3: LOCATION */}
        <Location />

      </main>

      <Footer onOpenBooking={() => onNavigate('/booking')} />
    </div>
  );
};
