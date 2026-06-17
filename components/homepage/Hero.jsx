import React from 'react';

const Hero = () => {
  return (
    <section className="bg-slate-50 min-h-screen flex flex-col justify-center items-center p-6 lg:p-12">
      {/* Main Hero Content */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center mb-16">
        {/* Left: Text Content */}
        <div>
          <div className="inline-flex items-center bg-white px-3 py-1 rounded-full text-blue-600 font-medium text-sm shadow-sm mb-4">
            <span className="mr-2">🦷</span> Top-Notch Dental Care, Just for You
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Best Dental <br /> Experience Awaits
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Explore Our Services
            </button>
            <button className="flex items-center gap-2 font-semibold text-gray-700 hover:text-blue-600 transition">
              <span className="bg-white p-2 rounded-full border shadow-sm">▶</span> Watch Video
            </button>
          </div>
        </div>

        {/* Right: Image Placeholder */}
        <div className="relative h-64 md:h-96 bg-blue-100 rounded-3xl flex items-end justify-center overflow-hidden">
          {/* Replace this div with an <Image /> component from 'next/image' */}
          <div className="text-blue-400 text-9xl">👤</div> 
        </div>
      </div>

      {/* Appointment Form */}
      <div className="max-w-6xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row gap-6 items-center">
        {[
          { label: 'Name', placeholder: 'John Doe', icon: '👤' },
          { label: 'Phone Number', placeholder: 'Your Phone', icon: '📞' },
          { label: 'Preferred Date', placeholder: 'dd/mm/yyyy', icon: '📅' },
          { label: 'Preferred Time', placeholder: '00:00', icon: '⏰' },
        ].map((field) => (
          <div key={field.label} className="w-full">
            <label className="block text-sm font-semibold text-gray-500 mb-1">{field.label}</label>
            <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
              <span>{field.icon}</span>
              <input type="text" placeholder={field.placeholder} className="w-full focus:outline-none text-gray-700" />
            </div>
          </div>
        ))}
        <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition whitespace-nowrap">
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default Hero;