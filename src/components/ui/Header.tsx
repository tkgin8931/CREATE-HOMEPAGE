"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
    const  [isMenuOpen,setIsMenuOpen] = useState(false)
    return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        {/*  */}
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4 lg:space-x-8 text-sm text-white/90">
                            <NavItem href="/" text="TOP" />
                            <NavItem href="/AboutUsPage" text="ABOUT US" />
                            <NavItem href="/ProjectsPage" text="PROJECTS" />
                            <NavItem href="/TechPage" text="TECH" />
                            <NavItem href="/Fund&SponsorPage" text="FUND&SPONSORS" />
                            <NavItem href="/ContactPage" text="CONTACT" />
                        </ul>
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} /> }
                        </button>
                    </div>
                </div>
            </div>
            { isMenuOpen && (
                <div className="md:hidden">
                    <nav className="px-2 pt-2 pb-4 bg-black/30 backdrop-blur-md">
                        <ul className="space-y-2 text-sm text-white/90">
                            <MobileNavItem href="/" text="TOP" />
                            <MobileNavItem href="/AboutUsPage" text="ABOUT US" />
                            <MobileNavItem href="/ProjectsPage" text="PROJECTS" />
                            <MobileNavItem href="/TechPage" text="TECH" />
                            <MobileNavItem href="/Fund&SponsorPage" text="FUND&SPONSORS" />
                            <MobileNavItem href="/ContactPage" text="CONTACT" />
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}

function NavItem({ href, text } : { href: string, text: string }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <li className="relative font-mono text-lg">
            <a
                href={href}
                className="hover:text-white hover:scale-110 transition-colors px-1"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {text}
                {isHovered && (
                    <motion.div
                        layoutId="nav-underline"
                        className="absolute -translate-x-1/2 -bottom-1 h-[1px] bg-white rounded"
                        style={{ width: '100%' }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </a>
        </li>
    )
}

function MobileNavItem({ href, text } : { href: string, text: string }) {
    return (
        <li>
            <a href={ href } className="block px-3 py-2 rounded-md hover:bg-gray-700 transitions-colors">{text}</a>
        </li>
    )
}