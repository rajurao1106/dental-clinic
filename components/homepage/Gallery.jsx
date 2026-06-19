"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Clinic Tour", "Patient Smiles", "Equipment"];

  // Placeholder images - Replace paths with your actual image paths
  const galleryItems = [
    { id: 1, category: "Clinic Tour", src: "/homepage/gallery-1.jpg", alt: "Reception Area" },
    { id: 2, category: "Equipment", src: "/homepage/gallery-2.jpg", alt: "Advanced Dental Chair" },
    { id: 3, category: "Patient Smiles", src: "/homepage/gallery-3.jpg", alt: "Happy Patient" },
    { id: 4, category: "Clinic Tour", src: "/homepage/gallery-4.jpg", alt: "Consultation Room" },
    { id: 5, category: "Equipment", src: "/homepage/gallery-5.jpg", alt: "3D X-Ray Machine" },
    { id: 6, category: "Patient Smiles", src: "/homepage/gallery-6.jpg", alt: "Successful Implant Patient" },
    { id: 7, category: "Clinic Tour", src: "/homepage/gallery-7.jpg", alt: "Operating Room" },
    { id: 8, category: "Equipment", src: "/homepage/gallery-8.jpg", alt: "Sterilization Area" },
  ];

  // Filter items based on active tab
  const filteredItems = galleryItems.filter(
    (item) => activeTab === "All" || item.category === activeTab
  );

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="gallery" className="bg-white py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-10 md:mb-14 space-y-4"
        >
          <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
            Our Gallery
            <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Take a Tour of <br className="hidden sm:block" />
            <span className="text-blue-600">Our Premium Clinic</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            Explore our state-of-the-art facilities, advanced dental equipment, and the happy smiles of our patients. We maintain the highest standards of hygiene and care.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-10 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-50 text-slate-600 border border-slate-200 hover:border-blue-200 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square md:aspect-[4/3] bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 size={24} />
                  </div>
                  <p className="text-white font-medium mt-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Gallery;