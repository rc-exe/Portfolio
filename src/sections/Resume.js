import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaGithub, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Resume = () => {
  return (
    <section
      id="resume"
      className="max-w-5xl mx-auto py-4 px-3 sm:px-4"
      style={{ minHeight: '75vh' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Resume
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="md:flex md:space-x-4">
            {/* Left panel */}
            <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-purple-600 p-3 sm:p-4 text-white flex flex-col justify-between text-[10px] sm:text-xs leading-tight">
              <div className="text-center mb-4">
                <h3 className="text-base sm:text-lg font-bold mb-0.5">Ritesh Chakramani</h3>
                <p className="text-blue-100 text-[10px] sm:text-xs">Software Developer</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-1 border-b border-blue-400 pb-0.5">Contact</h4>
                <ul className="space-y-0.5 break-words">
                  <li className="flex items-center"><FiMail className="mr-1" /> riteshchakramani123@gmail.com</li>
                  <li className="flex items-center"><FaGithub className="mr-1" /> github.com/rc-exe</li>
                  <li className="flex items-center"><FaLinkedin className="mr-1" /> linkedin.com/in/ritesh-chakramani-016a0b235</li>
                  <li className="flex items-center"><FaInstagram className="mr-1" /> instagram.com/_ritesh_rc_</li>
                  <li className="flex items-center"><FaGlobe className="mr-1">
                    <a href="https://ritesh-chakramani.netlify.app/" target="_blank" rel="noreferrer" className="underline">
                      Portfolio
                    </a>
                  </FaGlobe></li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-1 border-b border-blue-400 pb-0.5">Skills</h4>
                <ul className="space-y-0.5">
                  <li>Java, Python, C++, C, SQL</li>
                  <li>HTML, CSS, JavaScript, PHP, ReactJS</li>
                  <li>MySQL, SQL Query Optimization</li>
                  <li>Arduino IDE, VS Code, Cygwin</li>
                  <li>Software Dev, Debugging, IoT Integration</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-1 border-b border-blue-400 pb-0.5">Soft Skills</h4>
                <ul className="space-y-0.5">
                  <li>Communication, Leadership, Time Mgmt</li>
                  <li>Quick Learner, Adaptive, Team Worker</li>
                </ul>
              </div>
            </div>

            {/* Right panel */}
            <div className="md:w-2/3 p-3 sm:p-4 text-[10px] sm:text-xs leading-snug">
              <div className="mb-3">
                <h4 className="font-semibold mb-1 border-b border-gray-200 dark:border-gray-700 pb-0.5">Summary</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Detail-oriented software developer skilled in Python, SQL, Java, and web technologies. Experienced in IoT apps, database optimization, and frontend/backend development. Passionate about scalable solutions and problem-solving.
                </p>
              </div>

              <div className="mb-3">
                <h4 className="font-semibold mb-1 border-b border-gray-200 dark:border-gray-700 pb-0.5">Experience</h4>
                <p className="font-medium">Software Developer Intern – Triwits Technologies</p>
                <p className="text-gray-600 dark:text-gray-400 mb-1 text-[9px] sm:text-xs">May 2024 – Oct 2024, Bijapur, Karnataka</p>
                <ul className="list-disc list-inside space-y-0.5 text-gray-700 dark:text-gray-300">
                  <li>Worked on Python/JavaScript/SQL-based web & desktop tools</li>
                  <li>Participated in agile sprints, code reviews, and debugging</li>
                  <li>Hands-on experience with version control & deployments</li>
                  <li>Collaborated on scalable client-focused software modules</li>
                </ul>
              </div>

              <div className="mb-3">
                <h4 className="font-semibold mb-1 border-b border-gray-200 dark:border-gray-700 pb-0.5">Education</h4>
                <ul className="space-y-1 text-sm">
                  <li><strong>MCA</strong> – Rani Channamma University, Belagavi (2023–2024) – CGPA: 7.63 | SGPA: 9.5 (IOT Project)</li>
                  <li><strong>BCA</strong> – CES Chetana BCA College, Vijayapura (2019–2022) – 74%</li>
                </ul>
              </div>

            <div className="mb-3">
  <h4 className="font-semibold mb-2 border-b border-gray-200 dark:border-gray-700 pb-0.5">Project Experience</h4>

  <h5 className="font-semibold mt-3 mb-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Freelancing Projects</h5>
  <ul className="space-y-1 text-gray-700 dark:text-gray-300 mb-3">
    <li>
      <strong>Keylogger & Security Monitoring Tool</strong><br />
      Built with Python, captures keystrokes, screenshots, and web usage. Designed in stealth mode for security monitoring.
    </li>
    <li>
      <strong>Education Website</strong><br />
      Developed using React. Responsive design with dynamic course content and user interaction features.
    </li>
    <li>
      <strong>Resume Parser</strong><br />
      React-based app that extracts and analyzes resume content, categorizes sections, and provides ATS-friendly suggestions.
    </li>
  </ul>

  <h5 className="font-semibold mt-3 mb-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Academic Projects</h5>
  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
    <li>
      <strong>IoT Weather Monitoring System</strong><br />
      Built using ESP8266, sensors, and Blynk platform. Features real-time alerts and analytics. Completed during MCA with SGPA 9.36.
    </li>
    <li>
      <strong>Advocate Management System</strong><br />
      Appointment and case management system for clients and lawyers. Completed during BCA with high academic evaluation (296/300).
    </li>
    <li>
      <strong>Emotion Visualizer Music System</strong><br />
      Python-based system that detects emotions and generates music/visual feedback accordingly.
    </li>
  </ul>
</div>


              <div className="mb-3">
                <h4 className="font-semibold mb-1 border-b border-gray-200 dark:border-gray-700 pb-0.5">Publication</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs">
                  “Weather Monitoring System Using IoT” published in IRJMETS.<br />
                  <a href="https://www.irjmets.com/paperdetail.php?paperId=6edd51683119cca0d3b6e8005e7d3c9c&title=WEATHER%2BMONITORING%2BSYSTEM%2BUSING%2BIOT" target="_blank" rel="noreferrer" className="text-blue-500 underline">View Publication</a>
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <a
                  href="/Ritesh Chakramani.pdf"
                  download
                  className="flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-medium hover:opacity-90 transition shadow-sm text-xs sm:text-sm"
                >
                  <FaFilePdf className="mr-1" />
                  Download Full Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
