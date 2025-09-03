"use client"

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Sponsors from "./components/SponsorsList";
import FundSupport from "./components/Fund-Spport";
import LightRays from "../ContactPage/components/Background";

export default function TechPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between relative bg-black"> 
            <Header />
            <div style={{ width: '100%', height: '1280px', position: 'relative' }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays absolute inset-0 z-0"
                />
            </div>

            <main className="pt-32 flex flex-col items-center justify-center py-8 rounded-2xl relative z-10" style={{ background: 'transparent' }}>
                    <div className="w-full flex-1 flex justify-center items-center absolute px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="w-full max-w-2xl rounded-2xl shadow-lg p-8 absolute z-10">
                            <Sponsors />
                            <FundSupport />
                        </div>
                    </div>
            </main>
            <Footer />
        </div>
    )
}