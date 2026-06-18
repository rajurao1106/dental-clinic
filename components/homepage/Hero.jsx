"use client";

import React from "react";
import { User, Phone, Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  // Refined, smoother Animation Variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.98, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section id="hero" className="relative bg-slate-50 py-12 md:py-20 px-4 md:px-8 overflow-hidden">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex-1 space-y-6 z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Trust Badge - Professional Pill Shape */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200"
          >
            <span className="text-sm font-medium text-slate-700">
              Advanced Dental Care with Precision & Trust
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight"
          >
            Best <span className="text-blue-600">Dental Hospital</span> &
            Implant Center in Raipur
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={fadeUp}
            className="text-slate-600 max-w-lg text-lg leading-relaxed font-normal"
          >
            At <strong className="font-semibold text-slate-800">Sikarwar Dental Hospital</strong>, we
            believe every smile deserves expert care. Since 2011, we have been
            providing advanced dental treatments, implants, and oral surgery.
          </motion.p>

          {/* Call to Actions - Changed to rounded-lg */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full lg:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium transition-colors shadow-sm"
            >
              Book Your Consultation
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side: Image with Subtle Background Blobs */}
        <div className="relative flex-1 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
          {/* Animated Background Blobs - Reduced opacity for cleaner look */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-500 rounded-full opacity-[0.05] blur-3xl z-0"
          />
          <motion.div
            animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-32 h-32 bg-teal-400 rounded-full opacity-[0.08] blur-2xl z-0"
          />

          {/* Main Image - Soft 2xl corners */}
          <motion.img
            initial="hidden"
            animate="visible"
            variants={imageReveal}
            src="/homepage/hero.png"
            alt="Dr. Sunny Sikarwar - Best Dentist in Raipur"
            className="relative z-10 w-full max-w-md lg:max-w-[500px] object-cover rounded-2xl shadow-sm drop-shadow-xl"
          />
        </div>
      </div>

      {/* Quick Appointment Form Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-6xl mx-auto mt-16 bg-white p-5 md:p-6 rounded-2xl shadow-md border border-slate-200 flex flex-col lg:flex-row gap-5 items-stretch lg:items-end"
      >
        <div className="w-full flex flex-col lg:flex-row gap-5">
          {/* Name Field */}
          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-4 group">
            <label className="text-xs font-medium text-slate-500 tracking-wide mb-1.5 block group-focus-within:text-blue-600 transition-colors">
              Patient Name
            </label>
            <div className="flex items-center gap-3 text-slate-700">
              <User size={18} className="text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full outline-none text-sm font-medium focus:ring-0 py-1 transition-all bg-transparent placeholder:text-slate-300"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-4 group">
            <label className="text-xs font-medium text-slate-500 tracking-wide mb-1.5 block group-focus-within:text-blue-600 transition-colors">
              Phone Number
            </label>
            <div className="flex items-center gap-3 text-slate-700">
              <Phone size={18} className="text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="tel"
                placeholder="+91 00000 00000"
                className="w-full outline-none text-sm font-medium focus:ring-0 py-1 transition-all bg-transparent placeholder:text-slate-300"
              />
            </div>
          </div>

          {/* Date Field */}
          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-4 group">
            <label className="text-xs font-medium text-slate-500 tracking-wide mb-1.5 block group-focus-within:text-blue-600 transition-colors">
              Preferred Date
            </label>
            <div className="flex items-center gap-3 text-slate-700">
              <Calendar size={18} className="text-slate-400 group-focus-within:text-blue-600 shrink-0 transition-colors" />
              <input
                type="date"
                className="w-full outline-none text-sm font-medium focus:ring-0 py-1 transition-all bg-transparent text-slate-700 cursor-pointer"
              />
            </div>
          </div>

          {/* Time Field */}
          <div className="flex-1 pb-4 lg:pb-0 lg:pr-4 group">
            <label className="text-xs font-medium text-slate-500 tracking-wide mb-1.5 block group-focus-within:text-blue-600 transition-colors">
              Preferred Time
            </label>
            <div className="flex items-center gap-3 text-slate-700">
              <Clock size={18} className="text-slate-400 group-focus-within:text-blue-600 shrink-0 transition-colors" />
              <input
                type="time"
                className="w-full outline-none text-sm font-medium focus:ring-0 py-1 transition-all bg-transparent text-slate-700 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full lg:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-lg text-sm font-medium shadow-sm transition-colors whitespace-nowrap"
        >
          Request Appointment
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;