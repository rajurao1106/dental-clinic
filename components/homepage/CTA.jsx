"use client";

import React, { useState } from "react";
import { PhoneCall, ArrowRight, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";

// Reusable Tooth Icon for the marquee
const ToothIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10 21c-2 0-5-1.5-5-5V7c0-1.5 1-3 3-3h8c2 0 3 1.5 3 3v9c0 3.5-3 5-5 5-1 0-2-.5-3-1l-1-1v-2" />
    <path d="M12 18v-2l1-1c1 .5 2 1 3 1" />
  </svg>
);

const Booking = () => {
  const [result, setResult] = useState("");

  const marqueeItems = [
    "Dental Implants",
    "Teeth in 24 Hours",
    "Root Canal Treatment",
    "Oral & Maxillofacial Surgery",
    "Smile Designing",
    "Braces & Aligners",
  ];

  // Web3Forms Submit Handler
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    
    // REPLACE THIS with your actual Web3Forms Access Key
    formData.append("access_key", "242d73d3-759b-4548-9450-5c1de3e34dbd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("An error occurred. Please try again.");
    }
  };

  // Smoother Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Marquee Banner Component - Thinner and more elegant
  const MarqueeBanner = () => (
    <div className="bg-[#2AACDE] py-3 overflow-hidden flex whitespace-nowrap border-y border-[#0548AF]">
      <div className="flex animate-marquee items-center">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
          (item, index) => (
            <div key={index} className="flex items-center mx-4 md:mx-8">
              <span className="text-white font-medium text-sm md:text-base tracking-wide mr-4 md:mr-8">
                {item}
              </span>
              <ToothIcon className="w-4 h-4 md:w-5 md:h-5 text-white/70 opacity-70" />
            </div>
          ),
        )}
      </div>
    </div>
  );

  return (
    <section id="contact" className="bg-slate-50 flex flex-col relative">
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

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side: Booking Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6 md:space-y-8 bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-slate-200"
          >
            <motion.div variants={fadeUp} className="space-y-3 md:space-y-4">
              <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-[#2AACDE] uppercase flex items-center gap-2">
                <span className="w-6 sm:w-8 h-0.5 bg-[#2AACDE] rounded-full"></span>
                Book an Appointment
              </h3>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
                Request Your <span className="text-[#2AACDE]">Consultation</span>
              </h2>
            </motion.div>

            <motion.form
              onSubmit={onSubmit}
              variants={staggerContainer}
              className="space-y-5 md:space-y-6"
            >
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {/* Inputs */}
                <motion.div variants={fadeUp} className="space-y-1.5 text-left">
                  <label className="text-xs sm:text-sm font-medium text-slate-700">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ex. John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:bg-white focus:border-[#2AACDE] focus:ring-2 focus:ring-[#2AACDE]/30 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-1.5 text-left">
                  <label className="text-xs sm:text-sm font-medium text-slate-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 00000 00000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:bg-white focus:border-[#2AACDE] focus:ring-2 focus:ring-[#2AACDE]/30 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-1.5 text-left">
                  <label className="text-xs sm:text-sm font-medium text-slate-700">
                    Treatment Needed *
                  </label>
                  <select
                    name="treatment"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:bg-white focus:border-[#2AACDE] focus:ring-2 focus:ring-[#2AACDE]/30 transition-all cursor-pointer font-medium text-slate-800"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Treatment
                    </option>
                    <option value="general">General Checkup / Cleaning</option>
                    <option value="implants">Dental Implants</option>
                    <option value="24hours">Teeth in 24 Hours</option>
                    <option value="root-canal">Root Canal Treatment</option>
                    <option value="surgery">
                      Oral & Maxillofacial Surgery
                    </option>
                    <option value="braces">Braces & Clear Aligners</option>
                    <option value="cosmetic">Cosmetic / Smile Designing</option>
                  </select>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-1.5 text-left">
                  <label className="text-xs sm:text-sm font-medium text-slate-700">
                    Preferred Doctor *
                  </label>
                  <select
                    name="preferred_doctor"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:bg-white focus:border-[#2AACDE] focus:ring-2 focus:ring-[#2AACDE]/30 transition-all cursor-pointer font-medium text-slate-800"
                    required
                    defaultValue="dr-sunny"
                  >
                    <option value="dr-sunny">Dr. Sunny Sikarwar</option>
                    <option value="any">Any Available Doctor</option>
                  </select>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-1.5 text-left">
                  <label className="text-xs sm:text-sm font-medium text-slate-700">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 font-medium outline-none focus:bg-white focus:border-[#2AACDE] focus:ring-2 focus:ring-[#2AACDE]/30 transition-all cursor-pointer"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-1.5 text-left">
                  <label className="text-xs sm:text-sm font-medium text-slate-700">
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 font-medium outline-none focus:bg-white focus:border-[#2AACDE] focus:ring-2 focus:ring-[#2AACDE]/30 transition-all cursor-pointer"
                    required
                  />
                </motion.div>
              </div>

              {/* Textarea */}
              <motion.div variants={fadeUp} className="space-y-1.5 text-left">
                <label className="text-xs sm:text-sm font-medium text-slate-700">
                  Describe Your Dental Problem (Optional)
                </label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell us what you need help with..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:bg-white focus:border-[#2AACDE] focus:ring-2 focus:ring-[#2AACDE]/30 transition-all resize-none font-medium text-slate-900 placeholder:text-slate-400"
                ></textarea>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#2AACDE] hover:bg-[#0548AF] text-white px-8 sm:px-10 py-3.5 rounded-lg text-sm sm:text-base font-semibold shadow-sm transition-colors"
                >
                  Confirm Appointment
                  <ArrowRight size={18} />
                </motion.button>
                {/* Result Message Display */}
                {result && (
                  <span className="text-sm font-medium text-slate-700">
                    {result}
                  </span>
                )}
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Right Side: Info & Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6 md:space-y-8 pt-2 lg:pt-10"
          >
            <motion.div
              variants={slideInRight}
              className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center justify-center p-3 bg-[#2AACDE]/10 rounded-xl mb-1">
                <CalendarClock className="w-6 h-6 md:w-8 md:h-8 text-[#2AACDE]" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                Visit Us in Raipur
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-md font-normal">
                Taking the first step toward a confident smile is easy. Fill out
                the form, and our team at{" "}
                <strong className="font-semibold text-slate-800">
                  Sikarwar Dental Hospital
                </strong>{" "}
                will contact you promptly to confirm your visit.
              </p>
            </motion.div>

            {/* Clinic Hours Card */}
            <motion.div
              variants={slideInRight}
              whileHover={{ y: -4 }}
              className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden transition-transform duration-300"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 md:w-40 md:h-40 bg-[#2AACDE] rounded-full opacity-10 blur-3xl"></div>
              <h4 className="font-semibold text-lg md:text-xl mb-5 flex items-center gap-2 relative z-10">
                <span className="w-2 h-2 rounded-full bg-[#2AACDE] animate-pulse"></span>
                Clinic Timings
              </h4>
              <div className="space-y-4 text-xs sm:text-sm font-medium border-t border-slate-700 pt-5 relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <span className="text-slate-400">Monday - Saturday</span>
                  <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-md text-slate-200">
                    10:00 AM - 08:00 PM
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <span className="text-slate-400">Sunday</span>
                  <span className="bg-[#2AACDE]/10 text-[#2AACDE] border border-[#2AACDE]/20 px-3 py-1.5 rounded-md">
                    Prior Appointment Only
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Emergency Contact Card */}
            <motion.div
              variants={slideInRight}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-200 flex items-center gap-4 md:gap-6 group hover:border-[#2AACDE]/40 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#2AACDE]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#2AACDE] transition-colors duration-300">
                <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-[#2AACDE] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-semibold text-[#2AACDE] uppercase tracking-wider mb-1">
                  Direct Contact
                </p>
                <h4 className="text-lg font-bold text-slate-900 mb-0.5">
                  Need Urgent Care?
                </h4>
                <a
                  href="tel:+917400656692"
                  className="text-slate-600 font-medium text-base hover:text-[#2AACDE] transition-colors block"
                >
                  +91 74006 56692
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