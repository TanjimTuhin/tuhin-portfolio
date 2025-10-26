"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython,
  FaMicrochip, FaLinux, FaJava, FaBriefcase, FaGraduationCap, FaBrain,FaBookOpen // Icon for Research
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiFlutter, SiCplusplus, SiOracle,
  SiDjango, SiTensorflow, SiScikitlearn,
} from "react-icons/si";

// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"; // Keep ScrollArea import for Experience/Education

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
    { institution: "Rajshahi Govt. City College", degree: "HSC", duration: "2018 - 2020" }, // REMEMBER TO UPDATE THIS
    { institution: "Daud Public School and College", degree: "SSC", duration: "2016 - 2018" }, // REMEMBER TO UPDATE THIS
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
    "I am interested in many areas, as knowledge has no boundaries. My favorite scientist and innovator, Nikola Tesla said - It’s not the love you make; it’s the love you give.",
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
      list: ["Formula 1 (F1)", "Basketball", "MMA", "Cycling","Swimming"],
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

// NEW: Research & Publications data
const research = {
    icon: <FaBookOpen />, // New Icon
    title: "Research & Publications",
    description: "My contributions to academic research.",
    items: [
        {
            type: "Undergraduate Thesis",
            title: "A Comparative Study of Inorganic Lead Halide Perovskites",
            points: [
                "Analyzed electrical, optical and mechanical properties of perovskite materials.",
                "Published research findings with IEEE conference paper." // Consider adding link if available
            ],
            // Optional: Add link property if you have one
            // link: "IEEE_LINK_HERE"
        },
        {
            type: "IEEE Publication",
            title: "A Generalizing Violence Detection with a New Near-Real-World Violence Dataset",
            points: [
                "Co-authored research paper on machine learning applications for security systems.",
                "Developed novel dataset for improving violence detection algorithms."
            ],
            // Optional: Add link property
            // link: "IEEE_LINK_HERE"
        }
    ]
};

// --- COMPONENT ---
const Resume = () => {
  const [openedExperienceIndex, setOpenedExperienceIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          {/* Tab Buttons */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="interestedin">Interested In</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Tab Content Area */}
          <div className="min-h-[70vh] w-full"> {/* Adjusted min-height for potentially longer content */}

            {/* Experience Content */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]"> {/* Keep ScrollArea for experience if it can get long */}
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-4"> {/* Added padding for scrollbar */}
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#27272c] rounded-xl overflow-hidden">
                        <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 15px rgba(0, 255, 153, 0.15)" }} transition={{ type: "spring", stiffness: 300 }} onClick={() => setOpenedExperienceIndex(openedExperienceIndex === index ? null : index)} className="p-6 cursor-pointer">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-xl font-bold text-accent text-left">{item.position}</h3>
                            <span className="bg-primary text-white text-sm py-1 px-3 rounded-full w-fit">{item.duration}</span>
                          </div>
                          <p className="text-white/80 mt-2 text-left">{item.company}</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: openedExperienceIndex === index ? 1 : 0, height: openedExperienceIndex === index ? "auto" : 0, marginTop: openedExperienceIndex === index ? "0px" : "0px", }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden bg-primary/50">
                          <ul className="list-disc pl-10 pr-6 py-4 space-y-2">
                            {item.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-white/70 text-sm text-left">{detail}</li>
                            ))}
                          </ul>
                        </motion.div>
                      </li>
                    ))}
                  </ul>
                  <ScrollBar />
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Content */}
            <TabsContent value="education" className="w-full">
               <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                {/* ScrollArea potentially kept if many items, but removed fixed height */}
                <ScrollArea className="max-h-[400px]"> {/* Changed to max-h */}
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-4"> {/* Added padding */}
                    {education.items.sort((a, b) => b.duration.localeCompare(a.duration)).map((item, index) => (
                        <li key={index} className="bg-[#27272c] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent text-lg">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                    ))}
                  </ul>
                  <ScrollBar />
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Content - REMOVED ScrollArea and fixed height */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                {/* Removed ScrollArea wrapper */}
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#27272c] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent><p className="capitalize">{skill.name}</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Interested In Content - Changed Layout to Grid */}
            <TabsContent value="interestedin" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{interestedin.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {interestedin.description}
                </p>
                {/* Changed to grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  {interestedin.items.map((categoryItem, index) => (
                    <div key={index} className="bg-[#27272c] p-6 rounded-xl flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        {interestedin.icon && <span className="text-accent text-2xl">{interestedin.icon}</span>}
                        <h4 className="text-2xl font-semibold text-accent">{categoryItem.category}</h4>
                      </div>
                      <ul className="list-disc pl-8 space-y-2"> {/* Indent list */}
                        {categoryItem.list.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-white/80 text-lg">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
                  {/* NEW: Research Content */}
            <TabsContent value="research" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{research.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{research.description}</p>
                    {/* Grid for research items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        {research.items.map((item, index) => (
                            <div key={index} className="bg-[#27272c] p-6 rounded-xl flex flex-col gap-3 border border-white/10">
                                <span className="text-accent text-lg font-medium">{item.type}</span>
                                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    {item.points.map((point, pointIndex) => (
                                        <li key={pointIndex} className="text-white/70 text-sm">{point}</li>
                                    ))}
                                </ul>
                                {/* Optional Link */}
                                {item.link && (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm mt-3 self-start">
                                        View Publication
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </TabsContent>
            {/* About Content - REMOVED ScrollArea and fixed height for info */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                {/* Removed ScrollArea wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {about.info.map((item, index) => (
                    <div key={index} className="bg-[#27272c] p-4 rounded-lg border-l-4 border-purple-500">
                      <span className="text-white/60 text-sm">{item.fieldName}</span>
                      <p className="text-xl font-medium truncate">{item.fieldValue}</p>
                    </div>
                  ))}
                </div>
                {/* REMOVED Simplified Interests Section */}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

