
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Poppins, Montserrat, Noto_Sans_JP } from "next/font/google"
import { Suspense } from 'react'
import type React from "react"
import Loading from "./loading"
import { LanguageProvider } from "@/context/LanguageContext"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-poppins" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto-sans-jp" })

export const metadata: Metadata = {
    title: "ひろゆき、マイナンバーカードを持たない人に持論 さまざまな意見集まる",
    openGraph: {
        title: "ひろゆき、マイナンバーカードを持たない人に持論 さまざまな意見集まる",
        images: ["/metaHiro.png"],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja" className={`${inter.variable} ${poppins.variable} ${montserrat.variable} ${notoSansJP.variable}`}>
            <body className="min-h-screen w-full">
                <Suspense>
                    <LanguageProvider>
                        <Loading />
                        {children}
                    </LanguageProvider>
                </Suspense>
            </body>
        </html>
    )
}