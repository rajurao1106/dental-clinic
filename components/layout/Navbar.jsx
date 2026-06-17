import React from 'react';
import { Stethoscope } from 'lucide-react'; // Representing the dental icon

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Dentists', href: '/dentists' },
    { name: 'Case Stories', href: '/case-stories' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="bg-blue-600 p-1.5 rounded-lg text-white">
          <Stethoscope size={20} />
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900">Dental.</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all">
        Book Now
      </button>
    </nav>
  );
};

export default Navbar;