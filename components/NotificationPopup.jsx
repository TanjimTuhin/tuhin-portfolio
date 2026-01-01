"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X } from "lucide-react";

const NotificationPopup = ({ show, onClose, onClick }) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={onClick}
            className="bg-[#27272c] border border-accent rounded-2xl p-4 shadow-2xl cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="bg-accent w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Bell className="w-6 h-6 text-primary" />
              </motion.div>

              <div className="flex-1">
                <h4 className="font-bold text-white mb-1">New Message!</h4>
                <p className="text-sm text-white/70">You have 1 new notification</p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="hover:bg-white/10 p-1 rounded-full transition-colors"
                aria-label="Close notification"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationPopup;
