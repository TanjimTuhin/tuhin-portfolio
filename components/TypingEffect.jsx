"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingEffect = () => {
  const professions = [
    "Robotics Engineer.....",
    "Cybersecurity Researcher.....",
    "Network Enthusiast.....",
    "Game Developer.....",
    "Crypto Trader...."
  ];

  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentProfession = professions[currentProfessionIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentProfession.length) {
          setDisplayedText(currentProfession.slice(0, displayedText.length + 1));
          setTypingSpeed(100); // Faster typing
        } else {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), 2000); // Longer pause
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentProfession.slice(0, displayedText.length - 1));
          setTypingSpeed(50); // Faster deleting
        } else {
          // Move to next profession
          setIsDeleting(false);
          setCurrentProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentProfessionIndex, typingSpeed]);

  return (
    <motion.span
      className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-accent bg-clip-text text-transparent block mb-2 animate-gradient"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        className="inline-block text-accent ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default TypingEffect;