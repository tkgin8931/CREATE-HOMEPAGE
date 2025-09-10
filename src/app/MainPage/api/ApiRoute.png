import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchYoutubeVideos } from './fetchYoutubeVideos'
import { fetchXPosts } from './fetchXPosts'
import { fetchInstagramPosts } from './fetchInstagramPosts'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const youtubeVideos = await fetchYoutubeVideos()
  // const xPosts = await fetchXPosts()
  // const instagramPosts = await fetchInstagramPosts()
  res.status(200).json({ youtubeVideos, xPosts, instagramPosts })
}