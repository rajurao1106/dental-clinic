"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Cpu, ShieldCheck, Zap, Activity } from "lucide-react";

const AiTechnologySection = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-[#2AACDE]" />,
      title: "Unmatched Precision",
      description:
        "AI-driven algorithms map your dental anatomy with microscopic accuracy, eliminating human error for flawless treatment planning.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#2AACDE]" />,
      title: "Lightning-Fast Diagnostics",
      description:
        "Get comprehensive 3D scans and complete diagnostic reports in seconds, saving your valuable time.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#2AACDE]" />,
      title: "Enhanced Safety",
      description:
        "Ultra-low radiation imaging combined with smart robotic assistance ensures the safest possible environment for patients.",
    },
    {
      icon: <Activity className="w-6 h-6 text-[#2AACDE]" />,
      title: "Predictable Outcomes",
      description:
        "Visualize your final results before the treatment even begins with our advanced predictive AI modeling.",
    },
  ];

  return (
    <section
      id="ai-technology"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-[#2AACDE]/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[30rem] h-[30rem] bg-[#0548AF]/5 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0548AF]/10 border border-[#0548AF]/20"
              >
                <Bot className="w-4 h-4 text-[#0548AF]" />
                <span className="text-sm font-bold tracking-wide text-[#0548AF] uppercase">
                  Pioneering Dental Tech
                </span>
              </motion.div>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                One of the First Few <br />
                <span className="text-[#2AACDE]">
                  AI Robots in Central India
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Sikarwar Dental Hospital, Raipur brings the future of dentistry
                to Chhattisgarh. Our state-of-the-art robotic system utilizes
                artificial intelligence to provide ultra-precise, painless, and
                flawless dental treatments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2AACDE]/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square bg-slate-900 shadow-2xl border-4 border-white">
              {/* NOTE: Replace this src with your actual AI Robot / Clinic photo */}
              <img
                src="https://cdn.prod.website-files.com/68c909f91cfe24fc259b0c0d/6a058f406489bc124126c63f_SCANO%20AIR.png"
                alt="AI Robotic Technology at Sikarwar Dental Hospital Raipur"
                className="w-full h-full object-cover "
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-[#000000]/90 via-[#000000]/40 to-transparent"></div>

              {/* UI Overlay Elements to make it look "techy" */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* <div className="flex justify-end">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-[#2AACDE] animate-pulse"></div>
                    <span className="text-xs font-mono text-white tracking-widest">AI ACTIVE</span>
                  </div>
                </div> */}

                <div className="space-y-3">
                  <div className="w-12 h-1 bg-[#2AACDE] rounded-full"></div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Next-Generation <br /> Robotic Dentistry
                  </h3>
                  <p className="text-slate-200 text-sm max-w-sm">
                    Experience unmatched accuracy and faster recovery times with
                    our automated AI imaging and surgical assistance system.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            {/* <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 sm:-left-10 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0548AF] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">1st</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Exclusive in</p>
                  <p className="text-sm font-extrabold text-[#0548AF] leading-tight">Central India</p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiTechnologySection;
