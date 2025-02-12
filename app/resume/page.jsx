"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaMicrochip,
  FaLinux,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiCplusplus,
  SiOracle,
  SiDjango,
  SiTensorflow,
  SiScikitlearn,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I am a passionate networking, cyber-security, machine learning, and IOT development. With a focus on delivering impactful solutions, I thrive in creating efficient and scalable systems. Beyond technical skills, I am a proactive learner, team player, and dedicated to continuous improvement.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Md. Tanjim Mahmud Tuhin",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1793 332668",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "tanjimtuhin06@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bangla",
    },
    {
      fieldName: "Github",
      fieldValue: "TanjimTuhin",
    },
    {
      fieldName: "LeetCode",
      fieldValue: "Tanjim Tuhin",
    },
    {
      fieldName: "HackerRank",
      fieldValue: "Tanjim Tuhin",
    },
    {
      fieldName: "Codeforces",
      fieldValue: "tanjim_tuhin",
    },
    {
      fieldName: "PicoCTF",
      fieldValue: "Yanjim_Yuhan",
    },
    {
      fieldName: "TryHackMe",
      fieldValue: "tanjimtuhin06",
    },
    {
      fieldName: "ResearchGate",
      fieldValue: "Md. Tanjim Mahmud Tuhin",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Tanjim Tuhin",
    },
  ],
};

// Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Over the years, I have contributed to various innovative projects, gaining expertise in Networking, Development, team collaboration, and delivering high-quality solutions. Here’s a summary of my professional journey.",
  items: [
    {
      company: "Teletalk",
      position: "Industrial Trainee",
      duration: "Jan 2023 - Feb 2023",
    },
    {
      company: "Valo lage na",
      position: "Founder",
      duration: "May 2000 - Present",
    },
    {
      company: "BTRC",
      position: "Industrial Trainee",
      duration: "Feb 2023",
    },
  ],
};

// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "My educational background has equipped me with a strong foundation in computer science, enabling me to tackle complex technical challenges and develop innovative solutions.",
  items: [
    {
      institution: "Military Institute of Science & Technology",
      degree: "Bachelor in Science: EECE",
      duration: "Jan 2020 - Apr 2024",
    },
    {
      institution: "Rajshahi Govt. City College, Rajshahi",
      degree: "Higher Secondary School Certificate (HSC)",
      duration: "May 2017 - Jun 2019",
    },
    {
      institution: "Daud Public School & College",
      degree: "Secondary School Certificate (SSC)",
      duration: "May 2011 - Mar 2017",
    },
  ],
};

// Skills data
const skills = {
  title: "My Skills",
  description:
    "A comprehensive summary of the technical tools and frameworks I specialize in, which have been pivotal in building innovative solutions.",
  skillList: [
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaMicrochip />, // An icon that represents hardware or embedded systems
      name: "Arduino",
    },
    {
      icon: <FaLinux />, // The Linux Tux logo
      name: "Linux",
    },
    
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiOracle />,
      name: "Oracle",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiTensorflow />,
      name: "AI (TensorFlow)",
    },
    {
      icon: <SiScikitlearn />,
      name: "ML (scikit-learn)",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

                    {/* content  */}
                    <div className="min-h-[70vh] w-full ">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[480px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                            <li 
                                                key={index} 
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                                flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bd-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[480px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                            <li 
                                                key={index} 
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                                flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bd-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md-grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                                mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index}
                                            className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>

    );
};

export default Resume;