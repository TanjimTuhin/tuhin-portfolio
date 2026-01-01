"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import TypingEffect from "@/components/TypingEffect";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import Timeline from "@/components/Timeline";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-x-hidden flex flex-col">
      <div className="container mx-auto flex-1 flex items-center justify-center py-8 xl:py-12 px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-8 xl:gap-12 w-full max-w-7xl mx-auto"
        >
          {/* text */}
          <motion.div
            variants={itemVariants}
            className="text-center xl:text-left order-2 xl:order-none z-10 flex-1 xl:max-w-[50%] w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <TypingEffect />
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="h1 mb-4 xl:mb-6"
            >
              Hello I&apos;m <br />
              <motion.span
                className="text-accent relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Md. Tanjim Mahmud Tuhin
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent via-pink-500 to-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </motion.span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="max-w-[500px] mb-8 xl:mb-10 text-white/80 text-base xl:text-lg leading-relaxed mx-auto xl:mx-0"
            >
              I am not driven by passion.
              <br />
              I do not hunt knowledge.
              <br />
              I pursue wisdom.
              <br />
              <br />
              I do not lose.
              <br />
              I only learn.
              <br />
              Seeking knowledge is my work
              <br />
              it is the only thing I do.
              <br />
              <br />
              In the end,
              <br />
              No Selfdoubt, No Regrets. Enjoy your mistakes.
            </motion.p>
            
            {/* btn and socials */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col xl:flex-row items-center gap-8"
            >
              <motion.a
                href="/assets/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 glass-strong glow-purple hover:glow-accent transition-all duration-300 border-accent/50 hover:border-accent"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </motion.a>
              
              <motion.div
                className="mb-4 xl:mb-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent/50 rounded-full flex 
                    justify-center items-center text-accent text-base hover:bg-accent
                    hover:text-primary hover:transition-all duration-500 hover:scale-110
                    hover:glow-purple glass backdrop-blur-sm"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* photo */}
          <motion.div
            variants={itemVariants}
            className="order-1 xl:order-none mb-6 xl:mb-0 z-10 flex-shrink-0 w-full xl:w-auto flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative w-[250px] h-[250px] sm:w-[298px] sm:h-[298px] xl:w-[498px] xl:h-[498px] flex items-center justify-center">
              <Photo />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="mt-auto">
        <Stats />
      </div>
      <ExpertiseGrid />
      <Timeline />
    </section>
  );
};

export default Home;