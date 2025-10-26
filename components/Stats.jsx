"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    num: 2,
    text: "Years of Experience",
  },
  {
    num: 18,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 300,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.4, duration: 0.8, ease: "easeOut" },
      }}
      className="py-10 bg-gradient-to-t from-[#0f172a] to-[#1e293b] border-t border-white/10"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 xl:gap-16 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 bg-white/5 px-6 py-6 rounded-xl backdrop-blur-sm hover:bg-accent/10 transition-all duration-300 shadow-sm"
            >
              <CountUp
                end={item.num}
                duration={3}
                delay={1}
                className="text-5xl xl:text-6xl font-extrabold text-accent"
              />
              <p className="text-white/70 text-lg font-medium tracking-wide">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;