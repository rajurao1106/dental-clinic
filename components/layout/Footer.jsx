import React from 'react';
import { Stethoscope } from 'lucide-react'; // Keep lucide for UI icons
import { FaFacebook, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  // Define icons mapping here
  const socialIcons = [FaFacebook, FaTwitter, FaPinterestP, FaInstagram, FaYoutube];

  return (
    <footer className="bg-[#0b1a33] text-gray-300 py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-blue-600 p-1.5 rounded-lg"><Stethoscope size={20} /></div>
            <span className="text-xl font-bold">Dental.</span>
          </div>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className="flex gap-3 pt-2">
            {socialIcons.map((Icon, i) => (
              <div key={i} className="bg-white/10 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition">
                {/* Use the imported icon component */}
                <Icon size={16} className="text-white" />
              </div>
            ))}
          </div>
        </div>
        {/* ... rest of your code remains the same */}
      </div>
    </footer>
  );
};

export default Footer;