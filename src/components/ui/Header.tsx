"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
    const  [isMenuOpen,setIsMenuOpen] = useState(false)
    return (
        <>
            {/* ヘッダー */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Image
                                src="/CREATE_moji_negate.png"
                                alt="Logo"
                                width={240}
                                height={240}
                                className="object-contain drop-shadow-lg w-24 h-24 sm:w-40 sm:h-40"
                                priority
                            />
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
                            {!isMenuOpen && (
                                <button onClick={() => setIsMenuOpen(true)} className="text-white p-2">
                                    <Menu size={24} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            {/* モバイルメニュー表示中はメインにブラー */}
            { isMenuOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.div
                        className="fixed top-0 right-0 h-screen w-3/4 max-w-xs md:hidden z-[999] flex flex-col"
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <div className="flex justify-end p-4">
                            <button onClick={() => setIsMenuOpen(false)} className="text-white p-2">
                                <X size={24} />
                            </button>
                        </div>
                        <nav className="px-4 pb-4 bg-black rounded-l-lg shadow-2xl flex-1 flex flex-col justify-start">
                            <ul className="space-y-4 text-base text-white/90">
                                <MobileNavItem href="/" text="TOP" />
                                <MobileNavItem href="/AboutUsPage" text="ABOUT US" />
                                <MobileNavItem href="/ProjectsPage" text="PROJECTS" />
                                <MobileNavItem href="/TechPage" text="TECH" />
                                <MobileNavItem href="/Fund&SponsorPage" text="FUND&SPONSORS" />
                                <MobileNavItem href="/ContactPage" text="CONTACT" />
                            </ul>
                        </nav>
                    </motion.div>
                </>
            )}
        </>
    )
}

function NavItem({ href, text } : { href: string, text: string }) {
    const captions: Record<string, string> = {
        '/': 'トップページ',
        '/AboutUsPage': '活動概要',
        '/ProjectsPage': 'プロジェクト一覧',
        '/TechPage': '技術・ブログ',
        '/Fund&SponsorPage': '資金・スポンサー',
        '/ContactPage': 'お問い合わせ',
    };
    // const [isHovered, setIsHovered] = useState(false);
    return (
        <li className="relative font-mono text-lg flex flex-col items-center">
            <a
                href={href}
                className="hover:text-white hover:scale-125 transition-colors px-1"
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
            >
                {text}
                {/* {isHovered && (
                    <motion.div
                        layoutId="nav-underline"
                        className="absolute -translate-x-1/2 -bottom-1 h-[1px] bg-white rounded"
                        style={{ width: '100%' }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                )} */}
            </a>
            <div className="text-xs text-white/60 mt-1">{captions[href]}</div>
        </li>
    )
}

function MobileNavItem({ href, text } : { href: string, text: string }) {
    
    const captions: Record<string, string> = {
        '/': 'トップページ',
        '/AboutUsPage': '活動概要',
        '/ProjectsPage': 'プロジェクト一覧',
        '/TechPage': '技術・ブログ',
        '/Fund&SponsorPage': '資金・スポンサー',
        '/ContactPage': 'お問い合わせ',
    };
    return (
        <li>
            <a href={ href } className="block px-3 py-3 rounded-md hover:bg-gray-700 transitions-colors">{text}</a>
            <div className="text-xs text-white/60 px-3 pb-1">{captions[href]}</div>
            <div className="border-b border-gray-700 mx-2" />
        </li>
    )
}