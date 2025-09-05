"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Sponsor = {
  name: string
  logo: string
  url: string
}

const sponsors: Sponsor[] = [
  { name: "サイレックス・テクノロジー株式会社", logo: "/silex.png", url: "https://example.com" },
  { name: "工機ホールディングス株式会社", logo: "/hikoki.jpg", url: "https://example.com" },
  { name: "ZONeエナジー", logo: "/zone.jpg", url: "https://example.com" },
  { name: "NEWS COMPANY", logo: "/newscompany.png", url: "https://example.com" },
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
  return (
    <section className="py-12">
  <div className="px-4 text-white bg-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">スポンサー</h2>
          {/* モダンなアンダーラインでセクション区切り */}
          <div className="w-full flex mb-4">
            <div className="h-px w-2/3 bg-white" />
          </div>
          <p className="text-lg mb-6">
            CREATEは多くの企業や個人の方々の支援を受けており、皆様のご支援が私たちの開発を強く後押ししてくださっています。
          </p>
          <p className="text-lg mb-6">
            支援をして頂いている方々をここで紹介致します。これからもどうぞよろしくお願いします。
          </p>
          <p className="text-lg mb-6">
            また、CREATEでは新規協賛先の募集もしております。
            協賛をお考え頂ける企業・団体様は要件を確認の上、お問い合わせよりご連絡をよろしくお願いします。
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-6">協賛企業</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sponsors.map((sponsor) => (
              <Card key={sponsor.name} className="hover:shadow-lg transition-shadow duration-600 bg-transparent w-full">
                <CardContent className="p-4 bg-transparent">
                  <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <div className={`${
                      sponsor.name === "NEWS COMPANY" ? "bg-transparent p-2" :""
                    }`}
                    >
                      <Image
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={`${sponsor.name} logo`}
                        width={200}
                        height={100}
                        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="mt-2 text-center font-medium text-white/90">{sponsor.name}</p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mt-12 mb-6">支援企業・団体</h3>
          <ul className="list-disc list-inside mb-8">
            {supportingOrganizations.map((org, index) => (
              <li key={index} className="mb-2 text-white/90">
                {org}
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mt-12 mb-6">過去の協賛・支援企業</h3>
          <ul className="list-disc list-inside mb-8">
            {pastSponsors.map((sponsor, index) => (
              <li key={index} className="mb-2">
                {sponsor}
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mt-12 mb-6">協賛・支援の要件等</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">協賛</h4>
              <p className="mb-3">
                活動趣旨にご理解頂き、金銭・物資・サービス等でCREATEを支援頂いた協賛団体様には以下のような返礼を致します。
              </p>
              <ul className="list-disc list-inside">
                <li>HPでのお名前、ロゴ、リンクの掲載、紹介</li>
                <li>SNSでの紹介、拡散（希望があれば）</li>
                <li>ロケットや自作エンジンへのロゴ掲載（大きさは支援内容に応じます）</li>
                <li>プロジェクト報告書の送付</li>
                <li>年次報告書の送付</li>
                <li>その他ご相談に応じます</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">支援</h4>
              <p className="mb-3">
                CREATEが申し込んだキャンペーン等を通じて金銭・物資・サービス等で支援を頂いた支援団体様には以下のような返礼を致します。
              </p>
              <ul className="list-disc list-inside">
                <li>HPでのお名前、ロゴ、リンクの掲載</li>
                <li>キャンペーンの条件に沿った返礼（写真の送付、SNSでの紹介，アンケート等）</li>
                <li>ロケットや自作エンジンへのロゴ掲載（支援内容が一定以上の場合）</li>
                <li>プロジェクト報告書の送付（希望があれば）</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
              <a href="/ContactPage">お問い合わせ</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

