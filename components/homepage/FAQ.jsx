"use client";
import React, { useState } from "react";
import { Plus, Minus, MessageSquare, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  // State to track which FAQ is currently open
  const [openFaq, setOpenFaq] = useState(1); // Defaults to the second item (index 1)

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Do I need to make an appointment?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      question: "Do you accept walk-in appointments?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Can I book an emergency dental appointment?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Do you offer online consultations?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "What is the cost of a dental consultation?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
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
      transition: { staggerChildren: 0.1 },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#0b1a33] py-24 px-8 flex flex-col items-center overflow-hidden">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-16 space-y-4"
      >
        <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
          FAQS
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          <span className="text-blue-500">Dental Care FAQ:</span> Your{" "}
          <br className="hidden md:block" />
          Questions Answered
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {/* Left Side: FAQ Accordion (Takes up 2 columns) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:col-span-2 space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className={`cursor-pointer rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? "bg-blue-600 shadow-lg" : "bg-white hover:bg-gray-50"
                }`}
              >
                {/* Question Area */}
                <div className="px-6 py-5 flex items-center justify-between">
                  <h4
                    className={`font-bold text-sm md:text-base transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-900"}`}
                  >
                    {faq.question}
                  </h4>
                  <motion.button
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 ml-4 ${isOpen ? "text-white" : "text-gray-500"}`}
                  >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
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
                      <div className="px-6 pb-6 pt-1">
                        <p className="text-sm leading-relaxed text-blue-100">
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
          className="space-y-6"
        >
          {/* Support CTA Card */}
          <motion.div
            variants={slideInRight}
            className="bg-blue-600 rounded-3xl p-10 flex flex-col items-center text-center shadow-lg"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="mb-6 text-white"
            >
              <MessageSquare size={48} className="fill-white" />
            </motion.div>
            <h4 className="text-white font-bold text-xl mb-3">
              You have different questions?
            </h4>
            <p className="text-blue-100 text-sm leading-relaxed mb-8">
              Our team will answer all your questions. We ensure a quick
              response.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-50 transition shadow-md w-full sm:w-auto"
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Emergency Card */}
          <motion.div
            variants={slideInRight}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-3xl p-6 shadow-sm flex items-center gap-6 cursor-pointer group"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
              <PhoneCall
                size={24}
                className="text-blue-600 group-hover:text-white transition-colors duration-300"
              />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                Your Smile, Our Priority
              </p>
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                24/7 Emergency
              </h4>
              <p className="text-gray-500 text-sm">+917400656692</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
