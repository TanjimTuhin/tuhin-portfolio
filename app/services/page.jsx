"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Corrected imports using specific paths (verified)
import {
  FaMicrochip, FaRobot, FaNetworkWired, FaShieldAlt, FaMemory,
  FaBrain, FaCode, FaWifi, FaArrowRight, FaTimes,
  FaVrCardboard, FaCloud, FaLink // Icons for new section
} from "react-icons/fa";

// Data for the 8 main services based on CV
const servicesData = [
  {
    icon: <FaMicrochip />,
    title: "Embedded Systems & Firmware",
    shortDescription: "Developing firmware for IoT devices and microcontrollers.",
    details: [
      "Firmware development using C/C++.",
      "Experience with Arduino, ESP-32, STM-32, Raspberry-Pi.",
      "Low-level hardware interaction and optimization.",
      "Testing and debugging embedded systems.",
    ]
  },
  {
    icon: <FaWifi />,
    title: "IoT Solutions",
    shortDescription: "Designing and implementing connected device ecosystems.",
    details: [
      "Building end-to-end IoT systems (sensor to cloud).",
      "Real-time data monitoring and control (e.g., ThingSpeak).",
      "Communication protocols for device connectivity.",
      "Integration with mobile/web applications.",
    ]
  },
  {
    icon: <FaRobot />,
    title: "Robotics Development",
    shortDescription: "Designing, building, and programming robotic systems.",
    details: [
      "Experience with multi-DOF robotic arms and rovers.",
      "Servo and DC motor control.",
      "Integration with sensors and cameras.",
      "Control via custom applications (Android/Desktop).",
      "Participation in robotics competitions (e.g., ARC'23).",
    ]
  },
  {
    icon: <FaNetworkWired />,
    title: "Network Configuration",
    shortDescription: "Optimizing network setups using simulation tools.",
    details: [
      "Network design and simulation using Cisco Packet Tracer.",
      "Configuration of routers, switches, and firewalls.",
      "Troubleshooting network connectivity issues.",
      "Understanding of TCP/IP, routing protocols.",
      "Experience with 5G network prototyping collaboration.",
    ]
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity Services",
    shortDescription: "Consulting based on ongoing Master's studies.",
    details: [
      "Focus areas: IoT Security, Network Security.",
      "Understanding of security principles and best practices.",
      "Interest in Quantum Cryptography and IIoT Security.",
      "Knowledge from MSc in Cybersecurity program.",
    ]
  },
  {
    icon: <FaMemory />,
    title: "PCB Design",
    shortDescription: "Creating custom circuit boards for electronic projects.",
    details: [
      "PCB layout design using Proteus software.",
      "Component selection and placement.",
      "Designing for manufacturability (e.g., JLC PCB).",
      "Techniques for noise reduction (decoupling capacitors) and heat dissipation (thermal vias).",
    ]
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning Apps",
    shortDescription: "Applying ML for tasks like object detection.",
    details: [
      "Implementation of models like MobileNet-SSD.",
      "Object detection using computer vision.",
      "Data processing and analysis.",
      "Using Python with libraries like TensorFlow/Scikit-learn.",
    ]
  },
  {
    icon: <FaCode />,
    title: "Custom Software Dev",
    shortDescription: "Building applications using Python and C++.",
    details: [
      "Proficient in Python and C++ (including Arduino Sketch).",
      "Developing control software for hardware (Robotics, IoT).",
      "Creating desktop/mobile applications (e.g., using Qt Creator).",
      "Scripting for automation and data processing.",
    ]
  },
];

// NEW: Data for Emerging Tech Interests
const emergingTechData = [
    { icon: <FaVrCardboard />, title: "AR / VR" },
    { icon: <FaCloud />, title: "Cloud Technologies" },
    { icon: <FaLink />, title: "Blockchain Concepts" },
];


const Services = () => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);

  const handleOpen = (index) => setSelectedServiceIndex(index);
  const handleClose = () => setSelectedServiceIndex(null);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        {/* Main Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#27272c] p-6 rounded-xl flex flex-col justify-between items-start gap-4 cursor-pointer relative overflow-hidden h-[250px] group" // Added group class
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 255, 153, 0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              layout
              onClick={() => handleOpen(index)}
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4">
                <div className="text-4xl text-accent mb-2">{service.icon}</div>
                 <h3 className="text-xl font-bold text-white group-hover:text-accent transition-all duration-300 line-clamp-2">
                    {service.title}
                 </h3>
              </div>
              {/* Short Description */}
               <p className="text-white/70 text-sm leading-relaxed line-clamp-4">
                 {service.shortDescription}
               </p>
               {/* Arrow Icon - Hint for click */}
               <div className="text-accent text-2xl absolute bottom-4 right-4 group-hover:translate-x-1 transition-transform duration-300">
                  <FaArrowRight />
               </div>
            </motion.div>
          ))}
        </motion.div>

        {/* NEW: Emerging Tech Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1, y: 0,
            transition: { delay: 1.4, duration: 0.5, ease: "easeOut" }, // Slightly delayed animation
          }}
          className="mt-16 pt-8 border-t border-white/20" // Add margin and border separator
        >
            <h2 className="text-3xl font-bold text-center mb-8 text-accent">Also Exploring...</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                 {emergingTechData.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="bg-[#232329] p-4 rounded-lg flex flex-col items-center justify-center gap-3 h-[150px] group cursor-default" // Simpler box
                        whileHover={{ scale: 1.08, boxShadow: "0px 6px 12px rgba(167, 139, 250, 0.15)" }} // Use purple shadow on hover
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <div className="text-4xl text-purple-400 group-hover:text-accent transition-colors duration-300">{tech.icon}</div>
                        <h4 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors duration-300">{tech.title}</h4>
                    </motion.div>
                 ))}
            </div>
        </motion.div>

        {/* Modal/Popup for Main Service Details */}
        <AnimatePresence>
          {selectedServiceIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            >
              <motion.div
                className="bg-[#1c1c22] p-8 rounded-xl w-full max-w-2xl max-h-[80vh] flex flex-col gap-6 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                   onClick={handleClose}
                   className="absolute top-4 right-4 text-white/70 hover:text-accent text-3xl transition-colors"
                >
                   <FaTimes />
                </button>
                 {/* Icon and Title */}
                 <div className="flex items-center gap-4">
                    <div className="text-5xl text-accent">{servicesData[selectedServiceIndex].icon}</div>
                     <h2 className="text-3xl font-bold text-white">
                        {servicesData[selectedServiceIndex].title}
                     </h2>
                  </div>
                  {/* Details List */}
                  <div className="overflow-y-auto pr-2">
                      <ul className="list-disc pl-6 space-y-3">
                        {servicesData[selectedServiceIndex].details.map((detail, i) => (
                          <li key={i} className="text-white/80 text-lg leading-relaxed">{detail}</li>
                        ))}
                      </ul>
                  </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;

