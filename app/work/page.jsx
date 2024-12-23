"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    
    {
        num: '01',
        category: "tuhin-portfolio : Frontend",
        title: "project 2",
        description: "Welcome to my personal portfolio! This project showcases my skills, projects, and professional background. It is built with a focus on clean design, responsive layout, and easy navigation, offering visitors a comprehensive view of my work and expertise.",
        stack: [{name: "Next.js"}, {name: "React JS"}, {name: "Html5"}, {name: "Css3"}, {name: "JavaScript"}, {name: "BootStrap"}],
        image: "/assets/work/thumb2.jpg",
        live: "https://tuhin-portfolio-2jvt.vercel.app/",
        github: "https://github.com/Md-tuhin-Islam/tuhin-portfolio",
    },
    {
      num: '02',
      category: "Salam_with-Islam : Frontend",
      title: "project 1",
      description: "Salam with Islam is an educational website designed to promote knowledge and understanding of Islam. Created as a project for the CSE 224 Web Development course, this website provides valuable resources on Islamic teachings, daily practices, and core values, presented in a user-friendly format to engage users of all ages and backgrounds.",
      stack: [{name: "Html5"}, {name: "Css3"}, {name: "JavaScript"}, {name: "BootStrap"}],
      image: "/assets/work/thumb1.png",
      live: "https://md-tuhin-islam.github.io/Salam_with-Islam/",
      github: "https://github.com/Md-tuhin-Islam/Salam_with-Islam",
  },
    {
        num: '03',
        category: "Health-AI : Flutter",
        title: "project 3",
        description: "An AI Based Healthcare Application System (Personal Healthcare Companion app); Features: \n 1. Health AI Chatbot \n 2. Doctor Suggestion Module \n 3. Cure Suggestion Module \n 4. Health Analytics Module \n 5. SOS Module",
        stack: [{name: "Flutter"}, {name: "Microsoft Azure"}, {name: "Firebase"}, {name: "MVC"}, {name: "Dart"}],
        image: "/assets/work/thumb3.png",
        live: "https://lnkd.in/gmRtcERr",
        github: "https://github.com/Md-tuhin-Islam/Health-AI",
    },
    {
        num: '04',
        category: "Diabetes_Patient_Pre-screening_Chatbot : ML ",
        title: "project 4",
        description: "Diabetes is a prevalent health issue, especially in Bangladesh, putting strain on healthcare resources. This project introduces a comprehensive solution integrating a chatbot and sensors to aid in diabetes patient pre-screening. The chatbot interacts with patients to gather essential data like lifestyle, symptoms, and medical history, while sensors measure vital signs such as body temperature, heart rate, and oxygen levels. The collected data is displayed in a user-friendly format for healthcare providers, facilitating quicker and more informed consultations.",
        stack: [{name: "Machine Learning"}, {name: "Tensorflow"}, {name: "Hardware"}, {name: "Raspberry-Pi"}, {name: "Selfmade Dataset"}],
        image: "/assets/work/thumb4.png",
        live: "",
        github: "https://github.com/Md-tuhin-Islam/Diabetes_Patient_Pre-screening_Chatbot",
    },
    {
        num: '05',
        category: "YouTube-News-Video-Textual-Summarization-using-T5-and-SpaCy : ML ",
        title: "project 5",
        description: "This project develops two system pipelines to summarize any YouTube news video using only the video link as input. It also conducts a comparison between two summarization techniques — Abstractive Summarization using Google T5 and Extractive Summarization using SpaCy — evaluated with ROUGE scores.",
        stack: [{name: "Machine Learning"}, {name: "Google T5"}, {name: "SpaCy"}, {name: "ROUGE Score"}, {name: "NLP"}],
        image: "/assets/work/no_thumb.png",
        live: "",
        github: "https://github.com/Md-tuhin-Islam/YouTube-News-Video-Textual-Summarization-using-T5-and-SpaCy",
    },
    {
        num: '06',
        category: "To-Do List and Sensor Tracking App : Flutter ",
        title: "project 6",
        description: "This Flutter application consists of two main features: a To-Do List manager and a Sensor Tracking module. The app allows users to create, manage, and track tasks, as well as monitor real-time data from device sensors.",
        stack: [{name: "Flutter"}, {name: "Sensors"}, {name: "Mobile Storage"}],
        image: "/assets/work/thumb6.png",
        live: "",
        github: "https://github.com/Md-tuhin-Islam/To-Do-List-and-Sensor-Tracking-App-Flutter-",
    },
    {
        num: '07',
        category: "TCB-Goods-Distribution-System : Database  ",
        title: "project 7",
        description: "The TCB Goods Distribution System is a web-based application designed to streamline and manage the distribution of essential goods by the Trading Corporation of Bangladesh (TCB). The system aims to make the distribution process more transparent, efficient, and accessible for both administrators and beneficiaries.",
        stack: [{name: "ORACLE"}, {name: "SQL"}, {name: "HTML"}, {name: "CSS"}, {name: "Bootstrap"}],
        image: "/assets/work/no_thumb.png",
        live: "",
        github: "https://github.com/Md-tuhin-Islam/TCB-Goods-Distribution-System",
    },
];


const Work = () => {
    const [project, setProject] = useState(projects[0] || {});
  
    const handleSlideChange = (swiper) => {
      const currentIndex = swiper.activeIndex;
      setProject(projects[currentIndex]);
    };
  
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-8">
            {/* Project Details Section */}
            <div className="w-full xl:w-1/2 flex flex-col gap-6">
              {/* Project Number */}
              <div className="text-8xl font-extrabold text-transparent text-outline">
                {project.num || "N/A"}
              </div>
              {/* Project Title */}
              <h2 className="text-4xl font-bold leading-snug text-white transition-all capitalize">
                {project.category || "Category"} Project
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description || "No description provided."}</p>
              {/* Tech Stack */}
              <ul className="flex flex-wrap gap-2">
                {project.stack?.map((item, index) => (
                  <li key={index} className="text-lg text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                )) || <li>No stack specified.</li>}
              </ul>
              <div className="border border-white/20"></div>
              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Button */}
                {project.live && (
                  <Link href={project.live} passHref>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Content</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* GitHub Button */}
                {project.github && (
                  <Link href={project.github} passHref>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
  
            {/* Swiper Section */}
            <div className="w-full xl:w-1/2">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="relative group flex justify-center items-center bg-primary">
                    {/* Image Overlay */}
                    {/* <div className="absolute inset-0 bg-black/10 z-10"></div> */}
                  
                    {/* Project Image */}
                    <div className="relative w-full h-full flex justify-center items-center">
                      <Image
                        src={project.image}
                        width={800} // Adjust the width as needed
                        height={400} // Adjust the height as needed
                        className="object-cover"
                        alt={`Thumbnail for ${project.category}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                {/* Slider Buttons */}
                <WorkSliderBtns
                  containerStyles="absolute flex gap-2 right-[45%] bottom-[5%] z-20 w-full xl:w-auto justify-between xl:justify-start"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    );
  };
  
  export default Work;