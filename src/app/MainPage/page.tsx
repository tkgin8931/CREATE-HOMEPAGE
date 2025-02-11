"use client"

import Contact from "./components/Contact"
import GalleryViewer  from "./components/GalleryViewer"
import Header from "../../components/ui/Header"
import Overview from "./components/Overview"
import Projects from "./components/Projects"
import Topics from "./components/Topic"
import Footer from "../../components/ui/Footer"

export default function TopPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-16">
              <GalleryViewer />
            </main>
            <Overview />
            <Projects />
            <Topics />
            <div className="min-h-screen">
                <Contact />
            </div>
            <Footer />
        </div>
    )
}