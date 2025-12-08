"use client"

import { motion } from "framer-motion"

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Primary Shutter - Deep Black */}
            <motion.div
                className="fixed inset-0 z-[60] bg-black origin-top"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Secondary Shutter - Dark Gray for depth */}
            <motion.div
                className="fixed inset-0 z-[59] bg-neutral-900 origin-top"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Content Reveal */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </>
    )
}
