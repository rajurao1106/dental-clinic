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
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ["All", "Clinic Tour", "Patient Smiles", "Equipment", "Dental Implant"];

  const galleryItems = [
    { id: 3, category: "Patient Smiles", src: "/homepage/video3.mp4", type: "video", alt: "Happy Patient Smile Transformation" },
    { id: 4, category: "Clinic Tour", src: "/homepage/video4.mp4", type: "video", alt: "Premium Consultation Suite" },
    { id: 6, category: "Patient Smiles", src: "/homepage/video6.mp4", type: "video", alt: "Successful Implant Patient Interview" },
    { id: 7, category: "Clinic Tour", src: "/homepage/video7.mp4", type: "video", alt: "State-of-the-Art Surgical Operating Room" },
    { id: 8, category: "Equipment", src: "/homepage/video8.mp4", type: "video", alt: "Advanced Class-B Sterilization Area" },
    { id: 9, category: "Equipment", src: "/homepage/video9.mp4", type: "video", alt: "Microscopic Root Canal Treatment Technology" },
    { id: 10, category: "Dental Implant", src: implant1.src, type: "image", alt: "Dental Implant Procedure Overview" },
    { id: 11, category: "Dental Implant", src: implant2.src, type: "image", alt: "Advanced Dental Implant Technology" },
    { id: 12, category: "Dental Implant", src: implant3.src, type: "image", alt: "Premium Dental Implant Structure" },
    { id: 13, category: "Dental Implant", src: implant4.src, type: "image", alt: "Dental Implant Success Rate" },
    { id: 14, category: "Dental Implant", src: implant5.src, type: "image", alt: "Dental Implant Consultation" },
    { id: 15, category: "Dental Implant", src: implant6.src, type: "image", alt: "Before & After Dental Implant" },
    { id: 16, category: "Dental Implant", src: implant7.src, type: "image", alt: "Our Dental Implant Specialist" },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeTab === "All" || item.category === activeTab
  );

  return (
    <section id="gallery" className="bg-slate-50/50 py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-sky-600 bg-sky-50 uppercase">
            Media Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            Take a Tour of <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">Our Premium Clinic</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
            Explore our state-of-the-art facilities, advanced surgical equipment, medical implants, and the transformations of our patients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex flex-wrap sm:flex-nowrap p-1.5 bg-white border border-slate-200/80 rounded-2xl shadow-sm gap-1 max-w-full overflow-x-auto scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === category
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        {/* Removed motion.div and layout prop from the container to stop grid-recalculation glitches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                // Removed the layout prop here
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedItem(item)}
                className="group relative overflow-hidden aspect-[16/10] bg-slate-100 cursor-pointer border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Media Element */}
                <div className="w-full h-full relative overflow-hidden bg-slate-950">
                  {item.type === "video" ? (
                    <div className="w-full h-full relative">
                      <video 
                        src={item.src}
                        aria-label={item.alt}
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                      />
                      <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/30 transition-colors duration-300" />
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-100"
                    />
                  )}
                </div>

                {/* Micro-badge Tag for Media Type */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-slate-200/30 text-slate-800 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
                  {item.type === "video" ? <Play size={12} fill="currentColor" /> : <Maximize2 size={12} />}
                </div>

                {/* Caption system */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-5 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
                    {item.category}
                  </span>
                  <p className="text-white text-sm font-medium line-clamp-1">
                    {item.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Pop-up Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 sm:p-6"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-slate-900/80 hover:bg-rose-600/90 backdrop-blur-md text-slate-200 hover:text-white rounded-xl transition-all shadow-md border border-slate-700/50"
              >
                <X size={18} />
              </button>

              {/* Dynamic Content Frame */}
              <div className="w-full relative bg-slate-950 flex items-center justify-center max-h-[75vh]">
                {selectedItem.type === "video" ? (
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[75vh] object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                  />
                )}
              </div>
              
              {/* Informative Modal Base Strip */}
              <div className="bg-slate-900 border-t border-slate-800 p-5 sm:p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-500 block mb-1">
                  {selectedItem.category}
                </span>
                <p className="text-slate-200 text-base sm:text-lg font-medium">{selectedItem.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoGallery;