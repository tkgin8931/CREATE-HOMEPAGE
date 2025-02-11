"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence} from "framer-motion";
import Image from "next/image";

const images = [
    {
        src:"/79-CAD.png",
    },

    {
        src:"/61-fire.JPG",
    },

    {
        src:"/burnig.png",
    },
    {
        src:"/gse.jpg",
    },
    {
        src:"/engine.png",
    }
]

const slideDuration = 6000;

export default function GalleryViewer() {

    const [index, setIndex] = useState(0);

        useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current === images.length - 1 ? 0 : current + 1))
            }, slideDuration);

            return () => clearInterval(interval);
        }, []);
    
        return (
            <div className="relative w-full min-h-screen overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.5,
                            ease : [0.4,0.0,0.2,1]
                        }}                                   
                    >
                        <img 
                        src={images[index].src} 
                        className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 flex items-end justify-start">
                    <div className="px-12 mb-16 ml-12">
                        <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y:20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        >
                            <h2 className="text-8xl font-bold text-white tracking-tight mb-6 drop-shadow-lg -ml-4">CREATE</h2>
                            <p className="text-3xl text-white/90 font-medium tracking-wider drop-shadow-lg">Challengers of</p>
                            <p className="text-3xl text-white/90 font-medium tracking-wider drop-shadow-lg">Rocket</p>
                            <p className="text-3xl text-white/90 font-medium tracking-wider drop-shadow-lg">Engineering and</p>
                            <p className="text-3xl text-white/90 font-medium tracking-wider drop-shadow-lg">Avionics at</p>
                            <p className="text-3xl text-white/90 font-medium tracking-wider drop-shadow-lg">Tokyo T</p>
                            <p className="text-3xl text-white/90 font-medium tracking-wider drop-shadow-lg">Ech</p>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === index ? "bg-white scale-125" : "bg-white/50 scale-100"
                            }`}
                        />
                    ))}
                </div>
            </div>
        )
}