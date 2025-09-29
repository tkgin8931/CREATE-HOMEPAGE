import { fetchYoutubeVideos } from './fetchYoutubeVideos'

export async function fetchsocialmedia() {
  try {
    const youtubeVideos = await fetchYoutubeVideos()
    return Response.json(youtubeVideos)
  } catch (error) {
    console.error('Error fetching social media data:', error)
    return Response.json(
      { error: 'Failed to fetch social media data' },
      { status: 500 }
    )
  }
}