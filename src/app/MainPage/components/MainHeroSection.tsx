"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence} from "framer-motion";
import Image from "next/image";
import TextType from "@/app/MainPage/components/TextType";

const mediaFiles = [
    {
        type: "video",
        src: "/ScreenRecording_08-31-2025 21-51-40_1.mov",
        caption: "ENGINE'J-6i'"
    },
    {
        type: "video",
        src: "/73L.mp4",
        caption: "C-73J'DAC'"
    },
    {
        type: "image",
        src: "/IMG_0853.jpg",
        caption: "C-83LM'キーちゃん'"
    },
    {
        type: "image",
        src: "/61-fire.JPG",
        caption: "C-61J'UNICORN'"
    },
    {
        type: "image",
        src: "/engine.png",
        caption: "ENGINE'LM-5i'"
    }
]

export default function ContactHeroSection() {

    const [index, setIndex] = useState(0);
    const slideDuration = 6000;

        useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current === mediaFiles.length - 1 ? 0 : current + 1))
        }, slideDuration);
        return () => clearInterval(interval);
    }, []);
    
        return (
            <div className="relative w-full min-h-screen overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className="absolute inset-0 bg-slate-700"
                        initial={{ opacity: 1, scale: 1.0, backgroundColor: '#000' }}
                        animate={{ opacity: 1, scale: 1.05, backgroundColor: '#000' }}
                        exit={{ opacity: 1, scale: 1.0, backgroundColor: '#000' }}
                        transition={{
                            opacity: { duration: 0.5, ease: [0.4,0.0,0.2,1] },
                            scale: { duration: 0.5, ease: [0.4,0.0,0.2,1] },
                            backgroundColor: { duration: 0.5 }
                        }}
                    >
                        {mediaFiles[index].type === "image" ? (
                            <Image
                                src={mediaFiles[index].src}
                                alt=""
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover bg-black min-h-[320px] sm:min-h-[480px] md:min-h-[600px] lg:min-h-[700px]"
                            />
                        ) : (
                            <video
                                src={mediaFiles[index].src}
                                className="w-full h-full object-cover bg-black min-h-[320px] sm:min-h-[480px] md:min-h-[600px] lg:min-h-[700px]"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        )}
                        {/* グラデーションレイヤー（上下+左右） */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* 上下グラデーション */}
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.85) 92%, rgba(0,0,0,0.99) 100%)"
                            }} />
                            {/* 左右グラデーション */}
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.4) 100%)"
                            }} />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* キャプション：画面サイズで位置・サイズ調整 */}
                <div className="absolute z-30 pointer-events-none font-mono text-white/60 right-4 bottom-12 sm:right-8 sm:bottom-8 md:right-16 md:bottom-16">
                    <TextType 
                        key={index}
                        text={mediaFiles[index].caption}
                        className="font-mono text-white/60 text-base sm:text-xl md:text-2xl"
                    />
                </div>
                {/* インジケーター：画面サイズで位置・サイズ調整 */}
                <div className="absolute left-1/2 -translate-x-1/2 flex space-x-2 bottom-4 sm:bottom-8 md:bottom-16">
                    {mediaFiles.map((_, i) => (
                        <div
                            key={i}
                            className={`w-1 h-1 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                                i === index ? "bg-white scale-125" : "bg-white/50 scale-100"
                            }`}
                        />
                    ))}
                </div>
            </div>
        )
}