'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Rocket,
  Play,
  Heart,
  MessageCircle,
  Share,
  ExternalLink,
} from "lucide-react"
import useSWR from 'swr'

type YoutubeVideo = {
  id: number | string
  title: string
  thumbnail: string
  duration: string
  views: string
  publishedAt: string
  url?: string
}

type XPost = {
  id: number | string
  platform: "X"
  content: string
  timestamp: string
  likes: number
  retweets: number
  replies: number
  image?: string
}

type InstagramPost = {
  id: number | string
  platform: "Instagram"
  content: string
  timestamp: string
  likes: number
  comments: number
  image?: string
}

type SocialData = {
  youtubeVideos: YoutubeVideo[]
  xPosts: XPost[]
  instagramPosts: InstagramPost[]
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Social() {
  const { data, error, isLoading } = useSWR<SocialData>('../api/ApiRoute', fetcher)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data) return null

  const { youtubeVideos, xPosts, instagramPosts } = data
  const socialPosts = [...xPosts, ...instagramPosts]

  return (
    <section className="bg-black text-white text-foreground">
      <section className="mt-8">
        <div className="flex items-center justify-between mb-8 px-8">
          <h2 className="text-5xl font-mono font-bold text-white">Latest Videos</h2>
          <Button variant="outline" className="border-border text-foreground hover:bg-border/20 bg-background">
            View All Videos
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {youtubeVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden border-border bg-background hover:border-primary/50 transition-colors group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="bg-primary/90 rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-white fill-white" />
                  </div>
                </div>
                <Badge variant="secondary" className="absolute bottom-2 right-2 bg-black/80 text-white">
                  {video.duration}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground text-balance line-clamp-2">
                  {video.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{video.views}</span>
                  <span>{video.publishedAt}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Social Media Posts Section */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-5xl font-mono px-8 font-bold text-white">Social Updates</h2>
          <div className="flex gap-2 px-8">
            <Button
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-border/20 bg-background"
            >
              Follow on X
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-border/20 bg-background"
            >
              Follow on Instagram
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 px-8">
          {socialPosts.map((post) => (
            <Card key={post.id} className="border-border bg-background hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Rocket className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">SpaceX</p>
                      <p className="text-xs text-muted-foreground">@spacex • {post.timestamp}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs text-foreground border-border">
                    {post.platform}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-foreground mb-4 text-pretty">{post.content}</p>
                {"image" in post && post.image && (
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt="Social media post"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                    <Heart className="h-4 w-4" />
                    <span>
                      {post.likes?.toLocaleString()}
                    </span>
                  </div>
                  {post.platform === "X" && (
                    <>
                      <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                        <Share className="h-4 w-4" />
                        <span>{(post as XPost).retweets?.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                        <MessageCircle className="h-4 w-4" />
                        <span>{(post as XPost).replies?.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                  {post.platform === "Instagram" && (
                    <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                      <MessageCircle className="h-4 w-4" />
                      <span>{(post as InstagramPost).comments?.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </section>
  )
}