"use client";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import Contact from "./components/Contact";
import LightRays from './components/Background'
import SougoLinks from './components/sougolinks';
import { Terminal } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen flex flex-col justify-between relative bg-black overflow-x-hidden">
            <Header />

            <div className="flex-1 relative pt-32 pb-20">
                {/* Background Rays */}
                <div className="absolute inset-0 z-0">
                    {/* <LightRays
                        raysOrigin="top-center"
                        raysColor="#444444"
                        raysSpeed={0.5}
                        lightSpread={0.6}
                        rayLength={1.0}
                        followMouse={true}
                        mouseInfluence={0.05}
                        noiseAmount={0.05}
                        distortion={0.02}
                    /> */}
                </div>

                {/* Content Container */}
                <main className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8">

                    {/* Page Header */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6 text-gray-500 font-mono text-sm tracking-widest">
                            <Terminal className="w-4 h-4" />
                            <span>{t.contactPage.header.status}</span>
                            <div className="h-px flex-1 bg-gray-800" />
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4">
                            CONTACT<br />CENTER
                        </h1>
                        <p className="text-gray-400 text-lg max-w-xl border-l border-white/20 pl-6">
                            {t.contactPage.header.description}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Main Form Area */}
                        <div className="lg:col-span-7">
                            <Contact />
                        </div>

                        {/* Sidebar / Links */}
                        <div className="lg:col-span-5">
                            <SougoLinks />
                        </div>
                    </div>

                </main>
            </div>
            <Footer />
        </section>
    )
}