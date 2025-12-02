"use client"

import { useState, useEffect } from "react"
import { projectsData } from "./ProjectData"
import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import Image from "next/image"
import { ArrowUpRight, Rocket, Zap, Disc } from "lucide-react"
import { motion } from "framer-motion"

const categories = ["ALL", "ROCKET", "ENGINE", "CANSAT"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = projectsData.filter(project =>
    activeCategory === "ALL" || project.category.toUpperCase() === activeCategory
  )

  const scrollToProject = (id: string) => {
    const element = document.getElementById(`project-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

            {/* Sticky Sidebar */}
            <aside className="lg:w-1/4 lg:h-[calc(100vh-8rem)] lg:sticky lg:top-32 flex flex-col justify-between">
              <div>
                <h1 className="text-6xl font-bold tracking-tighter mb-12 leading-none">
                  PROJECT<br />ARCHIVE
                </h1>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-4 mb-12">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-sm font-mono tracking-widest transition-colors ${activeCategory === cat ? "text-white underline underline-offset-4" : "text-gray-600 hover:text-gray-400"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Project Navigation List */}
                <nav className="hidden lg:block space-y-2">
                  {filteredProjects.map(project => (
                    <button
                      key={project.id}
                      onClick={() => scrollToProject(project.id)}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                      className={`block text-left text-sm transition-all duration-300 ${hoveredProject === project.id ? "text-white translate-x-2" : "text-gray-600"
                        }`}
                    >
                      {project.name}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="hidden lg:block text-xs text-gray-700 font-mono">
                SCROLL TO EXPLORE ///<br />
                CREATE ARCHIVE 2016-2025
              </div>
            </aside>

            {/* Main Content Feed */}
            <div className="lg:w-3/4 space-y-32">
              {filteredProjects.map((project, index) => (
                <article
                  key={project.id}
                  id={`project-${project.id}`}
                  className="group relative"
                >
                  {/* Project Header */}
                  <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-gray-500">0{index + 1}</span>
                        <span className="px-2 py-0.5 border border-white/20 rounded-full text-[10px] uppercase tracking-wider text-gray-400">
                          {project.category}
                        </span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{project.name}</h2>
                    </div>
                    <div className="text-right hidden sm:block">
                      <div className="text-sm font-mono text-gray-500">{project.period}</div>
                    </div>
                  </div>

                  {/* Main Visual */}
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-900 mb-8">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Details Grid */}
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <p className="text-lg text-gray-300 leading-relaxed font-light">
                        {project.caption}
                      </p>
                    </div>

                    <div className="space-y-4 font-mono text-sm border-l border-white/10 pl-6">
                      {project.category === "ロケット" && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-600">ALTITUDE</span>
                            <span>{project.altitude || "N/A"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">LENGTH</span>
                            <span>{project.length || "N/A"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">WEIGHT</span>
                            <span>{project.weight || "N/A"}</span>
                          </div>
                        </>
                      )}
                      {project.category === "エンジン" && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-600">THRUST</span>
                            <span>{project.thrust || "N/A"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">BURN COUNT</span>
                            <span>{project.burnCount || "N/A"}</span>
                          </div>
                        </>
                      )}
                      <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center text-gray-500">
                        <span>STATUS</span>
                        {project.period.includes("予定") ? (
                          <span className="flex items-center gap-2 text-yellow-500">
                            <Disc className="w-3 h-3 animate-pulse" /> IN PROGRESS
                          </span>
                        ) : project.period.includes("断念") ? (
                          <span className="text-red-500">TERMINATED</span>
                        ) : (
                          <span className="text-green-500">COMPLETED</span>
                        )}
                      </div>
                    </div>
                  </div>

                </article>
              ))}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
