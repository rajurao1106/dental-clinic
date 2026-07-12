"use client";

import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/public/homepage/logo1.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState("");

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "AI Technology", href: "#ai-technology" },
    { name: "Contact Us", href: "#contact" },
  ];

  // Custom scroll handler to prevent URL hash update
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    // REPLACE THIS with your actual Web3Forms Access Key
    formData.append("access_key", "242d73d3-759b-4548-9450-5c1de3e34dbd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("");
        alert("Appointment Request Submitted Successfully!");
        setIsModalOpen(false);
        e.target.reset();
      } else {
        setStatus("Error submitting form.");
      }
    } catch (error) {
      setStatus("Connection error.");
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 ">
          {/* Logo Section */}
          <a
            href="#hero"
            onClick={(e) => handleScroll(e, "#hero")}
            className="flex items-center cursor-pointer group"
          >
            {/* Enlarged Logo Image */}
            <div className="relative w-32 h-16 md:w-44 md:h-20 overflow-hidden group-hover:opacity-90 transition-opacity">
              <Image
                src={logo}
                alt="Sikarwar Dental Hospital Logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 128px, 176px"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-[#2AACDE] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section: Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:block bg-[#2AACDE] hover:bg-[#0548AF] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm"
            >
              Book Consultation
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-600 hover:text-slate-900 transition-colors p-2 rounded-md hover:bg-slate-50"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-md px-4 py-4 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-slate-700 hover:text-[#2AACDE] hover:bg-slate-50 transition-colors block px-3 py-3 rounded-md cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full bg-[#2AACDE] hover:bg-[#0548AF] text-white px-6 py-3 mt-3 rounded-lg text-sm font-semibold transition-all shadow-sm"
            >
              Book Consultation
            </button>
          </div>
        )}
      </nav>

      {/* Appointment Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          {/* Modal Container */}
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl relative animate-in fade-in zoom-in duration-200 flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Book an Appointment
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  We'll get back to you shortly.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AACDE]/30 focus:border-[#2AACDE] transition-all text-sm text-slate-900 placeholder:text-slate-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AACDE]/30 focus:border-[#2AACDE] transition-all text-sm text-slate-900 placeholder:text-slate-400"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Select Service
                </label>
                <select
                  name="service"
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AACDE]/30 focus:border-[#2AACDE] transition-all text-sm text-slate-900 bg-white"
                >
                  <option value="">General Consultation</option>
                  <option value="implants">Dental Implants</option>
                  <option value="root-canal">Root Canal Treatment</option>
                  <option value="braces">Braces & Aligners</option>
                  <option value="surgery">Oral Surgery</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AACDE]/30 focus:border-[#2AACDE] transition-all text-sm text-slate-900"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "Sending..."}
                  className="w-full bg-[#2AACDE] hover:bg-[#0548AF] text-white font-semibold py-3 rounded-lg transition-all shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status || "Confirm Booking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
