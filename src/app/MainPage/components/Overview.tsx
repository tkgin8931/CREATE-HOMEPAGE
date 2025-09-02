"use client"

import Image from "next/image"
import CardSwap,{Card} from "./CardSwap"

const content = [
    {
        title: "活動概要",
        description: "CREATEはハイブリッドロケットの開発・製作・打上げを行う、東京科学大学の技術系公認サークルです。部員は自分達で設定した目標に向けて日々技術開発・製作に勤しんでいます。到達高度の高高度化といった長期に渡る開発に取り組む傍ら、ユニークなミッションを設定した機体を作ることもあります。CREATEにはロケット・宇宙好きはもちろん、航空機・エンジンに興味がある人や単にモノづくりがしたいという人も在籍しています。工学院のみならず理学院から生命理工学院まで幅広い専攻の学生が集まっていることも特徴です"
    },
    {
        title: "活動内容",
        description: "CREATEでは、定期的にミーティングを行い、各自の進捗状況を報告し合っています。また、技術的な知見を深めるための勉強会や、実際のロケット製作に向けたワークショップも開催しています。"
    }
]

export default function Overview() {
    return (
        <section
            className="relative bg-black overflow-hidden"
        >
            {/* 上端フェード（グラデーション） */}
            <div className="absolute top-0 left-0 w-full h-32 pointer-events-none z-10" style={{
                background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)"
            }} />


                    <div className="space-y-4 md:col-span-1 py-40">
                        <h2 className="text-4xl font-bold mb-2 text-white">活動概要</h2>
                        <div className="w-80 h-1 bg-white rounded-full mb-8" />
                        <div className="space-y-4 text-white leading-relaxed">
                            <p>{content[0].description}</p>
                            <p>{content[1].description}</p>
                        </div>
                    </div>


                    <div style={{ height: '600px', position: 'relative' }}>
                            <CardSwap
                                cardDistance={60}
                                verticalDistance={70}
                                delay={3000}
                                pauseOnHover={false}
                            >
                                 <Card>
                                    <Image
                                        src="/CREATE-visual.jpg"
                                        alt="Rocket"
                                        width={40}
                                        height={25}
                                        layout="responsive"
                                        objectFit="cover"
                                        className=""
                                    />
                                </Card>
                                <Card>
                                    <h2></h2>
                                    <Image
                                        src="/CREATE-visual.jpg"
                                        alt="Rocket"
                                        width={40}
                                        height={25}
                                        layout="responsive"
                                        objectFit="cover"
                                        className=""
                                    />
                                </Card>
                                <Card>
                                    <Image
                                        src="/CREATE-visual.jpg"
                                        alt="Rocket"
                                        width={40}
                                        height={25}
                                        layout="responsive"
                                        objectFit="cover"
                                        className=""
                                    />
                                </Card>
                            </CardSwap>
                    </div>
            
        </section>
    )
}