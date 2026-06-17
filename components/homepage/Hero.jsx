import React from 'react';
import { Play, User, Phone, Calendar, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-8 overflow-hidden">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-6 z-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <span className="text-blue-600">🦷</span>
            <span className="text-sm font-medium text-gray-700">Top-Notch Dental Care, Just for You</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your <span className="text-blue-600">Best Dental</span><br /> Experience Awaits
          </h1>
          
          <p className="text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          
          <div className="flex items-center gap-6">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Explore Our Services
            </button>
            <button className="flex items-center gap-2 font-semibold text-gray-900 hover:text-blue-600 transition">
              <span className="p-2 bg-white rounded-full shadow-sm"><Play size={16} fill="currentColor" /></span>
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Side: Image with Background Blob */}
        <div className="relative flex-1">
          <div className="absolute inset-0 bg-blue-600 rounded-full scale-75 opacity-20 blur-3xl"></div>
          <img 
            src="/doctor-image.png" 
            alt="Dentist" 
            className="relative z-10 w-full max-w-md mx-auto" 
          />
        </div>
      </div>

      {/* Appointment Form Bar */}
      <div className="max-w-6xl mx-auto mt-16 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-6">
        {[
          { label: 'Name', icon: User, placeholder: 'John Doe' },
          { label: 'Phone Number', icon: Phone, placeholder: 'Your Phone' },
          { label: 'Preferred Date', icon: Calendar, placeholder: 'dd/mm/yyyy' },
          { label: 'Preferred Time', icon: Clock, placeholder: '00:00' },
        ].map((field, idx) => (
          <div key={idx} className="flex-1 border-r border-gray-100 last:border-none pr-4">
            <label className="text-xs font-semibold text-gray-400 uppercase">{field.label}</label>
            <div className="flex items-center gap-2 mt-1 text-gray-700 font-medium">
              <field.icon size={16} className="text-blue-600" />
              <input type="text" placeholder={field.placeholder} className="w-full outline-none text-sm" />
            </div>
          </div>
        ))}
        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition whitespace-nowrap">
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default Hero;