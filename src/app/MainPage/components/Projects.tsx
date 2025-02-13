"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Project {
    title: string
    date: string
    description: string
    imageUrl: string
    link: string
}

//モックデータ
const projects: Project[] = [
    {
        title: "C-89J",
        date: "開発中",
        description: "2025年3月打ち上げ予定",
        imageUrl: "/89.jpg",
        link: "/project3",
    },
    {
        title: "C-83ML",
        date: "開発中",
        description: "2025年8月打ち上げ予定",
        imageUrl: "/IMG_9048.jpg",
        link: "/project1",
    },
    {
        title: "C-73J",
        date: "開発中",
        description: "2025年3月打ち上げ予定",
        imageUrl: "/73.jpg",
        link: "/project2",
    },
]

export default function Projects() {
    return (
        <section className="min-h-screen bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0}}
                  transition={{ duration : 0.8 }}
                  className="space-y-12"
                >
                    <h2 className="text-4xl font-bold text-center mb-12">PROJECTS</h2>
                    <div className="space-y-24">
                        {projects.map((projects, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y:0 }}
                              transition={{ duration : 0.5 }}
                              className={`flex flex-col ${index % 2== 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 itmes-center`}
                            >
                                <div className="w-full md:w-1/2">
                                  <Image
                                    src={projects.imageUrl}
                                    alt={projects.title}
                                    width={400}
                                    height={300}
                                    layout="responsive"
                                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                                  />
                                </div>
                                <div className="w-full md:w-1/2 space-y-4">
                                    <h3 className="text-2xl font-bold">{projects.title}</h3>
                                    <p className="text-gray-600">{projects.description}</p>
                                    <Button asChild variant="outline" className="bg-black text-white hover:bg-gray-800">
                                       <Link href={projects.link}>プロジェクトページへ</Link>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}