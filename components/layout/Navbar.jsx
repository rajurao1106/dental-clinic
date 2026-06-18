"use client";

import React, { useState } from 'react';
import { Stethoscope, X, Menu } from 'lucide-react';

const Navbar = () => {
  // State to manage modal and mobile menu visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' }, 
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact Us', href: '#contact' },
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap apna form submission logic daal sakte hain (jaise API call ya Email bhejna)
    alert("Appointment Request Submitted Successfully!");
    setIsModalOpen(false); // Close modal after submit
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 relative">
        <div className="flex items-center justify-between px-4 md:px-8 py-4">
          
          {/* Logo Section */}
          <a href="#hero" className="flex items-center gap-3 cursor-pointer group">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-600/20 text-white group-hover:scale-105 transition-transform">
              <Stethoscope size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">Sikarwar</span>
              <span className="text-[9px] font-bold text-blue-600 tracking-widest uppercase mt-1">Dental Hospital</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
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
              className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:shadow-blue-600/20"
            >
              Book Consultation
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-600 hover:text-blue-600 transition-colors p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg px-4 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className="text-base font-bold text-slate-600 hover:text-blue-600 transition-colors block py-2 border-b border-slate-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 mt-2 rounded-xl text-sm font-bold transition-all shadow-md"
            >
              Book Consultation
            </button>
          </div>
        )}
      </nav>

      {/* Appointment Modal Popup (Unchanged) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          {/* Modal Container */}
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-extrabold">Book an Appointment</h3>
                <p className="text-blue-100 text-sm mt-1">We'll get back to you shortly.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-white/80 hover:text-white bg-blue-700/50 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" 
                  placeholder="John Doe" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" 
                  placeholder="+91 98765 43210" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Select Service</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-700">
                  <option value="">General Consultation</option>
                  <option value="implants">Dental Implants</option>
                  <option value="root-canal">Root Canal Treatment</option>
                  <option value="braces">Braces & Aligners</option>
                  <option value="surgery">Oral Surgery</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Preferred Date</label>
                <input 
                  type="date" 
                  required 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-700" 
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl mt-2 transition-all shadow-md hover:shadow-lg shadow-blue-600/20"
              >
                Confirm Booking
              </button>
            </form>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;