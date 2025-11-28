import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-600', bg: 'bg-orange-100' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500', bg: 'bg-yellow-100' },
    { name: 'React', icon: 'fab fa-react', color: 'text-cyan-500', bg: 'bg-cyan-100' },
    { name: 'Redux Toolkit', icon: 'fas fa-layer-group', color: 'text-purple-600', bg: 'bg-purple-100' },
    { name: 'Tailwind CSS', icon: 'fas fa-wind', color: 'text-teal-500', bg: 'bg-teal-100' },
    { name: 'ShadCN UI', icon: 'fas fa-puzzle-piece', color: 'text-gray-900', bg: 'bg-gray-100' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-700', bg: 'bg-orange-100' },
    { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-900', bg: 'bg-gray-100' },
    { name: 'API Integration', icon: 'fas fa-plug', color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'Responsive Design', icon: 'fas fa-mobile-alt', color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { name: 'UI/UX Design', icon: 'fas fa-palette', color: 'text-pink-600', bg: 'bg-pink-100' },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Technical Skills
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-2xl text-center cursor-pointer transform transition duration-300 hover:scale-110 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${skill.bg} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition duration-300`}>
                <i className={`${skill.icon} ${skill.color} text-2xl sm:text-2xl md:text-3xl`}></i>
              </div>
              <h3 className="text-gray-900 font-semibold text-xs sm:text-sm">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
