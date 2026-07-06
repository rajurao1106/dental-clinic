"use client";

import React from 'react';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const benefits = [
    'Accurate diagnosis',
    'Pain-minimized treatment',
    'Personalized care',
    'Long-term dental solutions',
  ];

  // Smoother Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section id='about' className="py-12 md:py-20 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Image Composition */}
        <motion.div 
          className="relative flex-1 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:max-w-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Decorative Sparkles - Subtle animation */}
          <motion.div 
            className="absolute -top-5 -left-5 sm:-top-6 sm:-left-6 text-blue-500 z-0 opacity-80"
            animate={{ 
              scale: [1, 1.1, 1], 
              opacity: [0.5, 0.8, 0.5] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
          </motion.div>
          
          {/* Main Image Container - Changed to rounded-2xl */}
          <motion.div 
            variants={imageReveal}
            className="relative z-10 w-[85%] aspect-[4/5] ml-auto rounded-2xl overflow-hidden shadow-md border-4 border-white"
          >
            <img 
              src="/homepage/about1.jpg" 
              alt="Dr. Sunny Sikarwar and Team" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Overlapping Secondary Image - Changed to rounded-2xl */}
          <motion.div 
            variants={imageReveal}
            transition={{ delay: 0.2 }}
            className="absolute bottom-6 sm:bottom-12 left-0 z-20 w-3/5 aspect-square rounded-2xl overflow-hidden shadow-lg border-4 sm:border-[6px] border-white"
          >
            <img 
              src="/homepage/about2.jpg" 
              alt="Advanced dental care and patient treatment" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          className="flex-1 space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <motion.h3 variants={fadeUp} className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase flex items-center gap-2">
              <span className="w-6 sm:w-8 h-0.5 bg-blue-600 rounded-full"></span>
              About Us
            </motion.h3>
            
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              Welcome to <br />
              <span className="text-blue-600">Sikarwar Dental Hospital</span>
            </motion.h2>
            
            <motion.div variants={fadeUp} className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg pt-2 font-normal">
              <p>
                <strong className="font-semibold text-slate-800">Sikarwar Dental Hospital & Implant Center</strong> is one of Raipur’s trusted centers for advanced dental and maxillofacial care. Our mission is simple—restore oral health, improve confidence, and create healthy smiles for every patient.
              </p>
              <p>
                With years of expertise and modern treatment protocols, we provide complete dental care under one roof—from routine cleanings to complex implant surgeries.
              </p>
            </motion.div>
          </div>

          <motion.ul variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg">
            {benefits.map((text, idx) => (
              <motion.li 
                key={idx} 
                variants={fadeUp}
                whileHover={{ scale: 1.02, x: 2 }}
                className="flex items-center justify-start gap-3 bg-white p-3.5 rounded-lg border border-slate-200 transition-all hover:shadow-sm hover:border-blue-200 text-left"
              >
                <CheckCircle2 size={18} className="text-blue-600 fill-blue-50 shrink-0" />
                <span className="text-slate-700 font-medium text-sm">{text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* <motion.div variants={fadeUp} className="pt-2 w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm sm:text-base font-medium shadow-sm transition-colors"
            >
              Meet Dr. Sunny Sikarwar
              <ArrowRight size={18} />
            </motion.button>
          </motion.div> */}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;