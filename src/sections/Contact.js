import React from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 ">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold mb-12 pt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  Get In Touch
</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center mt-[70px]">
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

            <div className="flex flex-row items-center justify-center gap-6 mt-0 md:mt-[45px]">
              {[{
                href: "https://www.instagram.com/_ritesh_rc_/",
                icon: <FaInstagram className="text-neutral-800 dark:text-white text-2xl" />, label: "Instagram"
              }, {
                href: "https://www.linkedin.com/in/ritesh-chakramani-016a0b235",
                icon: <FaLinkedin className="text-neutral-800 dark:text-white text-2xl" />, label: "LinkedIn"
              }, {
                href: "https://github.com/rc-exe",
                icon: <FaGithub className="text-neutral-800 dark:text-white text-2xl" />, label: "GitHub"
              }].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.2)] hover:scale-105"
                >
                  {icon}
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-neutral-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;