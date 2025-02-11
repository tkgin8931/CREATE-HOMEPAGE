"use client"

// import Image from "next/image"

// const images = [
//     {
//         src:"/CREATE-LOGO.png"
//     },
//     {
//         src:"/CREATE_moji.png"
//     },
// ]

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center pl-20">
                    {/* <Image
                        src={images[0].src}
                        alt="CREATE-LOGO"
                        width={70}
                        height={70}
                    /> */}
                    {/* <h1 className="text-white text-4xl font-bold font-gokuti">CREATE</h1> */}

                </div>
                <nav className="pr-8">
                    <ul className="flex space-x-8 text-sm text-white/90 ">
                        <li>
                            <a href="/MainPage" className="hover:text-white transition-colors">
                                TOP
                            </a>
                        </li>
                        <li>
                            <a href="/AboutUsPage" className="hover:text-white transition-colors">
                                ABOUT US
                            </a>
                        </li>
                        <li>
                            <a href="/ProjectsPage" className="hover:text-white transition-colors">
                                PROJECTS
                            </a>
                        </li>
                        <li>
                            <a href="/TechPage" className="hover:text-white transition-colors">
                                TECH
                            </a>
                        </li>
                        <li>
                            <a href="/Fund&SponsorPage" className="hover:text-white transition-colors">
                                FUND&SPONSORS
                            </a>
                        </li>
                        <li>
                            <a href="/ContactPage" className="hover:text-white transition-colors">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}