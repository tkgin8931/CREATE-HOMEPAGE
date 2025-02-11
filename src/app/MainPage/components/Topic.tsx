"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface TopicItems {
    date: string
    title:string
    category: "news" | "events"
}

//モックデータ
const topicItems: TopicItems[] = [
    {
        date:"2025.02.10",
        title:"マイケル、アナログ電子回路ピンチ",
        category:"news"
    },
    {
        date:"2025.01.26",
        title:"M-5i+バルブ燃焼実験成功",
        category:"news"
    },
    {
        date:"2024.12.15",
        title:"クラウドファンディング終了",
        category:"events"
    },
]

const categoryColors = {
    news:"bg-blue-100 text-blue-800",
    events:"bg-purple-100 text-purple-800",
}

export default function Topics() {
    return (
        <section className="min-h-screen bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.5 }}>
                    <h2 className="text-4xl font-bold mb-12 text-center">TOPICS</h2>
                    <div className="space-v-4 max-w-3xl mx-auto">
                        {topicItems.map((items, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y:20 }}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.5, delay: index*0.1 }}
                        >
                            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                                <CardContent className="p-4 flex items-start">
                                    <Badge className={`mr-4 ${categoryColors[items.category]}`}>{items.category}</Badge>
                                    <div>
                                        <p className="text-gray-500 text-sm mb-2">{items.date}</p>
                                        <h3 className="text-gray-800 text-lg font-semibold">{items.title}</h3>
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