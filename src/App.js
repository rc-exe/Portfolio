import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { initSmoothScroll } from "./utils/SmoothScroll";
import background from "./assets/background.jpg";
import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import './sections/index.css'; // if in the same folder (like src/)

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showTip, setShowTip] = useState(false);
  const [currentTip, setCurrentTip] = useState('');
  const [tipsEnabled, setTipsEnabled] = useState(true);

  const developerTips = [
    "💡 Master both frontend & backend fundamentals before using frameworks.",
    "🛠️ Learn how to debug effectively – dev tools are powerful allies.",
    "🔗 Understand RESTful API design and how to consume APIs.",
    "🔐 Always validate and sanitize input on both client and server sides.",
    "🗃️ Learn indexing and query optimization for databases.",
    "🚀 Keep dependencies up to date, but test before deploying.",
    "📝 Implement consistent error logging in both front and back ends.",
    "🐳 Learn Docker & basic DevOps for smoother deployments.",
    "✅ Write tests – unit, integration, and E2E tests are lifesavers.",
    "🔒 Learn web security best practices (XSS, CSRF, SQL Injection).",
    "🧪 Use browser dev tools like a pro for layout and performance issues.",
    "📚 Write good documentation – your future self will thank you.",
    "⏱️ Automate common tasks to speed up your dev workflow.",
    "📈 Profile and optimize code for performance bottlenecks.",
    "🌱 Stay curious – the tech world evolves fast."
  ];

  useEffect(() => {
    initSmoothScroll();
  }, []);

useEffect(() => {
  if (showIntro || !tipsEnabled) return;

  const tipInterval = setInterval(() => {
    const randomTip = developerTips[Math.floor(Math.random() * developerTips.length)];
    setCurrentTip(randomTip);
    setShowTip(true);
    setTimeout(() => setShowTip(false), 5000);
  }, 10000);

  return () => clearInterval(tipInterval);

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [showIntro, tipsEnabled]);


  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, -200]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.7]);

  const root = document.documentElement;
  root.classList.add("theme-transition");

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

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      link: "https://www.credly.com/badges/aws-certified-cloud-practitioner",
      badge: "/badges/aws.png"
    },
    {
      name: "Python Programming Certification",
      issuer: "Simplilearn",
      date: "2025",
      link: "https://www.simplilearn.com/certificates/verify/",
      badge: "/badges/python.png"
    },
    {
      name: "ReactJS Certification",
      issuer: "Simplilearn",
      date: "2025",
      link: "https://www.simplilearn.com/certificates/verify/",
      badge: "/badges/react.png"
    }
  ];

  return (
    <>
      {showIntro ? (
        <Intro onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="relative min-h-screen bg-stone-50 dark:bg-gray-950 text-gray-800 dark:text-stone-200 overflow-x-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10 pointer-events-none"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              y: backgroundY,
              opacity
            }}
          />

          {/* 🧠 Developer Tip Notification */}
          <AnimatePresence>
            {showTip && (
              <motion.div
                key={currentTip}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="fixed bottom-4 right-4 max-w-xs p-4 bg-blue-700 text-white dark:bg-white dark:text-black rounded-lg shadow-lg z-50"
              >
                <div className="text-sm pr-5">{currentTip}</div>

                <div className="mt-2 flex items-center space-x-2">
                  <input
                    type="radio"
                    id="disableTips"
                    name="tips"
                    onChange={() => setTipsEnabled(false)}
                    className="text-blue-500 accent-blue-500"
                  />
                  <label htmlFor="disableTips" className="text-xs">Don't show tips again</label>
                </div>

                <button
                  onClick={() => setShowTip(false)}
                  className="absolute top-1 right-2 text-white dark:text-black hover:opacity-60 text-lg font-bold"
                >
                  ×
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-center">
            <Sidebar />
            <main className="w-full max-w-6xl mx-auto px-4">
              <Hero />
              <About />
              <Skills skills={skills} />
              <Projects projects={projects} />
              <Certifications certifications={certifications} />
              <Resume />
              <Contact />
              <Footer />
            </main>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
