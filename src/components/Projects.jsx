import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personalized News Recommender",
      description:
        "Recommends news articles based on user preferences using NLP and ML algorithms.",
      techStack: ["Python", "Flask", "TF-IDF", "BERT", "Cosine Similarity"],
      category: "AI/ML",
    },
    {
      id: 2,
      title: "Customer Churn Prediction",
      description:
        "Predicts customer churn using classification models and imbalanced dataset handling.",
      techStack: ["Python", "Pandas", "Random Forest", "Gradient Boosting"],
      category: "AI/ML",
    },
    {
      id: 3,
      title: "Reinforcement Learning Agent",
      description:
        "Trained an AI agent to play a game using Q-Learning and Deep Q-Networks.",
      techStack: ["Python", "TensorFlow", "OpenAI Gym"],
      category: "AI/ML",
    },
    {
      id: 4,
      title: "Public Dataset EDA & Visualization",
      description:
        "Exploratory Data Analysis and visualization of complex public datasets.",
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      category: "Data Science",
    },
    {
      id: 5,
      title: "A/B Testing Analysis",
      description:
        "Performed statistical analysis on A/B test data to determine product impact.",
      techStack: ["Python", "SciPy", "Pandas", "Statistics"],
      category: "Data Science",
    },
    {
      id: 6,
      title: "Real-Time Data Dashboard",
      description:
        "Interactive dashboard visualizing real-time data from APIs.",
      techStack: ["Streamlit", "Plotly", "Python", "APIs"],
      category: "Data Science",
    },
    {
      id: 7,
      title: "Digital Sticker Generator",
      description:
        "Removes background and generates personalized stickers from user-uploaded images.",
      techStack: ["Python", "OpenCV", "Mask R-CNN", "Flask"],
      category: "Computer Vision",
    },
    {
      id: 8,
      title: "License Plate Detection & OCR",
      description:
        "Detects license plates in images and extracts text using OCR techniques.",
      techStack: ["YOLO", "OpenCV", "Tesseract", "Python"],
      category: "Computer Vision",
    },
    {
      id: 9,
      title: "Real-Time Human Pose Estimation",
      description: "Tracks human body joints in real-time using webcam feed.",
      techStack: ["MediaPipe", "OpenPose", "Python", "OpenCV"],
      category: "Computer Vision",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-section-projects text-text-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg p-10 flex flex-col items-center text-center mx-auto max-w-2xl transition duration-300 transform hover:scale-105"
              style={{
                transition:
                  "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#87CEFA";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(135, 206, 250, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.1)";
              }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-indigo-600 text-sm font-medium">
                {project.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
