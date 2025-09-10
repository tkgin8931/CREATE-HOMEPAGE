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

export async function fetchXPosts(): Promise<XPost[]> {
  // API取得部分はコメントアウト
  // フォールバック用モックデータ
  return [
    {
      id: "1",
      platform: "X",
      content: "Falcon 9 launches Starlink satellites!",
      timestamp: "2025-09-06T12:00:00Z",
      likes: 1234,
      retweets: 567,
      replies: 89,
      image: undefined,
    },
    {
      id: "2",
      platform: "X",
      content: "Next mission: Moon landing preparation.",
      timestamp: "2025-09-05T18:30:00Z",
      likes: 987,
      retweets: 432,
      replies: 56,
      image: undefined,
    },
  ]
}