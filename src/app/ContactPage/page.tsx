import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import Contact from "./components/Contact";
import LightRays from './components/Background'

export default function ContactPage() {
    return (
        <section className="min-h-screen flex flex-col justify-between relative bg-black overflow-x-hidden">
            {/* 上端グラデーション */}
            <div className="absolute top-0 left-0 w-full h-32 pointer-events-none z-10" style={{
                background: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)"
            }} />
            <Header />
            <div className="flex-1 relative">
                {/* 背景としてのLightRays */}
                <div className="absolute inset-0">
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#AAAAAA"
                        raysSpeed={1.5}
                        lightSpread={0.8}
                        rayLength={1.2}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.1}
                        distortion={0.05}
                    />
                </div>
                
                {/* フォームのオーバーレイ */}
                <main className="relative z-20 w-full h-full flex items-center justify-center pt-16">
                    <div className="w-full max-w-2xl mx-auto px-4">
                        <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg">
                            <Contact />
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </section>
    )
}