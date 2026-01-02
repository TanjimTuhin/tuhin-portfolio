"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython,
  FaMicrochip, FaLinux, FaJava, FaBriefcase, FaGraduationCap, FaBrain, FaBookOpen, FaTrophy, FaCog
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
    "Find me just in Linked In, Quora, Insta, Threads and Research Gate",
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
      company: "Red Data", position: "R&D Engineer", duration: "Jan 2026- present",
      details: [
        "Research and development in automation, advanced robotics, embedded systems and IoT.",
      
      ],
    },
    {
      company: "Hidden Investigations", position: "Researcher", duration: "Dec 2025- present",
      details: [
        "Vulnerability Research & Discovery (Zero-Day Identification,Fuzz Testing, Exploit Development)",
        "Conducted security assessments and penetration testing on various systems.",
        "Analyzed and documented security vulnerabilities in software and hardware.",
        "Developed custom exploits for identified vulnerabilities.",
      ],
    },
    {
      company: "Cybernetics Hi Tech Solutions", position: "Robotics Engineer", duration: "Feb 2025 - Dec 2025",
      details: [
        "Worked on automation, advanced robotics, embedded systems, drones, and IoT.",
        "Developed firmware using C/C++, Arduino, ESP-32, STM-32, Raspberry-Pi.",
        "Optimized network configurations using Cisco Packet Tracer.",
        "Collaborated on deploying 5G network prototypes.",
      ],
    },
    {
      company: "RBD SOFTWARE & TECHNOLOGY LIMITED", position: "Unity Developer", duration: "September 2024 - February 2025",
      details: [
        "Developed and maintained Unity-based applications and games.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions.",
        "Implemented game mechanics, UI systems, and performance optimizations.",
      ],
    },
    {
      company: "Made Easy BD", position: "Senior teacher", duration: "Jan 2024 - Dec 2025",
      details: [
        "Led training sessions and workshops for students.",
        "Developed and updated curriculum materials.",
        "Evaluated student performance and provided feedback.",
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
  title: "My Skills", description: "I am in love with a fairytale even though it hurts.",
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
    },
  ],
};

// Achievements data
const achievements = {
  icon: <FaTrophy />,
  title: "My Achievements",
  description: "Click on any achievement to see more details.",
  subsections: [
    {
      name: "Game",
      items: [
        {
          title: "PUBG",
          highestPosition: "Top 10",
          comment: "Achieved consistent top 10 rankings in competitive matches."
        },
        {
          title: "Need for Speed",
          highestPosition: "1st Place",
          comment: "Won multiple racing championships and set track records."
        },
        {
          title: "Call of Duty",
          highestPosition: "Top 5",
          comment: "Maintained high K/D ratio and strategic gameplay excellence."
        },
      ],
    },
    {
      name: "Academic",
      items: [
        {
          title: "Academic Excellence",
          highestPosition: "Dean's List (DIU)",
          comment: "Maintained outstanding academic performance throughout studies."
        },
      ],
    },
    {
      name: "Brain Game",
      items: [
        {
          title: "Chess Tournament",
          highestPosition: "2nd Place",
          comment: "Competed in regional chess championships."
        },
      ],
    },
    {
      name: "Competition",
      items: [
        {
          title: "Hackathon Winner",
          highestPosition: "1st Place",
          comment: "Led team to victory in intra university coding competition."
        },
      ],
    },
    {
      name: "Miscellaneous",
      items: [
        {
          title: "Try Hack me",
          highestPosition: "Top 2% in the world",
          comment: "Active contributor to multiple open source projects."
        },
      ],
    },
  ],
};

// Familiar With data
const familiarWith = {
  icon: <FaCog />,
  title: "Familiar With",
  description: "Technologies and domains I am familiar with across different sectors.",
  subsections: [
    {
      name: "Electrical",
      items: [
        { title: "PCB Design", description: "Printed Circuit Board design and layout." },
        { title: "VLSI", description: "Very Large Scale Integration design and implementation." },
        { title: "Satellite Communication", description: "Satellite communication systems and protocols." },
        { title: "Microprocessor", description: "Microprocessor architecture and programming." },
        { title: "Networking", description: "Network design, configuration, and management." },
      ],
    },
    {
      name: "Mechanical",
      items: [
        { title: "SolidWorks", description: "3D CAD modeling and mechanical design." },
      ],
    },
    {
      name: "Robotics",
      items: [
        { title: "Firmware Development", description: "Low-level firmware programming for robotic systems." },
        { title: "Inverse Kinematics", description: "Mathematical modeling and control of robotic manipulators." },
        { title: "Control Systems", description: "Design and implementation of control algorithms." },
        { title: "IoT System", description: "Internet of Things system integration and development." },
        { title: "Automation", description: "Automated systems design and implementation." },
      ],
    },
    {
      name: "Development",
      items: [
        { title: "App Development", description: "Mobile and desktop application development." },
        { title: "Website Development", description: "Web application and website development." },
        { title: "Unity Game Development", description: "Game development using Unity engine." },
        { title: "Embedded Software Development", description: "Software development for embedded systems." },
        { title: "Qt", description: "Cross-platform application development with Qt framework." },
      ],
    },
    {
      name: "Designing",
      items: [
        { title: "Blender", description: "3D modeling, animation, and rendering." },
        { title: "AutoCAD 2D", description: "2D drafting and technical drawing." },
      ],
    },
    {
      name: "Automation",
      items: [
        { title: "n8n", description: "Agentic workflow automation." },
      ],
    },
  ],
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

// --- COMPONENT ---
const ResumeContent = () => {
  const searchParams = useSearchParams();
  const [openedExperienceIndex, setOpenedExperienceIndex] = useState(null);
  const [expandedEducation, setExpandedEducation] = useState(null);
  const [expandedInterest, setExpandedInterest] = useState(null);
  const [expandedResearch, setExpandedResearch] = useState(null);
  const [expandedAchievement, setExpandedAchievement] = useState({});
  const [expandedFamiliarWith, setExpandedFamiliarWith] = useState({});

  const [activeTab, setActiveTab] = useState("experience");

  const [showBackToTop, setShowBackToTop] = useState(false);

  const sidebarTriggerClass = "transition-all duration-300 hover:bg-purple-600/80 hover:translate-x-1 hover:shadow-[0_4px_12px_rgba(124,58,237,0.4)] data-[state=active]:border-l-4 data-[state=active]:border-purple-300 data-[state=active]:pl-5";

  const tabFromQuery = searchParams.get("tab");

  useEffect(() => {
    if (!tabFromQuery) return;

    const allowedTabs = new Set([
      "experience",
      "education",
      "skills",
      "interestedin",
      "research",
      "achievements",
      "familiarwith",
      "about",
    ]);

    if (!allowedTabs.has(tabFromQuery)) return;

    setActiveTab(tabFromQuery);

    requestAnimationFrame(() => {
      const targetId =
        tabFromQuery === "experience"
          ? "resume-experience"
          : tabFromQuery === "skills"
            ? "resume-skills"
            : null;

      if (!targetId) return;
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [tabFromQuery]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeIn" } }}
      className="min-h-screen flex items-start justify-center py-6 sm:py-8 xl:py-12 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-7xl w-full">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col xl:flex-row gap-8 xl:gap-[80px]">
          {/* Tab Buttons */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="xl:sticky xl:top-8 xl:h-fit xl:w-auto w-full"
          >
            <TabsList className="flex flex-col w-full max-w-full sm:max-w-[380px] mx-auto xl:mx-10 gap-3 sm:gap-6">
              <TabsTrigger value="experience" className={`${sidebarTriggerClass} text-sm sm:text-base`}>Experience</TabsTrigger>
              <TabsTrigger value="education" className={`${sidebarTriggerClass} text-sm sm:text-base`}>Education</TabsTrigger>
              <TabsTrigger value="skills" className={`${sidebarTriggerClass} text-sm sm:text-base`}>Skills</TabsTrigger>
              <TabsTrigger value="interestedin" className={`${sidebarTriggerClass} text-sm sm:text-base`}>Interested In</TabsTrigger>
              <TabsTrigger value="research" className={`${sidebarTriggerClass} text-sm sm:text-base`}>Research</TabsTrigger>
              <TabsTrigger value="achievements" className={`${sidebarTriggerClass} text-sm sm:text-base`}>Achievements</TabsTrigger>
              <TabsTrigger value="familiarwith" className={`${sidebarTriggerClass} text-sm sm:text-base`}>Familiar With</TabsTrigger>
              <TabsTrigger value="about" className={`${sidebarTriggerClass} text-sm sm:text-base`}>About me</TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Tab Content Area */}
          <div className="w-full max-h-[calc(100vh-8rem)] overflow-y-auto xl:max-h-[calc(100vh-4rem)] pb-20">

            {/* Experience Content */}
            <TabsContent value="experience" className="w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col gap-6 sm:gap-[30px] text-center xl:text-left"
              >
                <motion.h3 id="resume-experience" variants={itemVariants} className="text-2xl sm:text-3xl xl:text-4xl font-bold">{experience.title}</motion.h3>
                <motion.p variants={itemVariants} className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">{experience.description}</motion.p>
                <motion.ul variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-[30px] pr-2 sm:pr-4 pb-6">
                  {experience.items.map((item, index) => (
                    <motion.li key={index} variants={itemVariants} className="glass-strong rounded-xl overflow-hidden border border-white/10 relative group">
                        <motion.div
                          whileHover={{
                            scale: 1.03,
                            y: -3,
                            boxShadow: "0px 15px 30px rgba(153, 0, 255, 0.3)",
                            borderColor: "rgba(153, 0, 255, 0.5)",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                          onClick={() => setOpenedExperienceIndex(openedExperienceIndex === index ? null : index)}
                          className="p-4 sm:p-6 cursor-pointer relative z-10"
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
                <motion.ul variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-[30px] pr-2 sm:pr-4 pb-6">
                  {education.items.sort((a, b) => b.duration.localeCompare(a.duration)).map((item, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        boxShadow: "0px 15px 30px rgba(168, 85, 247, 0.3)",
                        borderColor: "rgba(168, 85, 247, 0.5)",
                      }}
                      onClick={() => setExpandedEducation(expandedEducation === index ? null : index)}
                      className="glass-strong min-h-[160px] sm:h-auto py-4 sm:py-6 px-6 sm:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer relative overflow-hidden border border-white/10"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-accent/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
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
                  <motion.h3 id="resume-skills" variants={itemVariants} className="text-2xl sm:text-3xl xl:text-4xl font-bold">{skills.title}</motion.h3>
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
                                y: -5,
                                boxShadow: "0px 15px 40px rgba(153, 0, 255, 0.4)",
                                borderColor: "rgba(153, 0, 255, 0.5)",
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                rotate: { type: "tween", duration: 0.35, ease: "easeInOut" },
                              }}
                              className="w-full h-[100px] sm:h-[120px] xl:h-[150px] glass-strong rounded-xl flex justify-center items-center group cursor-pointer relative overflow-hidden border border-white/10"
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
                        y: -3,
                        boxShadow: "0px 15px 35px rgba(153, 0, 255, 0.3)",
                        borderColor: "rgba(153, 0, 255, 0.5)",
                      }}
                      onClick={() => setExpandedInterest(expandedInterest === index ? null : index)}
                      className="glass-strong p-4 sm:p-6 rounded-xl flex flex-col gap-3 border border-white/10 cursor-pointer relative overflow-hidden transition-all duration-300"
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
                        y: -3,
                        boxShadow: "0px 20px 40px rgba(168, 85, 247, 0.4)",
                        borderColor: "rgba(168, 85, 247, 0.6)",
                      }}
                      onClick={() => setExpandedResearch(expandedResearch === index ? null : index)}
                      className="glass-strong p-4 sm:p-6 rounded-xl flex flex-col gap-3 border border-white/10 cursor-pointer relative overflow-hidden transition-all duration-300"
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

            {/* Achievements Content */}
            <TabsContent value="achievements" className="w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col gap-6 sm:gap-[30px] text-center xl:text-left h-full"
              >
                <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl xl:text-4xl font-bold">{achievements.title}</motion.h3>
                <motion.p variants={itemVariants} className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">{achievements.description}</motion.p>
                <ScrollArea className="h-[400px] sm:h-[500px] xl:h-[600px]">
                  <motion.div variants={containerVariants} className="flex flex-col gap-6 sm:gap-8 pr-2 sm:pr-4 pb-4">
                    {achievements.subsections.map((subsection, subsectionIndex) => (
                      <motion.div key={subsectionIndex} variants={itemVariants} className="flex flex-col gap-4">
                        <motion.h4
                          className="text-xl sm:text-2xl font-semibold text-accent flex items-center gap-3"
                        >
                          {achievements.icon && <span className="text-accent text-xl sm:text-2xl">{achievements.icon}</span>}
                          {subsection.name}
                        </motion.h4>
                        <motion.div
                          variants={containerVariants}
                          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[30px]"
                        >
                          {subsection.items.map((item, itemIndex) => {
                            const itemKey = `${subsectionIndex}-${itemIndex}`;
                            const isExpanded = expandedAchievement[itemKey] === true;
                            return (
                              <motion.div
                                key={`${subsection.name}-${itemIndex}`}
                                variants={itemVariants}
                                className="bg-[#27272c] rounded-xl overflow-hidden"
                              >
                                <motion.div
                                  whileHover={{ scale: 1.03, boxShadow: "0px 8px 15px rgba(0, 255, 153, 0.15)" }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setExpandedAchievement(prev => ({
                                      ...prev,
                                      [itemKey]: !prev[itemKey],
                                    }));
                                  }}
                                  className="p-4 sm:p-6 cursor-pointer"
                                >
                                  <div className="flex flex-col gap-2">
                                    <h3 className="text-lg sm:text-xl font-bold text-accent text-left">{item.title}</h3>
                                    <span className="bg-primary text-white text-xs sm:text-sm py-1 px-3 rounded-full w-fit">
                                      {item.highestPosition}
                                    </span>
                                  </div>
                                </motion.div>
                                <AnimatePresence mode="wait">
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3, ease: "easeInOut" }}
                                      className="overflow-hidden bg-primary/50"
                                    >
                                      <div className="p-4 sm:p-6 space-y-2">
                                        <div className="text-white/90 text-sm sm:text-base">
                                          <span className="font-semibold text-accent">Highest Position: </span>
                                          {item.highestPosition}
                                        </div>
                                        {item.comment && (
                                          <div className="text-white/70 text-xs sm:text-sm italic">
                                            {item.comment}
                                          </div>
                                        )}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                  <ScrollBar />
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Familiar With Content */}
            <TabsContent value="familiarwith" className="w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col gap-6 sm:gap-[30px] text-center xl:text-left h-full"
              >
                <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl xl:text-4xl font-bold">{familiarWith.title}</motion.h3>
                <motion.p variants={itemVariants} className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">{familiarWith.description}</motion.p>
                <ScrollArea className="h-[400px] sm:h-[500px] xl:h-[600px]">
                  <motion.div variants={containerVariants} className="flex flex-col gap-6 sm:gap-8 pr-2 sm:pr-4 pb-4">
                    {familiarWith.subsections.map((subsection, subsectionIndex) => (
                      <motion.div key={subsectionIndex} variants={itemVariants} className="flex flex-col gap-4">
                        <motion.h4
                          className="text-xl sm:text-2xl font-semibold text-accent flex items-center gap-3"
                        >
                          {familiarWith.icon && <span className="text-accent text-xl sm:text-2xl">{familiarWith.icon}</span>}
                          {subsection.name}
                        </motion.h4>
                        <motion.div
                          variants={containerVariants}
                          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[30px]"
                        >
                          {subsection.items.map((item, itemIndex) => {
                            const itemKey = `${subsectionIndex}-${itemIndex}`;
                            const isExpanded = expandedFamiliarWith[itemKey] === true;
                            return (
                              <motion.div
                                key={`${subsection.name}-${itemIndex}`}
                                variants={itemVariants}
                                className="bg-[#27272c] rounded-xl overflow-hidden"
                              >
                                <motion.div
                                  whileHover={{ scale: 1.03, boxShadow: "0px 8px 15px rgba(0, 255, 153, 0.15)" }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setExpandedFamiliarWith(prev => ({
                                      ...prev,
                                      [itemKey]: !prev[itemKey],
                                    }));
                                  }}
                                  className="p-4 sm:p-6 cursor-pointer"
                                >
                                  <div className="flex flex-col gap-2">
                                    <h3 className="text-lg sm:text-xl font-bold text-accent text-left">{item.title}</h3>
                                  </div>
                                </motion.div>
                                <AnimatePresence mode="wait">
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3, ease: "easeInOut" }}
                                      className="overflow-hidden bg-primary/50"
                                    >
                                      <div className="p-4 sm:p-6 space-y-2">
                                        {item.description && (
                                          <div className="text-white/70 text-xs sm:text-sm">
                                            {item.description}
                                          </div>
                                        )}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                  <ScrollBar />
                </ScrollArea>
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
                        y: -2,
                        borderColor: "#a855f7",
                        boxShadow: "0px 10px 25px rgba(168, 85, 247, 0.4)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="glass-strong p-3 sm:p-4 rounded-lg border-l-4 border-purple-500 cursor-pointer relative overflow-hidden group"
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

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-accent text-primary text-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ResumePage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading resume...</div>}>
      <ResumeContent />
    </Suspense>
  );
};

export default ResumePage;