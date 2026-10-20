import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText, CheckCircle, Sliders, Mic, Sparkles, Send } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Music Production',
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    service: initialService,
    date: new Date().toISOString().split('T')[0],
    timeSlot: '10:00 AM',
    duration: '2 Hours',
    fullName: '',
    phone: '',
    email: '',
    projectNotes: '',
  });

  const [availableDates, setAvailableDates] = useState<
    { dateStr: string; dayName: string; dayNum: number; monthName: string }[]
  >([]);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      dates.push({
        dateStr: d.toISOString().split('T')[0],
        dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNum: d.getDate(),
        monthName: d.toLocaleDateString('en-US', { month: 'short' }),
      });
    }
    setAvailableDates(dates);
  }, []);

  const services = [
    { id: 'Music Production', title: 'Music Production', icon: Sparkles },
    { id: 'Professional Recording', title: 'Professional Recording', icon: Mic },
    { id: 'Mix & Master', title: 'Mix & Master', icon: Sliders },
  ];

  const timeSlots = ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM'];
  const durations = ['1 Hour', '2 Hours', '3 Hours', '4 Hours', '5 Hours', '6 Hours', '7 Hours', '8 Hours', '8+ Hours (Custom Project)'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const message = `Hello Sharrix Studios! I would like to book a studio session:

📌 *Service*: ${formData.service}
📅 *Date*: ${formData.date}
⏰ *Time*: ${formData.timeSlot} (${formData.duration})
👤 *Name*: ${formData.fullName}
📞 *Phone*: ${formData.phone}
${formData.email ? `✉️ *Email*: ${formData.email}\n` : ''}${
      formData.projectNotes ? `📝 *Notes*: ${formData.projectNotes}\n` : ''
    }`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917507726146?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#F9F5EF] border border-[#1C1917]/15 rounded-3xl p-6 sm:p-10 my-8 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#1C1917]/60 hover:text-[#1C1917] bg-white rounded-full transition-colors border border-[#1C1917]/10 shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center space-y-2 mb-8 pr-8">
            <span className="px-3.5 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] font-grotesk text-[0.65rem] font-bold tracking-widest uppercase">
              INSTANT SESSION RESERVATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-grotesk font-bold text-[#1C1917]">
              Book Your <span className="text-[#FF5500]">Studio Session</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] max-w-md mx-auto">
              Choose your service, pick a date & time slot. Confirming generates a direct WhatsApp message to Sharrix Studios.
            </p>
          </div>

          {/* Step Progress Bar */}
          <div className="flex items-center justify-between mb-8 max-w-lg mx-auto border-b border-[#1C1917]/10 pb-4">
            {[1, 2, 3, 4].map((step) => (
              <button
                key={step}
                onClick={() => setCurrentStep(step)}
                className={`flex items-center gap-2 text-xs font-grotesk font-bold uppercase transition-colors ${
                  currentStep === step
                    ? 'text-[#FF5500]'
                    : currentStep > step
                    ? 'text-[#1C1917]'
                    : 'text-[#1C1917]/30'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[0.7rem] ${
                    currentStep === step
                      ? 'bg-[#FF5500] text-white font-bold'
                      : currentStep > step
                      ? 'bg-white text-[#1C1917] border border-[#1C1917]/20'
                      : 'bg-white/50 text-[#1C1917]/40'
                  }`}
                >
                  {step}
                </div>
                <span className="hidden sm:inline">
                  {step === 1 ? 'Service' : step === 2 ? 'Date' : step === 3 ? 'Time' : 'Details'}
                </span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Select Service */}
            {currentStep === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <label className="text-sm font-grotesk font-bold text-[#1C1917] uppercase tracking-wider block">
                  1. Select Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {services.map((s) => {
                    const Icon = s.icon;
                    const isSelected = formData.service === s.id;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setFormData({ ...formData, service: s.id })}
                        className={`p-5 rounded-2xl cursor-pointer border transition-all flex flex-col items-center gap-3 text-center ${
                          isSelected
                            ? 'bg-white border-[#FF5500] text-[#1C1917] shadow-[0_4px_20px_rgba(255,85,0,0.2)]'
                            : 'bg-white/60 border-[#1C1917]/10 hover:border-[#1C1917]/20 text-[#1C1917]/70'
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isSelected ? 'bg-[#FF5500] text-white' : 'bg-[#1C1917]/10 text-[#1C1917]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-grotesk font-bold text-sm">{s.title}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 bg-[#FF5500] text-white font-grotesk font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#E64A00] transition-colors"
                  >
                    Next: Select Date &rarr;
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Date */}
            {currentStep === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <label className="text-sm font-grotesk font-bold text-[#1C1917] uppercase tracking-wider block flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-[#FF5500]" />
                  <span>2. Select Date</span>
                </label>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 max-h-60 overflow-y-auto p-1">
                  {availableDates.map((d) => {
                    const isSelected = formData.date === d.dateStr;
                    return (
                      <div
                        key={d.dateStr}
                        onClick={() => setFormData({ ...formData, date: d.dateStr })}
                        className={`p-3 rounded-xl cursor-pointer border text-center transition-all ${
                          isSelected
                            ? 'bg-[#FF5500] text-white font-bold border-[#FF5500] shadow-md'
                            : 'bg-white border-[#1C1917]/10 text-[#1C1917] hover:bg-white/90'
                        }`}
                      >
                        <div className="text-[0.65rem] uppercase opacity-70 font-mono">{d.dayName}</div>
                        <div className="text-xl font-grotesk font-bold my-0.5">{d.dayNum}</div>
                        <div className="text-[0.65rem] uppercase opacity-70 font-mono">{d.monthName}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 bg-white text-[#1C1917] font-grotesk font-bold text-xs uppercase tracking-wider rounded-full border border-[#1C1917]/15 hover:bg-white/80 transition-colors"
                  >
                    &larr; Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 bg-[#FF5500] text-white font-grotesk font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#E64A00] transition-colors"
                  >
                    Next: Time Slot &rarr;
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Time Slot & Duration */}
            {currentStep === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-grotesk font-bold text-[#1C1917] uppercase tracking-wider block flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#FF5500]" />
                    <span>3. Select Start Time</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((slot) => {
                      const isSelected = formData.timeSlot === slot;
                      return (
                        <div
                          key={slot}
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={`p-3.5 rounded-xl cursor-pointer border text-center font-grotesk font-bold text-xs transition-all ${
                            isSelected
                              ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-md'
                              : 'bg-white border-[#1C1917]/10 text-[#1C1917] hover:bg-white/90'
                          }`}
                        >
                          {slot}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-grotesk font-bold text-[#1C1917] uppercase tracking-wider block">
                    Session Duration
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full bg-white border border-[#1C1917]/15 rounded-xl p-3.5 text-[#1C1917] font-grotesk text-sm focus:outline-none focus:border-[#FF5500]"
                  >
                    {durations.map((dur) => (
                      <option key={dur} value={dur}>
                        {dur}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 bg-white text-[#1C1917] font-grotesk font-bold text-xs uppercase tracking-wider rounded-full border border-[#1C1917]/15 hover:bg-white/80 transition-colors"
                  >
                    &larr; Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="px-6 py-3 bg-[#FF5500] text-white font-grotesk font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#E64A00] transition-colors"
                  >
                    Next: Your Details &rarr;
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Details */}
            {currentStep === 4 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-grotesk font-bold text-[#1C1917] uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-[#1C1917]/15 rounded-xl p-3.5 text-[#1C1917] font-sans text-sm focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-grotesk font-bold text-[#1C1917] uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>Phone / WhatsApp *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#1C1917]/15 rounded-xl p-3.5 text-[#1C1917] font-sans text-sm focus:outline-none focus:border-[#FF5500]"
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
                      className="w-full bg-white border border-[#1C1917]/15 rounded-xl p-3.5 text-[#1C1917] font-sans text-sm focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-grotesk font-bold text-[#1C1917] uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>Project Notes</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vocal recording for Hindi acoustic cover"
                      value={formData.projectNotes}
                      onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                      className="w-full bg-white border border-[#1C1917]/15 rounded-xl p-3.5 text-[#1C1917] font-sans text-sm focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#1C1917]/10 text-xs text-[#78716C] space-y-1 shadow-sm">
                  <div className="font-grotesk font-bold text-[#1C1917] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF5500]" />
                    <span>Booking Summary:</span>
                  </div>
                  <div>
                    {formData.service} • {formData.date} • {formData.timeSlot} ({formData.duration})
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 bg-white text-[#1C1917] font-grotesk font-bold text-xs uppercase tracking-wider rounded-full border border-[#1C1917]/15 hover:bg-white/80 transition-colors"
                  >
                    &larr; Back
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#FF5500] hover:bg-[#E64A00] text-white font-grotesk font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-2 shadow-[0_4px_25px_rgba(255,85,0,0.4)] transition-transform hover:scale-105"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm & Book via WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            )}

          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
