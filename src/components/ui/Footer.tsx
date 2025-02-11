"use client"

export default function Footer() {
    return (
        <footer className="flex bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
            <div className="flex justify-between items-center h-16 px-16">
                <div className="text-white text-sm">
                    @ 2025 CREATE. All Rights Reserved.
                </div>
                <nav>
                    <ul className="flex space-x-6 text-sm text-while/90">
                    <li>
                            <a href="#" className="hover:text-white transition-colors">
                                TOP
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors">
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors">
                                PROJECTS
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors">
                                TECH
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors">
                                FUND&SUPPONSORS
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}