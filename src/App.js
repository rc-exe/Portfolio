import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DarkModeToggle from "./components/DarkModeToggle";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { FiMail, FiExternalLink } from "react-icons/fi";
import background from "./assets/background.JPG";

function App() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, -200]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.7]);

  const projects = [
    { 
      name: "Resume Scanner", 
      link: "https://github.com/rc-exe/resume-scanner",
      description: "ATS-compatible resume parser with scoring system that analyzes and ranks resumes based on job descriptions",
      tags: ["Python", "NLP", "Flask"]
    },
    { 
      name: "Online Code Editor", 
      link: "https://online-code-editor-a9zz.onrender.com/",
      description: "Real-time collaborative code editor with syntax highlighting and live preview functionality",
      tags: ["React", "Node.js", "WebSockets"]
    },
    { 
      name: "Face Emotion Recognition", 
      link: "https://github.com/rc-exe/face_recognition",
      description: "AI-powered emotion detection system using computer vision and deep learning",
      tags: ["Python", "OpenCV", "TensorFlow"]
    },
    { 
      name: "Keylogger", 
      link: "https://github.com/rc-exe/keylogger_rc",
      description: "Advanced system monitoring tool with encryption and remote reporting capabilities",
      tags: ["Python", "Security", "Encryption"]
    },
    { 
      name: "PDF Parser", 
      link: "https://github.com/rc-exe/pdf-praser",
      description: "Tool to extract and analyze text from PDF documents with search functionality",
      tags: ["Python", "PyPDF2", "NLTK"]
    },
    { 
      name: "Speech To Text", 
      link: "https://github.com/rc-exe/Speech-To-Text",
      description: "Real-time speech recognition system with 95% accuracy using deep learning",
      tags: ["Python", "TensorFlow", "NLP"]
    }
  ];

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Python", level: 85 },
    { name: "Flask", level: 80 },
    { name: "Machine Learning", level: 75 },
    { name: "Java", level: 70 },
    { name: "MySQL", level: 75 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML/CSS", level: 95 },
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-x-hidden">
      {/* Animated Background */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          y: backgroundY,
          opacity
        }}
      />

      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm fixed top-0 w-full z-50">
        <motion.h1 
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ritesh Chakramani
        </motion.h1>
        
        <div className="flex items-center space-x-6">
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="hidden md:block font-medium hover:text-blue-500 dark:hover:text-blue-400 transition"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + 0.1 * ['about', 'skills', 'projects', 'contact'].indexOf(item) }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
          
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/rc-exe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub className="text-xl" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/ritesh-chakramani-016a0b235"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            
            <DarkModeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Ritesh
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full-Stack Developer specializing in <span className="font-semibold text-blue-600 dark:text-blue-400">React.js</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">Python</span>
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a passionate <strong className="text-blue-600 dark:text-blue-400">Full-Stack Developer</strong> with expertise in building modern web applications using <strong>React.js, Python, and Flask</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in tech began with a fascination for problem-solving, which led me to explore everything from frontend design to backend architecture and machine learning implementations.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, learning new technologies, or sharing knowledge with the developer community.
              </p>
              
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition"
                >
                  <FiMail className="mr-2" />
                  Get In Touch
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl shadow-xl">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-2">
                    {['React', 'Python', 'Flask', 'ML', 'Java', 'SQL'].map((tech) => (
                      <div key={tech} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-center">
                        <span className="font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                      <div className="text-sm font-mono text-gray-600 dark:text-gray-300">about_me.js</div>
                    </div>
                    <div className="mt-3 font-mono text-sm">
                      <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> = {'{'}
                      <div className="ml-4">
                        <div><span className="text-green-600 dark:text-green-400">name</span>: <span className="text-yellow-600 dark:text-yellow-400">'Ritesh Chakramani'</span>,</div>
                        <div><span className="text-green-600 dark:text-green-400">role</span>: <span className="text-yellow-600 dark:text-yellow-400">'Full-Stack Developer'</span>,</div>
                        <div><span className="text-green-600 dark:text-green-400">passion</span>: <span className="text-yellow-600 dark:text-yellow-400">'Building innovative solutions'</span></div>
                      </div>
                      {'}'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Skills
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
                <div className="grid gap-6">
                  {[
                    {
                      title: "Web Development",
                      description: "Building responsive, performant web applications with modern frameworks",
                      icon: <FaCode className="text-2xl text-blue-500" />
                    },
                    {
                      title: "API Development",
                      description: "Designing robust RESTful APIs with proper documentation and security",
                      icon: <FaCode className="text-2xl text-purple-500" />
                    },
                    {
                      title: "AI Integration",
                      description: "Implementing machine learning models into practical applications",
                      icon: <FaCode className="text-2xl text-green-500" />
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                          <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.name}</h3>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-500 transition"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
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
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      <FaGithub className="mr-2" />
                      View Code
                    </a>
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
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <FiMail className="text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a 
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=riteshchakramani123@gmail.com" 
                          className="text-blue-500 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          riteshchakramani123@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <h4 className="font-medium mb-4">Connect with me</h4>
                      <div className="flex space-x-4">
                        <a 
                          href="https://github.com/rc-exe" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                        >
                          <FaGithub className="text-xl" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/ritesh-chakramani-016a0b235" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
                        >
                          <FaLinkedin className="text-xl text-blue-600" />
                        </a>
                       
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                      <textarea 
                        id="message" 
                        rows="4" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700"
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ritesh Chakramani
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
            </div>
            
            <div className="flex space-x-6">
              {['about', 'skills', 'projects', 'contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item}`} 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Ritesh Chakramani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
