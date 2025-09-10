type InstagramPost = {
  id: number | string
  platform: "Instagram"
  content: string
  timestamp: string
  likes: number
  comments: number
  image?: string
}

export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  // API取得部分はコメントアウト
  // フォールバック用モックデータ
  return [
    {
      id: "1",
      platform: "Instagram",
      content: "Rocket launch sunset view 🚀🌅",
      timestamp: "2025-09-06T09:00:00Z",
      likes: 2100,
      comments: 120,
      image: "https://placehold.co/400x300?text=Rocket+Sunset",
    },
    {
      id: "2",
      platform: "Instagram",
      content: "Team briefing before liftoff.",
      timestamp: "2025-09-05T15:45:00Z",
      likes: 1800,
      comments: 98,
      image: "https://placehold.co/400x300?text=Team+Briefing",
    },
  ]
}