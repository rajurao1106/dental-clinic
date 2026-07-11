import React from 'react';
import { Stethoscope, MapPin, Phone, Mail, ChevronRight } from 'lucide-react'; 
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from "@/public/homepage/logo2.jpeg"
import Image from 'next/image';

const Footer = () => {
  // Social icons mapping
  const socialIcons = [
    { Icon: FaFacebook, link: '#' },
    { Icon: FaTwitter, link: '#' },
    { Icon: FaInstagram, link: '#' },
    { Icon: FaYoutube, link: '#' }
  ];

  // Updated Quick Links with section IDs
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Meet Dr. Sunny Sikarwar', href: '#doctor' },
    { name: 'Our Services', href: '#services' },
    { name: 'Patient Testimonials', href: '#testimonials' },
    { name: 'Book Appointment', href: '#book' }
  ];

  // Updated Treatments with section IDs
  const treatments = [
    { name: 'Dental Implants', href: '#services' },
    { name: 'Teeth in 24 Hours', href: '#services' },
    { name: 'Root Canal', href: '#services' },
    { name: 'Braces & Aligners', href: '#services' },
    { name: 'Oral & Maxillofacial Surgery', href: '#services' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-8 px-8 border-t-[6px] border-[#2AACDE]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        {/* Column 1: Brand Section */}
        <div className="space-y-6 lg:pr-6">
          <div className="flex items-center gap-3 text-white">
            <div className="relative w-32 h-16 md:w-44 md:h-20 rounded-lg overflow-hidden bg-red-500 group-hover:opacity-90 transition-opacity">
              <Image
                src={logo} 
                alt="Sikarwar Dental Hospital Logo" 
                fill
                className=""
                priority
              />
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            One of Raipur’s trusted centers for advanced dental and maxillofacial care. We restore oral health, improve confidence, and create healthy smiles.
          </p>
          <div className="flex gap-3 pt-2">
            {socialIcons.map((item, i) => (
              <a 
                key={i} 
                href={item.link}
                className="bg-slate-800 p-2.5 rounded-full cursor-pointer hover:bg-[#0548AF] hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <item.Icon size={16} className="text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#2AACDE] hover:translate-x-1 transition-all duration-300 w-fit">
                  <ChevronRight size={14} className="text-[#2AACDE]" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Treatments */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Key Treatments</h4>
          <ul className="space-y-3">
            {treatments.map((treatment, idx) => (
              <li key={idx}>
                <a href={treatment.href} className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#2AACDE] hover:translate-x-1 transition-all duration-300 w-fit">
                  <ChevronRight size={14} className="text-[#2AACDE]" />
                  {treatment.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-slate-800 p-2 rounded-lg">
                <MapPin size={18} className="text-[#2AACDE]" />
              </div>
              <span className="text-sm text-slate-400 leading-relaxed">
                Gol Chowk, Beside Deerghayu Hospital, <br />
                Deendayal Upadhyay Nagar, <br />
                Raipur, Chhattisgarh
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-slate-800 p-2 rounded-lg">
                <Phone size={18} className="text-[#2AACDE]" />
              </div>
              <a href="tel:+917400656692" className="text-sm text-slate-400 hover:text-[#2AACDE] transition-colors font-medium">
                +91 7400656692
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-slate-800 p-2 rounded-lg">
                <Mail size={18} className="text-[#2AACDE]" />
              </div>
              <a href="mailto:sikarwarsunny@gmail.com" className="text-sm text-slate-400 hover:text-[#2AACDE] transition-colors font-medium">
                sikarwarsunny@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
        <p>© {new Date().getFullYear()} Sikarwar Dental Hospital & Implant Center. All rights reserved.</p>
        {/* <div className="flex gap-6">
          <a href="#" className="hover:text-[#2AACDE] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#2AACDE] transition-colors">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;