"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MainHeroSection() {
    const { t } = useLanguage();
    const [index, setIndex] = useState(0);
    const slideDuration = 6000;

    const mediaFiles = [
        {
            type: "video",
            src: "/ScreenRecording_08-31-2025 21-51-40_1.mov",
            caption: "ENGINE 'J-6i'",
            sub: "NEW ENGINE"
        },
        {
            type: "video",
            src: "/73L.mp4",
            caption: "C-73J 'DAC'",
            sub: "HYBRID ROCKET"
        },
        {
            type: "video",
            src: "/cansat.mp4",
            caption: "CANSAT 'C-04R'",
            sub: "AUTONOMOUS CONTROL RUNBACK"
        },
        {
            type: "image",
            src: "/IMG_0853.jpg",
            caption: "C-83LM 'KEY-CHAN'",
            sub: "HYBRID ROCKET"
        },
        {
            type: "image",
            src: "/61-fire.JPG",
            caption: "C-61J 'UNICORN'",
            sub: "HYBRID ROCKET"
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current === mediaFiles.length - 1 ? 0 : current + 1))
        }, slideDuration);
        return () => clearInterval(interval);
    }, [mediaFiles.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* Background Media */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    {mediaFiles[index].type === "image" ? (
                        <Image
                            src={mediaFiles[index].src}
                            alt={mediaFiles[index].caption}
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                    ) : (
                        <video
                            src={mediaFiles[index].src}
                            className="w-full h-full object-cover opacity-60"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    )}

                    {/* Cinematic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
                </motion.div>
            </AnimatePresence>

            {/* Main Title */}
            {/* <div className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-none">
                <motion.h1
                    className="text-6xl md:text-9xl font-bold text-white tracking-widest mix-blend-overlay opacity-90"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {t.topPage.hero.title}
                </motion.h1>
                <motion.p
                    className="mt-4 text-sm md:text-xl text-white/80 font-mono tracking-[0.5em] uppercase"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    {t.topPage.hero.subtitle}
                </motion.p>
            </div> */}

            {/* Tech Details - Corners */}
            <div className="absolute top-24 left-8 md:left-16 z-20 hidden md:block">
                <div className="flex flex-col space-y-1">
                    <span className="text-[10px] text-white/40 font-mono">COORDINATES</span>
                    <span className="text-xs text-white/80 font-mono">{t.topPage.hero.coordinates}</span>
                </div>
            </div>

            <div className="absolute top-24 right-8 md:right-16 z-20 hidden md:block">
                <div className="flex flex-col space-y-1 text-right">
                    <span className="text-[10px] text-white/40 font-mono">STATUS</span>
                    <span className="text-xs text-green-400 font-mono flex items-center justify-end gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        {t.topPage.hero.status}
                    </span>
                </div>
            </div>

            {/* Bottom Info & Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-30 flex justify-between items-end">
                {/* Current Slide Info */}
                <div className="flex flex-col space-y-2">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center space-x-4">
                            <span className="text-4xl md:text-6xl font-light text-white font-mono">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className="h-12 w-[1px] bg-white/20" />
                            <div className="flex flex-col">
                                <span className="text-sm md:text-base text-white font-bold tracking-wider">
                                    {mediaFiles[index].caption}
                                </span>
                                <span className="text-xs text-white/50 font-mono tracking-widest uppercase">
                                    {mediaFiles[index].sub}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full">
                    <motion.div
                        key={index}
                        className="h-full bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: slideDuration / 1000, ease: "linear" }}
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-[10px] tracking-widest uppercase font-mono">{t.topPage.hero.scroll}</span>
                <ChevronDown size={20} />
            </motion.div>
        </div>
    );
}