"use client";

import React from "react";
import {
  ArrowRight,
  Sparkles,
  ShieldPlus,
  Clock,
  Activity,
  Smile,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";

// A simple custom SVG for the tooth icon used in the marquee
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

const Services = () => {
  const marqueeItems = [
    "Dental Implants",
    "Teeth in 72 Hours",
    "Root Canal Treatment",
    "Oral & Maxillofacial Surgery",
    "Smile Designing",
    "Braces & Aligners",
  ];

  const services = [
    {
      title: "Dental Implants",
      description:
        "Permanent replacement for missing teeth with advanced implant systems including conventional and basal implants.",
      image: "/homepage/service1.jpg",
      icon: ShieldPlus,
    },
    {
      title: "Teeth in 72 Hours",
      description:
        "Get fixed teeth in just 72 hours using modern implant-supported rehabilitation and advanced protocols.",
      image: "/homepage/service2.jpg",
      icon: Clock,
    },
    {
      title: "Root Canal Treatment",
      description:
        "Save infected teeth with painless root canal procedures using advanced endodontic technology.",
      image: "/homepage/service3.jpg",
      icon: Activity,
    },
    {
      title: "Braces & Clear Aligners",
      description:
        "Straighten teeth and correct your bite with modern, invisible orthodontic solutions.",
      image: "/homepage/service4.jpg",
      icon: Smile,
    },
    {
      title: "Wisdom Tooth Surgery",
      description:
        "Safe and comfortable surgical extraction of impacted wisdom teeth by our expert oral surgeon.",
      image: "/homepage/service5.jpg",
      icon: Stethoscope,
    },
    {
      title: "Smile Designing",
      description:
        "Improve aesthetics with custom veneers, whitening, and comprehensive cosmetic procedures.",
      image: "/homepage/service6.jpg",
      icon: Sparkles,
    },
  ];

  // Smoother Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
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

  // Reusable Marquee Banner Component - Made slightly thinner and more elegant
  const MarqueeBanner = () => (
    <div className="bg-blue-600 py-3 overflow-hidden flex whitespace-nowrap border-y border-blue-700">
      <div className="flex animate-marquee items-center">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
          (item, index) => (
            <div key={index} className="flex items-center mx-4 md:mx-8">
              <span className="text-blue-50 font-medium text-sm md:text-base tracking-wide mr-4 md:mr-8">
                {item}
              </span>
              <ToothIcon className="w-4 h-4 md:w-5 md:h-5 text-blue-300 opacity-70" />
            </div>
          ),
        )}
      </div>
    </div>
  );

  return (
    <section id="services" className="bg-slate-50 flex flex-col relative overflow-hidden">
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
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
              Our Dental Services
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              Advanced Treatments <br className="hidden sm:block" />
              <span className="text-blue-600">for Your Best Smile</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-lg font-medium shadow-sm transition-colors whitespace-nowrap w-full md:w-auto"
          >
            View All Services
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="relative">
                {/* Card Image area */}
                <div className="relative h-52 md:h-56 bg-slate-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent z-0"></div>
                </div>

                {/* Overlapping Icon Badge - Clean, squared-off corners without rotation */}
                <div className="absolute -bottom-6 left-6 w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-lg shadow-md flex items-center justify-center border-4 border-white z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <service.icon size={22} className="text-white" />
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-10 pb-6 px-6 md:pt-12 md:pb-8 md:px-8 flex-1 flex flex-col">
                <h4 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 md:mb-8 flex-1 font-normal">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors w-fit">
                  Learn more
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Marquee */}
      <MarqueeBanner />
    </section>
  );
};

export default Services;