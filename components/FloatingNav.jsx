"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FileText, Briefcase, Wrench, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useInbox } from "@/components/InboxContext";

const navItems = [
  { icon: Home, path: "/", label: "Home" },
  { icon: FileText, path: "/resume", label: "Resume" },
  { icon: Briefcase, path: "/work", label: "Projects" },
  { icon: Wrench, path: "/services", label: "Services" },
  { icon: Mail, path: "/contact", label: "Contact" },
];

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const { openInbox, notificationCount } = useInbox();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden xl:block"
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;

              return (
                <motion.div
                  key={item.path}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, x: 5 }}
                  className="group relative"
                >
                  <Link
                    href={item.path}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                      isActive
                        ? "bg-accent border-accent text-primary"
                        : "bg-[#27272c] border-white/10 text-white hover:border-accent hover:bg-accent/10"
                    }`}
                    aria-label={item.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>

                  <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                    <div className="bg-[#27272c] border border-accent/50 px-3 py-1 rounded-lg whitespace-nowrap text-sm text-white">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navItems.length * 0.05 }}
              whileHover={{ scale: 1.1, x: 5 }}
              className="group relative"
            >
              <button
                onClick={openInbox}
                className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent text-white flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 relative"
                aria-label="Inbox"
              >
                <MessageSquare className="w-5 h-5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>

              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                <div className="bg-[#27272c] border border-accent/50 px-3 py-1 rounded-lg whitespace-nowrap text-sm text-white">
                  Inbox
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
