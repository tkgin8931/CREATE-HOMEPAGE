import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Rocket, Zap, ArrowRight, Filter, Search } from "lucide-react"
import { projectsData } from "./ProjectData"
import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import Timeline from "./components/TimeLine"

const categories = ["すべて", "ロケット", "エンジン","CanSat"]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Timeline />
      {/* Main Content */}
  <main className="max-w-7xl mx-auto px-6 py-12">
        


        {/* Filter Section */}
  <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "すべて" ? "default" : "outline"}
                size="sm"
                className="rounded-full bg-black text-white"
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
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border border-gray-700 bg-black/80 text-white hover:border-blue-400 transition-colors group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    project.thumbnail || "/placeholder.svg?height=200&width=400&query=rocket engine space technology"
                  }
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">プロジェクト詳細を表示</div>
                  <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </main>

     <Footer /> 
    </div>
  )
}
