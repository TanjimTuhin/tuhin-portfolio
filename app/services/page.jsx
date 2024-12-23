"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Machine Learning Engineering",
        description: `I build and deploy machine learning models to solve real-world problems. My services include:
        - Creating custom models for prediction, analysis, and automation.
        - Processing and preparing data for better insights.
        - Applying techniques like NLP and computer vision to tackle complex tasks.
        - Ensuring models are efficient, reliable, and scalable.
        
        I turn data into solutions to help businesses grow and innovate.`,
        href: "https://github.com/Md-tuhin-Islam"
    },
    {
        num: "02",
        title: "Data Analysis",
        description: `I specialize in extracting actionable insights from data to drive decision-making. My services include:
        - Cleaning, organizing, and preparing datasets for analysis.
        - Performing statistical analysis to uncover trends and patterns.
        - Creating interactive dashboards and visualizations for clear communication.
        - Providing data-driven solutions to solve business challenges.`,
        href: "https://github.com/Md-tuhin-Islam"
    },
    {
        num: "03",
        title: "Web & App Development",
        description: `I create responsive websites and user-friendly mobile applications tailored to meet business needs. My services include:
        - Developing custom websites with modern design and functionality.
        - Building cross-platform mobile applications for iOS and Android.
        - Implementing secure and scalable backend systems.
        - Optimizing performance and ensuring seamless user experiences.
        
        I help businesses establish a strong online presence and deliver impactful digital solutions.`,
        href: "https://github.com/Md-tuhin-Islam"
    },
    {
        num: "04",
        title: "Cross Platform Application Development",
        description: `I develop versatile applications that work seamlessly across multiple platforms, including iOS, Android, and web. My services include:
        - Building apps with a consistent user experience on all platforms.
        - Leveraging frameworks like Flutter and React Native for efficient development.
        - Ensuring high performance and responsiveness across devices.
        - Integrating secure and scalable backend systems.
        
        I help businesses reach a wider audience with reliable cross-platform solutions.`,
        href: "https://github.com/Md-tuhin-Islam"
    },
    {
        num: "05",
        title: "AI Powered Chatbot Development",
        description: `I create smart chatbots that can understand and respond to users in real time. My services include:
        - Building chatbots for websites, apps, and messaging platforms.
        - Using AI to provide accurate and helpful responses.
        - Customizing chatbots to fit specific business needs.
        - Ensuring smooth and engaging user experiences.
        
        I help businesses automate customer interactions and improve engagement with AI-driven solutions.`,
        href: "https://github.com/Md-tuhin-Islam"
    }
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                {/* Top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline 
                                        text-transparent group-hover:text-outline-hover
                                        transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.href}
                                        className="w-[70px] h-[70px] rounded-full bg-white 
                                        group-hover:bg-accent transition-all duration-500 flex
                                        justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>

                                {/* Title */}
                                <h2 className="text-[42px] font-bold leading-none text-white 
                                    group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>

                                {/* Description */}
                                <div>
                                    {service.description.split("\n").map((line, index) => (
                                        <p key={index} className="text-lg text-white/80 leading-relaxed">
                                            {line}
                                        </p>
                                    ))}
                                </div>

                                {/* Border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
