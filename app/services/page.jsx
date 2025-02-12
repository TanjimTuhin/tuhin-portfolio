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
        title: "Cyber Security",
        description: `I specialize in securing digital systems and networks to prevent cyber threats. My services include:
                    -Conducting vulnerability assessments and penetration testing.
                    -Implementing security protocols to safeguard networks and systems.
                    -Analyzing and mitigating cyber threats in real-time.
                    -Enhancing security posture through risk management strategies.`,
        href: "https://github.com/Md-tuhin-Islam"
    },
    {
        num: "03",
        title: "Network Engineering",
        description: `I design, configure, and maintain network infrastructures for reliable connectivity. My services include:
                    -Setting up and managing enterprise-level network systems.
                    -Configuring routers, switches, firewalls, and VPNs.
                    -Optimizing network performance for speed, security, and scalability.
                    -Troubleshooting and resolving network issues.
                    I ensure seamless communication by building secure and efficient networks.`,
        href: "https://github.com/Md-tuhin-Islam"
    },
    {
        num: "04",
        title: "Robotics & IOT Development",
        description: `I develop intelligent robotic systems and IoT solutions for automation and smart applications. My services include:
                    -Designing and programming IoT devices with microcontrollers (ESP32, Raspberry Pi, etc.).
                    -Developing automation solutions for industrial and home applications.
                    -Integrating sensors, actuators, and wireless communication protocols.
                    -Optimizing energy efficiency and real-time data processing.
                    I bring smart technology to life through robotics and IoT innovations.`,
        href: "https://github.com/Md-tuhin-Islam"
    },
    {
        num: "05",
        title: "Embedded System Development",
        description: `I create reliable and efficient embedded systems for real-time applications. My services include:
                    -Programming microcontrollers (ESP32, STM32, AVR, etc.).
                    -Developing firmware for embedded devices.
                    -Integrating hardware components with software for seamless operation.
                    -Optimizing power consumption and system performance.
                    I build embedded solutions that power the next generation of smart devices.`,
        href: "https://github.com/Md-tuhin-Islam"
    },
    {
        num: "06",
        title: "Blockchain Development",
        description: `I develop secure and decentralized blockchain solutions for various applications. My services include:
                    -Creating smart contracts using Solidity and Web3.
                    -Developing decentralized applications (DApps) on Ethereum, Binance Smart Chain, etc.
                    -Implementing blockchain-based security solutions.
                    -Ensuring transparency and security in digital transactions.`,
        href: "https://github.com/Md-tuhin-Islam"
    },
    {
        num: "07",
        title: "AR & VR Development",
        description: `I design immersive Augmented Reality (AR) and Virtual Reality (VR) applications. My services include:
                    -Creating interactive AR experiences for mobile and web.
                    -Developing VR environments for gaming, training, and simulations.
                    -Using Unity, Unreal Engine, and WebXR for development.
                    -Enhancing user engagement through immersive technology.`,
        href: "https://github.com/Md-tuhin-Islam"
    },
    {
        num: "08",
        title: "Cloud Engineering",
        description: `I specialize in cloud solutions for scalable and secure infrastructure. My services include:
                        
                        -Deploying and managing cloud-based applications (AWS, Azure).
                        -Setting up cloud storage, databases, and networking solutions.
                        -Implementing security best practices for cloud environments.
                        -Optimizing performance and cost efficiency in cloud operations.`,
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
