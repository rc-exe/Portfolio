import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold mb-12 pt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  Skills
</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Technical Skills */}
            <div className="p-4 sm:p-5 bg-white dark:bg-white/5 rounded-xl shadow-md dark:shadow-none backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
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
  );
};

export default Skills;
