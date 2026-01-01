"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const quotes = [
    {
        id: 1,
        title: "Wisdom",
        quote: "I pursue wisdom. I do not lose. I only learn. Seeking knowledge is my work, it is the only thing I do.",
        date: "Today"
    },
    {
        id: 2,
        title: "No Regrets",
        quote: "In the end, No Selfdoubt, No Regrets. Enjoy your mistakes.",
        date: "Yesterday"
    }
];

const InboxDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Bell Icon Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 hover:bg-accent/10 rounded-full transition-all duration-300"
            >
                <Mail className="w-6 h-6 text-accent" />
                {/* Notification Badge */}
                <span className="absolute -top-1 -right-1 bg-accent text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    2
                </span>
            </button>

            {/* Dropdown Popup */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40"
                        />

                        {/* Dropdown Content */}
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 top-full mt-2 w-[400px] max-w-[90vw] bg-[#1c1c22] border border-accent/30 rounded-2xl shadow-2xl z-50 overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-accent/20 to-purple-500/20 p-4 border-b border-white/10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-accent w-10 h-10 rounded-full flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold">Inbox</h3>
                                            <p className="text-xs text-white/60">Messages for you</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="hover:bg-white/10 p-2 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Messages List */}
                            <div className="max-h-[400px] overflow-y-auto">
                                {quotes.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-white font-bold text-sm">
                                                    {item.title[0]}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h4 className="font-semibold text-sm">{item.title}</h4>
                                                    <span className="text-xs text-accent">{item.date}</span>
                                                </div>
                                                <p className="text-sm text-white/70 line-clamp-2">
                                                    {item.quote}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer with Show More Button */}
                            <div className="p-4 border-t border-white/10 bg-[#27272c]">
                                <Link
                                    href="/quotes"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group"
                                >
                                    <span>Show More</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <p className="text-center text-xs text-white/40 mt-2">
                                    Messages are refreshed daily
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default InboxDropdown;
