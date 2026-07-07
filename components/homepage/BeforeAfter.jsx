"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
// ArrowRight ki jagah ArrowLeftRight use karenge for slider feel
import { ArrowLeftRight, Sparkles } from 'lucide-react'; 

// 1. Ek alag component banayenge taaki har card ka apna state ho
const BeforeAfterCard = ({ item, fadeUp }) => {
  // Slider position state (default 50% par split rahega)
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <motion.div
      variants={fadeUp}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col"
    >
      {/* Interactive Image Split View */}
      <div className="relative flex w-full aspect-[4/3] bg-slate-100 overflow-hidden">
        
        {/* After Image (Background mein poori tarah spread rahegi) */}
        <img 
          src={item.afterImg} 
          alt={`After ${item.title}`} 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        
        {/* Before Image (Foreground mein rahegi, slider ke hisaab se clip hogi) */}
        <img 
          src={item.beforeImg} 
          alt={`Before ${item.title}`} 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />

        {/* Labels (Before/After) */}
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm pointer-events-none z-10">
          Before
        </div>
        <div className="absolute top-3 right-3 bg-[#2AACDE]/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm pointer-events-none z-10">
          After
        </div>

        {/* Invisible Range Slider (Ye click aur drag dono handle karega) */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0"
        />

        {/* Visual Slider Divider & Center Icon */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none shadow-[0_0_5px_rgba(0,0,0,0.3)] transition-all duration-75"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-100">
            <ArrowLeftRight size={16} className="text-[#2AACDE]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BeforeAfter = () => {
  const transformations = [
    {
      id: 1,
      title: "Full Mouth Rehabilitation",
      description: "Restored complete functionality and aesthetics using basal implants and premium Zirconia crowns.",
      duration: "Teeth in 72 Hours",
      beforeImg: "/homepage/before1.jpeg", 
      afterImg: "/homepage/after1.jpeg",  
    },
    {
      id: 2,
      title: "Smile Designing (Veneers)",
      description: "Corrected spacing and discoloration with custom-crafted porcelain veneers for a natural look.",
      duration: "2 Sessions",
      beforeImg: "/homepage/before2.jpeg",
      afterImg: "/homepage/after2.jpeg",
    },
    {
      id: 3,
      title: "Orthodontic Aligners",
      description: "Straightened misaligned teeth comfortably using modern invisible clear aligners.",
      duration: "8 Months",
      beforeImg: "/homepage/before3.jpeg",
      afterImg: "/homepage/after3.jpeg",
    }
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  return (
    <section id="transformations" className=" py-16 md:py-24 px-4 md:px-8 overflow-hidden relative">
      
    

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-[#2AACDE] uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-0.5 bg-[#2AACDE] rounded-full"></span>
            Real Results
            <span className="w-8 h-0.5 bg-[#2AACDE] rounded-full"></span>
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Our Patient <br className="hidden sm:block" />
            <span className="text-[#2AACDE]">Smile Transformations</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            See the difference our expert care can make. Swipe through some of our successful dental treatments, from implants to complete smile makeovers.
          </p>
        </motion.div>

        {/* Transformations Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {transformations.map((item) => (
            // Yahan humne apne naye component ko call kiya hai
            <BeforeAfterCard key={item.id} item={item} fadeUp={fadeUp} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BeforeAfter;