const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Maharshi Dayanand University (MDU)",
      period: "2021 - 2024",
      description:
        "Completed B.Tech in CSE with strong foundations in computer science, algorithms, data structures, and web development. Learned core subjects and built multiple frontend projects during academic years.",
      highlights: [
        "Learned core programming and web development fundamentals",
        "Built academic and personal projects using JavaScript and React",
        "Improved problem-solving and development skills",
        "Strengthened foundation for modern frontend development",
      ],
      icon: "fas fa-university",
      color: "from-purple-600 to-blue-600",
      bgColor: "bg-purple-100",
    },
    {
      degree: "Self-Taught Developer",
      institution: "Online Learning & Projects",
      period: "2021 - Present",
      description:
        "Continuous learning through online courses, documentation, and hands-on project development.",
      highlights: [
        "Completed courses on React, JavaScript, and modern web development",
        "Built 10+ personal and client projects",
        "Active contributor on GitHub and coding communities",
        "Stay updated with latest web development trends and technologies",
      ],
      icon: "fas fa-laptop-code",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Education & Learning
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Continuous learning and skill development journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-200 hover:shadow-2xl transition duration-500 hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 ${edu.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6`}
              >
                <i
                  className={`${edu.icon} bg-gradient-to-r ${edu.color} bg-clip-text text-transparent text-2xl sm:text-3xl`}
                ></i>
              </div>

              <h3
                className={`text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}
              >
                {edu.degree}
              </h3>

              <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {edu.institution}
              </p>

              <p className="text-xs sm:text-sm text-gray-600 mb-4 flex items-center">
                <i className="fas fa-calendar-alt mr-2 text-purple-600"></i>
                {edu.period}
              </p>

              <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
                {edu.description}
              </p>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span
                        className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5`}
                      >
                        <i className="fas fa-check text-white text-xs"></i>
                      </span>
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
