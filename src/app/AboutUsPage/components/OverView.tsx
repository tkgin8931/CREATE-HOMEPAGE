"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function OverView() {
    const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true })
    const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true })

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                
                <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                    
                    <div ref={imageRef} className="mb-24 md:mb-0 md:w-1/2">
                        <Image 
                            src="/logo.jpg"
                            alt="Organization image"
                            width={550}
                            height={550}
                            className={`rounded-lg object-cover transition-opacity duration-1000 ${
                                imageInView ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    </div>

                    {/* テキスト部分 */}
                    <div
                        ref={textRef}
                        className={`md:w-1/2 transition-opacity duration-1000 ${
                            textInView ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        
                        <h1 className="mb-2 text-xl font-bold text-gray-700">ご挨拶</h1>
                        <p className="mb-4">
                        はじめまして!東京科学大学ロケットサークルCREATEです!CREATEはハイブリッドロケットの開発・製作・打上げを行う、東京科学大学の技術系公認サークルです。
                        </p>
                        <p className="mb-4">
                        ハイブリッドロケットとは液体の酸化剤と固体の燃料からなるエンジンを用いたロケットです。
                        現在部員は約60名で、学年ごとにチームを作って日々ロケット製作に取り組んでいます。 
                        </p>
                        <p className="mb-4">
                        CREATEには宇宙を夢見るメンバーばかりが集まっています。そのため我々のロケット開発における最終目標はロケットが宇宙に到達すること、つまり高度100kmに到達することです。
                        </p>
                        <p className="mb-4">
                        機体の軽量化や姿勢制御技術、高出力のエンジン、長距離通信など様々な技術が必要で、現在はそれぞれの要素技術を開発している段階です
                        </p>
                        <Button size="lg">
                            <Link href="/ProjectsPage">プロジェクトページへ</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
