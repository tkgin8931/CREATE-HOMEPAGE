
import "./globals.css"
import { Inter, Poppins, Montserrat } from "next/font/google"
import type React from "react"

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
            <body>
                {children}
            </body>
        </html>
    )
}