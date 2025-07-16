import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
import './index.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    initSmoothScroll();
  }, []);

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
    { name: "Resume Scanner", link: "https://resume-ats-scorer.netlify.app/", description: "ATS-compatible resume parser with scoring system that analyzes and ranks resumes based on job descriptions", tags: ["Python", "NLP", "Flask"] },
    { name: "Online Code Editor", link: "https://online-code-editor-a9zz.onrender.com/", description: "Real-time collaborative code editor with syntax highlighting and live preview functionality", tags: ["React", "Node.js", "WebSockets"] },
    { name: "PDF Parser", link: "https://pdf-parser-b6e4.onrender.com/", description: "Tool to extract and analyze text from PDF documents with search functionality", tags: ["Python", "PyPDF2", "NLTK"] },
    { name: "Keylogger", link: "https://github.com/rc-exe/keylogger_rc", description: "Advanced system monitoring tool with encryption and remote reporting capabilities", tags: ["Python", "Security", "Encryption"] },
    { name: "Face Emotion Recognition", link: "https://github.com/rc-exe/face_recognition", description: "AI-powered emotion detection system using computer vision and deep learning", tags: ["Python", "OpenCV", "TensorFlow"] },
    { name: "Speech To Text", link: "https://github.com/rc-exe/Speech-To-Text", description: "Real-time speech recognition system with 95% accuracy using deep learning", tags: ["Python", "TensorFlow", "NLP"] }
  ];

  const certifications = [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "2025", link: "https://www.credly.com/badges/aws-certified-cloud-practitioner", badge: "/badges/aws.png" },
    { name: "Python Programming Certification", issuer: "Simplilearn", date: "2025", link: "https://www.simplilearn.com/certificates/verify/", badge: "/badges/python.png" },
    { name: "ReactJS Certification", issuer: "Simplilearn", date: "2025", link: "https://www.simplilearn.com/certificates/verify/", badge: "/badges/react.png" }
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
