"use client";

import { useState, useEffect } from "react";

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
          setTypingSpeed(150);
        } else {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentProfession.slice(0, displayedText.length - 1));
          setTypingSpeed(100);
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
  <span className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent block mb-2 animate-gradient">
    {displayedText}
    <span className="animate-pulse text-pink-500">|</span>
  </span>
);
};

export default TypingEffect;