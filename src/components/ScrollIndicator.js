import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ScrollIndicator() {
  const [opacity, setOpacity] = useState(1); // Track opacity state

  useEffect(() => {
    const handleScroll = () => {
      // Fade out the indicator if scroll position > 50px
      if (window.scrollY > 50) {
        setOpacity(0);
      } else {
        setOpacity(1); // Fade in when back at top
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run effect once

  return (
    <motion.div
      className="mt-20 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-sm mb-2 text-gray-500 dark:text-gray-400">
        Scroll to explore
      </span>
      <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
        <motion.div
          className="w-1 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}

export default ScrollIndicator;
