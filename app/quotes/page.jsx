"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

const allQuotes = [
    {
        id: 1,
        title: "Wisdom",
        quote: "I pursue wisdom. I do not lose. I only learn. Seeking knowledge is my work, it is the only thing I do.",
        date: "January 1, 2026",
        category: "Learning"
    },
    {
        id: 2,
        title: "No Regrets",
        quote: "In the end, No Selfdoubt, No Regrets. Enjoy your mistakes.",
        date: "December 31, 2025",
        category: "Motivation"
    },
    {
        id: 3,
        title: "Growth Mindset",
        quote: "Every challenge is an opportunity to become stronger. Embrace the struggle.",
        date: "December 30, 2025",
        category: "Growth"
    },
    {
        id: 4,
        title: "Focus",
        quote: "Success is not about doing everything, it's about doing the right things consistently.",
        date: "December 29, 2025",
        category: "Success"
    },
    {
        id: 5,
        title: "Perseverance",
        quote: "The only way to fail is to stop trying. Keep moving forward, one step at a time.",
        date: "December 28, 2025",
        category: "Motivation"
    }
];

const QuotesPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-12 xl:py-24"
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                    </Link>
                    
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center">
                            <Mail className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-4xl xl:text-5xl font-bold">Motivational Inbox</h1>
                            <p className="text-white/60 mt-2">Daily inspiration and wisdom</p>
                        </div>
                    </motion.div>
                </div>

                {/* Quotes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {allQuotes.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-[#27272c] border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 group"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">
                                            {item.title[0]}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <span className="text-xs text-accent">{item.category}</span>
                                    </div>
                                </div>
                                <Sparkles className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Quote */}
                            <p className="text-white/80 leading-relaxed mb-4 italic">
                                "{item.quote}"
                            </p>

                            {/* Date */}
                            <div className="flex items-center gap-2 text-sm text-white/50">
                                <Calendar className="w-4 h-4" />
                                <span>{item.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default QuotesPage;
