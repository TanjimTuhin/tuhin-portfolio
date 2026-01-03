"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef } from "react"; // Added useRef

// --- Swiper and WorkSliderBtns Imports Removed ---

// --- Icons Removed ---

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

// --- PROJECTS DATA ---
// (Ensure placeholders are updated, added 'details' array and provided links)
const projects = [
  // Existing Project 1
  {
    num: "01",
    category: "Portfolio Website",
    title: "Personal Portfolio",
    description:
      "This project showcases my skills, projects, and professional background. Built with Next.js, React, Tailwind CSS, and Framer Motion for a clean, responsive, and animated user experience.",
    stack: [ { name: "Next.js" }, { name: "React JS" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }, { name: "JavaScript" }, ],
    image: "/assets/work/thumb2.jpg",
    live: "https://tuhin-portfolio-2jvt.vercel.app/",
    github: "https://github.com/Md-tuhin-Islam/tuhin-portfolio",
    details: [
        "Implemented smooth page transitions using Framer Motion.",
        "Utilized Tailwind CSS for responsive design.",
        "Structured components logically using React best practices."
    ]
  },
  // Added Projects from CV
  {
    num: "02",
    category: "Embedded/IoT",
    title: "SIM Recharge Token System",
    description:
      "Developed an MCU-based system (ESP-32) to generate unique, encrypted tokens for SIM recharge or energy meter authentication, featuring custom AES encryption, GLCD, and keypad integration.",
    stack: [{ name: "C++ (ESP-IDF)" }, { name: "ESP-32" }, { name: "Cryptography" }, { name: "Hardware" }],
    image: "/assets/work/thumb_placeholder.png", // REPLACE
    live: "", // User will provide later
    github: "", // User will provide later
    details: [
        "Created a custom AES-based encryption system for token security.",
        "Programmed ESP-32 microcontroller.",
        "Integrated GLCD display and keypad for user interaction."
    ]
  },
  {
    num: "03",
    category: "Robotics/IoT",
    title: "6 DOF RoverNet",
    description:
      "Built an IoT system for controlling a 6 Degrees-of-Freedom rover via a custom Android app. Involved 3D arm design (Blender), desktop/Android app development (Qt/QML/C++), and communication protocol creation.",
    stack: [{ name: "C++" }, { name: "Qt/QML" }, { name: "Blender" }, { name: "Android" }, { name: "IoT" }],
    image: "/assets/work/thumb_placeholder.png", // REPLACE
    live: "", // User will provide later
    github: "", // User will provide later
    details: [
        "Designed the robotic arm structure using Blender.",
        "Developed both desktop and Android control applications using Qt Creator (QML/C++).",
        "Established a communication protocol between the app and the robot."
    ]
  },
  {
    num: "04",
    category: "Computer Vision/AI",
    title: "Smart Face Attendance",
    description:
      "Developed a secure biometric attendance system capable of distinguishing real users from photos using liveness detection. Features a GUI dashboard for real-time monitoring and automated CSV reporting.",
    stack: [{ name: "Python" }, { name: "OpenCV" }, { name: "Yolo v8 nano" }, { name: "Tkinter" }, { name: "dlib" }, { name: "NumPy" }],
    image: "/assets/work/opencv.jpg",
    live: "", // User will provide later
    github: "https://github.com/TanjimTuhin/Smart-face-attendance", // User will provide later
    details: [
        "Implemented real-time face recognition using HOG descriptors and 128-d face encodings.",
        "Engineered an anti-spoofing 'Liveness Detection' system using Eye Aspect Ratio (EAR) logic.",
        "Built a responsive GUI with Tkinter including camera controls, statistical dashboards, and CSV export.",
        "Optimized image processing pipeline with NumPy for high-performance real-time video analysis."
    ]
  },
  {
    num: "05",
    category: "Hardware/PCB Design",
    title: "Mars Rover Wheel PCB",
    description:
      "Designed and fabricated a PCB using Proteus for controlling the wheels of the 'Mongol Barota' Mars rover, integrating Arduino and stepper motor drivers (TB6600) to reduce wiring complexity.",
    stack: [{ name: "Proteus" }, { name: "PCB Design" }, { name: "Arduino (C++)" }, { name: "Hardware" }],
    image: "/assets/work/thumb_placeholder.png", // REPLACE
    live: "", // User will provide later
    github: "", // User will provide later
    details: [
        "Used Proteus for schematic capture and PCB layout.",
        "Integrated Arduino library support within Proteus.",
        "Implemented noise filtering (decoupling capacitors) and thermal management (vias)."
    ]
  },
   {
    num: "06",
    category: "Robotics/AI",
    title: "Object Manipulating Robotic Arm",
    description:
      "Created a 7DOF robotic arm system using Raspberry Pi (brain) and Arduino Mega (controller) that uses a mobile camera and MobileNet-SSD model to detect, differentiate, and sort objects (cups/bottles) on a conveyor belt.",
    stack: [{ name: "Python" }, { name: "C++ (Arduino)" }, { name: "Raspberry Pi" }, { name: "ML/CV" }, { name: "Robotics" }],
    image: "/assets/work/thumb_placeholder.png", // REPLACE
    live: "https://photos.google.com/share/AF1QipM55U4oY3-T2aU1vR8g8J9o9Y9I9F9H9i9l9k9f9h9g9d9c9b9a9_9X8W7V6U5T4S3R2Q1P0O/photo/AF1QipN3-Z3Y2_2a2b2c2d2e2f2g2h2i2j2k2l2m2n2o2p?key=YOUR_KEY_HERE", // Example link format
    github: "", // User will provide later
    details: [
        "Utilized Raspberry Pi for processing and running the MobileNet-SSD object detection model.",
        "Used Arduino Mega as a buffer controller for precise servo motor movements.",
        "Implemented communication between Raspberry Pi and Arduino.",
        "System automatically sorts detected items into designated places."
    ]
  },
   {
    num: "07",
    category: "IoT",
    title: "IoT Gas & Fire Alarm",
    description:
      "Developed an ESP-32/8266 based real-time gas and fire alarm system utilizing the ThingSpeak IoT platform and IFTTT for notifications.",
    stack: [{ name: "C++ (ESP-IDF)" }, { name: "ESP-32/8266" }, { name: "IoT Platforms" }, { name: "Sensors" }],
    image: "/assets/work/thumb_placeholder.png", // REPLACE
    live: "https://drive.google.com/drive/u/1/folders/1b00beWyrGMyWIxYVy0kLt0e-0dcfOp3E?usp=drive_link",
    github: "", // User will provide later
    details: [
        "Processed analog sensor data on the ESP microcontroller.",
        "Connected to ThingSpeak cloud platform for data logging/visualization.",
        "Integrated IFTTT for sending real-time alerts."
    ]
  },
   {
    num: "08",
    category: "Game Dev",
    title: "Slime Between Us",
    description:
      "Co-created a game using the Unity engine and C# for a competition, involving gameplay design and integration of AI-generated music.",
    stack: [{ name: "Unity" }, { name: "C#" }],
    image: "/assets/work/thumb_placeholder.png", // REPLACE
    live: "https://www.facebook.com/galibrabat/videos/gdtv-game-development-competition-results-wasnt-expecting-this-much-response-ho/1149717148906958/", // FB Video Link
    github: "", // User will provide later
    details: [
        "Developed game mechanics and logic using C# in Unity.",
        "Designed gameplay elements.",
        "Integrated AI-generated background music."
    ]
  },
   {
    num: "09",
    category: "Robotics",
    title: "Cosmo-clench Robot",
    description:
      "Constructed a custom handmade robotic arm mounted on a remote-controlled car using Arduino Uno, ESP-8266 (transmitter), servo/DC motors, and joystick control. Modeled in Proteus.",
    stack: [{ name: "C++ (Arduino)" }, { name: "ESP-8266" }, { name: "Hardware" }, { name: "Proteus" }],
    image: "/assets/work/thumb_placeholder.png", // REPLACE
    live: "https://drive.google.com/drive/folders/1-YourFolderID?usp=drive_link", // Example GDrive Link format
    github: "", // User will provide later
    details: [
        "Built a remote-controlled robotic arm system.",
        "Used ESP-8266 for wireless communication.",
        "Controlled servo and DC motors with Arduino Uno.",
        "Simulated circuit design in Proteus."
    ]
  },
  {
    num: "10",
    category: "Image Processing",
    title: "Pseudo Coloring DIP",
    description:
      "Implemented digital image processing techniques to convert grayscale images to RGB and perform denoising using wavelet transforms and FFT.",
    stack: [{ name: "MATLAB/Python" }, { name: "Image Processing" }],
    image: "/assets/work/thumb_placeholder.png", // REPLACE
    live: "", // User will provide later
    github: "", // User will provide later
    details: [
        "Converted grayscale images to RGB color space.",
        "Applied wavelet transforms for image denoising.",
        "Utilized Fast Fourier Transform (FFT) techniques."
    ]
  },
  {
    num: "11",
    category: "Full Stack Web Dev",
    title: "Saj Beauty - E-commerce Platform",
    description:
      "Architected a pixel-perfect, high-performance beauty e-commerce web application replicating top-tier industry standards. Features a mobile-first 'app-like' navigation system, complex mega-menus, and a custom design system.",
    stack: [{ name: "Next.js 14" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "Zustand" }, { name: "PostgreSQL" }],
    image: "/assets/work/saj_beauty.png", // REPLACE
    live: "", // User will provide later
    github: "", // User will provide later
    details: [
        "Built a high-performance frontend using Next.js 14 App Router with Server Side Rendering (SSR) for optimal SEO.",
        "Engineered a complex 'Mega Menu' navigation and a dedicated mobile-first bottom navigation bar for an app-like UX.",
        "Implemented a scalable global state management system for Cart, Wishlist, and User Authentication using Zustand.",
        "Designed a modular UI component library with Tailwind CSS, including responsive product cards, flash sale timers, and concern-based filtering."
    ]
},
   {
    num: "12",
    category: "Robotics",
    title: "LFR + Soccer Bot",
    description:
      "Developed an autonomous line-following robot capable of playing soccer using Arduino and Mecanum wheels for omnidirectional movement.",
    stack: [{ name: "C++ (Arduino)" }, { name: "Robotics" }, { name: "Hardware" }],
    image: "/assets/work/thumb_placeholder.png", // REPLACE
    live: "https://www.instagram.com/p/your_post_id/", // Example Insta link format
    github: "", // User will provide later
    details: [
        "Programmed autonomous line-following behavior.",
        "Implemented soccer-playing logic.",
        "Utilized Mecanum wheels for enhanced mobility."
    ]
  },
];


// --- COMPONENT ---
const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  // Create refs for each project card to enable scrolling
  const projectRefs = useRef([]);

  const openModal = (project) => {
    setSelectedProject(project);
  }
  const closeModal = () => setSelectedProject(null);

  // Function to scroll to a specific project index
  const scrollToProject = (index) => {
    projectRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest", // Adjust scroll position if needed (e.g., 'start', 'center')
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-16"
    >
      <div className="container mx-auto">
        {/* Title */}
         <h1 className="text-4xl font-bold text-center mb-8 text-accent">My Projects</h1>

         {/* Top Navigation Links */}
         <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projects.map((project, index) => (
                <button
                    key={`nav-${index}`}
                    onClick={() => scrollToProject(index)}
                    className="bg-[#27272c] text-white/80 hover:bg-accent hover:text-primary text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-900" // Added focus styles
                    title={`Scroll to project ${project.num}: ${project.title}`}
                >
                    {project.num}
                </button>
            ))}
         </div>

         {/* Projects Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
               <motion.div
                 key={index}
                 // Assign ref to each card
                 ref={el => projectRefs.current[index] = el}
                 id={`project-${index}`} // Add ID for scrolling
                 className="glass-strong rounded-xl overflow-hidden group cursor-pointer shadow-lg border border-white/10 flex flex-col relative" // Added flex flex-col and glass effect
                 onClick={() => openModal(project)} // Open modal with this project's data
                 whileHover={{ 
                   y: -8, 
                   scale: 1.02,
                   boxShadow: "0px 20px 40px rgba(153, 0, 255, 0.3)",
                   borderColor: "rgba(153, 0, 255, 0.5)"
                 }} // Enhanced hover effect
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: index * 0.05 }} // Stagger animation on load
               >
                 {/* Gradient overlay on hover */}
                 <motion.div
                   className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                 />
                 {/* Image Container */}
                 <div className="relative w-full h-48 md:h-56 flex-shrink-0 z-10"> {/* Added flex-shrink-0 */}
                   <Image
                     src={project.image}
                     fill
                     className="object-contain bg-black/10" // Use contain, add slight bg for placeholders
                     alt={`Thumbnail for ${project.title}`}
                     quality={75}
                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                     onError={(e) => e.target.src = '/assets/work/thumb_placeholder.png'} // Fallback image
                   />
                   {/* Overlay on hover */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2">
                     <motion.span 
                       className="text-white text-sm font-semibold mb-2 px-3 py-1 glass rounded-full"
                       initial={{ y: 10, opacity: 0 }}
                       whileHover={{ y: 0, opacity: 1 }}
                     >
                       View Details
                     </motion.span>
                   </div>
                 </div>

                 {/* Text Content */}
                 <div className="p-4 flex flex-col flex-grow relative z-10"> {/* Added flex flex-col flex-grow */}
                    <span className="text-xs text-accent/80 mb-1 block">{project.category}</span>
                    <h3 className="text-lg font-semibold text-white mb-2 truncate flex-shrink-0">{project.title}</h3>
                    <p className="text-sm text-white/60 line-clamp-2 mb-3 flex-grow">{project.description}</p>
                    {/* Simplified Stack display */}
                    <div className="flex flex-wrap gap-1 mt-auto flex-shrink-0"> {/* Pushed to bottom */}
                        {project.stack.slice(0, 3).map((item, idx) => ( // Show first 3 techs
                            <span key={idx} className="text-xs bg-primary text-white/70 px-2 py-0.5 rounded">
                                {item.name}
                            </span>
                        ))}
                        {project.stack.length > 3 && <span className="text-xs text-white/50">...</span>}
                    </div>
                 </div>
               </motion.div>
            ))}
         </div>

      </div>

       {/* Project Detail Modal */}
       <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // Close on background click
          >
            <motion.div
              className="glass-strong p-6 md:p-8 rounded-xl w-full max-w-3xl max-h-[90vh] flex flex-col gap-4 relative shadow-2xl border border-accent/30 glow-accent" // Enhanced styling with glassmorphism
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button
                 onClick={closeModal}
                 className="absolute top-3 right-3 md:top-4 md:right-4 text-white/70 hover:text-accent text-3xl transition-colors z-10"
                 aria-label="Close"
              >
                 &times; {/* HTML times entity */}
              </button>

               {/* Modal Title */}
               <h2 className="text-2xl md:text-3xl font-bold text-accent mb-2 pr-8"> {/* Padding-right for close button */}
                  {selectedProject.title}
               </h2>

                {/* Modal Content - Scrollable */}
                <div className="overflow-y-auto pr-2 flex-1 space-y-4 custom-scrollbar"> {/* Allow content to scroll, added space-y and custom scrollbar class if needed */}
                    {/* Re-display stack for context */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-accent/90 mb-2">Technologies:</h3>
                        <ul className="flex gap-2 flex-wrap">
                            {selectedProject.stack.map((item, index) => (
                            <li key={index} className="text-xs bg-primary text-white/80 px-2 py-1 rounded">
                                {item.name}
                            </li>
                            ))}
                             {selectedProject.stack.length === 0 && <li className="text-xs text-white/50 italic">N/A</li>}
                        </ul>
                    </div>
                     {/* Display Description */}
                     <h4 className="text-md font-semibold text-accent/80 mb-1">Description:</h4>
                    <p className="text-white/80 text-base leading-relaxed whitespace-pre-line"> {/* Use pre-line to respect newlines */}
                        {selectedProject.description}
                    </p>

                    {/* Display Details (Bullet Points) if they exist */}
                    {selectedProject.details && selectedProject.details.length > 0 && (
                        <div className="pt-4 border-t border-white/10">
                             <h4 className="text-md font-semibold text-accent/80 mb-2">Key Points:</h4>
                             <ul className="list-disc pl-5 space-y-1">
                                {selectedProject.details.map((detail, index) => (
                                    <li key={index} className="text-white/70 text-sm leading-relaxed">{detail}</li>
                                ))}
                             </ul>
                        </div>
                    )}
                </div>

                 {/* Links at the bottom */}
                 <div className="flex items-center justify-end gap-4 pt-4 border-t border-white/10 mt-auto flex-shrink-0"> {/* Added flex-shrink-0 */}
                    {selectedProject.live && (
                         <Link href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm font-medium">
                            View Live
                         </Link>
                    )}
                     {selectedProject.github && (
                         <Link href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm font-medium">
                             View Code
                         </Link>
                     )}
                     {/* Add placeholder if no links */}
                     {!selectedProject.live && !selectedProject.github && <span className="text-sm text-white/40 italic">No links available</span>}
                 </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  );
};

export default Work;

