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
                    className="fixed inset-0 bg-black z-50"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-black to-black" />
                    <div className="relative h-full flex flex-col items-center justify-center">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                            className="relative"
                        >
                            <motion.img
                                src="/CREATE-LOGO.png"
                                alt="Logo"
                                className="w-40 h-40 object-contain"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 20,
                                    ease: "linear",
                                    repeat: Infinity
                                }}
                            />
                            <motion.div
                                className="absolute -inset-4 rounded-full border-2 border-orange-500"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeOut"
                                }}
                            />
                        </motion.div>
                        
                        <motion.div 
                            className="mt-8 flex space-x-2"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-3 h-3 rounded-full bg-orange-500"
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: {
                                        y: [0, -10, 0],
                                        opacity: 1,
                                        transition: {
                                            duration: 0.8,
                                            repeat: Infinity,
                                            repeatDelay: 0.1
                                        }
                                    }
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    )
}