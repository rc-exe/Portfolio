import React from 'react';
import { motion } from 'framer-motion';

const Certifications = ({ certifications }) => {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold mb-12 pt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
  );
};

export default Certifications;