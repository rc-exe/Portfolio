import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaFilePdf, FaInstagram, FaGlobe } from "react-icons/fa";
import { FiMail, FiExternalLink } from "react-icons/fi";
import background from "./assets/background.jpg";
import WeatherWidget from './components/WeatherWidget';
import ScrollIndicator from "./components/ScrollIndicator";
import Time from './components/Time';
import './index.css';
import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";

function App() {
    const [showIntro, setShowIntro] = useState(true);

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, -200]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.7]);
  const root = document.documentElement;
   root.classList.add("theme-transition");
  
  
  const projects = [
     { 
      name: "Resume Scanner", 
      link: "https://resume-ats-scorer.netlify.app/",
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
      name: "PDF Parser", 
      link: "https://pdf-parser-b6e4.onrender.com/",
      description: "Tool to extract and analyze text from PDF documents with search functionality",
      tags: ["Python", "PyPDF2", "NLTK"]
    },
    { 
      name: "Keylogger", 
      link: "https://github.com/rc-exe/keylogger_rc",
      description: "Advanced system monitoring tool with encryption and remote reporting capabilities",
      tags: ["Python", "Security", "Encryption"]
    },
    { 
      name: "Face Emotion Recognition", 
      link: "https://github.com/rc-exe/face_recognition",
      description: "AI-powered emotion detection system using computer vision and deep learning",
      tags: ["Python", "OpenCV", "TensorFlow"]
    },
    
   
    { 
      name: "Speech To Text", 
      link: "https://github.com/rc-exe/Speech-To-Text",
      description: "Real-time speech recognition system with 95% accuracy using deep learning",
      tags: ["Python", "TensorFlow", "NLP"]
    }
  ];

  const skills = [
    { name: "React.js", level: 70 },
    { name: "Python", level: 85 },
    { name: "Flask", level: 60 },
    { name: "Machine Learning", level: 75 },
    { name: "Java", level: 85 },
    { name: "MySQL", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 75 },
    { name: "HTML/CSS", level: 95 },
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      link: "https://www.credly.com/badges/aws-certified-cloud-practitioner",
      badge: "/badges/aws.png" // Path in public/badges/
    },
    {
      name: "Python Programming Certification",
      issuer: "Simplilearn",
      date: "2025",
      link: "https://www.simplilearn.com/certificates/verify/",
      badge: "/badges/python.png" // Path in public/badges/
    },
    {
      name: "ReactJS Certification",
      issuer: "Simplilearn",
      date: "2025",
      link: "https://www.simplilearn.com/certificates/verify/",
      badge: "/badges/react.png" // Path in public/badges/
    }
  ];

  return (
    
     <>
       {showIntro ? (
        <Intro
          onComplete={() => {
            setShowIntro(false);
          }}
        />
      ) : (
<div className="relative min-h-screen bg-stone-50 dark:bg-gray-950 text-gray-800 dark:text-stone-200 overflow-x-hidden flex"><div className="flex justify-end mb-8">
  
      <Sidebar />
      <main className="w-full">
    {/* Sections */}
    <section className="flex items-center justify-center min-h-screen"></section>
    <section className="flex items-center justify-center min-h-screen"></section>
  </main>
    </div>
    


      {/* Main Content */}
      <div className="w-full">
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

{/* Hero Section */}
<section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-float"></div>
    <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>
  </div>

  {/* Weather Widget - positioned top right */}
  <WeatherWidget />
{/* Time Component - positioned top left */}
<Time />
  <motion.div
    className="max-w-4xl relative z-10"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Animated greeting with typing effect */}
    <motion.div 
      className="text-lg md:text-xl mb-4 font-mono text-blue-500 dark:text-blue-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <span className="animate-wave inline-block origin-bottom"></span> Hey there! I'm
    </motion.div>
    
    {/* Name with more dramatic gradient */}
    <motion.h1
      className="text-5xl md:text-7xl font-bold mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "backOut" }}
    >
      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Ritesh Chakramani
      </span>
    </motion.h1>
    
    {/* Animated subtitle */}
<motion.p
  className="text-lg md:text-2xl lg:text-3xl mb-8 max-w-2xl mx-auto leading-relaxed"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
>
  Building <span className="font-semibold text-blue-600 dark:text-blue-400">digital experiences</span> that 
  <span className="relative mx-2">
    <span className="relative z-10">matter</span>
    <span className="absolute bottom-0 left-0 w-full h-2 bg-purple-400/30 -rotate-1"></span>
  </span>
  with modern tech
</motion.p>

    
    {/* Enhanced CTA buttons */}
    <motion.div
      className="flex flex-col sm:flex-row justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.8 }}
    >
      <a
  href="#projects"
  className="flex justify-center items-center gap-2 mx-auto shadow-xl text-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 dark:border-gray-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-white dark:hover:text-gray-900 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-3 overflow-hidden border-2 rounded-full group"
>
  Explore My Work
  <svg
    className="w-6 h-6 group-hover:rotate-180 group-hover:bg-gray-50 dark:group-hover:bg-gray-100 text-gray-800 dark:text-gray-200 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-gray-800 dark:fill-gray-100 group-hover:fill-gray-800 dark:group-hover:fill-gray-900"
    ></path>
  </svg>
</a>



      
    
    </motion.div>
    
    {/* Scroll indicator */}
    <ScrollIndicator/>
  </motion.div>
</section>

        {/* About Section */}
<section id="about" className="py-24 px-6 max-w-7xl mx-auto">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    viewport={{ once: true }}
  >
    {/* Section Title */}
    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>

    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div className="space-y-6">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm a <span className="text-blue-600 dark:text-blue-400 font-semibold">Full-Stack Developer</span> passionate about crafting scalable web apps using <strong>React.js</strong>, <strong>Python</strong>, and <strong>Flask</strong>.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          My journey began with a love for solving problems and evolved into full-stack development and machine learning. I enjoy building elegant user interfaces and robust APIs.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Outside coding, I contribute to open-source, mentor developers, and explore the latest tech trends.
        </p>

        <div className="pt-6">
          <a href="#contact">
            <motion.button
  className="relative px-8 py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
  whileHover={{ 
    y: -2,
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.3)"
  }}
  whileTap={{ 
    scale: 0.98,
    boxShadow: "0 2px 10px -3px rgba(99, 102, 241, 0.5)"
  }}
  transition={{
    type: "spring",
    stiffness: 400,
    damping: 15
  }}
>
  {/* Animated gradient background */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
  </div>
  
  {/* Button content */}
  <span className="relative z-10 flex items-center justify-center gap-2">
    <span>Get In Touch</span>
    <svg 
      className="w-4 h-4 transition-transform group-hover:translate-x-1"
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </span>
  
  {/* Ripple effect (requires JS) */}
  <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <span className="absolute top-0 left-0 w-full h-full bg-white/10"></span>
  </span>
</motion.button>
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative">
        {/* Glowing Card */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-60 blur-md -z-10"></div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700">
          {/* Tech Stack */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[].map((tech) => (
              <div key={tech} className="text-sm text-center py-2 px-3 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-inner font-medium hover:scale-105 transition">
                {tech}
              </div>
            ))}
          </div>

          {/* Code Block */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5 font-mono text-sm text-gray-800 dark:text-gray-100 shadow-inner">
            <div className="flex items-center mb-3">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full mr-4"></span>
                <span className="text-xs text-gray-600 dark:text-gray-400">about_me.js</span>
</div>
<pre className="bg-gray-600 dark:bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm font-mono">
  <code>
    <span className="text-yellow-400">const</span> <span className="text-blue-400">developer</span> <span className="text-white">= </span>&#123;{"\n"}
    &nbsp;&nbsp;<span className="text-green-400">name</span>: <span className="text-pink-400">'Ritesh Chakramani'</span>,{"\n"}
    &nbsp;&nbsp;<span className="text-green-400">role</span>: <span className="text-pink-400">'Full-Stack Developer'</span>,{"\n"}
    &nbsp;&nbsp;<span className="text-green-400">passion</span>: <span className="text-pink-400">'Building innovative solutions'</span>{"\n"}
    &#125;;
  </code>
</pre>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</section>

        {/* Skills Section */}
<section id="skills" className="py-20 px-6 ">
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Technical Skills */}
        <div className="p-6 bg-white dark:bg-white/5 rounded-2xl shadow-md dark:shadow-none backdrop-blur-md">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Technical Skills</h3>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
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

        {/* What I Do */}
        <div className="p-6  ">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">What I Do</h3>
         
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0, delay: index * 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer p-5 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md transition-all duration 100 ease-in-out hover:shadow-xl"
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg shadow-sm">
          {item.icon}
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-100">{item.title}</h4>
          <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
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
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-[4px]">
            Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.0, delay: index * 0.0 }}
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

        {/* Certifications Section */}
<section id="certifications" className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.0, delay: index * 0.0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.0 } }}
          >
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <img 
                  src={cert.badge} 
                  alt={`${cert.name} badge`} 
                  className="h-32 w-32 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-2">
                {cert.issuer}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-4">
                Issued: {cert.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>



        {/* Resume Section */}
<section id="resume" className="py-20 px-6 max-w-6xl mx-auto">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-[4px]">
      Resume
    </h2>

    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-purple-600 p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Ritesh Chakramani</h3>
            <p className="text-blue-100">Software Developer</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiMail className="mr-3" />
                riteshchakramani123@gmail.com
              </li>
              <li className="flex items-center">
                <FaGithub className="mr-3" />
                github.com/rc-exe
              </li>
              <li className="flex items-center">
                <FaLinkedin className="mr-3" />
                linkedin.com/in/ritesh-chakramani
              </li>
              <li className="flex items-center">
                <FaInstagram className="mr-3" />
                instagram.com/_ritesh_rc_
              </li>
              <li className="flex items-center">
                <FaGlobe className="mr-3" />
                <a href="https://ritesh-chakramani.netlify.app/" target="_blank" rel="noreferrer">Portfolio</a>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2">Skills</h4>
            <ul className="space-y-2 text-sm">
              <li>Java, Python, C++, C, SQL</li>
              <li>HTML, CSS, JavaScript, PHP</li>
              <li>MySQL, SQL Query Optimization</li>
              <li>Arduino IDE, VS Code, Cygwin</li>
              <li>IoT Integration, Web Designing</li>
            </ul>
          </div>
        </div>

        <div className="md:w-2/3 p-8">
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              Professional Summary
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Enthusiastic and detail-oriented software developer with expertise in Python, SQL, Java, and web technologies.
              Experienced in IoT applications, database management, and web development. Passionate about solving problems
              and creating efficient, scalable solutions.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              Education
            </h4>
            <ul className="space-y-2">
              <li>
                <strong>MCA</strong>, Rani Channamma University, Belagavi (2023-2024) – CGPA: 7.63 | SGPA: 9.5
              </li>
              <li>
                <strong>BCA</strong>, CES Chetana BCA College, Vijayapura (2019–2022) – 75%
              </li>
              <li>
                <strong>PUC</strong>, Sri N.B. Patil PU Science College (2018–2019)
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              Project Experience
            </h4>
            <ul className="space-y-4">
              <li>
                <h5 className="font-medium text-gray-800 dark:text-gray-200">
                  IoT-Based Weather Monitoring & Alert System
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Developed a weather monitoring system using ESP8266, DHT11, BMP180, and other sensors. Integrated real-time alerts via Blynk app with data visualization and analytics. Scored 364/400 (SGPA: 9.36).
                </p>
              </li>
              <li>
                <h5 className="font-medium text-gray-800 dark:text-gray-200">
                  Advocate Management System (Web Application)
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Created a multi-user web system with appointment scheduling for advocates and clients. Scored 296/300 in the academic project.
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              Publication
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              "Weather Monitoring System Using IoT" – Published in IRJMETS. 
              <br />
              <a
                className="text-blue-500 underline"
                href="https://www.irjmets.com/paperdetail.php?paperId=6edd51683119cca0d3b6e8005e7d3c9c&title=WEATHER%2BMONITORING%2BSYSTEM%2BUSING%2BIOT"
                target="_blank"
                rel="noreferrer"
              >
                View Publication
              </a>
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="/RITESH CHAKRAMANI.pdf"
              download
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition shadow-lg"
            >
              <FaFilePdf className="mr-2" />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</section>

        {/* Contact Section */}
<section id="contact" className="py-20 px-6 ">
  <div className="max-w-2xl mx-auto">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information Card */}
<div className="text-center mt-[70px]"> {/* Added margin-top */}
  <div className="space-y-6">
    <div className="flex items-start justify-center space-x-4">
      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
        <FiMail className="text-blue-500" />
      </div>
      <div className="text-left">
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
  </div>
</div>


        {/* Social Media Card - Enhanced Uiverse.io Design */}
        <div className="card relative h-full min-h-[50px] overflow-hidden rounded-xl shadow-md">
          <div className="background absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 opacity-90 dark:from-purple-900 dark:to-blue-800"></div>
          
          <div className="logo absolute top-6 left-0 right-0 text-center text-2xl font-bold text-white">
            Socials
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6">
          <a 
              href="https://www.instagram.com/_ritesh_rc_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="box box1 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110"
            >
              <span className="icon text-white">
                <FaInstagram className="text-2xl" />
              </span>
            </a>
            

            <a 
              href="https://www.linkedin.com/in/ritesh-chakramani-016a0b235" 
              target="_blank" 
              rel="noopener noreferrer"
              className="box box2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110"
            >
              <span className="icon text-white">
                <FaLinkedin className="text-2xl" />
              </span>
            </a>
            <a 
              href="https://github.com/rc-exe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="box box3 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110"
            >
              <span className="icon text-white">
                <FaGithub className="text-2xl" />
              </span>
            </a>
           
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
                {['about', 'skills', 'projects', 'certifications', 'resume', 'contact'].map((item) => (
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
            
           
          </div>
        </footer>
      </div>
    </div>
  )}
  </>
  );
}

export default App;
