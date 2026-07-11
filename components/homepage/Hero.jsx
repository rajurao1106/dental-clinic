"use client";

import React, { useState } from "react";
import { User, Phone, Calendar, Clock, ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  // Modal & Form States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inlineStatus, setInlineStatus] = useState("");
  const [modalStatus, setModalStatus] = useState("");

  // Form Submit Handler for the Quick Inline Form
  const handleInlineSubmit = async (e) => {
    e.preventDefault();
    setInlineStatus("Sending...");
    
    const formData = new FormData(e.target); 
    formData.append("access_key", "242d73d3-759b-4548-9450-5c1de3e34dbd"); 

    // Convert FormData to JSON (Fixes the 400 Bad Request error)
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const data = await response.json();

      if (data.success) {
        setInlineStatus("Success!");
        e.target.reset();
        setTimeout(() => setInlineStatus(""), 4000); // Clear message after 4s
      } else {
        setInlineStatus("Error. Try again.");
      }
    } catch (error) {
      setInlineStatus("Error connecting.");
    }
  };

  // Form Submit Handler for the Modal
  const handleModalSubmit = async (e) => {
    e.preventDefault();
    setModalStatus("Sending...");
    
    const formData = new FormData(e.target);
    formData.append("access_key", "242d73d3-759b-4548-9450-5c1de3e34dbd"); 

    // Convert FormData to JSON (Fixes the 400 Bad Request error)
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const data = await response.json();

      if (data.success) {
        setModalStatus("");
        alert("Appointment Request Submitted Successfully!");
        setIsModalOpen(false);
        e.target.reset();
      } else {
        setModalStatus("Error submitting form.");
      }
    } catch (error) {
      setModalStatus("Connection error.");
    }
  };

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
    <>
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
              Best <span className="text-[#2AACDE]">Dental Hospital</span> &
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

            {/* Call to Actions - Trigger Modal on Click */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full lg:w-auto"
            >
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-[#2AACDE] hover:bg-[#0548AF] text-white w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium transition-colors shadow-sm"
              >
                Book Your Consultation
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side: Image with Subtle Background Blobs */}
          <div className="relative flex-1 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Animated Background Blobs */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#2AACDE] rounded-full opacity-[0.05] blur-3xl z-0"
            />
            <motion.div
              animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-32 h-32 bg-teal-400 rounded-full opacity-[0.08] blur-2xl z-0"
            />

            {/* Main Image */}
            <motion.img
              initial="hidden"
              animate="visible"
              variants={imageReveal}
              src="/homepage/hero2.png"
              alt="Dr. Sunny Sikarwar - Best Dentist in Raipur"
              className="relative z-10 w-full max-w-md lg:max-w-[500px] object-cover rounded-2xl "
            />
          </div>
        </div>

        {/* Quick Appointment Form Bar (Converted to a <form>) */}
        <motion.form
          onSubmit={handleInlineSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 max-w-6xl mx-auto mt-16 bg-white p-5 md:p-6 rounded-2xl shadow-md border border-slate-200 flex flex-col lg:flex-row gap-5 items-stretch lg:items-center"
        >
          <div className="w-full flex flex-col lg:flex-row gap-5">
            {/* Name Field */}
            <div className="flex-1 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-4 group">
              <label className="text-xs font-medium text-slate-500 tracking-wide mb-1.5 block group-focus-within:text-[#2AACDE] transition-colors">
                Your Name
              </label>
              <div className="flex items-center gap-3 text-slate-700">
                <User size={18} className="text-slate-400 group-focus-within:text-[#2AACDE] transition-colors" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full outline-none text-sm font-medium focus:ring-0 py-1 transition-all bg-transparent placeholder:text-slate-300"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="flex-1 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-4 group">
              <label className="text-xs font-medium text-slate-500 tracking-wide mb-1.5 block group-focus-within:text-[#2AACDE] transition-colors">
                Phone Number
              </label>
              <div className="flex items-center gap-3 text-slate-700">
                <Phone size={18} className="text-slate-400 group-focus-within:text-[#2AACDE] transition-colors" />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 00000 00000"
                  className="w-full outline-none text-sm font-medium focus:ring-0 py-1 transition-all bg-transparent placeholder:text-slate-300"
                />
              </div>
            </div>

            {/* Date Field */}
            <div className="flex-1 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-4 group">
              <label className="text-xs font-medium text-slate-500 tracking-wide mb-1.5 block group-focus-within:text-[#2AACDE] transition-colors">
                Preferred Date
              </label>
              <div className="flex items-center gap-3 text-slate-700">
                <Calendar size={18} className="text-slate-400 group-focus-within:text-[#2AACDE] shrink-0 transition-colors" />
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full outline-none text-sm font-medium focus:ring-0 py-1 transition-all bg-transparent text-slate-700 cursor-pointer"
                />
              </div>
            </div>

            {/* Time Field */}
            <div className="flex-1 pb-4 lg:pb-0 lg:pr-4 group">
              <label className="text-xs font-medium text-slate-500 tracking-wide mb-1.5 block group-focus-within:text-[#2AACDE] transition-colors">
                Preferred Time
              </label>
              <div className="flex items-center gap-3 text-slate-700">
                <Clock size={18} className="text-slate-400 group-focus-within:text-[#2AACDE] shrink-0 transition-colors" />
                <input
                  type="time"
                  name="time"
                  required
                  className="w-full outline-none text-sm font-medium focus:ring-0 py-1 transition-all bg-transparent text-slate-700 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Submit Button & Status */}
          <div className="flex flex-col items-center gap-2 w-full lg:w-auto shrink-0">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full lg:w-auto bg-[#2AACDE] hover:bg-[#0548AF] text-white px-8 py-3.5 rounded-lg text-sm font-medium shadow-sm transition-colors whitespace-nowrap"
            >
              {inlineStatus || "Request Appointment"}
            </motion.button>
          </div>
        </motion.form>
      </section>

      {/* Appointment Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          {/* Modal Container */}
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl relative animate-in fade-in zoom-in duration-200 flex flex-col">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Book an Appointment</h3>
                <p className="text-slate-500 text-sm mt-1">We'll get back to you shortly.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleModalSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AACDE]/30 focus:border-[#2AACDE] transition-all text-sm text-slate-900 placeholder:text-slate-400" 
                  placeholder="John Doe" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AACDE]/30 focus:border-[#2AACDE] transition-all text-sm text-slate-900 placeholder:text-slate-400" 
                  placeholder="+91 98765 43210" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Select Service</label>
                <select name="service" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AACDE]/30 focus:border-[#2AACDE] transition-all text-sm text-slate-900 bg-white">
                  <option value="">General Consultation</option>
                  <option value="implants">Dental Implants</option>
                  <option value="root-canal">Root Canal Treatment</option>
                  <option value="braces">Braces & Aligners</option>
                  <option value="surgery">Oral Surgery</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Date</label>
                <input 
                  type="date" 
                  name="date"
                  required 
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AACDE]/30 focus:border-[#2AACDE] transition-all text-sm text-slate-900" 
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={modalStatus === "Sending..."}
                  className="w-full bg-[#2AACDE] hover:bg-[#0548AF] text-white font-semibold py-3 rounded-lg transition-all shadow-sm disabled:bg-[#2AACDE] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {modalStatus || "Confirm Booking"}
                </button>
              </div>
            </form>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;