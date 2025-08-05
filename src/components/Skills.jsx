import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 75 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "Django", level: 70 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 65 },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "Redis", level: 65 },
        { name: "Prisma ORM", level: 75 },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 75 },
        { name: "Linux", level: 80 },
        { name: "Nginx", level: 65 },
      ],
    },
  ];

  const otherSkills = [
    "Responsive Design",
    "Progressive Web Apps",
    "Testing (Jest, Cypress)",
    "Performance Optimization",
    "SEO",
    "Accessibility",
    "Agile/Scrum",
    "UI/UX Design",
    "Mobile Development",
    "Microservices",
  ];

  return (
    <section id="skills" className="py-20 bg-section-skills text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-yellow-300 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">
            I've worked with a variety of technologies and frameworks. Here's a
            breakdown of my technical skills and proficiency levels.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-yellow-300 mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-yellow-200">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-indigo-900 rounded-full h-2">
                      <div
                        className="bg-yellow-300 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-16">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-8 text-center">
            Other Skills & Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-indigo-900/60 text-yellow-200 px-4 py-3 rounded-lg text-center hover:bg-yellow-300 hover:text-[#312E81] transition duration-300 cursor-default"
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div> */}
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
