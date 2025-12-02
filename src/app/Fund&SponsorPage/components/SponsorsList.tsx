"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/LanguageContext"

type Sponsor = {
  name: string
  logo: string
  url: string
  id: string
}

const sponsors: Sponsor[] = [
  { name: "サイレックス・テクノロジー株式会社", logo: "/silex.png", url: "https://example.com", id: "01" },
  { name: "工機ホールディングス株式会社", logo: "/hikoki.jpg", url: "https://example.com", id: "02" },
  { name: "ZONeエナジー", logo: "/zone.jpg", url: "https://example.com", id: "03" },
  { name: "NEWS COMPANY", logo: "/newscompany.png", url: "https://example.com", id: "04" },
]

const supportingOrganizations = [
  "白星会（東京工業大学機械工学分野卒業生同窓会）",
  "インターステラテクノロジズ株式会社",
  "東京工業大学ものつくり教育研究支援センター",
  "CREATE OB・OG の皆様",
]

const pastSponsors = [
  "株式会社アイデミー",
  "モノタロウ",
  "Autodesk株式会社",
  "宮本機器開発株式会社",
  "株式会社岩間工業所",
  "ミスミグループ本社",
]

export default function Sponsors() {
  const { t } = useLanguage();

  return (
    <section className="py-12 relative">
      <div className="px-4 text-white">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter">{t.fundPage.sponsors.title}</h2>
            </div>
          </div>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl leading-relaxed">
            {t.fundPage.sponsors.description}
          </p>

          {/* Current Sponsors Grid */}
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-6 text-white">
              <h3 className="text-xl font-bold tracking-tight">{t.fundPage.sponsors.active}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <div className="relative bg-zinc-950 border border-white/10 p-6 h-full flex flex-col items-center justify-between hover:border-white/30 transition-colors duration-300">

                    <div className="w-full aspect-[3/2] flex items-center justify-center mb-4 bg-white/5 p-4">
                      <Image
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={`${sponsor.name} logo`}
                        width={200}
                        height={100}
                        className="w-full h-full object-contain transition-all duration-500"
                      />
                    </div>
                    <p className="text-sm font-bold text-center text-gray-300 group-hover:text-white transition-colors">
                      {sponsor.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Supporting Organizations */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-6 text-white">
                <h3 className="text-xl font-bold tracking-tight">{t.fundPage.sponsors.supporting}</h3>
              </div>
              <div className="bg-zinc-950 border border-white/10 p-6">
                <ul className="space-y-4">
                  {supportingOrganizations.map((org, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{org}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Past Sponsors */}
            <div>
              <div className="flex items-center gap-2 mb-6 text-white">
                <h3 className="text-xl font-bold tracking-tight">{t.fundPage.sponsors.archived}</h3>
              </div>
              <div className="bg-zinc-950 border border-white/10 p-6">
                <ul className="grid grid-cols-1 gap-3">
                  {pastSponsors.map((sponsor, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                      {sponsor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Requirements Section */}
          <div className="border-t border-white/10 pt-12">
            <h3 className="text-2xl font-bold mb-8 text-center">{t.fundPage.sponsors.protocols}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-950 border border-white/10 p-8">
                <h4 className="text-lg font-bold text-white mb-4">{t.fundPage.sponsors.sponsorship.title}</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {t.fundPage.sponsors.sponsorship.desc}
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {t.fundPage.sponsors.sponsorship.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-2 text-gray-500">{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-950 border border-white/10 p-8">
                <h4 className="text-lg font-bold text-white mb-4">{t.fundPage.sponsors.support.title}</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {t.fundPage.sponsors.support.desc}
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {t.fundPage.sponsors.support.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-2 text-gray-500">{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 rounded-none">
                <a href="/ContactPage" className="flex items-center gap-2">
                  <span className="tracking-widest">{t.fundPage.sponsors.becomePartner}</span>
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
