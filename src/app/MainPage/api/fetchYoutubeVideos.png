interface YoutubeVideoItem {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        thumbnails: {
            high: {
                url: string;
            };
        };
        publishedAt: string;
    };
    contentDetails?: {
        duration?: string;
    };
    statistics?: {
        viewCount?: string;
    };
}

export async function fetchYoutubeVideos() {
    // const apiKey = process.env.YOUTUBE_API_KEY;
    // const channelId = process.env.CHANNEL_ID;
    // const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=6`;

    const res = await fetch();
    if(!res.ok) {
        const errorText = await res.text();
        console.log("YOUTUBE_API_KEY:", apiKey);
        console.log("CHANNEL_ID:", channelId);
        console.error("YouTube API error:", errorText);
        throw new Error('FETCH ERROR');
    }

    const data = await res.json();
    return data.items.map((item: YoutubeVideoItem) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        duration: item.contentDetails?.duration,
        views: item.statistics?.viewCount,
        publishedAt: item.snippet.publishedAt,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`
    }));
}