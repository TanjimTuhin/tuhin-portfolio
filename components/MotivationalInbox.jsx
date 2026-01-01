"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Bell, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const MotivationalInbox = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const quote = "I pursue wisdom. I do not lose. I only learn. Seeking knowledge is my work, it is the only thing I do. In the end, No Selfdoubt, No Regrets. Enjoy your mistakes.";

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-2xl border border-white/10 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-accent/20 to-purple-500/20 p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold text-white">Inbox</h3>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative"
                >
                  <Bell className="w-5 h-5 text-accent" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </motion.div>
                <span className="bg-accent text-primary text-xs px-2 py-1 rounded-full font-semibold">
                  1 New
                </span>
              </div>
            </div>
          </div>
          
          {/* Message Preview */}
          <div className="p-6">
            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(153, 0, 255, 0.3)"
              }}
              className="bg-primary/50 rounded-xl p-6 border border-accent/30 cursor-pointer transition-all duration-300 relative overflow-hidden group"
            >
              {/* Sparkle effects */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 opacity-20"
              >
                <Sparkles className="w-8 h-8 text-accent" />
              </motion.div>
              
              {/* Message content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">M</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Motivation</h4>
                    <p className="text-white/60 text-xs">Just arrived • Click to read</p>
                  </div>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed italic">
                  "{quote}"
                </p>
                
                {/* Hover hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-4 text-accent text-xs flex items-center gap-2"
                >
                  <span>Click for daily inspiration</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Footer */}
          <div className="bg-primary/30 p-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <p className="text-white/60 text-xs">
                Messages are refreshed daily
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/quotes')}
                className="bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold transition-colors hover:bg-accent-hover"
              >
                Get Inspired
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MotivationalInbox;
