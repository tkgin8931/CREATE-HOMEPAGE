"use client"

import { useState } from "react"
import { ProjectCard } from "./components/ProjectList"
import { FilterSearch } from "./components/FilterSearch"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"

// This would typically come from an API or CMS
const projectsData = [
  { id: "1", name: "ハイブリッドロケットA", period: "2023年春", category: "ロケット", thumbnail: "/placeholder.svg" },
  { id: "2", name: "エンジン開発B", period: "2023年秋", category: "エンジン", thumbnail: "/placeholder.svg" },
  { id: "3", name: "火星ローバーC", period: "2024年冬", category: "ローバー", thumbnail: "/placeholder.svg" },
  { id: "4", name: "ハイブリッドロケットA", period: "2023年春", category: "ロケット", thumbnail: "/placeholder.svg" },
  { id: "5", name: "エンジン開発B", period: "2023年秋", category: "エンジン", thumbnail: "/placeholder.svg" },
  { id: "6", name: "火星ローバーC", period: "2024年冬", category: "ローバー", thumbnail: "/placeholder.svg" },
  { id: "7", name: "ハイブリッドロケットA", period: "2023年春", category: "ロケット", thumbnail: "/placeholder.svg" },
  { id: "8", name: "エンジン開発B", period: "2023年秋", category: "エンジン", thumbnail: "/placeholder.svg" },
  { id: "9", name: "火星ローバーC", period: "2024年冬", category: "ローバー", thumbnail: "/placeholder.svg" },
]

const categories = ["ロケット", "エンジン", "ローバー"]

export default function Home() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData)

  const handleFilterChange = (category: string, search: string) => {
    const filtered = projectsData.filter((project) => {
      const matchesCategory = category ? project.category === category : true
      const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
    setFilteredProjects(filtered)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20 px-4 md:px-8 lg:px-16 pb-16">  
        <h2 className="text-3xl font-bold mb-6">プロジェクト一覧</h2>
        <FilterSearch categories={categories} onFilterChange={handleFilterChange} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
            ))}
        </div>
       </main>
       <Footer />  
    </div>
  )
}

