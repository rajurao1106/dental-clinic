"use client"

import React from 'react';
import { CheckCircle2, Sparkles, Navigation, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const benefits = [
    'Accurate diagnosis',
    'Pain-minimized treatment',
    'Personalized care',
    'Long-term dental solutions',
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
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.9 },
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
          {/* Decorative Sparkles */}
          <motion.div 
            className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 text-blue-600 z-0"
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.6, 1, 0.6] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Sparkles size={56} className="sm:w-16 sm:h-16" fill="currentColor" />
          </motion.div>
          
          {/* Main Image Container */}
          <motion.div 
            variants={imageReveal}
            className="relative z-10 w-[85%] aspect-[4/5] ml-auto rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-xl border-4 border-white"
          >
            <img 
              src="/homepage/about1.jpg" 
              alt="Dr. Sunny Sikarwar and Team" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Overlapping Secondary Image */}
          <motion.div 
            variants={imageReveal}
            transition={{ delay: 0.2 }}
            className="absolute bottom-6 sm:bottom-12 left-0 z-20 w-3/5 aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white"
          >
            <img 
              src="/homepage/about2.jpg" 
              alt="Advanced dental care and patient treatment" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
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
            <motion.h3 variants={fadeUp} className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-blue-600 uppercase flex items-center gap-2">
              <span className="w-6 sm:w-8 h-0.5 bg-blue-600 rounded-full"></span>
              About Us
            </motion.h3>
            
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Welcome to <br />
              <span className="text-blue-600">Sikarwar Dental Hospital</span>
            </motion.h2>
            
            <motion.div variants={fadeUp} className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg pt-2">
              <p>
                <strong>Sikarwar Dental Hospital & Implant Center</strong> is one of Raipur’s trusted centers for advanced dental and maxillofacial care. Our mission is simple—restore oral health, improve confidence, and create healthy smiles for every patient.
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
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center justify-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100 transition-colors hover:bg-white hover:shadow-sm hover:border-blue-100 text-left"
              >
                <CheckCircle2 size={20} className="text-blue-600 fill-blue-100 shrink-0" />
                <span className="text-slate-700 font-semibold text-sm">{text}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="pt-4 w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white w-full sm:w-auto px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold shadow-md shadow-blue-600/20"
            >
              Meet Dr. Sunny Sikarwar
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;