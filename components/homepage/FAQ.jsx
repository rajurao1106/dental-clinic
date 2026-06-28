"use client";

import React, { useState } from "react";
import { Plus, Minus, MessageSquare, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(0); // Defaults to the first item

  // Replaced Lorem Ipsum with realistic Dental FAQ content
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide comprehensive dental care including dental implants, painless root canal treatments, smile designing, orthodontic aligners, oral surgery, and routine check-ups.",
    },
    {
      question: "Do I need to make an appointment?",
      answer:
        "While we do accommodate walk-ins when possible, we highly recommend booking an appointment to ensure you receive timely care without long waiting periods.",
    },
    {
      question: "What are your clinic timings?",
      answer:
        "Our standard OPD hours are from 10:00 AM to 8:00 PM, Monday through Saturday. However, our emergency dental services are available 24/7.",
    },
    {
      question: "Can I book an emergency dental appointment?",
      answer:
        "Yes. If you are experiencing severe toothache, trauma, or bleeding, please call our emergency hotline immediately. We prioritize urgent cases.",
    },
    {
      question: "Do you offer online consultations?",
      answer:
        "Yes, we provide preliminary online video consultations to understand your concerns and guide you on the necessary steps before your physical visit.",
    },
    {
      question: "What is the cost of a dental consultation?",
      answer:
        "Our initial consultation fee is affordable and transparent. Total treatment costs depend on the diagnosis and procedure required, which will be thoroughly discussed with you beforehand.",
    },
  ];

  // Smoother Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24 px-4 md:px-8 flex flex-col items-center overflow-hidden">
      
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-12 md:mb-16 space-y-4 px-4"
      >
        <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase flex items-center justify-center gap-2">
          <span className="w-6 sm:w-8 h-0.5 bg-blue-600 rounded-full"></span>
          FAQ
          <span className="w-6 sm:w-8 h-0.5 bg-blue-600 rounded-full"></span>
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
          <span className="text-blue-600">Dental Care FAQ:</span> Your <br className="hidden md:block" />
          Questions Answered
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full items-start">
        
        {/* Left Side: FAQ Accordion (Takes up 2 columns) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:col-span-2 space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 border ${
                  isOpen 
                    ? "bg-white border-blue-200 shadow-md ring-1 ring-blue-50" 
                    : "bg-white border-slate-200 hover:border-blue-100 hover:shadow-sm"
                }`}
              >
                {/* Question Area */}
                <div className="px-5 md:px-6 py-4 md:py-5 flex items-center justify-between bg-white">
                  <h4
                    className={`font-semibold text-sm sm:text-base pr-4 transition-colors duration-300 ${
                      isOpen ? "text-blue-600" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </h4>
                  <motion.button
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 ml-2 md:ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
                      isOpen ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-400"
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </motion.button>
                </div>

                {/* Answer Area (Animated Height) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 md:px-6 pb-5 pt-1 bg-white">
                        <p className="text-sm leading-relaxed text-slate-600 font-normal border-t border-slate-100 pt-4 mt-1">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right Side: Contact Cards (Takes up 1 column) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-4 md:space-y-6"
        >
          {/* Support CTA Card */}
          <motion.div
            variants={slideInRight}
            className="bg-blue-600 rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center shadow-md relative overflow-hidden"
          >
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full pointer-events-none" />

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="mb-5 text-white"
            >
              <MessageSquare className="w-10 h-10 md:w-12 md:h-12 fill-white/20 stroke-white" strokeWidth={1.5} />
            </motion.div>
            
            <h4 className="text-white font-semibold text-lg md:text-xl mb-3">
              Have more questions?
            </h4>
            <p className="text-blue-100 text-sm leading-relaxed mb-8 font-normal">
              Our team is ready to provide all the answers you need. We ensure a quick and helpful response.
            </p>
            
          <a href="#contact">
              <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm w-full sm:w-auto"
            >
              Contact Us
            </motion.button>
          </a>
          </motion.div>

          {/* Emergency Card */}
          <motion.div
            variants={slideInRight}
            whileHover={{ y: -4 }}
            className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 cursor-pointer group"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
              <PhoneCall className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Your Smile, Our Priority
              </p>
              <h4 className="text-base font-bold text-slate-900 mb-0.5">
                24/7 Emergency
              </h4>
              <p className="text-blue-600 font-medium text-sm">+91 74006 56692</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;