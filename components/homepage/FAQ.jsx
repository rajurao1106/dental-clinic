"use client";

import React, { useState } from "react";
import { Plus, Minus, MessageSquare, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(0); // Defaults to the first item

  // Replaced Lorem Ipsum with realistic Dental FAQ content
const faqs = [
  {
    question:
      "What dental services do you offer at your dental hospital in Raipur?",
    answer:
      "We provide comprehensive dental care in Raipur, including dental check-ups, teeth cleaning, root canal treatment, dental implants, crowns and bridges, tooth extraction, braces, teeth whitening, cosmetic dentistry, and other restorative and preventive dental treatments.",
  },
  {
    question:
      "How can I book an appointment at your dental clinic in Raipur?",
    answer:
      "You can book an appointment at our dental clinic in Raipur by calling us, sending a WhatsApp message, or using our online appointment booking option. We recommend scheduling an appointment in advance for a convenient consultation.",
  },
  {
    question:
      "What are the clinic timings of your dental hospital in Raipur?",
    answer:
      "Our dental clinic in Raipur is open during convenient clinic hours. Please contact us before visiting to confirm the latest consultation and appointment timings.",
  },
  {
    question: "Do you provide emergency dental treatment in Raipur?",
    answer:
      "Yes, we provide dental care for urgent problems such as severe toothache, dental infection, broken or damaged teeth, swelling, and other dental emergencies. Contact our dental hospital in Raipur to check emergency appointment availability.",
  },
  {
    question: "Do you offer online dental consultations?",
    answer:
      "Yes, online dental consultations may be available for suitable dental concerns. Our dentist can discuss your symptoms and recommend whether an in-person examination is required.",
  },
  {
    question: "What is the cost of a dental consultation?",
    answer:
      "Our initial consultation fee is affordable and transparent. Total treatment costs depend on the diagnosis and procedure required, which will be thoroughly discussed with you beforehand.",
  },
  {
    question:
      "Where is your dental hospital located in Raipur?",
    answer:
      "Our dental hospital is conveniently located in Gol Chowk, Beside Deerghayu Hospital, Deendayal Upadhyay Nagar, Raipur, Chhattisgarh. Patients can visit our dental clinic in Raipur for dental consultations, treatments, and emergency dental care. Please use Google Maps or contact us for directions and assistance.",
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
        <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-[#2AACDE] uppercase flex items-center justify-center gap-2">
          <span className="w-6 sm:w-8 h-0.5 bg-[#2AACDE] rounded-full"></span>
          FAQ
          <span className="w-6 sm:w-8 h-0.5 bg-[#2AACDE] rounded-full"></span>
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
          <span className="text-[#2AACDE]">Dental Care FAQ:</span> Your <br className="hidden md:block" />
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
                    ? "bg-white border-[#2AACDE]/30 shadow-md ring-1 ring-[#2AACDE]/10" 
                    : "bg-white border-slate-200 hover:border-[#2AACDE]/20 hover:shadow-sm"
                }`}
              >
                {/* Question Area */}
                <div className="px-5 md:px-6 py-4 md:py-5 flex items-center justify-between bg-white">
                  <h4
                    className={`font-semibold text-sm sm:text-base pr-4 transition-colors duration-300 ${
                      isOpen ? "text-[#2AACDE]" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </h4>
                  <motion.button
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 ml-2 md:ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
                      isOpen ? "bg-[#2AACDE]/10 text-[#2AACDE]" : "bg-slate-50 text-slate-400"
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
            className="bg-[#2AACDE] rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center shadow-md relative overflow-hidden"
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
            <p className="text-white/80 text-sm leading-relaxed mb-8 font-normal">
              Our team is ready to provide all the answers you need. We ensure a quick and helpful response.
            </p>
            
          <a href="#contact">
              <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-[#2AACDE] px-8 py-3 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm w-full sm:w-auto"
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
            <div className="w-12 h-12 bg-[#2AACDE]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#2AACDE] transition-colors duration-300">
              <PhoneCall className="w-5 h-5 text-[#2AACDE] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Your Smile, Our Priority
              </p>
              <h4 className="text-base font-bold text-slate-900 mb-0.5">
                24/7 Emergency
              </h4>
              <p className="text-[#2AACDE] font-medium text-sm">+91 74006 56692</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;