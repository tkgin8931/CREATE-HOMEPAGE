import { fetchYoutubeVideos } from '@/app/MainPage/social/fetchYoutubeVideos';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const youtubeVideos = await fetchYoutubeVideos();
        return NextResponse.json(youtubeVideos);
    } catch (error) {
        console.error('Error fetching social media data:', error);
        return NextResponse.json(
            { error: 'Failed to fetch social media data' },
            { status: 500 }
        );
    }
}
