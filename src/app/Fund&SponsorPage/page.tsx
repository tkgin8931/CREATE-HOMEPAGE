"use client"

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Sponsors from "./components/SponsorsList";
import FundSupport from "./components/Fund-Support";
import Particles from "./components/background";
import { Award, CheckCircle, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";


export default function FundPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col justify-between relative bg-black">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Particles
          particleColors={['#444444', '#666666']}
          particleCount={150}
          particleSpread={15}
          speed={0.2}
          particleBaseSize={80}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <Header />

      <main className="pt-32 relative z-10">

        {/* Crowdfunding Success Banner - Open Layout */}
        <div className="w-full border-b border-white/10 bg-gradient-to-b from-black via-zinc-900 to-black pb-24 mb-24 relative overflow-hidden">

          {/* Background Decor - Moved to outer container for better clipping */}
          <div className="absolute top-0 left-0 opacity-[0.03] pointer-events-none select-none">
            <Award className="w-[500px] h-[500px] text-white -translate-x-1/4 -translate-y-1/4" />
          </div>

          <div className="max-w-7xl mx-auto px-4 pt-12">

            <div className="grid lg:grid-cols-12 gap-16 items-start relative">

              {/* Left Column: Impact Numbers */}
              <div className="lg:col-span-5 relative z-10 pt-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="px-3 py-1 text-green-400 text-xs font-mono tracking-widest uppercase rounded-full flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    {t.fundPage.banner.mission}
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4 leading-none">
                  {t.fundPage.banner.title}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                    {t.fundPage.banner.success}
                  </span>
                </h1>

                <div className="mt-12">
                  <div className="text-sm text-gray-500 font-mono uppercase tracking-wider mb-2">{t.fundPage.banner.totalFunds}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-8xl font-light text-white font-mono tracking-tighter">
                      ¥3,660,000
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-6 text-gray-400 font-mono text-sm border-l-2 border-emerald-500/30 pl-4">
                    <Users className="w-4 h-4" />
                    <span>{t.fundPage.banner.supporters}: <span className="text-white font-bold">117</span></span>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Supporters */}
              <div className="lg:col-span-7 relative z-10 lg:pt-8 lg:pl-12 lg:border-l border-white/10">
                <div className="prose prose-invert max-w-none">
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-8">
                    {t.fundPage.banner.message}
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-12">
                    {t.fundPage.banner.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Special Thanks</div>
                  <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-mono text-gray-400">
                    {["A. Shimizu", "Manabu Kodama", "Daikin Industries", "Hisao Taki", "Shota Nakamura", "Pablo", "Mirai Creation Investments", "Tsunehiro Miyamoto", "ryo", "Takeshi Wada"].map((name, i) => (
                      <span key={i} className="hover:text-emerald-400 transition-colors cursor-default border-b border-transparent hover:border-emerald-500/30 pb-0.5">
                        {name}
                      </span>
                    ))}
                    <span className="text-gray-600">+107 others</span>
                  </div>

                  <div className="pt-12 flex items-center gap-6">
                    <a
                      href="https://readyfor.jp/projects/150087/announcements/354896"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-white bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full transition-all group"
                    >
                      <span className="text-sm font-mono tracking-wider uppercase">{t.fundPage.banner.archiveLink}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Main Content Components */}
        <div className="w-full max-w-7xl mx-auto px-4">
          <Sponsors />
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
          <FundSupport />
        </div>

      </main>
      <Footer />
    </div>
  )
}