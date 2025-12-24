"use client";

import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaBriefcase,
  FaProjectDiagram,
  FaCode,
  FaGitAlt,
} from "react-icons/fa";

const stats = [
  {
    num: 2,
    text: "Years of Experience",
    icon: <FaBriefcase />,
    suffix: "+",
  },
  {
    num: 18,
    text: "Projects Completed",
    icon: <FaProjectDiagram />,
    suffix: "+",
  },
  {
    num: 8,
    text: "Technologies Mastered",
    icon: <FaCode />,
    suffix: "+",
  },
  {
    num: 300,
    text: "Code Commits",
    icon: <FaGitAlt />,
    suffix: "+",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 bg-gradient-to-t from-[#0f172a]/80 via-[#1e293b]/60 to-transparent border-t border-white/10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-purple-500/5"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 xl:gap-12 text-center"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.9 }
              }
              transition={{
                delay: 0.3 + index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="flex flex-col items-center justify-center gap-3 glass-strong px-8 py-8 rounded-2xl hover:glow-purple transition-all duration-300 min-w-[200px] group relative overflow-hidden"
            >
              {/* Animated gradient border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(45deg, #9900ff, #ff00ff, #00ffff, #9900ff)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-[2px] bg-[#1c1c22] rounded-2xl"></div>

              {/* Icon */}
              <motion.div
                className="text-4xl xl:text-5xl text-accent mb-2 relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.div>

              {/* Number */}
              <div className="relative z-10">
                <CountUp
                  end={item.num}
                  duration={2.5}
                  delay={isInView ? 0.5 + index * 0.1 : 0}
                  className="text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-accent via-pink-500 to-accent bg-clip-text text-transparent"
                />
                {item.suffix && (
                  <span className="text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-accent via-pink-500 to-accent bg-clip-text text-transparent">
                    {item.suffix}
                  </span>
                )}
              </div>

              {/* Text */}
              <p className="text-white/80 text-base xl:text-lg font-medium tracking-wide relative z-10">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Stats;