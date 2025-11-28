import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon. (Note: This is a demo - no backend connected)');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'hjanoti9098@gmail.com',
      link: 'mailto:hjanoti9098@gmail.com',
      color: 'purple',
      bgColor: 'bg-purple-100',
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91 9990178384',
      link: 'tel:+919990178384',
      color: 'green',
      bgColor: 'bg-green-100',
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'github.com/hjanoti',
      link: 'https://github.com/hjanoti',
      color: 'blue',
      bgColor: 'bg-blue-100',
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'Heera Singh Janoti',
      link: 'https://www.linkedin.com/in/heera-singh-janoti-2ab7b6179',
      color: 'blue',
      bgColor: 'bg-blue-100',
    },
  ];

  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Get In Touch
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Have a project in mind or want to collaborate? Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-6 flex items-center">
                <i className="fas fa-paper-plane text-purple-600 mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                Send Me a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition duration-300 text-gray-900 text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition duration-300 text-gray-900 text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition duration-300 resize-none text-gray-900 text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center justify-center group text-sm sm:text-base"
                >
                  <i className="fas fa-paper-plane mr-2 group-hover:translate-x-1 transition duration-300"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-5 sm:space-y-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-6 flex items-center">
                <i className="fas fa-address-book text-purple-600 mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                Contact Information
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl hover:shadow-lg transition duration-300 hover:-translate-y-1 group"
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${info.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition duration-300`}>
                      <i className={`${info.icon} text-${info.color}-600 text-lg sm:text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold text-base sm:text-lg">{info.title}</h3>
                      <p className={`text-${info.color}-600 hover:text-${info.color}-700 transition duration-300 text-sm sm:text-base`}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 flex items-center">
                <i className="fas fa-share-alt mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                Connect With Me
              </h3>

              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://github.com/hjanoti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-opacity-30 transform hover:scale-110 transition duration-300 shadow-lg"
                >
                  <i className="fab fa-github text-xl sm:text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/heera-singh-janoti-2ab7b6179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-opacity-30 transform hover:scale-110 transition duration-300 shadow-lg"
                >
                  <i className="fab fa-linkedin-in text-xl sm:text-2xl"></i>
                </a>
                <a
                  href="mailto:hjanoti9098@gmail.com"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-opacity-30 transform hover:scale-110 transition duration-300 shadow-lg"
                >
                  <i className="fas fa-envelope text-xl sm:text-2xl"></i>
                </a>
              </div>

              <p className="mt-5 sm:mt-6 text-white text-opacity-90 leading-relaxed text-sm sm:text-base">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out through any of these platforms!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
