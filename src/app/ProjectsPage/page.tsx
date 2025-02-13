"use client"

import { useState } from "react"
import { ProjectCard } from "./components/ProjectList"
import { FilterSearch } from "./components/FilterSearch"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"

// This would typically come from an API or CMS
const projectsData = [
  { id: "1", name: "C-11J", period: "2016/03", category: "ロケット", thumbnail: "/11.jpg" },
  { id: "2", name: "C-29J", period: "2017/11", category: "ロケット", thumbnail: "/29.jpg" },
  { id: "3", name: "C-31J", period: "2017/11", category: "ロケット", thumbnail: "/31.jpg" },
  { id: "4", name: "J-i", period: "2018/03", category: "エンジン", thumbnail: "/j-i.jpg" },
  { id: "5", name: "C-37K", period: "2018/08", category: "ロケット", thumbnail: "/37.jpg" },
  { id: "6", name: "C-41J", period: "2018/11", category: "ロケット", thumbnail: "/41.jpg" },
  { id: "7", name: "J-2i", period: "2019/03", category: "エンジン", thumbnail: "/j-2i.jpg" },
  { id: "8", name: "C-43J(COSMOS)", period: "2019/11", category: "ロケット", thumbnail: "/43.jpg" },
  { id: "9", name: "C-47J", period: "2019/12", category: "ロケット", thumbnail: "/47.jpg" },
  { id: "10", name: "J-3i(ΕΛΠΙΣ)", period: "2020/02", category: "エンジン", thumbnail: "/j-3i.jpg" },
  { id: "11", name: "C-53J+J-3i(COMPASS)", period: "2021/11/07", category: "ロケット", thumbnail: "/53.jpg" },
  { id: "12", name: "C-59J(Iris)", period: "2022/11", category: "ロケット", thumbnail: "/59.jpg" },
  { id: "13", name: "C-61J(UNICORN)", period: "2022/11", category: "ロケット", thumbnail: "/61.jpg" },
  { id: "14", name: "C-67J(海月)", period: "打ち上げ断念", category: "ロケット", thumbnail: "/67.jpg" },
  { id: "15", name: "C-71J(NOVA)", period: "2023/11", category: "ロケット", thumbnail: "/71.jpg" },
  { id: "16", name: "C-73J(DaC)", period: "2025/03予定", category: "ロケット", thumbnail: "/73.jpg" },
  { id: "17", name: "C-79J(雪風)", period: "2024/03", category: "ロケット", thumbnail: "/79.jpg" },
  { id: "18", name: "LM-5i", period: "2025/01", category: "エンジン", thumbnail: "/IMG_9048.jpg" },
  { id: "19", name: "C-83J(キーちゃん)+LM-5i", period: "2025/08予定", category: "ロケット", thumbnail: "/IMG_9049.png" },
  { id: "20", name: "C-89J(白)", period: "2025/03予定", category: "ロケット", thumbnail: "/89.jpg" },

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

