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
      isActive: true,
    },
    {
      title: "Teeth in 72 Hours",
      description:
        "Get fixed teeth in just 72 hours using modern implant-supported rehabilitation and advanced protocols.",
      image: "/homepage/service2.jpg",
      icon: Clock,
      isActive: false,
    },
    {
      title: "Root Canal Treatment",
      description:
        "Save infected teeth with painless root canal procedures using advanced endodontic technology.",
      image: "/homepage/service3.jpg",
      icon: Activity,
      isActive: false,
    },
    {
      title: "Braces & Clear Aligners",
      description:
        "Straighten teeth and correct your bite with modern, invisible orthodontic solutions.",
      image: "/homepage/service4.jpg",
      icon: Smile,
      isActive: false,
    },
    {
      title: "Wisdom Tooth Surgery",
      description:
        "Safe and comfortable surgical extraction of impacted wisdom teeth by our expert oral surgeon.",
      image: "/homepage/service5.jpg",
      icon: Stethoscope,
      isActive: false,
    },
    {
      title: "Smile Designing",
      description:
        "Improve aesthetics with custom veneers, whitening, and comprehensive cosmetic procedures.",
      image: "/homepage/service6.jpg",
      icon: Sparkles,
      isActive: false,
    },
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
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

  // Reusable Marquee Banner Component
  const MarqueeBanner = () => (
    <div className="bg-blue-600 py-3.5 overflow-hidden flex whitespace-nowrap border-y border-blue-700 shadow-inner">
      <div className="flex animate-marquee items-center">
        {/* Repeating items to create a seamless loop */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
          (item, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-blue-50 font-semibold text-lg tracking-wide mr-8">
                {item}
              </span>
              <ToothIcon className="w-5 h-5 text-blue-200 opacity-80" />
            </div>
          ),
        )}
      </div>
    </div>
  );

  return (
    <section id="services" className="bg-slate-50 flex flex-col relative">
      {/* Inline styles for the marquee animation */}
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
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold tracking-[0.2em] text-blue-600 uppercase flex items-center gap-2">
              <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
              Our Dental Services
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Advanced Treatments <br />
              <span className="text-blue-600">for Your Best Smile</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-semibold shadow-md whitespace-nowrap"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 flex flex-col cursor-pointer ${
                service.isActive ? "   ring-4 ring-blue-50" : ""
              }`}
            >
              {/* Added a relative wrapper so icon isn't clipped by image's overflow-hidden */}
              <div className="relative">
                {/* Card Image area */}
                <div className="relative h-60 bg-slate-200 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-0"></div>
                </div>

                {/* Overlapping Icon Badge (Now outside the overflow-hidden container) */}
                <div className="absolute -bottom-8 left-6 w-16 h-16 bg-blue-600 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center border-4 border-white shadow-lg z-10">
                  <service.icon size={26} className="text-white" />
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-14 pb-8 px-8 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>
                <div
                  className={`inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 w-fit ${
                    service.isActive
                      ? "text-blue-600"
                      : "text-slate-700 group-hover:text-blue-600"
                  }`}
                >
                  Learn more
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
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