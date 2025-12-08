"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { t, language, setLanguage } = useLanguage()

    const toggleLanguage = () => {
        setLanguage(language === 'ja' ? 'en' : 'ja')
    }

    return (
        <>
            {/* ヘッダー */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
                <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex justify-between items-center h-16 max-w-full overflow-hidden">
                        <div className="flex items-center flex-shrink-0">
                            <Image
                                src="/CREATE_moji_negate.png"
                                alt="Logo"
                                width={240}
                                height={240}
                                className="object-contain drop-shadow-lg w-20 h-20 sm:w-40 sm:h-40"
                                priority
                            />
                        </div>
                        <nav className="hidden md:flex items-center gap-6">
                            <ul className="flex space-x-4 lg:space-x-8 text-sm text-white/90">
                                <NavItem href="/" text={t.header.top} caption={t.header.captions.top} />
                                <NavItem href="/AboutUsPage" text={t.header.about} caption={t.header.captions.about} />
                                <NavItem href="/ProjectsPage" text={t.header.projects} caption={t.header.captions.projects} />
                                <NavItem href="/TechPage" text={t.header.tech} caption={t.header.captions.tech} />
                                <NavItem href="/Fund&SponsorPage" text={t.header.fund} caption={t.header.captions.fund} />
                                <NavItem href="/ContactPage" text={t.header.contact} caption={t.header.captions.contact} />
                            </ul>
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1 text-white/90 hover:text-white transition-colors font-mono text-sm border border-white/30 rounded px-2 py-1"
                            >
                                <Globe size={14} />
                                {language === 'ja' ? 'EN' : 'JP'}
                            </button>
                        </nav>
                        <div className="md:hidden flex items-center gap-4">
                            {!isMenuOpen && (
                                <>
                                    <button
                                        onClick={toggleLanguage}
                                        className="text-white/90 hover:text-white transition-colors font-mono text-sm border border-white/30 rounded px-2 py-1"
                                    >
                                        {language === 'ja' ? 'EN' : 'JP'}
                                    </button>
                                    <button onClick={() => setIsMenuOpen(true)} className="text-white p-2">
                                        <Menu size={24} />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            {/* モバイルメニュー表示中はメインにブラー */}
            {isMenuOpen && (
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
                        <div className="flex justify-between items-center p-4">
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1 text-white/90 hover:text-white transition-colors font-mono text-sm border border-white/30 rounded px-2 py-1"
                            >
                                <Globe size={14} />
                                {language === 'ja' ? 'EN' : 'JP'}
                            </button>
                            <button onClick={() => setIsMenuOpen(false)} className="text-white p-2">
                                <X size={24} />
                            </button>
                        </div>
                        <nav className="px-4 pb-4 bg-black rounded-l-lg shadow-2xl flex-1 flex flex-col justify-start">
                            <ul className="space-y-4 text-base text-white/90">
                                <MobileNavItem href="/" text={t.header.top} caption={t.header.captions.top} />
                                <MobileNavItem href="/AboutUsPage" text={t.header.about} caption={t.header.captions.about} />
                                <MobileNavItem href="/ProjectsPage" text={t.header.projects} caption={t.header.captions.projects} />
                                <MobileNavItem href="/TechPage" text={t.header.tech} caption={t.header.captions.tech} />
                                <MobileNavItem href="/Fund&SponsorPage" text={t.header.fund} caption={t.header.captions.fund} />
                                <MobileNavItem href="/ContactPage" text={t.header.contact} caption={t.header.captions.contact} />
                            </ul>
                        </nav>
                    </motion.div>
                </>
            )}
        </>
    )
}

function NavItem({ href, text, caption }: { href: string, text: string, caption: string }) {
    return (
        <li className="relative font-mono text-lg flex flex-col items-center">
            <a
                href={href}
                className="hover:text-white transition-colors px-1"
            >
                {text}
            </a>
            <div className="text-xs text-white/60 mt-1">{caption}</div>
        </li>
    )
}

function MobileNavItem({ href, text, caption }: { href: string, text: string, caption: string }) {
    return (
        <li>
            <a href={href} className="block px-3 py-3 rounded-md hover:bg-gray-700 transitions-colors">{text}</a>
            <div className="text-xs text-white/60 px-3 pb-1">{caption}</div>
            <div className="border-b border-gray-700 mx-2" />
        </li>
    )
}