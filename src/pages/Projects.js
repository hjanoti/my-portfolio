import EComImg from '../assets/projects/E-com.png';
import EduImg from '../assets/projects/Edu.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ClickCart – E-commerce Website',
      description: 'A fully responsive e-commerce website featuring dynamic product listing, shopping cart management with add/remove functionality, and LocalStorage-based data persistence. Built with vanilla JavaScript, HTML5, and CSS3.',
      image: EComImg,
      imageAlt: 'ClickCart E-commerce Website Screenshot',
      demoUrl: 'https://clickcart-ecom.netlify.app/',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
      gradientFrom: 'from-purple-600',
      gradientTo: 'to-blue-600',
      bgGradient: 'from-purple-100 to-blue-100',
      badgeBg: 'bg-purple-100',
      badgeText: 'text-purple-700',
      buttonGradient: 'from-purple-600 to-blue-600',
      buttonHoverGradient: 'hover:from-purple-700 hover:to-blue-700',
    },
    {
      id: 2,
      title: 'MyEdHub – Educational Platform',
      description: 'A modern educational platform showcasing programming courses with clean, responsive UI design. Features course categories, responsive layout, and smooth user experience. Built with HTML5 and CSS3.',
      image: EduImg,
      imageAlt: 'MyEdHub Educational Platform Screenshot',
      demoUrl: 'https://myedhub.netlify.app/',
      techStack: ['HTML5', 'CSS3', 'Responsive Design'],
      gradientFrom: 'from-green-600',
      gradientTo: 'to-teal-600',
      bgGradient: 'from-green-100 to-teal-100',
      badgeBg: 'bg-green-100',
      badgeText: 'text-green-700',
      buttonGradient: 'from-green-600 to-teal-600',
      buttonHoverGradient: 'hover:from-green-700 hover:to-teal-700',
    },
  ];

  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Featured Projects
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Explore my recent work showcasing responsive design, modern UI/UX, and clean code practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-200 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3"
            >
              {/* Project Image */}
              <div className={`relative h-48 sm:h-64 md:h-72 overflow-hidden bg-gradient-to-br ${project.bgGradient}`}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover p-4 sm:p-6 transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Hover Overlay Button - Desktop Only (md+) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} opacity-0 group-hover:opacity-95 transition-all duration-500 hidden md:flex items-center justify-center p-4`}>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 font-semibold rounded-lg sm:rounded-xl hover:bg-gray-100 transition duration-300 transform hover:scale-110 shadow-xl text-sm sm:text-base"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} bg-clip-text text-transparent`}>
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 ${project.badgeBg} ${project.badgeText} rounded-full text-xs sm:text-sm font-semibold`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Button - Mobile Only (below md) */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`md:hidden block w-full text-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${project.buttonGradient} ${project.buttonHoverGradient} text-white font-semibold rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 text-sm sm:text-base`}
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="inline-block bg-white rounded-xl sm:rounded-2xl shadow-lg px-6 sm:px-8 py-4 sm:py-6 border border-gray-200 hover:shadow-xl transition duration-300">
            <i className="fas fa-code text-purple-600 text-3xl sm:text-4xl mb-2 sm:mb-3 block"></i>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              More projects coming soon! Check back later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
