"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
    const  [isMenuOpen,setIsMenuOpen] = useState(false)
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blue-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex ites-center">
                        {/*  */}
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4 lg:space-x-8 text-sm text-white/90">
                            <NavItem href="/MainPage" text="TOP" />
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
                    <nav className="px-2 pt-2 pb-4 bg-black/90">
                        <ul className="space-y-2 text-sm text-white/90">
                            <MobileNavItem href="/MainPage" text="TOP" />
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
    return (
        <li >
            <a href={href} className="hover:text-white transition-colors">{text}</a>
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