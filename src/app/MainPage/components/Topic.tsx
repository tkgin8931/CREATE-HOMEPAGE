"use client"

// import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

interface TopicItems {
    date: string
    title:string
    category: "NEWS" | "EVENT"
    link : string
    linkname: string
    showButton : boolean
}

//モックデータ
const topicItems: TopicItems[] = [
    {
        date:"2025.02.10",
        title:"マイケル、アナログ電子回路ピンチ",
        category:"NEWS",
        link: "",
        linkname: "",
        showButton:false,
    },
    {
        date:"2025.01.26",
        title:"M-5i+バルブの燃焼実験に成功!",
        category:"NEWS",
        link:"",
        linkname: "",
        showButton:false,
    },
    {
        date:"2024.12.15",
        title:"クラウドファンディング達成!ありがとうございました!",
        category:"EVENT",
        link:"https://readyfor.jp/projects/150087",
        linkname:"クラファンページへ",
        showButton:true,
    },
    {
        date:"2024.12.14",
        title:"自作タンクの燃焼実験に成功!",
        category:"NEWS",
        link:"/projects73",
        linkname:"プロジェクトページへ",
        showButton:false,
    },
    {
        date:"2024.11.02",
        title:"クラウドファンディングを開始しました！",
        category:"EVENT",
        link:"https://readyfor.jp/projects/150087",
        linkname:"クラファンページへ",
        showButton:true,
    },
    {
        date:"2024.09.11",
        title:"C-73Jの打ち上げに失敗しました。",
        category:"NEWS",
        link:"/project73",
        linkname:"",
        showButton:false,
    },
]

const categoryColors = {
    NEWS:"bg-blue-100 text-blue-800",
    EVENT:"bg-purple-100 text-purple-800",
}

export default function Topics() {
    return (
        <section className="min-h-screen bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.5 }}>
                    <h2 className="text-4xl font-bold mb-12 text-center">TOPICS</h2>
                    <div className="space-v-4 max-w-3xl mx-auto">
                        {topicItems.map((topics, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y:20 }}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.5, delay: index*0.1 }}
                        >
                            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                                <CardContent className="p-4 flex items-start">
                                    <Badge className={`mr-4 ${categoryColors[topics.category]}`}>{topics.category}</Badge>
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-grow items-center">
                                            <p className="text-gray-500 text-sm mb-2">{topics.date}</p>
                                            <h3 className="text-gray-800 text-lg font-semibold">{topics.title}</h3>
                                        </div>
                                        {topics.showButton && (
                                            <div className="flex-shrink-0 flex items-center h-20 px-16">
                                                <Button asChild variant="outline" className="bg-black text-white hover:bg-gray-800 transition-colors duration-300 text-sm px-4 whitespace-nowrap">
                                                    <Link href={topics.link}>{topics.linkname}</Link>
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div> ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}