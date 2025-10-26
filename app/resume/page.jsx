"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython,
  FaMicrochip, FaLinux, FaJava, FaBriefcase, FaGraduationCap, FaBrain, FaBookOpen
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiFlutter, SiCplusplus, SiOracle,
  SiDjango, SiTensorflow, SiScikitlearn,
} from "react-icons/si";

// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// --- DATA OBJECTS ---

// ABOUT ME (Updated with new profiles)
const about = {
  title: "About Me",
  description:
    "I am passionate about networking, cyber-security, machine learning, and IOT development. With a focus on delivering impactful solutions, I thrive in creating efficient and scalable systems. Beyond technical skills, I am a proactive learner, team player, and dedicated to continuous improvement.",
  info: [
    { fieldName: "Name", fieldValue: "Md. Tanjim Mahmud Tuhin" },
    { fieldName: "Phone", fieldValue: "(+880) 1303 933040" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Nationality", fieldValue: "Bangladeshi" },
    { fieldName: "Email", fieldValue: "tanjimtuhin06@gmail.com" },
    { fieldName: "Languages", fieldValue: "Bangla, English, Hindi" },
    { fieldName: "Github", fieldValue: "TanjimTuhin" },
    { fieldName: "LeetCode", fieldValue: "Tanjim Tuhin" },
    { fieldName: "HackerRank", fieldValue: "Tanjim Tuhin" },
    { fieldName: "Codeforces", fieldValue: "tanjim_tuhin" },
    { fieldName: "PicoCTF", fieldValue: "Yanjim_Yuhan" },
    { fieldName: "TryHackMe", fieldValue: "tanjimtuhin06" },
    { fieldName: "ResearchGate", fieldValue: "Md. Tanjim Mahmud Tuhin" },
    { fieldName: "LinkedIn", fieldValue: "Tanjim Tuhin" },
  ],
};

// EXPERIENCE
const experience = {
  icon: <FaBriefcase />,
  title: "My Experience",
  description: "Click on any role to see more details about my responsibilities.",
  items: [
    {
      company: "Cybernetics Hi Tech Solutions", position: "Embedded Software Engineer", duration: "Feb 2025 - Present",
      details: [
        "Worked on automation, advanced robotics, embedded systems, drones, and IoT.",
        "Developed firmware using C/C++, Arduino, ESP-32, STM-32, Raspberry-Pi.",
        "Optimized network configurations using Cisco Packet Tracer.",
        "Collaborated on deploying 5G network prototypes.",
      ],
    },
    { company: "BTRC", position: "Internship", duration: "Feb 2023 - Feb 2023", details: ["Gained insight into national telecommunication regulations.", "Assisted with monitoring spectrum usage and compliance."] },
    { company: "Tele-talk Bangladesh Limited", position: "Internship", duration: "Jan 2023 - Feb 2023", details: ["Observed network operations and maintenance procedures.", "Gained knowledge of 2G/3G/4G mobile network architecture."] },
  ],
};

// EDUCATION
const education = {
  icon: <FaGraduationCap />,
  title: "My Education",
  description: "My academic background and qualifications.",
  items: [
    { institution: "Daffodil International University (DIU)", degree: "Masters in Cybersecurity", duration: "Jan 2025 - present" },
    { institution: "Military Institute of Science and Technology (MIST)", degree: "BSc in EECE", duration: "Feb 2020 - March 2024" },
    { institution: "Rajshahi Govt. City College", degree: "HSC", duration: "2018 - 2020" },
    { institution: "Daud Public School and College", degree: "SSC", duration: "2016 - 2018" },
  ],
};

// SKILLS
const skills = {
  title: "My Skills", description: "Technologies and tools I am proficient in.",
  skillList: [
    { icon: <FaPython />, name: "Python" }, { icon: <SiCplusplus />, name: "C/C++" },
    { icon: <FaJava />, name: "Java" }, { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" }, { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" }, { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" }, { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaMicrochip />, name: "Arduino" }, { icon: <FaMicrochip />, name: "ESP-32" },
    { icon: <FaMicrochip />, name: "Raspberry-Pi" }, { icon: <FaLinux />, name: "Linux" },
    { icon: <SiOracle />, name: "MySQL" }, { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiScikitlearn />, name: "Scikit-learn" }, { icon: <FaFigma />, name: "Figma" },
  ],
};

// "Interested In" data for the dedicated tab
const interestedin = {
  icon: <FaBrain />,
  title: "Interested In",
  description:
    "I am interested in many areas, as knowledge has no boundaries. My favorite scientist and innovator, Nikola Tesla said - It's not the love you make; it's the love you give.",
  items: [
    {
      category: "Research Area",
      list: [
        "IIOT in cybersecurity", "Quantum Cryptography", "Quantum Computing",
        "Quantum neural network", "Quantum Machine Learning",
      ],
    },
    {
      category: "Sports",
      list: ["Formula 1 (F1)", "Basketball", "MMA", "Cycling", "Swimming"],
    },
    {
      category: "Master's Subject Focus",
      list: [
        "IoT and Cybersecurity", "Cybersecurity and Networking",
        "Network Engineering", "Automation and Robotics",
      ],
    },
    {
      category: "Broader Fields",
      list: [
        "Cyber Security", "Networking", "IOT & IIOT",
        "Embedded System", "AR VR",
      ],
    },
  ],
};

// Research & Publications data
const research = {
  icon: <FaBookOpen />,
  title: "Research & Publications",
  description: "My contributions to academic research.",
  items: [
    {
      type: "Undergraduate Thesis",
      title: "A Comparative Study of Inorganic Lead Halide Perovskites",
      points: [
        "Analyzed electrical, optical and mechanical properties of perovskite materials.",
        "Published research findings with IEEE conference paper."
      ],
    },
    {
      type: "IEEE Publication",
      title: "A Generalizing Violence Detection with a New Near-Real-World Violence Dataset",
      points: [
        "Co-authored research paper on machine learning applications for security systems.",
        "Developed novel dataset for improving violence detection algorithms."
      ],
    }
  ]
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

// --- COMPONENT ---
const Resume = () => {
  const [openedExperienceIndex, setOpenedExperienceIndex] = useState(null);
  const [expandedEducation, setExpandedEducation] = useState(null);
  const [expandedInterest, setExpandedInterest] = useState(null);
  const [expandedResearch, setExpandedResearch] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-6 sm:py-8 xl:py-12 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-7xl">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-8 xl:gap-[80px]">
          {/* Tab Buttons */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <TabsList className="flex flex-col w-full max-w-full sm:max-w-[380px] mx-auto xl:mx-10 gap-3 sm:gap-6">
              <TabsTrigger value="experience" className="text-sm sm:text-base">Experience</TabsTrigger>
              <TabsTrigger value="education" className="text-sm sm:text-base">Education</TabsTrigger>
              <TabsTrigger value="skills" className="text-sm sm:text-base">Skills</TabsTrigger>
              <TabsTrigger value="interestedin" className="text-sm sm:text-base">Interested In</TabsTrigger>
              <TabsTrigger value="research" className="text-sm sm:text-base">Research</TabsTrigger>
              <TabsTrigger value="about" className="text-sm sm:text-base">About me</TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Tab Content Area */}
          <div className="min-h-[10vh] w-full">

            {/* Experience Content */}
            <TabsContent value="experience" className="w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col gap-6 sm:gap-[30px] text-center xl:text-left"
              >
                <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl xl:text-4xl font-bold">{experience.title}</motion.h3>
                <motion.p variants={itemVariants} className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">{experience.description}</motion.p>
                <ScrollArea className="h-auto max-h-[500px] sm:max-h-[600px]">
                  <motion.ul variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-[30px] pr-2 sm:pr-4">
                    {experience.items.map((item, index) => (
                      <motion.li key={index} variants={itemVariants} className="bg-[#27272c] rounded-xl overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.03, boxShadow: "0px 8px 15px rgba(0, 255, 153, 0.15)" }}
                          transition={{ type: "spring", stiffness: 300 }}
                          onClick={() => setOpenedExperienceIndex(openedExperienceIndex === index ? null : index)}
                          className="p-4 sm:p-6 cursor-pointer"
                        >
                          <div className="flex flex-col gap-2">
                            <h3 className="text-lg sm:text-xl font-bold text-accent text-left">{item.position}</h3>
                            <span className="bg-primary text-white text-xs sm:text-sm py-1 px-3 rounded-full w-fit">{item.duration}</span>
                            <p className="text-white/80 text-sm sm:text-base text-left">{item.company}</p>
                          </div>
                        </motion.div>
                        <AnimatePresence>
                          {openedExperienceIndex === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden bg-primary/50"
                            >
                              <ul className="list-disc pl-6 sm:pl-10 pr-4 sm:pr-6 py-3 sm:py-4 space-y-2">
                                {item.details.map((detail, detailIndex) => (
                                  <motion.li
                                    key={detailIndex}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: detailIndex * 0.1 }}
                                    className="text-white/70 text-xs sm:text-sm text-left"
                                  >
                                    {detail}
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <ScrollBar />
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Education Content */}
            <TabsContent value="education" className="w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col gap-6 sm:gap-[30px] text-center xl:text-left"
              >
                <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl xl:text-4xl font-bold">{education.title}</motion.h3>
                <motion.p variants={itemVariants} className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">{education.description}</motion.p>
                <ScrollArea className="h-auto max-h-[500px]">
                  <motion.ul variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-[30px] pr-2 sm:pr-4">
                    {education.items.sort((a, b) => b.duration.localeCompare(a.duration)).map((item, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0px 10px 20px rgba(168, 85, 247, 0.2)",
                          transition: { type: "spring", stiffness: 300 }
                        }}
                        onClick={() => setExpandedEducation(expandedEducation === index ? null : index)}
                        className="bg-[#27272c] min-h-[160px] sm:h-auto py-4 sm:py-6 px-6 sm:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer relative overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-accent/10"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="text-accent text-base sm:text-lg relative z-10">{item.duration}</span>
                        <h3 className="text-base sm:text-xl max-w-[260px] text-center lg:text-left relative z-10">{item.degree}</h3>
                        <div className="flex items-center gap-3 relative z-10">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm sm:text-base">{item.institution}</p>
                        </div>
                        <AnimatePresence>
                          {expandedEducation === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 relative z-10"
                            >
                              <p className="text-white/50 text-xs sm:text-sm italic">Click to collapse</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <ScrollBar />
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Skills Content */}
            <TabsContent value="skills" className="w-full h-full">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col gap-6 sm:gap-[30px]"
              >
                <div className="flex flex-col gap-4 sm:gap-[30px] text-center xl:text-left">
                  <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl xl:text-4xl font-bold">{skills.title}</motion.h3>
                  <motion.p variants={itemVariants} className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">{skills.description}</motion.p>
                </div>
                <motion.ul variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.div
                              whileHover={{
                                scale: 1.1,
                                rotate: [0, -5, 5, 0],
                                boxShadow: "0px 10px 30px rgba(0, 255, 153, 0.3)"
                              }}
                              transition={{ type: "spring", stiffness: 300 }}
                              className="w-full h-[100px] sm:h-[120px] xl:h-[150px] bg-[#27272c] rounded-xl flex justify-center items-center group cursor-pointer relative overflow-hidden"
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div className="text-4xl sm:text-5xl xl:text-6xl group-hover:text-accent transition-all duration-300 relative z-10">{skill.icon}</div>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent><p className="capitalize text-sm">{skill.name}</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </TabsContent>

            {/* Interested In Content */}
            <TabsContent value="interestedin" className="w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col gap-6 sm:gap-[30px] text-center xl:text-left"
              >
                <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl xl:text-4xl font-bold">{interestedin.title}</motion.h3>
                <motion.p variants={itemVariants} className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">
                  {interestedin.description}
                </motion.p>
                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-2 sm:mt-6">
                  {interestedin.items.map((categoryItem, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0px 10px 25px rgba(0, 255, 153, 0.2)"
                      }}
                      onClick={() => setExpandedInterest(expandedInterest === index ? null : index)}
                      className="bg-[#27272c] p-4 sm:p-6 rounded-xl flex flex-col gap-3 sm:gap-4 cursor-pointer relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="flex items-center gap-3">
                        {interestedin.icon && <span className="text-accent text-xl sm:text-2xl">{interestedin.icon}</span>}
                        <h4 className="text-lg sm:text-2xl font-semibold text-accent">{categoryItem.category}</h4>
                      </div>
                      <AnimatePresence>
                        <motion.ul
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: expandedInterest === index ? 1 : 0.7 }}
                          className="list-disc pl-6 sm:pl-8 space-y-1 sm:space-y-2"
                        >
                          {categoryItem.list.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: itemIndex * 0.05 }}
                              whileHover={{ x: 5, color: "#00ff99" }}
                              className="text-white/80 text-sm sm:text-lg transition-colors"
                            >
                              {item}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Research Content */}
            <TabsContent value="research" className="w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col gap-6 sm:gap-[30px] text-center xl:text-left"
              >
                <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl xl:text-4xl font-bold">{research.title}</motion.h3>
                <motion.p variants={itemVariants} className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">{research.description}</motion.p>
                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-2 sm:mt-6">
                  {research.items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0px 15px 30px rgba(168, 85, 247, 0.3)",
                        borderColor: "rgba(0, 255, 153, 0.5)"
                      }}
                      onClick={() => setExpandedResearch(expandedResearch === index ? null : index)}
                      className="bg-[#27272c] p-4 sm:p-6 rounded-xl flex flex-col gap-3 border border-white/10 cursor-pointer relative overflow-hidden transition-all duration-300"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-accent/5"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="text-accent text-base sm:text-lg font-medium relative z-10">{item.type}</span>
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 relative z-10">{item.title}</h4>
                      <AnimatePresence>
                        <motion.ul
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: expandedResearch === index ? 1 : 0.7 }}
                          className="list-disc pl-5 space-y-1 relative z-10"
                        >
                          {item.points.map((point, pointIndex) => (
                            <motion.li
                              key={pointIndex}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: pointIndex * 0.1 }}
                              className="text-white/70 text-xs sm:text-sm"
                            >
                              {point}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </AnimatePresence>
                      {item.link && (
                        <motion.a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 5 }}
                          className="text-accent hover:underline text-xs sm:text-sm mt-3 self-start relative z-10"
                        >
                          View Publication →
                        </motion.a>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* About Content */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col gap-6 sm:gap-[30px]"
              >
                <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl xl:text-4xl font-bold">{about.title}</motion.h3>
                <motion.p variants={itemVariants} className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">{about.description}</motion.p>
                <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {about.info.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "#a855f7",
                        boxShadow: "0px 8px 20px rgba(168, 85, 247, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-[#27272c] p-3 sm:p-4 rounded-lg border-l-4 border-purple-500 cursor-pointer relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-accent/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="text-white/60 text-xs sm:text-sm relative z-10">{item.fieldName}</span>
                      <p className="text-base sm:text-xl font-medium truncate relative z-10 group-hover:text-accent transition-colors">{item.fieldValue}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;