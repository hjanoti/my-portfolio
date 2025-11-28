import React from 'react';

const WhatIDo = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Frontend Development',
      description: 'Building responsive and interactive web applications using React, JavaScript, and modern CSS frameworks.',
      color: 'from-purple-600 to-blue-600',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Creating mobile-first, responsive interfaces that work seamlessly across all devices and screen sizes.',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: 'fas fa-palette',
      title: 'UI/UX Implementation',
      description: 'Transforming designs into pixel-perfect, user-friendly interfaces with attention to detail and usability.',
      color: 'from-pink-600 to-purple-600',
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600',
    },
    {
      icon: 'fas fa-plug',
      title: 'API Integration',
      description: 'Seamlessly integrating RESTful APIs and third-party services to create dynamic, data-driven applications.',
      color: 'from-green-600 to-teal-600',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: 'fas fa-layer-group',
      title: 'State Management',
      description: 'Implementing efficient state management solutions using Redux Toolkit for complex application workflows.',
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Performance Optimization',
      description: 'Optimizing application performance with code splitting, lazy loading, and best practices for faster load times.',
      color: 'from-orange-600 to-red-600',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            What I Do
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Specialized services I offer to help bring your digital projects to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-2 border border-gray-200"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 ${service.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition duration-300`}>
                <i className={`${service.icon} ${service.iconColor} text-2xl sm:text-3xl`}></i>
              </div>

              <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
