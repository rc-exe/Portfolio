import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300 transition-transform duration-300 hover:rotate-12" />
      )}
    </button>
  );
};

export default DarkModeToggle;