"use client"

import Image from "next/image";
import TextType from "../../MainPage/components/TextType";

const mediaFiles = [
    {
        type: "video",
        src: "/ScreenRecording_08-31-2025 21-51-40_1.mov",
        caption: "ENGINE'J-6i'"
    },
    {
        type: "video",
        src: "/73L.mp4",
        caption: "C-73J'DAC'"
    },
    {
        type: "image",
        src: "/IMG_0853.jpg",
        caption: "C-83LM'キーちゃん'"
    },
    {
        type: "image",
        src: "/61-fire.JPG",
        caption: "C-61J'UNICORN'"
    },
    {
        type: "image",
        src: "/engine.png",
        caption: "ENGINE'LM-5i'"
    }
];

export default function GalleryViewer() {

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* LogoLoop 右下配置 */}

                {/* ロゴ画像 左上配置 */}
                {/* <div className="absolute top-6 left-6 z-20">
                    <Image
                        src="/CREATE_moji.png" // public/logo.jpg
                        alt="Logo"
                        width={240}
                        height={240}
                        className="object-contain drop-shadow-lg"
                        priority
                    />
                </div> */}
                <Image
                    src="/gse.jpg"
                    alt="HeroImage"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover bg-black"
                />
                {/* グラデーションレイヤー（上下+左右） */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* 上下グラデーション */}
                    <div style={{
                        position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.85) 92%, rgba(0,0,0,0.99) 100%)"
                            }} />
                            {/* 左右グラデーション */}
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.4) 100%)"
                            }} />
                        </div>


                <div className="absolute bottom-8 right-8 z-30 pointer-events-none">
                    <TextType 
                        key={0}
                        text={mediaFiles[0].caption}
                        className="font-mono text-white text-2xl"
                    />
                </div>
                        
            </div>
        )
}