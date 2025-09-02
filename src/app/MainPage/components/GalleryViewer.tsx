"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence} from "framer-motion";
import Image from "next/image";
import TextType from "./TextType";
// import LogoLoop from '../../../components/ui/LogoLoop';

// const imageLogos = [
//   { src: "/newscompany.png", alt: "Company 1" },
//   { src: "/silex.png", alt: "Company 2" },
//   { src: "/zone.png", alt: "Company 3" },
// ];


const media = [
    { type: "video", src: "/ScreenRecording_08-31-2025 21-51-40_1.mov", caption: "ENGINE'J-6i'" },
    { type: "video", src: "/73L.mp4", caption: "C-73J'DAC'" },
    { type: "image", src: "/IMG_0853.jpg", caption: "C-83LM'キーちゃん'" },
    { type: "image", src: "/61-fire.JPG", caption: "C-61J'UNICORN'" },
    { type: "image", src: "/engine.png", caption: "ENGINE'LM-5i'" },
]

const slideDuration = 6000;

export default function GalleryViewer() {

    const [index, setIndex] = useState(0);

        useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current === media.length - 1 ? 0 : current + 1))
        }, slideDuration);
        return () => clearInterval(interval);
    }, []);
    
        return (
            <div className="relative w-full min-h-screen overflow-hidden">
                {/* LogoLoop 右下配置 */}
                {/* <div className="absolute bottom-6 right-6 z-20">
                <LogoLoop
                    logos={imageLogos}
                    speed={120}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />
                </div> */}
                {/* ロゴ画像 左上配置 */}
                <div className="absolute top-6 left-6 z-20">
                    {/* <Image
                        src="/CREATE-LOGO.png" // public/logo.jpg
                        alt="Logo"
                        width={120}
                        height={120}
                        className="object-contain drop-shadow-lg"
                        priority
                    /> */}
                    <Image
                        src="/CREATE_moji.png" // public/logo.jpg
                        alt="Logo"
                        width={240}
                        height={240}
                        className="object-contain drop-shadow-lg"
                        priority
                    />
                </div>
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
                        {media[index].type === "image" ? (
                            <Image
                                src={media[index].src}
                                alt=""
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover bg-black"
                            />
                        ) : (
                            <video
                                src={media[index].src}
                                className="w-full h-full object-cover bg-black"
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

                <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                        <TextType 
                            key={index}
                            text={media[index].caption}
                            className="font-mono text-white text-6xl"
                        />
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                    {media.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i === index ? "bg-white scale-125" : "bg-white/50 scale-100"
                            }`}
                        />
                    ))}
                </div>
            </div>
        )
}