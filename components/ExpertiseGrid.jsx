"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Gamepad2, Network, GraduationCap } from "lucide-react";

const expertise = [
  {
    title: "AI & ML",
    description: "NLP, TensorFlow, PyTorch, Keras",
    icon: <Brain className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Cyber Security",
    description: "Penetration Testing, Security Audits, Ethical Hacking",
    icon: <Shield className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Game Developer",
    description: "Unity, Unreal Engine, Game Design",
    icon: <Gamepad2 className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Network Engineer",
    description: "Cisco, Network Security, Cloud Infrastructure",
    icon: <Network className="w-8 h-8" />,
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Research",
    description: "4 Publications, Best Paper Award",
    icon: <GraduationCap className="w-8 h-8" />,
    gradient: "from-yellow-500 to-amber-500"
  }
];

const ExpertiseGrid = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          My Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(153, 0, 255, 0.3)"
              }}
              className="glass-strong rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`bg-gradient-to-r ${item.gradient} p-3 rounded-lg w-fit mb-4 relative z-10`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2 relative z-10">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;
