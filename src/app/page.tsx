"use client"

import GalleryViewer  from "./MainPage/components/MainHeroSection"
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"
import OngoingMissions from "./MainPage/components/OngoingMission"
import CompletedMissions from "./MainPage/components/CompletedMissions"
import DomeGallery from "./MainPage/components/DoomPhoto"
import RocketOverview from "./MainPage/components/RocketOverView"

export default function TopPage() {
    return (
            <div className="flex flex-col min-h-screen relative bg-black">
                <Header />
                <main className="flex-1">
                  <GalleryViewer />
                </main>
                <RocketOverview />
                <OngoingMissions />
                <CompletedMissions />
                      <div className="relative w-full h-[100vh]">
                        {/* オーバーレイ煽り文 */}
                        <div className="font-mono absolute top-1/2 left-[3%] -translate-y-1/2 z-40 px-6 py-4 rounded-xl text-white text-3xl md:text-4xl font-bold shadow-lg max-w-md text-center pointer-events-none select-none">
                          未来を創る。CREATE<br/>17年の軌跡
                        </div>
                        {/* つなぎ目グラデーション */}
                        <div className="hidden md:block absolute top-0 bottom-0 right-[40vw] w-32 pointer-events-none z-20"
                          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.0) 100%)" }}
                        />
                        {/* DomeGalleryを右寄せで配置 */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30" style={{ width: '60vw', maxWidth: '900px', height: '80vh' }}>
                          <DomeGallery />
                        </div>
                      </div>
                <Footer className="absolute bottom-0 w-full" />
            </div>
    )
}