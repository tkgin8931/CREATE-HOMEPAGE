import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowRight} from "lucide-react"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"
import Image from "next/image"
import {getarticles} from "./getarticles"
import { blogpost } from "./blogpost"
const blogPosts:blogpost[] = [
  {
    id: 1,
    title: "jQueryの魔力",
    excerpt:
      "どうも宮田マイケルです。今回は、私がかつて経験したjQueryの魔力についてお話しします。jQueryは、そのシンプルさと強力な機能で、多くの開発者を魅了してきました。しかし、その魔力には注意が必要です。",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Engineering",
    image: "/IMG_0853.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Bootstapことはじめ",
    excerpt:
      "どうも宮田マイケルです。今回は、私が初めてBootstrapを使ったときの経験についてお話しします。Bootstrapは、その使いやすさと豊富なコンポーネントで、多くの開発者に愛されています。しかし、その魅力には注意が必要です。",
    date: "2024-03-12",
    readTime: "12 min read",
    category: "Exploration",
    image: "/IMG_0853.jpg",
  },
  {
    id: 3,
    title: "Pythonに潜む罠",
    excerpt:
      "どうも宮田マイケルです。今回は、Pythonに潜む罠についてお話しします。Pythonは、そのシンプルさと強力なライブラリで多くの開発者に愛されていますが、その裏にはいくつかの罠が潜んでいます。",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "Technology",
    image: "/IMG_0853.jpg",
  },
  {
    id: 4,
    title: "時代はHaskell",
    excerpt:
      "関数型以外はカス。どうも宮田マイケルです。今回は、Haskellの魅力とその可能性についてお話しします。Haskellは、その純粋関数型プログラミングの特性と強力な型システムで知られていますが、実際にどのように活用できるのでしょうか。",
    date: "2024-03-08",
    readTime: "10 min read",
    category: "Connectivity",
    image: "/IMG_0853.jpg",
  },
  {
    id: 5,
    title: "Filezillaの使い方",
    excerpt:
      "どうも宮田マイケルです。Filezillaは、FTP（File Transfer Protocol）クライアントであり、ファイルのアップロードやダウンロードを簡単に行うことができます。この記事では、Filezillaの基本的な使い方と便利な機能について解説します。",
    date: "2024-03-05",
    readTime: "7 min read",
    category: "Engineering",
    image: "/IMG_0853.jpg",
  },
  {
    id: 6,
    title: "Dependency Injectionとは",
    excerpt:
      "どうも宮田マイケルです。Dependency Injection（依存性注入）とは、ソフトウェア設計におけるパターンの一つで、オブジェクトの依存関係を外部から注入することで、柔軟性やテスト容易性を向上させる手法です。この記事では、Dependency Injectionの基本概念とその利点について解説します。",
    date: "2024-03-02",
    readTime: "9 min read",
    category: "Missions",
    image: "/IMG_0853.jpg",
  },
]
const categories = ["All", "Engine", "Avionics", "Structures", "Simulation", "GSE"]
export default async function BlogPage() {
  const data=await getarticles();
  const vblogposts:blogpost[]=(data!=null)?data:blogPosts;
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header */}
<header className="relative w-full min-h-[400px]">
  {/* ヒーロー画像 */}
  <div className="absolute inset-0 w-full h-full">
    <Image
      src="/IMG_0853.jpg"
      alt="Hero"
      fill
      style={{ objectFit: "cover" }}
      priority
      sizes="100vw"
      className="w-full h-full"
    />
    {/* 上下グラデーションオーバーレイ */}
    <div className="absolute inset-0 pointer-events-none">
      {/* 上部グラデーション */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black via-black/40 to-transparent" />
      {/* 下部グラデーション（高さと濃さを強調） */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
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

{/* Main Content をヒーロー画像に重ねる */}
<main className="max-w-7xl mx-auto px-6 py-12 -mt-32 z-0">
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
        {vblogposts
          .filter((post) => post.featured)
          .map((post) => (
            <Card key={post.id} className="mb-12 overflow-hidden border border-gray-700 bg-black/80 text-white">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full object-contain"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary text-whiteborder-primary/30">
                      Featured
                    </Badge>
                    <Badge variant="outline" className="text-white">{post.category}</Badge>
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
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.open(post.url, "_blank")}>
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
          {vblogposts
            .filter((post) => !post.featured)
            .map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border border-gray-700 bg-black/80 text-white hover:border-blue-400 transition-colors group"
              >
                <div className="relative overflow-hidden aspect-[4/2] justify-center flex items-center bg-black/40">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
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
                    <a href={post.url||"#"} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300" >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    </a>
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
            className="border-blue-400 text-blue-400 bg-transparent hover:text-white hover:bg-blue-900/40 "
          >
            Read more on Qiita
          </Button>
        </div>
      </main>

            <Footer />
        </div>

  )
}
