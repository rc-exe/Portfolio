import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
       <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 pt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  About Me
</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="space-y-5 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a <span className="text-blue-600 dark:text-blue-400 font-semibold">Full-Stack Developer</span> passionate about crafting scalable web apps using <strong>React.js</strong>, <strong>Python</strong>, and <strong>Flask</strong>.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey began with a love for solving problems and evolved into full-stack development and machine learning. I enjoy building elegant user interfaces and robust APIs.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Outside coding, I contribute to open-source, mentor developers, and explore the latest tech trends.
            </p>

            <div className="pt-4 sm:pt-6">
              <a href="#contact">
                <motion.button
                  className="relative px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden w-full sm:w-auto"
                  whileHover={{ y: -2, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.98, boxShadow: "0 2px 10px -3px rgba(99, 102, 241, 0.5)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
                  </div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Get In Touch</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute top-0 left-0 w-full h-full bg-white/10"></span>
                  </span>
                </motion.button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-60 blur-md -z-10"></div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6"></div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 sm:p-5 font-mono text-sm text-gray-800 dark:text-gray-100 shadow-inner overflow-x-auto">
                <div className="flex items-center mb-3">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4"></span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">about_me.js</span>
                </div>
                <pre className="whitespace-pre-wrap">
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
  );
};

export default About;
