import React from "react";

const Skills = () => {
  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="py-20 bg-section-skills text-text-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow-md text-sm font-semibold transform hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-900/60 to-indigo-800/80 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-yellow-300 mb-4">
              Always Learning
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with
              the latest technologies and best practices in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-yellow-300 text-[#312E81] px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                Currently Learning: Rust
              </span>
              <span className="bg-yellow-300 text-[#312E81] px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                Exploring: Web3 & Blockchain
              </span>
              <span className="bg-yellow-300 text-[#312E81] px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                Next Goal: Machine Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
