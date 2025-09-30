import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Play,
} from "lucide-react"
import { fetchsocialmedia } from "../social/fetchsocialmedia"
type YoutubeVideo = {
  id: number | string
  title: string
  thumbnail: string
  duration: string
  views: string
  publishedAt: string
  url?: string
}


export default async function Social() {

  const data = await fetchsocialmedia()
  console.log("Social data fetched:", data);
  const youtubeVideos = await data.json() as YoutubeVideo[] 
  console.log("Fetched YouTube Videos:", youtubeVideos);

  return (
    <section className="bg-black text-white text-foreground">
      <section className="mt-8">
        <div className="flex items-center justify-between mb-8 px-8">
          <h2 className="text-4xl lg:text-6xl font-light text-white">LATEST VIDEOS</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {youtubeVideos.map((video, index) => (
            <Card
              key={`youtube-${video.id}-${index}`}
              className="overflow-hidden border-border bg-background hover:border-primary/50 transition-colors group cursor-pointer"
            >
              <div className="relative">
               
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              
                 <a href={video.url || "#"} target="_blank">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="bg-primary/90 rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-white fill-white" />
                  </div>
                </div>
                  </a>
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
        <div className="flex items-center justify-between mb-8 px-8">
          <h2 className="text-4xl lg:text-6xl font-light text-white">SOCIAL UPDATES</h2>
          <div className="flex gap-2 px-8">
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-3 px-8">
          <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">CREATEは、毎週金曜日に全体MTGを行っています✨️ 各班のメンバーが集まり、情報交換・進捗確認を行います🧑‍🤝‍🧑全体MTGは見学👀も受け付けていますので、気になる方は是非DM・メールからご連絡を✉️ <a href="https://t.co/UGGRYSFa5n">pic.twitter.com/UGGRYSFa5n</a></p>&mdash; 東京科学大学ロケットサークル CREATE (@CREATE_rocket) <a href="https://twitter.com/CREATE_rocket/status/1969015431332593972?ref_src=twsrc%5Etfw">September 19, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">先月の能代宇宙イベント結果についてご報告です‼️ロケット「C-83LM」は打上げ後すぐに異常燃焼により安全装置が作動し、推力を失い海へと落下する形となりました。まずは原因究明に勤しみ、今後のエンジン開発に努めてまいります。ご協力・ご支援賜りました全ての皆様、ありがとうございました🙇‍♀️ <a href="https://t.co/Unnro4pdMz">pic.twitter.com/Unnro4pdMz</a></p>&mdash; 東京科学大学ロケットサークル CREATE (@CREATE_rocket) <a href="https://twitter.com/CREATE_rocket/status/1967794463377592393?ref_src=twsrc%5Etfw">September 16, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">＼＼＼㊗️燃焼実験成功🎊🎉／／／新型自作エンジンJ-6iの燃焼に成功しました‼️‼️本エンジンは団体初の試みとしてフラクタル旋回形状の燃料🔥を採用しており、設計通りの高推力が確認されました🤩<a href="https://twitter.com/hashtag/CREATE?src=hash&amp;ref_src=twsrc%5Etfw">#CREATE</a> <a href="https://twitter.com/hashtag/ScienceTokyo?src=hash&amp;ref_src=twsrc%5Etfw">#ScienceTokyo</a> <a href="https://t.co/YPKcNwJVXv">pic.twitter.com/YPKcNwJVXv</a></p>&mdash; 東京科学大学ロケットサークル CREATE (@CREATE_rocket) <a href="https://twitter.com/CREATE_rocket/status/1965986888852119995?ref_src=twsrc%5Etfw">September 11, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          {/* {socialPosts.map((post, index) => (
            <Card key={`social-${post.platform}-${post.id}-${index}`} className="border-border bg-background hover:border-primary/50 transition-colors">
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
          ))} */}
        </div>
      </section>
    </section>
  )
}