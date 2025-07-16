import React from 'react';
import { motion } from 'framer-motion';
import WeatherWidget from '../components/WeatherWidget';
import ScrollIndicator from '../components/ScrollIndicator';
import Time from '../components/Time';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>

      <WeatherWidget />
      <Time />

      <motion.div
        className="max-w-4xl relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-lg md:text-xl mb-4 font-mono text-blue-500 dark:text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="animate-wave inline-block origin-bottom"></span> Hey there! I'm
        </motion.div>
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
            <svg className="w-6 h-6 group-hover:rotate-180 group-hover:bg-gray-50 dark:group-hover:bg-gray-100 text-gray-800 dark:text-gray-200 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 dark:fill-gray-100 group-hover:fill-gray-800 dark:group-hover:fill-gray-900"></path>
            </svg>
          </a>
        </motion.div>
        <ScrollIndicator />
      </motion.div>
    </section>
  );
};

export default Hero;
