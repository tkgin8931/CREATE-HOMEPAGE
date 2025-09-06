
import "./globals.css"
import { Inter, Poppins, Montserrat } from "next/font/google"
import { Suspense } from 'react'
import type React from "react"
import Loading from "./loading"
const inter = Inter({subsets:["latin"], variable:"--font-inter"})
const poppins = Poppins({ weight: ["400","600"], subsets:["latin"], variable:"--font-poppins"})
const montserrat = Montserrat({ subsets:["latin"], variable:"--font-montserrat"})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja" className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}>
            <body className="min-h-screen w-full">
                <Suspense>
                     <Loading />
                    {children}
                </Suspense>
            </body>
        </html>
    )
}