"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Overview() {
    return (
        <section className="relative min-h-screnen bg-white py-24">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* <span className="text-[20vw] font-thin text-gray-100"></span> */}
            </div>

            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold mb-8">活動概要</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                CREATEはハイブリッドロケットの開発・製作・打上げを行う、東京科学大学の技術系公認サークルです。
                            </p>
                            <p>
                                部員は自分達で設定した目標に向けて日々技術開発・製作に勤しんでいます。到達高度の高高度化といった長期に渡る開発に取り組む傍ら、ユニークなミッションを設定した機体を作ることもあります。CREATEにはロケット・宇宙好きはもちろん、航空機・エンジンに興味がある人や単にモノづくりがしたいという人も在籍しています。工学院のみならず理学院から生命理工学院まで幅広い専攻の学生が集まっていることも特徴です
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <Card className="overflow-hidden">
                            <CardContent className="p-0">
                                <Image
                                    src="/lake.jpg"
                                    alt="Rocket"
                                    width={400}
                                    height={300}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="w-full h-full object-cover"
                                />
                            </CardContent>
                        </Card>
                        
                        <Card className="overflow-hidden">
                            <CardContent className="p-0">
                                <Image
                                    src="/hill.jpg"
                                    alt="Rocket"
                                    width={400}
                                    height={300}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="w-full h-full object-cover"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}