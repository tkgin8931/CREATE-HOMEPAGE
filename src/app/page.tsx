"use client"

import GalleryViewer from "./MainPage/components/MainHeroSection"
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"
import OngoingMissions from "./MainPage/components/OngoingMission"
import CompletedMissions from "./MainPage/components/CompletedMissions"
import DomeGallery from "./MainPage/components/DoomPhoto"
import RocketOverview from "./MainPage/components/RocketOverView"
import Social from "./MainPage/components/Social"
import { useLanguage } from "@/context/LanguageContext"

export default function TopPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen relative bg-black">
      <Header />
      <main className="flex-1">
        <GalleryViewer />
      </main>
      <RocketOverview />
      <OngoingMissions />

      <CompletedMissions />
      <Social />
      <div className="relative w-full min-h-[80vh] grid grid-cols-1 md:grid-cols-12 gap-0 items-center overflow-hidden my-20">
        {/* Left Side: Text */}
        <div className="md:col-span-5 z-40 px-6 py-12 md:pl-12 flex flex-col justify-center items-center md:items-start text-center md:text-left pointer-events-none select-none">
          <div className="font-sans text-white text-3xl md:text-5xl font-bold shadow-black drop-shadow-lg leading-tight">
            {t.topPage.hero.galleryTitle}<br />
            <span className="text-2xl md:text-4xl mt-2 block opacity-90">{t.topPage.hero.gallerySubtitle}</span>
          </div>
        </div>

        {/* Gradient Overlay for smooth transition */}
        <div className="hidden md:block absolute inset-y-0 left-[35%] w-32 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />

        {/* Right Side: Gallery */}
        <div className="md:col-span-7 h-[60vh] md:h-[80vh] w-full relative z-10">
          <DomeGallery />
        </div>
      </div>

      <Footer className="w-full" />
    </div>
  )
}