import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowRight} from "lucide-react"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"

const blogPosts = [
  {
    id: 1,
    title: "Starship's Revolutionary Design: Engineering the Future of Space Travel",
    excerpt:
      "Exploring the groundbreaking innovations that make Starship the most advanced spacecraft ever built, from its stainless steel construction to its revolutionary Raptor engines.",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Engineering",
    image: "/starship-rocket-launch-space.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Mars Colonization: The Next Giant Leap for Humanity",
    excerpt:
      "A comprehensive look at the challenges and opportunities of establishing a sustainable human presence on Mars, and how SpaceX is making it possible.",
    date: "2024-03-12",
    readTime: "12 min read",
    category: "Exploration",
    image: "/mars-planet-colonization-red-surface.jpg",
  },
  {
    id: 3,
    title: "Falcon Heavy: Redefining Heavy-Lift Capabilities",
    excerpt:
      "How the world's most powerful operational rocket is transforming satellite deployment and deep space missions with unprecedented payload capacity.",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "Technology",
    image: "/falcon-heavy-rocket-three-boosters-launch.jpg",
  },
  {
    id: 4,
    title: "Starlink Constellation: Connecting the World",
    excerpt:
      "The ambitious satellite internet project that's bringing high-speed connectivity to remote corners of the globe and revolutionizing global communications.",
    date: "2024-03-08",
    readTime: "10 min read",
    category: "Connectivity",
    image: "/starlink-satellites-constellation-earth-orbit.jpg",
  },
  {
    id: 5,
    title: "Raptor Engine: The Heart of Next-Gen Propulsion",
    excerpt:
      "Deep dive into the methane-fueled engine technology that powers Starship and represents a quantum leap in rocket propulsion efficiency.",
    date: "2024-03-05",
    readTime: "7 min read",
    category: "Engineering",
    image: "/raptor-engine-rocket-propulsion-flames.jpg",
  },
  {
    id: 6,
    title: "Dragon Capsule: Pioneering Commercial Crew Transportation",
    excerpt:
      "The story of how Dragon became the first commercial spacecraft to carry astronauts to the International Space Station and back.",
    date: "2024-03-02",
    readTime: "9 min read",
    category: "Missions",
    image: "/dragon-capsule-spacecraft-iss-docking.jpg",
  },
]

const categories = ["All", "Engine", "Avionics", "Structures", "Simulation", "GSE"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header */}
  <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/IMG_0853.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10">
          {/* Navigation */}
          <Header />

          {/* Hero Content */}
          <div className="px-6 pb-20 pt-12 max-w-7xl mx-auto">
            <div className="max-w-3xl py-8">
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
  <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="rounded-full bg-black text-white"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts
          .filter((post) => post.featured)
          .map((post) => (
            <Card key={post.id} className="mb-12 overflow-hidden border border-gray-700 bg-black/80 text-white">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      Featured
                    </Badge>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 text-balance">{post.title}</h2>
                  <p className="text-gray-300 mb-6 text-pretty">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border border-gray-700 bg-black/80 text-white hover:border-blue-400 transition-colors group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge variant="secondary" className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white text-balance">{post.title}</CardTitle>
                  <CardDescription className="text-pretty text-gray-300">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-400 text-blue-400 hover:bg-blue-900/40 bg-transparent"
          >
            Load More Posts
          </Button>
        </div>
      </main>

            <Footer />
        </div>

  )
}
