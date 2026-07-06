// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Sparkles, Clock } from 'lucide-react';

// const Transformations = () => {
//   const transformations = [
//     {
//       id: 1,
//       title: "Full Mouth Rehabilitation",
//       description: "Restored complete functionality and aesthetics using basal implants and premium Zirconia crowns.",
//       duration: "Teeth in 72 Hours",
//       image: "/homepage/dental-implant1.jpeg", 
//     },
//     {
//       id: 2,
//       title: "Smile Designing (Veneers)",
//       description: "Corrected spacing and discoloration with custom-crafted porcelain veneers for a natural look.",
//       duration: "2 Sessions",
//       image: "/homepage/dental-implant2.jpeg",
//     },
//     {
//       id: 3,
//       title: "Orthodontic Aligners",
//       description: "Straightened misaligned teeth comfortably using modern invisible clear aligners.",
//       duration: "8 Months",
//       image: "/homepage/dental-implant3.jpeg",
//     },
//      {
//       id: 4,
//       title: "Orthodontic Aligners",
//       description: "Straightened misaligned teeth comfortably using modern invisible clear aligners.",
//       duration: "8 Months",
//       image: "/homepage/dental-implant4.jpeg",
//     },
//      {
//       id: 5,
//       title: "Orthodontic Aligners",
//       description: "Straightened misaligned teeth comfortably using modern invisible clear aligners.",
//       duration: "8 Months",
//       image: "/homepage/dental-implant5.jpeg",
//     },
//      {
//       id: 6,
//       title: "Orthodontic Aligners",
//       description: "Straightened misaligned teeth comfortably using modern invisible clear aligners.",
//       duration: "8 Months",
//       image: "/homepage/dental-implant6.jpeg",
//     },
//      {
//       id: 7,
//       title: "Orthodontic Aligners",
//       description: "Straightened misaligned teeth comfortably using modern invisible clear aligners.",
//       duration: "8 Months",
//       image: "/homepage/dental-implant7.jpeg",
//     },
//      {
//       id: 8,
//       title: "Orthodontic Aligners",
//       description: "Straightened misaligned teeth comfortably using modern invisible clear aligners.",
//       duration: "8 Months",
//       image: "/homepage/dental-implant8.jpeg",
//     },
//      {
//       id: 9,
//       title: "Orthodontic Aligners",
//       description: "Straightened misaligned teeth comfortably using modern invisible clear aligners.",
//       duration: "8 Months",
//       image: "/homepage/dental-implant9.jpeg",
//     },
//   ];

//   // Smoother Animation Variants
//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.1 }
//     }
//   };

//   return (
//     <section id="transformations" className="bg-slate-50 py-16 md:py-24 px-4 md:px-8 overflow-hidden relative">
      
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
//         <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-3xl" />
//         <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-teal-50/50 rounded-full blur-3xl" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Header Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={fadeUp}
//           className="text-center mb-12 md:mb-16 space-y-4"
//         >
//           <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase flex items-center justify-center gap-2">
//             <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
//             Real Results
//             <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
//           </h3>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
//             Our Patient <br className="hidden sm:block" />
//             <span className="text-blue-600">Smile Transformations</span>
//           </h2>
//           <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-normal">
//             See the difference our expert care can make. Swipe through some of our successful dental treatments, from implants to complete smile makeovers.
//           </p>
//         </motion.div>

//         {/* Transformations Grid */}
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {transformations.map((item) => (
//             <motion.div
//               key={item.id}
//               variants={fadeUp}
//               className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col"
//             >
//               {/* Single Image View */}
//               <div className="relative flex w-full aspect-[4/3] bg-slate-100 overflow-hidden">
//                 <img 
//                   src={item.image} 
//                   alt={item.title} 
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                 />
//               </div>

//               {/* Content Area */}
//               <div className="p-6 flex flex-col flex-1">
//                 <div className="flex items-start justify-between gap-2 mb-3">
//                   <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
//                     {item.title}
//                   </h4>
//                   <div className="bg-blue-50 text-blue-600 p-1.5 rounded-lg flex-shrink-0">
//                     <Sparkles size={16} />
//                   </div>
//                 </div>
                
//                 <p className="text-slate-600 text-sm font-normal leading-relaxed mb-6 flex-1">
//                   {item.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Transformations;



"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';

const BeforeAfter = () => {
  const transformations = [
    {
      id: 1,
      title: "Full Mouth Rehabilitation",
      description: "Restored complete functionality and aesthetics using basal implants and premium Zirconia crowns.",
      duration: "Teeth in 72 Hours",
      beforeImg: "/homepage/before-1.jpg", // Replace with your actual image path
      afterImg: "/homepage/after-1.jpg",   // Replace with your actual image path
    },
    {
      id: 2,
      title: "Smile Designing (Veneers)",
      description: "Corrected spacing and discoloration with custom-crafted porcelain veneers for a natural look.",
      duration: "2 Sessions",
      beforeImg: "/homepage/before-2.jpg",
      afterImg: "/homepage/after-2.jpg",
    },
    {
      id: 3,
      title: "Orthodontic Aligners",
      description: "Straightened misaligned teeth comfortably using modern invisible clear aligners.",
      duration: "8 Months",
      beforeImg: "/homepage/before-3.jpg",
      afterImg: "/homepage/after-3.jpg",
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
    <section id="transformations" className="bg-slate-50 py-16 md:py-24 px-4 md:px-8 overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-teal-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
            Real Results
            <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Our Patient <br className="hidden sm:block" />
            <span className="text-blue-600">Smile Transformations</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            See the difference our expert care can make. Swipe through some of our successful dental treatments, from implants to complete smile makeovers.
          </p>
        </motion.div>

        {/* Transformations Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {transformations.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            >
              {/* Image Split View */}
              <div className="relative flex w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                
                {/* Before Image (Left Half) */}
                <div className="w-1/2 relative border-r-2 border-white overflow-hidden">
                  <img 
                    src={item.beforeImg} 
                    alt={`Before ${item.title}`} 
                    className="absolute inset-0 w-[200%] max-w-none h-full object-cover origin-left group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                    Before
                  </div>
                </div>

                {/* After Image (Right Half) */}
                <div className="w-1/2 relative overflow-hidden">
                  {/* Notice the right image uses -translate-x-1/2 so the center of the image aligns with the split */}
                  <img 
                    src={item.afterImg} 
                    alt={`After ${item.title}`} 
                    className="absolute inset-0 w-[200%] max-w-none h-full object-cover -translate-x-1/2 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                    After
                  </div>
                </div>

                {/* Center Badge (Arrow) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 border border-slate-100">
                  <ArrowRight size={16} className="text-blue-600" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <div className="bg-blue-50 text-blue-600 p-1.5 rounded-lg flex-shrink-0">
                    <Sparkles size={16} />
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm font-normal leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

              
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default BeforeAfter;