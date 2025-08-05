import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#4338CA] to-[#3730A3] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-3">About Me</h2>
          <p className="text-lg text-indigo-100">Know more about my journey and skills.</p>
          <div className="w-24 h-1 bg-yellow-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content - Personal Intro */}
        <div className="space-y-6 text-center">
          <p className="text-indigo-100 text-lg leading-relaxed">
            A passionate Computer Science and Engineering student specializing in IoT, with a keen interest in AI, data analytics, and smart systems.
          </p>
          <p className="text-indigo-100 text-lg leading-relaxed">
            Skilled in Python, machine learning, and full-stack development with a focus on building practical, real-world solutions.
          </p>
          <p className="text-indigo-100 text-lg leading-relaxed">
            A proactive learner dedicated to personal growth, collaboration, and continuous improvement.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-[#4338CA] bg-yellow-300 hover:bg-yellow-400 transition duration-300"
          >
            Let's Collaborate
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default About; 