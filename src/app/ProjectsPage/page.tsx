"use client"

import { useState, useEffect, useRef } from "react"
import { projectsData } from "./ProjectData"
import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import Image from "next/image"
import { ArrowUpRight, Rocket, Zap, Disc } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("ALL")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const [activeProject, setActiveProject] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  // Map display categories to data categories
  const categoryMap: { [key: string]: string } = {
    "ALL": "ALL",
    "ROCKET": "ロケット",
    "ENGINE": "エンジン",
    "CANSAT": "CanSat"
  }

  const categories = ["ALL", "ROCKET", "ENGINE", "CANSAT"]

  const filteredProjects = projectsData.filter(project =>
    activeCategory === "ALL" || project.category === categoryMap[activeCategory]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace('project-', '')
            setActiveProject(id)

            // Auto-scroll sidebar to active item manually
            const sidebarItem = document.getElementById(`sidebar-item-${id}`)
            if (sidebarItem && navRef.current) {
              const nav = navRef.current
              const navRect = nav.getBoundingClientRect()
              const itemRect = sidebarItem.getBoundingClientRect()

              // Calculate position relative to the nav container
              const relativeTop = itemRect.top - navRect.top
              const currentScroll = nav.scrollTop

              // Target: Center the item in the nav container
              // target = currentScroll + relativeTop - (navHeight / 2) + (itemHeight / 2)
              const targetScroll = currentScroll + relativeTop - (nav.clientHeight / 2) + (itemRect.height / 2)

              nav.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
              })
            }
          }
        })
      },
      {
        rootMargin: '-40% 0px -40% 0px', // Focus on the center 20% of the screen
        threshold: 0
      }
    )

    filteredProjects.forEach((project) => {
      const element = document.getElementById(`project-${project.id}`)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [filteredProjects])

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
            <aside className="lg:w-1/4 lg:h-[calc(100vh-8rem)] lg:sticky lg:top-32 flex flex-col justify-between overflow-hidden">
              <div className="flex flex-col h-full">
                <h1 className="text-6xl font-bold tracking-tighter mb-8 leading-none shrink-0">
                  {t.projectsPage.title.split(' ').map((word, i) => (
                    <span key={i}>
                      {word}<br />
                    </span>
                  ))}
                </h1>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-4 mb-8 shrink-0">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-sm font-mono tracking-widest transition-colors ${activeCategory === cat ? "text-white underline underline-offset-4" : "text-gray-600 hover:text-gray-400"
                        }`}
                    >
                      {t.projectsPage.categories[cat.toLowerCase() as keyof typeof t.projectsPage.categories]}
                    </button>
                  ))}
                </div>

                {/* Project Navigation List */}
                <nav ref={navRef} className="hidden lg:block space-y-2 overflow-y-auto flex-1 pr-4 custom-scrollbar">
                  {filteredProjects.map(project => (
                    <button
                      key={project.id}
                      id={`sidebar-item-${project.id}`}
                      onClick={() => scrollToProject(project.id)}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                      className={`block text-left text-sm transition-all duration-300 w-full ${activeProject === project.id
                          ? "text-white translate-x-2 font-bold"
                          : hoveredProject === project.id
                            ? "text-gray-300 translate-x-1"
                            : "text-gray-600"
                        }`}
                    >
                      {project.name}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="hidden lg:block text-xs text-gray-700 font-mono">
                {t.projectsPage.scroll}<br />
                {t.projectsPage.archive}
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
                      <div className="text-sm font-mono text-gray-500">
                        {language === 'en' && project.periodEn ? project.periodEn : project.period}
                      </div>
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
                        {language === 'en' && project.captionEn ? project.captionEn : project.caption}
                      </p>
                    </div>

                    <div className="space-y-4 font-mono text-sm border-l border-white/10 pl-6">
                      {project.category === "ロケット" && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-600">{t.projectsPage.specs.altitude}</span>
                            <span>{project.altitude || "N/A"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">{t.projectsPage.specs.length}</span>
                            <span>{project.length || "N/A"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">{t.projectsPage.specs.weight}</span>
                            <span>{project.weight || "N/A"}</span>
                          </div>
                        </>
                      )}
                      {project.category === "エンジン" && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-600">{t.projectsPage.specs.thrust}</span>
                            <span>{project.thrust || "N/A"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">{t.projectsPage.specs.burnCount}</span>
                            <span>{project.burnCount || "N/A"}</span>
                          </div>
                        </>
                      )}
                      <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center text-gray-500">
                        <span>{t.projectsPage.specs.status}</span>
                        {project.period.includes("予定") ? (
                          <span className="flex items-center gap-2 text-yellow-500">
                            <Disc className="w-3 h-3 animate-pulse" /> {t.projectsPage.specs.inProgress}
                          </span>
                        ) : project.period.includes("断念") ? (
                          <span className="text-red-500">{t.projectsPage.specs.terminated}</span>
                        ) : (
                          <span className="text-green-500">{t.projectsPage.specs.completed}</span>
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
