"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Play, X } from "lucide-react";
import implant1 from "@/public/homepage/dentalimplant1.jpeg";
import implant2 from "@/public/homepage/dentalimplant2.jpeg";
import implant3 from "@/public/homepage/dentalimplant3.jpeg";
import implant4 from "@/public/homepage/dentalimplant4.jpeg";
import implant5 from "@/public/homepage/dentalimplant5.jpeg";
import implant6 from "@/public/homepage/dentalimplant6.jpeg";
import implant7 from "@/public/homepage/dentalimplant7.jpeg";

const VideoGallery = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null); // Tracks video or image opened in modal

  // Added "Dental Implant" category
  const categories = ["All", "Clinic Tour", "Patient Smiles", "Equipment", "Dental Implant"];

  // Gallery items containing both videos and images
  const galleryItems = [
    { id: 1, category: "Clinic Tour", src: "/homepage/video1.mp4", type: "video", alt: "Reception Area" },
    { id: 2, category: "Equipment", src: "/homepage/video2.mp4", type: "video", alt: "Advanced Dental Chair" },
    { id: 3, category: "Patient Smiles", src: "/homepage/video3.mp4", type: "video", alt: "Happy Patient" },
    { id: 4, category: "Clinic Tour", src: "/homepage/video4.mp4", type: "video", alt: "Consultation Room" },
    { id: 5, category: "Equipment", src: "/homepage/video5.mp4", type: "video", alt: "3D X-Ray Machine" },
    { id: 6, category: "Patient Smiles", src: "/homepage/video6.mp4", type: "video", alt: "Successful Implant Patient" },
    { id: 7, category: "Clinic Tour", src: "/homepage/video7.mp4", type: "video", alt: "Operating Room" },
    { id: 8, category: "Equipment", src: "/homepage/video8.mp4", type: "video", alt: "Sterilization Area" },
    { id: 9, category: "Equipment", src: "/homepage/video9.mp4", type: "video", alt: "Root canal treatment" },
    
    // Dental Implant Images
    { id: 10, category: "Dental Implant", src: implant1.src, type: "image", alt: "Dental Implant Procedure Overview" },
    { id: 11, category: "Dental Implant", src: implant2.src, type: "image", alt: "Advanced Dental Implant Technology" },
    { id: 12, category: "Dental Implant", src: implant3.src, type: "image", alt: "Premium Dental Implant Structure" },
    { id: 13, category: "Dental Implant", src: implant4.src, type: "image", alt: "Dental Implant Success Rate" },
    { id: 14, category: "Dental Implant", src: implant5.src, type: "image", alt: "Dental Implant Consultation" },
    { id: 15, category: "Dental Implant", src: implant6.src, type: "image", alt: "Before & After Dental Implant" },
    { id: 16, category: "Dental Implant", src: implant7.src, type: "image", alt: "Our Dental Implant Specialist" },
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
    <section id="gallery" className="bg-white py-16 md:py-24 px-4 md:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-10 md:mb-14 space-y-4"
        >
          <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-[#2AACDE] uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-0.5 bg-[#2AACDE] rounded-full"></span>
            Media Gallery
            <span className="w-8 h-0.5 bg-[#2AACDE] rounded-full"></span>
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Take a Tour of <br className="hidden sm:block" />
            <span className="text-[#2AACDE]">Our Premium Clinic</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            Explore our state-of-the-art facilities, advanced dental equipment, dental implants, and the happy smiles of our patients.
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
                  ? "bg-[#2AACDE] text-white shadow-md"
                  : "bg-slate-50 text-slate-600 border border-slate-200 hover:border-[#2AACDE]/40 hover:bg-[#2AACDE]/10 hover:text-[#0548AF]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Video & Image Grid */}
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
                onClick={() => setSelectedItem(item)} // Open modal on click
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square md:aspect-[4/3] bg-slate-900 cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* Conditional Rendering for Video or Image */}
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    aria-label={item.alt}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-40"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-40"
                  />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  {/* Persistent Icon (Play for Video, Maximize for Image) */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full text-white opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                    {item.type === "video" ? <Play size={16} fill="currentColor" /> : <Maximize2 size={16} />}
                  </div>

                  {/* Expand / Details on Hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center h-full w-full">
                    <div className="bg-[#2AACDE]/90 shadow-lg backdrop-blur-sm p-4 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.type === "video" ? (
                        <Play size={24} fill="currentColor" className="ml-1" />
                      ) : (
                        <Maximize2 size={24} />
                      )}
                    </div>
                    <p className="text-white font-medium text-center mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Pop-up Modal for Video / Image */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)} // Close when clicking background
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the content itself
              className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500 text-white rounded-full transition-colors duration-200"
              >
                <X size={20} />
              </button>

              {/* Conditional Media Player in Modal */}
              {selectedItem.type === "video" ? (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[80vh] object-contain bg-black"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="w-full h-auto max-h-[80vh] object-contain bg-black mx-auto"
                />
              )}
              
              {/* Title under the media */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                <p className="text-white text-lg font-medium">{selectedItem.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoGallery;