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

  const popIn = {
    hidden: { opacity: 0, scale: 0.5, rotate: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15, delay: 0.4 } 
    }
  };

  return (
    <section className="py-20 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Image Composition */}
        <motion.div 
          className="relative flex-1 w-full max-w-lg lg:max-w-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Decorative Sparkles */}
          <motion.div 
            className="absolute -top-8 -left-8 text-blue-600 z-0"
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
            <Sparkles size={64} fill="currentColor" />
          </motion.div>
          
          {/* Main Image Container */}
          <motion.div 
            variants={imageReveal}
            className="relative z-10 w-[85%] aspect-[4/5] ml-auto rounded-[3rem] overflow-hidden shadow-xl border-4 border-white"
          >
            <img 
              src="/dentist-main.jpg" 
              alt="Dr. Sunny Sikarwar and Team" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Overlapping Secondary Image */}
          <motion.div 
            variants={imageReveal}
            transition={{ delay: 0.2 }}
            className="absolute bottom-12 left-0 z-20 w-3/5 aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
          >
            <img 
              src="/patient-care.jpg" 
              alt="Advanced dental care and patient treatment" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Circular Contact Badge */}
          <motion.div 
            variants={popIn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -bottom-6 right-12 z-30 w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center shadow-lg border-4 border-white cursor-pointer"
          >
            {/* Inner Blue Circle */}
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center absolute z-10 shadow-inner">
              <Navigation size={20} className="text-white fill-white rotate-45" />
            </div>
            {/* Circular Text */}
            <div className="text-white text-[10px] font-bold tracking-widest uppercase text-center leading-tight">
              Get in Touch<br/><br/><br/><br/>With Us
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          className="flex-1 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="space-y-4">
            <motion.h3 variants={fadeUp} className="text-sm font-extrabold tracking-[0.2em] text-blue-600 uppercase flex items-center gap-2">
              <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
              About Us
            </motion.h3>
            
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Welcome to <br />
              <span className="text-blue-600">Sikarwar Dental Hospital</span>
            </motion.h2>
            
            <motion.div variants={fadeUp} className="space-y-4 text-slate-600 text-lg leading-relaxed max-w-lg pt-2">
              <p>
                <strong>Sikarwar Dental Hospital & Implant Center</strong> is one of Raipur’s trusted centers for advanced dental and maxillofacial care. Our mission is simple—restore oral health, improve confidence, and create healthy smiles for every patient.
              </p>
              <p>
                With years of expertise and modern treatment protocols, we provide complete dental care under one roof—from routine cleanings to complex implant surgeries.
              </p>
            </motion.div>
          </div>

          <motion.ul variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
            {benefits.map((text, idx) => (
              <motion.li 
                key={idx} 
                variants={fadeUp}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100 transition-colors hover:bg-white hover:shadow-sm hover:border-blue-100"
              >
                <CheckCircle2 size={22} className="text-blue-600 fill-blue-100 shrink-0" />
                <span className="text-slate-700 font-semibold text-sm">{text}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-md shadow-blue-600/20"
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