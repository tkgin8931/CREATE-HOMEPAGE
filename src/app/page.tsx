"use client"

import Contact from "./MainPage/components/Contact"
import GalleryViewer  from "./MainPage/components/GalleryViewer"
import Header from "../components/ui/Header"
import Overview from "./MainPage/components/Overview"
// import Projects from "./MainPage/components/Projects"
// import Topics from "./MainPage/components/Topic"
import Footer from "../components/ui/Footer"

export default function TopPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <GalleryViewer />
            </main>
            <section className="bg-black">
                <Overview />            
                <Contact />
            </section>
            <Footer />
        </div>
    )
}