"use client";
import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

const Photo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
    
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        
        x.set(xPct);
        y.set(yPct);
    };
    
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <div 
            ref={containerRef}
            className="w-full h-full relative flex items-center justify-center"
            style={{ perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            <motion.div 
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {delay: 2, duration: 0.4, ease: "easeIn"},
                }}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full relative preserve-3d flex items-center justify-center"
            >
            {/* Glow effect - background layer */}
            <motion.div
                className="absolute inset-0 bg-accent/30 rounded-full blur-3xl"
                style={{ zIndex: 1 }}
                animate={{
                    scale: isHovered ? [1, 1.2, 1] : 1,
                    opacity: isHovered ? [0.3, 0.5, 0.3] : 0.3,
                }}
                transition={{
                    duration: 2,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut",
                }}
            />

            {/* Circle - background decorative element */}
            <motion.svg 
                className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] xl:w-[506px] xl:h-[506px]" 
                fill="transparent" 
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    zIndex: 2,
                    transform: isHovered ? "translateZ(-20px)" : "translateZ(0px)",
                    transition: "transform 0.3s ease-out",
                }}
            >
                <motion.circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#8c00ffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{strokeDasharray: "24 10 0 0"}}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </motion.svg>

            {/* Image - foreground layer */}
            <motion.div 
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"},
                }}
                className="relative w-[250px] h-[250px] sm:w-[298px] sm:h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
                style={{
                    zIndex: 3,
                    transform: isHovered ? "translateZ(50px)" : "translateZ(0px)",
                    transition: "transform 0.3s ease-out",
                    filter: isHovered ? "drop-shadow(0 0 30px rgba(153, 0, 255, 0.6))" : "none",
                }}
            >
                <Image
                    src="/assets/photo2.png"
                    priority
                    quality={100}
                    fill
                    alt="Md. Tanjim Mahmud Tuhin's Photo"
                    className="object-contain"
                />
            </motion.div>
            </motion.div>
            
        </div>
    );
};

export default Photo;