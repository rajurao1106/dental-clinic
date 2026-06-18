"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5.0,
      title: "Professional and Friendly!",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      author: "Leslie Alexander",
      role: "Satisfied Patient",
      avatar: "/avatar-1.jpg" // Replace with your image path
    },
    {
      id: 2,
      rating: 5.0,
      title: "Highly Recommended!",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      author: "Bessie Lane",
      role: "Satisfied Patient",
      avatar: "/avatar-2.jpg" // Replace with your image path
    }
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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  return (
    <section className="bg-[#0b1a33] py-24 px-8 flex flex-col items-center relative overflow-hidden">
      
      {/* Ambient Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600 rounded-full blur-[100px] z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500 rounded-full blur-[100px] z-0 pointer-events-none"
      />

      {/* Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-16 space-y-4 z-10"
      >
        <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
          Testimonials
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          What Our <span className="text-blue-500">Patients</span> Have to Say
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full z-10"
      >
        {testimonials.map((t) => (
          <motion.div 
            key={t.id} 
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-8 relative overflow-hidden flex flex-col shadow-xl cursor-grab active:cursor-grabbing"
          >
            {/* Background Quote Watermark */}
            <Quote 
              size={140} 
              className="absolute -right-6 -bottom-6 text-gray-50 opacity-60 rotate-12 fill-gray-50 transition-transform duration-500 hover:rotate-0 hover:scale-110" 
            />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.1), type: 'spring', stiffness: 200 }}
                    >
                      <Star size={20} fill="currentColor" strokeWidth={0} />
                    </motion.div>
                  ))}
                </div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="font-bold text-gray-900 text-sm ml-1"
                >
                  {t.rating.toFixed(1)}
                </motion.span>
              </div>

              <h4 className="text-lg font-bold text-gray-900 mb-4">{t.title}</h4>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                {t.text}
              </p>

              {/* Author Profile */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm flex-shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">{t.author}</h5>
                  <p className="text-xs text-gray-400 font-medium">{t.role}</p>
                </div>
              </div>
              
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Carousel Pagination Indicators */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center gap-2 mt-14 z-10"
      >
        {[true, false, false, false, false].map((isActive, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-1.5 rounded-full cursor-pointer transition-colors duration-300 ${
              isActive ? 'w-8 bg-blue-600' : 'w-8 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </motion.div>
      
    </section>
  );
};

export default Testimonials;