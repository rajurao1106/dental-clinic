"use client";

import React from 'react';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '99%', label: 'Success Rate' },
    { value: '10K+', label: 'Happy Smiles' },
  ];

  const benefits = [
    {
      title: 'Advanced Technology',
      description: 'Modern equipment for precise diagnosis and treatment.',
    },
    {
      title: 'Experienced Surgeon',
      description: 'Specialized care by an expert oral & maxillofacial surgeon.',
    },
    {
      title: 'Safe & Hygienic',
      description: 'Strict sterilization and infection control protocols.',
    },
    {
      title: 'Affordable Care',
      description: 'High-quality treatments at accessible pricing.',
    },
    {
      title: 'Patient Comfort',
      description: 'Gentle and compassionate care for every age group.',
    },
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
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section id='why-choose-us' className="py-16 md:py-24 px-4 md:px-8 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Side: Portrait Image Area */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="relative w-full max-w-[85%] sm:max-w-md mx-auto flex-1 mt-4 lg:mt-0"
          >
          
            
            {/* Outer Gray Frame - Softened corners */}
            <div className="relative z-10 p-2 sm:p-2.5 rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-200/40">
              {/* Inner Portrait Image Container */}
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-slate-100 group cursor-pointer">
                <img 
                  src="/homepage/whychooseus.png" 
                  alt="Happy patient at Sikarwar Dental Hospital" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Decorative Sparkles - Subtle animation */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1], 
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -bottom-4 -left-6 md:-bottom-6 md:-left-8 z-20 text-[#2AACDE] opacity-80"
            >
              {/* <Sparkles className="w-14 h-14 md:w-16 md:h-16 fill-[#2AACDE]/20 text-[#2AACDE]" /> */}
            </motion.div>
          </motion.div>

          {/* Right Side: Title, Description, Stats & Points */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex-1 w-full space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Title Section */}
            <motion.div variants={fadeUp} className="space-y-4 flex flex-col items-center lg:items-start">
              <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-[#2AACDE] uppercase flex items-center gap-2">
                <span className="w-6 sm:w-8 h-0.5 bg-[#2AACDE] rounded-full"></span>
                Why Choose Us
              </h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                Why Patients Trust <br className="hidden md:block" />
                <span className="text-[#2AACDE]">Sikarwar Dental Hospital</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg font-normal">
              We combine clinical expertise, modern technology, and a patient-first approach to deliver exceptional dental results in a safe and comfortable environment.
            </motion.p>

            {/* Stats Row - Cleaned up borders and weights */}
            <motion.div variants={staggerContainer} className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-0 py-6 border-y border-slate-200 w-full max-w-lg">
              {stats.map((stat, idx) => (
                <React.Fragment key={idx}>
                  <motion.div variants={fadeUp} className="text-center sm:text-left space-y-1">
                    <h4 className="text-3xl sm:text-4xl font-bold text-slate-900">{stat.value}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</p>
                  </motion.div>
                  {/* Vertical Divider */}
                  {idx < stats.length - 1 && (
                    <motion.div variants={fadeUp} className="w-px h-12 bg-slate-200 hidden sm:block"></motion.div>
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            {/* Structured Checklist (Points) */}
            <motion.ul variants={staggerContainer} className="space-y-5 w-full max-w-lg text-left">
              {benefits.map((benefit, idx) => (
                <motion.li key={idx} variants={fadeUp} className="flex items-start gap-4">
                  <div className="mt-0.5 bg-[#2AACDE]/10 p-1.5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#2AACDE] flex-shrink-0" />
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-semibold text-slate-900">{benefit.title}</h5>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.div variants={fadeUp} className="pt-2 w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-[#2AACDE] hover:bg-[#0548AF] text-white w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm sm:text-base font-semibold shadow-sm transition-colors"
              >
                Book an Appointment
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;