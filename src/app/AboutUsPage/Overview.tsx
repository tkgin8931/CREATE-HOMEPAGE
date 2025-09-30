"use client"

import Squares from "./Background"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Rocket, Zap, Code, Wrench, FolderOpen} from "lucide-react"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"
import Link from "next/link"
const teams = [
  {
    id: 1,
    name: "構造班",
    description: "ロケット本体の機構設計、加工プロセスを担当",
    icon: Wrench,
    color: "bg-blue-500/20 text-blue-400",
    members: 12,
    projects: ["開放機構", "パラシュート", "ノーズ"],
    image: "/89.jpg",
  },
  {
    id: 2,
    name: "電装班",
    description: "ロケット内部の電子回路、ソフトウェア開発を担当",
    icon: Zap,
    color: "bg-orange-500/20 text-orange-400",
    members: 8,
    projects: ["センサー", "電子回路", "プログラミング"],
    image: "/IMG_4201.jpg",
  },
  {
    id: 3,
    name: "シミュレーション班",
    description: "独自システムで飛行軌道のシミュレーションを担当",
    icon: Code,
    color: "bg-green-500/20 text-green-400",
    members: 15,
    projects: ["飛行シミュレーション", "SPICA", "数理解析"],
    image: "/ANSYS.png",
  },
  {
    id: 4,
    name: "推進班",
    description: "ロケットモーターや点火システムの開発運用を担当",
    icon: Rocket,
    color: "bg-purple-500/20 text-purple-400",
    members: 20,
    projects: ["エンジン", "点火システム", "配管設計"],
    image: "/j-2i.jpg",
  },
]

const content = [
    {
        title: "活動概要",
        description: "CREATEはハイブリッドロケットの開発・製作・打上げを行う、東京科学大学の技術系公認サークルです。部員は自分達で設定した目標に向けて日々技術開発・製作に勤しんでいます。到達高度の高高度化といった長期に渡る開発に取り組む傍ら、ユニークなミッションを設定した機体を作ることもあります。CREATEにはロケット・宇宙好きはもちろん、航空機・エンジンに興味がある人や単にモノづくりがしたいという人も在籍しています。工学院のみならず理学院から生命理工学院まで幅広い専攻の学生が集まっていることも特徴です"
    },
    {
        title: "活動内容",
        description: "CREATEでは、定期的にミーティングを行い、各自の進捗状況を報告し合っています。また、技術的な知見を深めるための勉強会や、実際のロケット製作に向けたワークショップも開催しています。"
    }
];

export default function Overview() {
    return (
        <section className="relative bg-black">
            <Header />
            {/* ヒーローセクション */}
            <div className="relative bg-black/40 w-full h-[340px] md:h-[420px] overflow-hidden flex items-center justify-center z-10">
              <img
                src="/CREATE-visual.jpg"
                alt="CREATE ヒーローイメージ"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-transparent" />
            </div>
      {/* 画像とmainのつなぎ目にグラデーション（より自然に黒くフェード） */}
      <div className="w-full h-32 -mt-24 relative z-10" style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 60%, rgba(0,0,0,0.95) 85%, rgba(0,0,0,1) 100%)"
      }} />
      {/* Squares背景をsection全体の絶対背景に */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
      <main className="relative bg-black/80">
                    <div className="px-8 space-y-4 md:col-span-1 py-8">
                        <h2 className="text-4xl font-mono font-bold mb-2 text-white">活動概要</h2>
                        <div className="w-80 h-px bg-white rounded-full mb-8" />
                        <div className="space-y-4 text-white/80 font-mono font-normal leading-relaxed">
                            <p>{content[0].description}</p>
                            <p>{content[1].description}</p>
                        </div>
                    </div>
                    
                    {/* Teams Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-white text-balance">各班紹介</h2>
            <p className="text-3xl text-white/70 text-pretty">
              各分野で協力して、宇宙開発に取り組んでいます
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 px-16">
            {teams.map((team) => (
              <Card
                key={team.id}
                className="overflow-hidden border border-zinc-800 bg-zinc-900 hover:border-primary/60 transition-colors group shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={team.image || "/placeholder.svg"}
                    alt={team.name}
                    className="w-full h-48 bg-black/40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 p-3 rounded-full ${team.color} border border-zinc-700 shadow-md"`}>
                    <team.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white">{team.name}</CardTitle>
                  </div>
                  <CardDescription className="text-zinc-300 text-pretty">{team.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-zinc-200 mb-2">主要プロジェクト:</h4>
                    <div className="flex flex-wrap gap-2">
                      {team.projects.map((project, index) => (
                        <Badge key={index} variant="outline" className="text-xs bg-zinc-800 text-zinc-200 border-zinc-700">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {/* <Button size="sm" variant="ghost" className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700 w-full border border-zinc-700">
                    チーム詳細
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* 情報公開について*/}
        <div className="px-8 space-y-4 md:col-span-1 py-8">
                        <h2 className="text-4xl font-mono font-bold mb-2 mt-11 text-white">情報の公開について</h2>
                        <div className="w-80 h-px bg-white rounded-full mb-8" />
                        <div className="space-y-6 text-white/80 font-mono font-normal leading-relaxed mb-10">
                            <p>本ページで公開する​情報の閲覧・利用に当たっては、以下の内容にご了承頂けたものとします。</p>
                            <ul className="list-disc list-outside space-y-2 pl-6">
                            <li>CREATE（以下当団体）は学生同士で技術を広め合い，切磋琢磨できるオープンな環境づくりを目指しています。このページはその目的を実現する一環として立ち上げたものです。適切な引用の下、公開されている資料を利用して頂くことは大歓迎です。</li>
                            <li>提供する情報の正確性を維持するために最大限の注意を払っていますが、必ずしもそれを保証するものではありません。</li>
                            <li>​​プロジェクト報告書はプロジェクト終了から半年以上経った後の公開となります。</li>
                            <li>当団体は、当団体の公開する情報によって生じたいかなる損害についても一切の責任を負いません。</li>
                            <li>本情報公開は，予告なしに運用方針や運用方法の変更を行う場合があります。</li>
                            </ul>
                            <p>内容に関する疑問・質問・要望等も大歓迎です。お気軽にお問い合わせください。</p>
                        </div>
                        </div>
                        <div className="px-8 space-y-4 md:col-span-1 py-8">
                        <h2 className="text-4xl font-mono font-bold mb-2 mt-10  text-white">外部リンク</h2>
                        <div className="w-80 h-px bg-white rounded-full mb-8" />
                        <div className="space-y-4 text-white/80 font-mono font-normal leading-relaxed">
                        <div className="pl-6 flex items-center space-x-4 hover:underline">
                          {<Link href="https://drive.google.com/drive/u/0/folders/13f8nrL5ERnGxhedMvoN59CKWNdvQr3he">
                            <FolderOpen size={96}/>
                            <p>部外向け報告書(google drive)</p>
                        </Link>}
                        </div>
                        </div>
                    </div>
        
        <Footer />
            </main>
        </section>
    )
}