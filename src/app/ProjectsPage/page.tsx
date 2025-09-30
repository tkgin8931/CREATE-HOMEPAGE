"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Rocket, Zap, Filter, Search } from "lucide-react"
import { projectsData } from "./ProjectData"
import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import Image from "next/image"
import { useState } from "react"

const categories = ["すべて", "ロケット", "エンジン","CanSat"]
export default function ProjectsPage() {
  const [selectedCategory,SetSerectedCategory] = useState("すべて");
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="relative w-full min-h-[400px]">
        <Image
          src="/79-CAD.png"
          alt="Projects Hero"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
          className="w-full h-full brightness-75"
        />
        {/* 下部グラデーションを濃く・広く */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      </div>
      {/* Main Content を画像に重ねる */}
      <main className="max-w-7xl mx-auto px-6 py-12 -mt-32 relative z-10">
        


        {/* Filter Section */}
  <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                size="sm"
                className="rounded-full bg-black text-white"
                onClick={() => SetSerectedCategory(category)}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
          <Button variant="outline" size="sm" className="sm:ml-auto bg-gray-900 text-white border-gray-700">
            <Search className="h-4 w-4 mr-2" />
            検索
          </Button>
        </div>

        {/* Projects Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.filter((project)=>{
            return selectedCategory === "すべて" || project.category === selectedCategory;
          }).map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border border-gray-700 bg-black/80 text-white hover:border-blue-400 transition-colors group rounded-xl shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    project.thumbnail || "/placeholder.svg?height=200&width=400&query=rocket engine space technology"
                  }
                  alt={project.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge variant="secondary" className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white">
                  {project.category === "ロケット" ? (
                    <Rocket className="h-3 w-3 mr-1" />
                  ) : (
                    <Zap className="h-3 w-3 mr-1" />
                  )}
                  {project.category}
                </Badge>
                {project.period.includes("予定") && (
                  <Badge variant="default" className="absolute top-4 right-4 bg-primary/90 text-primary-foreground">
                    予定
                  </Badge>
                )}
                {project.period.includes("断念") && (
                  <Badge variant="destructive" className="absolute top-4 right-4">
                    中止
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white text-balance">{project.name}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-gray-300">
                  <CalendarDays className="h-4 w-4" />
                  {project.period}
                </CardDescription>
                {/* 区切りの細いアンダーライン */}
                {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-3" /> */}
              </CardHeader>
              <CardContent>
                {project.category === "ロケット" && (
                  <div className="flex flex-col gap-2 mt-2 text-base font-mono font-normal text-white">
                    <div>
                      <span className="block">Altitude:</span>
                      <span className="text-white/70 ml-2">{project.altitude ?? "-"}</span>
                    </div>
                    <div>
                      <span className="block">Length:</span>
                      <span className="text-white/70 ml-2">{project.length ?? "-"}</span>
                    </div>
                    <div>
                      <span className="block">Weight:</span>
                      <span className="text-white/70 ml-2">{project.weight ?? "-"}</span>
                    </div>
                  </div>
                )}
                {project.category === "エンジン" && (
                  <div className="flex flex-col gap-2 mt-2 text-base font-mono font-normal text-white">
                    <div>
                      <span className="block">Thrust:</span>
                      <span className="text-white/70 ml-2">{project.thrust ?? "-"}</span>
                    </div>
                    <div>
                      <span className="block">BurnCount:</span>
                      <span className="text-white/70 ml-2">{project.burnCount ?? "-"}</span>
                    </div>
                  </div>
                )}
                {/* 情報とキャプションの間に細いアンダーライン */}
                {(project.category === "ロケット" || project.category === "エンジン") && project.caption && (
                  <div className="w-full h-px bg-gray-700 my-4" />
                )}
                {project.caption && (
                  <div className="text-sm text-white/80 font-sans">
                    {project.caption}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        
      </main>

     <Footer /> 
    </div>
  )
}
