"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Play, X } from "lucide-react";

const VideoGallery = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null); // Track the video opened in modal

  const categories = ["All", "Clinic Tour", "Patient Smiles", "Equipment"];

  // Video paths
  const galleryItems = [
    { id: 1, category: "Clinic Tour", src: "/homepage/video1.mp4", alt: "Reception Area" },
    { id: 2, category: "Equipment", src: "/homepage/video2.mp4", alt: "Advanced Dental Chair" },
    { id: 3, category: "Patient Smiles", src: "/homepage/video3.mp4", alt: "Happy Patient" },
    { id: 4, category: "Clinic Tour", src: "/homepage/video4.mp4", alt: "Consultation Room" },
    { id: 5, category: "Equipment", src: "/homepage/video5.mp4", alt: "3D X-Ray Machine" },
    { id: 6, category: "Patient Smiles", src: "/homepage/video6.mp4", alt: "Successful Implant Patient" },
    { id: 7, category: "Clinic Tour", src: "/homepage/video7.mp4", alt: "Operating Room" },
    { id: 8, category: "Equipment", src: "/homepage/video8.mp4", alt: "Sterilization Area" },
    { id: 9, category: "Equipment", src: "/homepage/video9.mp4", alt: "Root canal treatment" },
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
          <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
            Video Gallery
            <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Take a Tour of <br className="hidden sm:block" />
            <span className="text-blue-600">Our Premium Clinic</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            Explore our state-of-the-art facilities, advanced dental equipment, and the happy smiles of our patients.
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

        {/* Video Grid */}
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
                onClick={() => setSelectedVideo(item)} // Open modal on click
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square md:aspect-[4/3] bg-slate-900 cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* Background Silent Video */}
                <video
                  src={item.src}
                  aria-label={item.alt}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-40"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  {/* Persistent Play Icon */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full text-white opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                     <Play size={16} fill="currentColor" />
                  </div>

                  {/* Expand / Details on Hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center h-full w-full">
                    <div className="bg-blue-600/90 shadow-lg backdrop-blur-sm p-4 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Play size={24} fill="currentColor" className="ml-1" />
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

      {/* Video Modal Pop-up */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)} // Close when clicking background
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the video itself
              className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500 text-white rounded-full transition-colors duration-200"
              >
                <X size={20} />
              </button>

              {/* Video Player with Controls */}
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Optional: Title under the video */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                <p className="text-white text-lg font-medium">{selectedVideo.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoGallery;