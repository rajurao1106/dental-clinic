"use client";

import React from 'react';
import { PhoneCall, ArrowRight, CalendarClock } from 'lucide-react';
import { motion } from 'framer-motion';

// Reusable Tooth Icon for the marquee
const ToothIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 21c-2 0-5-1.5-5-5V7c0-1.5 1-3 3-3h8c2 0 3 1.5 3 3v9c0 3.5-3 5-5 5-1 0-2-.5-3-1l-1-1v-2" />
    <path d="M12 18v-2l1-1c1 .5 2 1 3 1" />
  </svg>
);

const Booking = () => {
  const marqueeItems = [
    'Dental Implants', 
    'Teeth in 72 Hours', 
    'Root Canal Treatment', 
    'Oral & Maxillofacial Surgery', 
    'Smile Designing',
    'Braces & Aligners'
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // Marquee Banner Component (Keeping CSS animation for infinite linear performance)
  const MarqueeBanner = () => (
    <div className="bg-blue-600 py-3.5 overflow-hidden flex whitespace-nowrap border-y border-blue-700 shadow-inner">
      <div className="flex animate-marquee items-center">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-blue-50 font-semibold text-lg tracking-wide mr-8">{item}</span>
            <ToothIcon className="w-5 h-5 text-blue-200 opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-slate-50 flex flex-col relative" id="book-appointment">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          width: fit-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Top Marquee */}
      <MarqueeBanner />

      <div className="max-w-7xl mx-auto px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Booking Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <h3 className="text-sm font-extrabold tracking-[0.2em] text-blue-600 uppercase flex items-center gap-2">
                <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
                Book an Appointment
              </h3>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Request Your <span className="text-blue-600">Consultation</span>
              </h2>
            </motion.div>

            <motion.form variants={staggerContainer} className="space-y-6">
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Inputs */}
                <motion.div variants={fadeUp} className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Patient Name *</label>
                  <input type="text" placeholder="Ex. John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all font-medium text-slate-800" required />
                </motion.div>
                
                <motion.div variants={fadeUp} className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number *</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all font-medium text-slate-800" required />
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Treatment Needed *</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none cursor-pointer font-medium text-slate-800" required defaultValue="">
                    <option value="" disabled>Select Treatment</option>
                    <option value="general">General Checkup / Cleaning</option>
                    <option value="implants">Dental Implants</option>
                    <option value="72hours">Teeth in 72 Hours</option>
                    <option value="root-canal">Root Canal Treatment</option>
                    <option value="surgery">Oral & Maxillofacial Surgery</option>
                    <option value="braces">Braces & Clear Aligners</option>
                    <option value="cosmetic">Cosmetic / Smile Designing</option>
                  </select>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Preferred Doctor *</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none cursor-pointer font-medium text-slate-800" required defaultValue="dr-sunny">
                    <option value="dr-sunny">Dr. Sunny Sikarwar</option>
                    <option value="any">Any Available Doctor</option>
                  </select>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Preferred Date *</label>
                  <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 font-medium outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all cursor-pointer" required />
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Preferred Time *</label>
                  <input type="time" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 font-medium outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all cursor-pointer" required />
                </motion.div>
              </div>

              {/* Textarea */}
              <motion.div variants={fadeUp} className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Describe Your Dental Problem (Optional)</label>
                <textarea rows="3" placeholder="Tell us what you need help with..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all resize-none font-medium text-slate-800"></textarea>
              </motion.div>

              <motion.button 
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="flex items-center justify-center gap-2 w-full md:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl text-base font-bold shadow-md shadow-blue-600/20"
              >
                Confirm Appointment
                <ArrowRight size={18} />
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Right Side: Info & Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8 pt-4 lg:pt-12"
          >
            <motion.div variants={slideInRight} className="space-y-4">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-2">
                <CalendarClock size={32} className="text-blue-600" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900">Visit Us in Raipur</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                Taking the first step toward a confident smile is easy. Fill out the form, and our team at <strong>Sikarwar Dental Hospital</strong> will contact you promptly to confirm your visit.
              </p>
            </motion.div>

            {/* Clinic Hours Card */}
            <motion.div 
              variants={slideInRight}
              whileHover={{ y: -5 }}
              className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-xl shadow-slate-900/10 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
              <h4 className="font-bold text-xl mb-6 flex items-center gap-2 relative z-10">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Clinic Timings
              </h4>
              <div className="space-y-4 text-sm font-medium border-t border-slate-700 pt-6 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Monday - Saturday</span>
                  <span className="bg-slate-800 px-3 py-1 rounded-md">10:00 AM - 08:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Sunday</span>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-md">Prior Appointment Only</span>
                </div>
              </div>
            </motion.div>

            {/* Emergency Contact Card */}
            <motion.div 
              variants={slideInRight}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-[2rem] p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-6 group hover:border-blue-200 transition-colors cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-all duration-300">
                <PhoneCall size={24} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-blue-600 uppercase tracking-wider mb-1">Direct Contact</p>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Need Urgent Care?</h4>
                <a href="tel:+917400656692" className="text-slate-600 font-medium text-lg hover:text-blue-600 transition-colors block">
                  +91 7400656692
                </a>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Marquee */}
      <MarqueeBanner />
    </section>
  );
};

export default Booking;