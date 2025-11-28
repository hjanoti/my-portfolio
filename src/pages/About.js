import React from "react";
import aboutImg from "../assets/about.png"

const About = () => {
  const strengths = [
    {
      title: "Problem Solving",
      description:
        "Analytical approach to breaking down complex problems into manageable solutions",
      icon: "fas fa-brain",
    },
    {
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and well-documented code following best practices",
      icon: "fas fa-code",
    },
    {
      title: "Team Collaboration",
      description:
        "Effective communication and collaboration with cross-functional teams",
      icon: "fas fa-users",
    },
    {
      title: "Continuous Learning",
      description:
        "Always staying updated with latest technologies and industry trends",
      icon: "fas fa-graduation-cap",
    },
  ];

  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 px-4">
            About Me
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-3"></div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Passionate developer dedicated to creating exceptional web
            experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center items-center">
            <div className="relative max-w-md mx-auto">
              {/* Image Wrapper */}
              <div className="w-full h-70 sm:h-80 md:h-96 flex justify-center items-center">
                <img
                  src={aboutImg}
                  alt="Heera Singh Janoti - Frontend Developer"
                  className="w-full h-full object-contain rounded-3xl"
                  style={{
                    filter:
                      "drop-shadow(0 20px 40px rgba(139, 92, 246, 0.5)) drop-shadow(0 10px 20px rgba(59, 130, 246, 0.4))",
                  }}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl sm:rounded-3xl -z-10 opacity-40 blur-[2px]"></div>
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full -z-10 opacity-70 blur-[2px]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 px-4 lg:px-0">
              Frontend Developer & Problem Solver
            </h2>

            <div className="space-y-2.5 sm:space-y-3 text-gray-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 px-4 lg:px-0">
              <p>
                I'm{" "}
                <span className="font-semibold text-purple-600">
                  Heera Singh Janoti
                </span>
                , a passionate Frontend Developer based in{" "}
                <span className="font-semibold">Delhi, India</span>, with a
                strong foundation in modern web technologies.
              </p>

              <p>
                I specialize in building responsive and dynamic web applications
                using <span className="font-semibold text-cyan-600">React</span>
                ,{" "}
                <span className="font-semibold text-yellow-600">
                  JavaScript
                </span>
                , and cutting-edge CSS frameworks like{" "}
                <span className="font-semibold text-teal-600">
                  Tailwind CSS
                </span>
                .
              </p>

              <p>
                With expertise in{" "}
                <span className="font-semibold">Redux Toolkit</span> for state
                management and modern UI libraries like{" "}
                <span className="font-semibold">ShadCN</span>, I create
                intuitive user interfaces that deliver exceptional user
                experiences.
              </p>

              <p>
                Currently working at{" "}
                <span className="font-semibold text-gray-900">Surepass</span> as
                a Frontend Developer, I'm committed to continuous learning and
                delivering impactful solutions that meet both user needs and
                business goals.
              </p>

              <p>
                I'm enrolled in{" "}
                <span className="font-semibold">
                  AlmaBetter's Web Development Program
                </span>
                , constantly staying updated with the latest technologies to
                build better and more scalable products.
              </p>
            </div>

            {/* Stats */}
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 px-4 lg:px-0">
              <div className="text-center bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  1+
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">
                  Years Experience
                </p>
              </div>

              <div className="text-center bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  10+
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">
                  Projects Built
                </p>
              </div>

              <div className="text-center bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  8+
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">
                  Technologies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths Section */}
        <div>
          <div className="text-center pt-10 mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 px-4">
              My Strengths
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <i
                    className={`${strength.icon} text-purple-600 text-xl sm:text-2xl`}
                  ></i>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {strength.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
