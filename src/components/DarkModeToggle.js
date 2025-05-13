import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const DarkModeToggle = ({ onToggle }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-transition");

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    if (onToggle) onToggle(darkMode);

    const timeout = setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 100);

    return () => clearTimeout(timeout);
  }, [darkMode, onToggle]);

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className="p-1.5 rounded-full shadow-sm bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-700"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {darkMode ? (
        <motion.div
          key="sun"
          initial={{ opacity: 0, rotate: -30 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 30 }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-4 h-4 text-yellow-400" />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ opacity: 0, rotate: 30 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -30 }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-4 h-4 text-indigo-600 dark:text-indigo-300" />
        </motion.div>
      )}
    </motion.button>
  );
};

export default DarkModeToggle;
