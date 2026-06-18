import React from 'react';
import { Stethoscope } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact Us', href: '#book-appointment' },
  ];

  // sticky top-0 and z-50 ensure the navbar stays on top while scrolling
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      
      {/* Logo Section */}
      <a href="#home" className="flex items-center gap-3 cursor-pointer group">
        <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-600/20 text-white group-hover:scale-105 transition-transform">
          <Stethoscope size={24} />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">Sikarwar</span>
          <span className="text-[9px] font-bold text-blue-600 tracking-widest uppercase mt-1">Dental Hospital</span>
        </div>
      </a>

      {/* Nav Links */}
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

      {/* CTA Button */}
      <a 
        href="#book-appointment"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:shadow-blue-600/20"
      >
        Book Consultation
      </a>
    </nav>
  );
};

export default Navbar;