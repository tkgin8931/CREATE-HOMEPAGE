"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function FundSupport() {
  const { t } = useLanguage();

  return (
    <section className="py-12 relative">
      <div className="px-4 text-white">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter">{t.fundPage.support.title}</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Column: Description & Actions */}
            <div>
              <div className="bg-zinc-950 border border-white/10 p-8 mb-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {t.fundPage.support.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white hover:bg-gray-200 text-black font-bold tracking-wider h-14 rounded-none">
                    <a
                      href="https://fundexapp.jp/titech/entry.php?purposeCode=500000&supportCode=504200"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span>{t.fundPage.support.jpForm}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-bold tracking-wider h-14 rounded-none">
                    <a
                      href="https://fundexapp.jp/titech_eng/entry.php?purposeCode=500000&supportCode=504200"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span>{t.fundPage.support.enForm}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Usage of Funds */}
              <div className="bg-zinc-950 border border-white/10 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-white">
                  {t.fundPage.support.allocation.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.fundPage.support.allocation.desc}
                </p>
              </div>
            </div>

            {/* Right Column: Details & Rewards */}
            <div className="space-y-6">

              {/* Donation Process */}
              <div className="bg-zinc-950 border border-white/10 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-white">
                  {t.fundPage.support.protocol.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {t.fundPage.support.protocol.desc}
                </p>
                <div className="bg-white/5 text-gray-300 px-4 py-2 text-sm font-mono inline-block border border-white/10">
                  {t.fundPage.support.protocol.purposeCode}
                </div>
              </div>

              {/* Rewards */}
              <div className="bg-zinc-950 border border-white/10 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-white">
                  {t.fundPage.support.rewards.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">{t.fundPage.support.rewards.standard.title}</h4>
                    <ul className="space-y-1 text-sm text-gray-400 pl-4 border-l border-white/10">
                      {t.fundPage.support.rewards.standard.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">{t.fundPage.support.rewards.elite.title}</h4>
                    <ul className="space-y-1 text-sm text-gray-400 pl-4 border-l border-white/10">
                      {t.fundPage.support.rewards.elite.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}