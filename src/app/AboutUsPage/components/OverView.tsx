"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

export default function OverView() {
    const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true })
    const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true })

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Flexboxで横並びにする */}
                <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                    {/* 画像部分 */}
                    <div ref={imageRef} className="mb-8 md:mb-0 md:w-1/2">
                        <Image 
                            src="/hill.jpg"
                            alt="Organization image"
                            width={800}
                            height={900}
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
                        <h1 className="mb-4 text-3xl font-bold md:text-4xl">CREATE</h1>
                        <h2 className="mb-2 text-xl font-semibold text-gray-700">Hybrid Rocket</h2>
                        <p className="mb-4">
                            Hybrid Rocket is a collaborative project that aims to create a groundbreaking, integrated system of advanced technology solutions for space exploration. Our team of engineers, designers, and researchers are working tirelessly to develop cutting-edge technologies that will revolutionize the way we explore, understand, and protect our planet.
                        </p>
                        <h3 className="mb-4 text-lg font-semibold">Our Mission</h3>
                        <ul className="mb-4 list-inside list-disc">
                            <li>自作エンジン+バルブシステム</li>
                            <li>無線映像伝送</li>
                            <li>リーフィング機構</li>
                        </ul>
                        <p className="mb-6">
                            未来に点火します
                        </p>
                        <Button size="lg">Projects Page</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
