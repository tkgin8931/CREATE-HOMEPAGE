"use client"

import GalleryViewer  from "./MainPage/components/MainHeroSection"
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"
import OngoingMissions from "./MainPage/components/OngoingMission"
import CompletedMissions from "./MainPage/components/CompletedMissions"


export default function TopPage() {
    return (
            <div className="flex flex-col min-h-screen relative">
                <Header />
                <main className="flex-1">
                  <GalleryViewer />
                </main>
                <OngoingMissions />
                <CompletedMissions />
                <Footer className="absolute bottom-0 w-full" />
            </div>
    )
}