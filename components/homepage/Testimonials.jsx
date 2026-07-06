"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5.0,
      title: "Painless & Professional",
      text: "I had a dental implant procedure, and the experience was fantastic. The staff was incredibly professional, and the clinic's strict hygiene protocols made me feel completely safe. Highly recommended!",
      author: "Rajesh Kumar",
      role: "Implant Patient",
      avatar: "/homepage/avatar-1.jpg" // Replace with your image path
    },
    {
      id: 2,
      rating: 5.0,
      title: "Best Dental Care in Raipur",
      text: "Dr. Sikarwar and his team are amazing! I was always afraid of root canals, but they made it completely painless. The advanced technology they use is truly impressive. I couldn't be happier with my smile.",
      author: "Sneha Sharma",
      role: "Root Canal Patient",
      avatar: "/homepage/avatar-2.jpg" // Replace with your image path
    }
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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  return (
    <section className="bg-slate-900 py-16 md:py-24 px-4 md:px-8 flex flex-col items-center relative overflow-hidden">
      
      {/* Subtle Ambient Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.03, 0.06, 0.03] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-blue-500 rounded-full blur-[120px] z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.02, 0.05, 0.02] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-teal-400 rounded-full blur-[120px] z-0 pointer-events-none"
      />

      {/* Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-12 md:mb-16 space-y-4 z-10 px-4"
      >
        <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-blue-400 uppercase flex items-center justify-center gap-2">
          <span className="w-8 h-0.5 bg-blue-400 rounded-full"></span>
          Patient Testimonials
          <span className="w-8 h-0.5 bg-blue-400 rounded-full"></span>
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          What Our <span className="text-blue-400">Patients</span> Say
        </h2>
        <p className='text-white'>We take immense pride in the care we provide. Here's what some of our patients and their families have to say about their experiences:</p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full z-10"
      >
        {testimonials.map((t) => (
          <motion.div 
            key={t.id} 
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col shadow-lg transition-transform duration-300"
          >
            {/* Elegant Professional Quote Icon */}
            <Quote 
              className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 text-blue-50 fill-blue-50 z-0 pointer-events-none" 
            />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <span className="font-semibold text-slate-800 text-sm md:text-base ml-1">
                  {t.rating.toFixed(1)}
                </span>
              </div>

              <h4 className="text-lg font-semibold text-slate-900 mb-2 md:mb-3">{t.title}</h4>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 flex-1 font-normal">
                "{t.text}"
              </p>

              {/* Author Profile */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image path is broken
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.author)}&background=0D8ABC&color=fff`;
                    }}
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 text-sm md:text-base">{t.author}</h5>
                  <p className="text-xs md:text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
              
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Sleek Carousel Pagination Indicators */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center gap-2 mt-12 md:mt-16 z-10"
      >
        {[true, false, false].map((isActive, idx) => (
          <div 
            key={idx}
            className={`h-2 rounded-full transition-all duration-300 ${
              isActive ? 'w-8 bg-blue-500' : 'w-2 bg-slate-600 hover:bg-slate-500 cursor-pointer'
            }`}
          />
        ))}
      </motion.div>
      
    </section>
  );
};

export default Testimonials;