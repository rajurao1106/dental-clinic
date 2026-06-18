"use client";

import React from 'react';
import { Play, User, Phone, Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation Variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1, ease: 'easeOut', delay: 0.2 } }
  };

  return (
    <section className="relative bg-slate-50 py-16 px-8 overflow-hidden">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex-1 space-y-6 z-10"
        >
          {/* Trust Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
            <span className="text-blue-600">🦷</span>
            <span className="text-sm font-semibold text-blue-900">
              Advanced Dental Care with Precision, Comfort & Trust
            </span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Best Dental Hospital & <br />
            <span className="text-blue-600">Implant Center</span> <br />
            <span className="text-4xl md:text-5xl text-slate-700">in Raipur</span>
          </motion.h1>
          
          {/* Supporting Text */}
          <motion.p variants={fadeUp} className="text-slate-600 max-w-lg text-lg leading-relaxed">
            At <strong>Sikarwar Dental Hospital & Implant Center</strong>, we believe every smile deserves expert care. Since 2011, we have been providing advanced dental treatments, dental implants, oral surgery, and cosmetic smile solutions.
          </motion.p>
          
          {/* Call to Actions */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-md shadow-blue-600/20"
            >
              Book Your Consultation Today
              <ArrowRight size={18} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 font-semibold text-slate-700 hover:text-blue-600 transition-colors px-4 py-3 group"
            >
              <span className="p-2.5 bg-white rounded-full shadow-sm border border-slate-100 group-hover:bg-blue-50 transition-colors">
                <Play size={16} className="fill-blue-600 text-blue-600" />
              </span>
              Clinic Tour
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side: Image with Background Blob */}
        <div className="relative flex-1 w-full flex justify-center">
          {/* Animated Background Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600 rounded-full opacity-10 blur-3xl z-0"
          />
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-32 h-32 bg-teal-400 rounded-full opacity-20 blur-2xl z-0"
          />
          
          {/* Main Image Reveal */}
          <motion.img 
            initial="hidden"
            animate="visible"
            variants={imageReveal}
            src="/doctor-image.png" 
            alt="Dr. Sunny Sikarwar - Best Dentist in Raipur" 
            className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl" 
          />
        </div>
      </div>

      {/* Quick Appointment Form Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-6xl mx-auto mt-20 bg-white p-4 md:p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row gap-4 lg:gap-6 items-end"
      >
        <div className="w-full flex flex-col md:flex-row gap-4 lg:gap-6">
          {/* Name Field */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-4 group">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block group-focus-within:text-blue-500 transition-colors">Patient Name</label>
            <div className="flex items-center gap-3 text-slate-700">
              <User size={18} className="text-blue-500" />
              <input type="text" placeholder="John Doe" className="w-full outline-none text-sm font-medium focus:ring-2 focus:ring-blue-100 rounded-md py-1 px-2 transition-all bg-transparent" />
            </div>
          </div>

          {/* Phone Field */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-4 group">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block group-focus-within:text-blue-500 transition-colors">Phone Number</label>
            <div className="flex items-center gap-3 text-slate-700">
              <Phone size={18} className="text-blue-500" />
              <input type="tel" placeholder="+91 00000 00000" className="w-full outline-none text-sm font-medium focus:ring-2 focus:ring-blue-100 rounded-md py-1 px-2 transition-all bg-transparent" />
            </div>
          </div>

          {/* Date Field */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-4 group">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block group-focus-within:text-blue-500 transition-colors">Preferred Date</label>
            <div className="flex items-center gap-3 text-slate-700">
              <Calendar size={18} className="text-blue-500 shrink-0" />
              <input type="date" className="w-full outline-none text-sm font-medium focus:ring-2 focus:ring-blue-100 rounded-md py-1 px-2 transition-all bg-transparent text-slate-700 cursor-pointer" />
            </div>
          </div>

          {/* Time Field */}
          <div className="flex-1 pb-4 md:pb-0 md:pr-4 group">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block group-focus-within:text-blue-500 transition-colors">Preferred Time</label>
            <div className="flex items-center gap-3 text-slate-700">
              <Clock size={18} className="text-blue-500 shrink-0" />
              <input type="time" className="w-full outline-none text-sm font-medium focus:ring-2 focus:ring-blue-100 rounded-md py-1 px-2 transition-all bg-transparent text-slate-700 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full lg:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-bold shadow-md"
        >
          Request Appointment
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;