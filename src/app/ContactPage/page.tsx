import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import Contact from "./components/Contact";
import LightRays from './components/Background'

export default function ContactPage() {
    return (
    <section className="min-h-screen flex flex-col justify-between relative bg-black">
        {/* 上端グラデーション */}
        <div className="absolute top-0 left-0 w-full h-32 pointer-events-none z-10" style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)"
        }} />
            <Header />
            {/* <main className="flex-1">
                <ContactHeroSection />
            </main> */}
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
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
                <main className="pt-32 flex flex-col items-center justify-center py-8 rounded-2xl absolute inset-0 z-10" style={{ background: 'transparent' }}>
                    <div className="w-full flex-1 flex justify-center items-center relative px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="w-full max-w-2xl rounded-2xl shadow-lg p-8 absolute z-10">
                            <Contact />
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </section>
    )
}