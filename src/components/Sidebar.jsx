import { motion } from "framer-motion";
import {
  HiUser,
  HiCode,
  HiFolderOpen,
  HiBadgeCheck,
  HiDocumentText,
  HiMail,
} from "react-icons/hi";
import DarkModeToggle from "./DarkModeToggle"; // Your dark mode component

export default function Navbar() {
  const navItems = [
    { id: "about", icon: <HiUser /> },
    { id: "skills", icon: <HiCode /> },
    { id: "projects", icon: <HiFolderOpen /> },
    { id: "certifications", icon: <HiBadgeCheck /> },
    { id: "resume", icon: <HiDocumentText /> },
    { id: "contact", icon: <HiMail /> },
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="group flex items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-md rounded-full px-3 py-1.5 transition-all duration-500 ease-in-out hover:px-6 hover:gap-4 hover:transform hover:translate-x-[-4rem]"
          >
          {/* Logo with rotation */}
          <motion.a
            href="#hero"
            className="text-purple-600 dark:text-purple-400 font-bold text-md whitespace-nowrap"
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,
              ease: "linear",
            }}
          >
            RC
          </motion.a>

          {/* Icons */}
          <div className="flex items-center space-x-3 opacity-0 max-w-0 scale-95 group-hover:opacity-100 group-hover:max-w-screen-md group-hover:scale-100 transition-all duration-500 ease-in-out overflow-hidden">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xl p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-110"
                title={item.id.charAt(0).toUpperCase() + item.id.slice(1)}
              >
                {item.icon}
              </a>
            ))}

            <DarkModeToggle />
          </div>
        </motion.nav>
      </header>
    </div>
  );
}
