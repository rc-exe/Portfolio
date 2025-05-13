import { motion, AnimatePresence } from "framer-motion";

export const ThemeTransition = ({ darkMode }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={darkMode ? "dark" : "light"}
        initial={{ 
          scale: 0,
          borderRadius: "100%",
          opacity: 0,
          position: "fixed",
          top: "1rem", // Adjust based on your button position
          right: "1rem", // Adjust based on your button position
          width: "10px",
          height: "10px",
          backgroundColor: darkMode ? "#1f2937" : "#ffffff",
          zIndex: 40
        }}
        animate={{
          scale: 100,
          opacity: 1,
          borderRadius: "0%",
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }}
        exit={{ 
          scale: 0,
          opacity: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }}
        className="fixed inset-0 pointer-events-none"
      />
    </AnimatePresence>
  );
};