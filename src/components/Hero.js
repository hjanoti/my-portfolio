import { Link } from "react-router-dom";
import profileImg from "../assets/profile.png"

const Hero = () => {
  return (
    <section className="pt-16 sm:pt-20 pb-8 sm:pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left animate-fadeIn">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 rounded-full mb-3 sm:mb-4">
              <p className="text-purple-700 font-semibold text-xs sm:text-sm">
                👋 Hello, I'm
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-4 md:px-0">
              Heera Singh
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Janoti
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mb-3 sm:mb-4 px-4 md:px-0">
              Frontend Developer
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 max-w-2xl mx-auto md:mx-0 leading-relaxed px-4 md:px-0">
              Passionate about crafting beautiful, responsive, and user-friendly
              web applications using{" "}
              <span className="font-semibold text-purple-600">React</span>,{" "}
              <span className="font-semibold text-blue-600">JavaScript</span>,
              and{" "}
              <span className="font-semibold text-teal-600">Tailwind CSS</span>.
            </p>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 max-w-2xl mx-auto md:mx-0 px-4 md:px-0">
              Currently working at{" "}
              <span className="font-semibold text-gray-900">Surepass</span> as a
              Frontend Developer, building scalable and performant web
              solutions.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 max-w-md mx-auto md:mx-0 px-4 md:px-0">
              <div className="text-center md:text-left">
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  1+
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Years Exp.</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  10+
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Projects</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  8+
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Technologies</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center md:justify-start px-4 md:px-0 mb-4 sm:mb-5">
              <a
                href="/resume.pdf"
                download="Heera_Singh_Janoti_Resume.pdf"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-sm sm:text-base"
              >
                <i className="fas fa-download mr-2 group-hover:animate-bounce"></i>
                Download Resume
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:shadow-2xl border-2 border-purple-600 transform hover:scale-105 transition duration-300 text-sm sm:text-base"
              >
                <i className="fas fa-folder-open mr-2"></i>
                View Projects
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/hjanoti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transform hover:scale-110 transition duration-300 shadow-md hover:shadow-xl"
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github text-lg sm:text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/heera-singh-janoti-2ab7b6179"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transform hover:scale-110 transition duration-300 shadow-md hover:shadow-xl"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin-in text-lg sm:text-xl"></i>
              </a>
              <a
                href="mailto:hjanoti9098@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transform hover:scale-110 transition duration-300 shadow-md hover:shadow-xl"
                aria-label="Email Contact"
              >
                <i className="fas fa-envelope text-lg sm:text-xl"></i>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              {/* Profile Image with Box Shadow */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <img
                  src={profileImg}
                  alt="Heera Singh Janoti - Frontend Developer"
                  className="w-full h-full object-contain rounded-3xl"
                  style={{
                    boxShadow:
                      "0 20px 60px rgba(139, 92, 246, 0.3), 0 10px 30px rgba(59, 130, 246, 0.2)",
                  }}
                />
              </div>

              {/* Decorative Floating Elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-yellow-400 rounded-full opacity-60 shadow-lg"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-pink-400 rounded-full opacity-60 shadow-lg"></div>
              <div className="absolute top-1/2 -right-5 sm:-right-6 md:-right-8 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-green-400 rounded-full opacity-50 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
