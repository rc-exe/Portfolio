import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Resume Scanner",
    description: "ATS-compatible resume parser with scoring system that analyzes and ranks resumes based on job descriptions",
    tags: ["Python", "NLP", "Flask"],
    github: "https://github.com/rc-exe/resume-scanner",
    demo: "#"
  },
  {
    title: "Online Code Editor",
    description: "Real-time collaborative code editor with syntax highlighting and live preview functionality",
    tags: ["React", "Node.js", "WebSockets"],
    github: "https://github.com/rc-exehttps://github.com/rc-exe/online_code_editor/online-code-editor",
  },
  {
    title: "Face Expression Recognition",
    description: "AI-powered emotion detection system using computer vision and deep learning",
    tags: ["Python", "OpenCV", "TensorFlow"],
    github: "https://github.com/rc-exe/face_recognition",
    demo: "#"
  },
  {
    title: "Keylogger",
    description: "Advanced system monitoring tool with encryption and remote reporting capabilities",
    tags: ["Python", "Security", "Encryption"],
    github: "https://github.com/rc-exe/keylogger_rc",
    demo: "#"
  },
  {
    title: "PDF Parser",
    description: "Tool to extract and analyze text from PDF documents with search functionality",
    tags: ["Python", "PyPDF2", "NLTK"],
    github: "https://github.com/rc-exe/pdf-praser",
    demo: "#"
  },
  {
    title: "Speech To Text",
    description: "Real-time speech recognition system with 95% accuracy using deep learning",
    tags: ["Python", "TensorFlow", "NLP"],
    github: "https://github.com/rc-exe/Speech-To-Text",
    demo: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one was built to solve specific problems and demonstrate different technical skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/rc-exe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FaGithub className="mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;