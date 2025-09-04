"use client"

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Sponsors from "./components/SponsorsList";
import FundSupport from "./components/Fund-Spport";
import Particles from "./components/background";


export default function TechPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between relative bg-black"> 
            {/* LightRaysを絶対背景に */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                 <Particles
                    particleColors={['#ffffff', '#ffffff']}
                     particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <Header />
            <main className="pt-32 flex flex-col items-center justify-center py-8 relative z-10" style={{ background: 'transparent' }}>
                <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="w-full max-w-2xl rounded-2xl shadow-lg p-8">
                        <Sponsors />
                        <FundSupport />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}