"use client"

import GalleryViewer  from "./components/GalleryViewer"
import Header from "./components/Header"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-16">
              <GalleryViewer />
            </main>
        </div>
    )
}