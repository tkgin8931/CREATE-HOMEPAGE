"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function Loading() {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative flex flex-col items-center gap-4"
                    >
                        <motion.img
                            src="/CREATE-LOGO.png"
                            alt="Logo"
                            className="w-32 h-32 object-contain opacity-80"
                            animate={{
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity
                            }}
                        />
                        {/* Minimal Loading Indicator */}
                        <div className="w-24 h-[1px] bg-white/20 overflow-hidden relative">
                            <motion.div
                                className="absolute inset-0 bg-white"
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    repeat: Infinity
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}