import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; {currentYear} Heera Singh Janoti. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-xs sm:text-sm">
            Built with <i className="fas fa-heart text-red-500"></i> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
