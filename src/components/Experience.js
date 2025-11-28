import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Surepass',
      role: 'Frontend Developer',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Building scalable and performant web applications for identity verification and KYC solutions.',
      responsibilities: [
        'Developed and maintained responsive web applications using React, Redux Toolkit, and Tailwind CSS',
        'Implemented complex UI components with ShadCN UI library for consistent design system',
        'Integrated RESTful APIs and third-party services for seamless data flow',
        'Optimized application performance with code splitting and lazy loading techniques',
        'Collaborated with cross-functional teams including designers, backend developers, and product managers',
        'Conducted code reviews and mentored junior developers on best practices',
      ],
      technologies: ['React', 'Redux Toolkit', 'Tailwind CSS', 'ShadCN', 'JavaScript', 'Git'],
      color: 'from-purple-600 to-blue-600',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Work Experience
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Professional journey and key achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-200 hover:shadow-2xl transition duration-500"
            >
              {/* Decorative Element */}
              <div className={`absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-gradient-to-b ${exp.color} rounded-l-2xl sm:rounded-l-3xl`}></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 sm:mb-6">
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                    {exp.role}
                  </h3>
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{exp.company}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                    <span className="flex items-center">
                      <i className="fas fa-calendar-alt mr-2 text-purple-600"></i>
                      {exp.period}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-map-marker-alt mr-2 text-purple-600"></i>
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-5 sm:mb-6">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <i className="fas fa-check-circle text-purple-600 mr-2"></i>
                  Key Responsibilities
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 sm:mt-1">
                        <i className="fas fa-check text-white text-xs"></i>
                      </span>
                      <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <i className="fas fa-tools text-purple-600 mr-2"></i>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs sm:text-sm font-semibold border border-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
