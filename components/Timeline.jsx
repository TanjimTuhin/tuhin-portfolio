"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const timelineEvents = [
  {
    year: "2000",
    title: "Born",
    description: "Started my journey in Bogura Cantonment, Bangladesh",
    icon: <Calendar className="w-5 h-5" />,
    type: "milestone"
  },
  {
    year: "2005",
    title: "First Question",
    description: "From where time started?",
    icon: <Calendar className="w-5 h-5" />,
    type: "milestone"
  },
  {
    year: "2020",
    title: "Education",
    description: "Started Electrical Engineering degree at MIST",
    icon: <GraduationCap className="w-5 h-5" />,
    type: "education"
  },
  {
    year: "2025",
    title: "Research Publication",
    description: "Published research papers in semiconductor materials",
    icon: <Briefcase className="w-5 h-5" />,
    type: "work"
  },
  {
    year: "2024",
    title: "Unemployed",
    description: "Finiding purpose of my life",
    icon: <Briefcase className="w-5 h-5" />,
    type: "work"
  },
  {
    year: "2024",
    title: "First Job",
    description: "Started career as a Robotics Engineer",
    icon: <Briefcase className="w-5 h-5" />,
    type: "work"
  },
  {
    year: "2025-Present",
    title: "Present",
    description: "Learning cybersecurity and doing AI projects",
    icon: <Briefcase className="w-5 h-5" />,
    type: "milestone"
  }
];

const Timeline = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          My Journey
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-purple-500 transform -translate-x-1/2" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-4 h-4 rounded-full border-4 border-background ${
                      event.type === 'education' 
                        ? 'bg-green-500 border-green-500' 
                        : event.type === 'work'
                        ? 'bg-blue-500 border-blue-500'
                        : 'bg-purple-500 border-purple-500'
                    }`}
                  />
                </div>
                
                {/* Content card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(153, 0, 255, 0.2)"
                  }}
                  className={`glass-strong rounded-xl p-6 border border-white/10 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-16' : 'md:ml-auto md:mr-16'
                  } md:w-5/12`}
                >
                  {/* Icon and year */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${
                      event.type === 'education' 
                        ? 'bg-green-500/20 text-green-400' 
                        : event.type === 'work'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {event.icon}
                    </div>
                    <span className="text-accent font-semibold">
                      {event.year}
                    </span>
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {event.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
