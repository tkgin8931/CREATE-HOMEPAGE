"use client"
import { Youtube, Twitter, ExternalLink, Play, MessageSquare, Heart, Repeat } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Types
interface YoutubeVideo {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { high: { url: string } };
    publishedAt: string;
  };
  statistics?: { viewCount: string };
}

async function fetchsocialmedia() {
  const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = 'UC1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q'; // Replace with actual channel ID

  // Mock data for development if no API key
  if (!YOUTUBE_API_KEY) {
    return new Response(JSON.stringify([
      {
        id: { videoId: 'video1' },
        snippet: {
          title: 'C-103J Launch Highlights',
          thumbnails: { high: { url: 'https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg' } },
          publishedAt: '2024-03-15T10:00:00Z'
        },
        statistics: { viewCount: '1200' }
      },
      {
        id: { videoId: 'video2' },
        snippet: {
          title: 'Engine Test Fire - J-6i',
          thumbnails: { high: { url: 'https://images.pexels.com/photos/796220/pexels-photo-796220.jpeg' } },
          publishedAt: '2024-02-20T14:30:00Z'
        },
        statistics: { viewCount: '850' }
      }
    ]));
  }

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=2`
  );
  return res;
}

export default function Social() {
  const { t } = useLanguage();
  const [youtubeVideos, setYoutubeVideos] = useState<YoutubeVideo[]>([]);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await fetchsocialmedia();
        const videos = await data.json() as YoutubeVideo[];
        setYoutubeVideos(videos);
      } catch (error) {
        console.error("Failed to fetch videos", error);
      }
    };
    loadVideos();
  }, []);

  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          {/* YouTube Section */}
          <div className="space-y-12">
            <div className="flex items-center justify-between border-b border-white/20 pb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-mono tracking-widest text-white">{t.topPage.social.youtubeTitle}</h2>
              </div>
              <Link
                href="https://youtube.com"
                className="group flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors"
                target="_blank"
              >
                CHANNEL_LINK <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="space-y-8">
              {youtubeVideos.map((video) => (
                <div key={video.id.videoId} className="group cursor-pointer">
                  <div className="relative aspect-video mb-4 overflow-hidden border border-white/10">
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-red-500 transition-colors">
                      {video.snippet.title}
                    </h3>
                    <span className="text-xs font-mono text-gray-500 whitespace-nowrap">
                      {video.statistics?.viewCount} {t.topPage.social.views}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Twitter/X Section */}
          <div className="space-y-12">
            <div className="flex items-center justify-between border-b border-white/20 pb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-mono tracking-widest text-white">{t.topPage.social.twitterTitle}</h2>
              </div>
              <Link
                href="https://twitter.com"
                className="group flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors"
                target="_blank"
              >
                FEED_LINK <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative min-h-[600px] border border-white/10 bg-white/5 p-8">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/30" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30" />

              {/* Mock Tweet */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex-shrink-0" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">CREATE Rocket Project</span>
                      <span className="text-sm text-gray-500">@create_rocket</span>
                      <span className="text-xs text-gray-600">· 2h</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Successful static fire test of the new J-6i hybrid engine. Data looks nominal. Next stop: Flight integration. 🚀 #rocketry #space #engineering
                    </p>
                    <div className="flex gap-6 text-gray-500 text-sm pt-2">
                      <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                        <MessageSquare className="w-4 h-4" /> 12
                      </button>
                      <button className="flex items-center gap-2 hover:text-green-400 transition-colors">
                        <Repeat className="w-4 h-4" /> 45
                      </button>
                      <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" /> 128
                      </button>
                    </div>
                  </div>
                </div>

                {/* Second Tweet */}
                <div className="flex gap-4 pt-8 border-t border-white/10">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex-shrink-0" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">CREATE Rocket Project</span>
                      <span className="text-sm text-gray-500">@create_rocket</span>
                      <span className="text-xs text-gray-600">· 1d</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Mission C-103J payload integration begins today. The team is working around the clock to meet the launch window.
                    </p>
                    <div className="aspect-video w-full bg-gray-800 rounded mt-4 overflow-hidden relative group cursor-pointer">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        [IMAGE_PLACEHOLDER]
                      </div>
                    </div>
                    <div className="flex gap-6 text-gray-500 text-sm pt-2">
                      <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                        <MessageSquare className="w-4 h-4" /> 8
                      </button>
                      <button className="flex items-center gap-2 hover:text-green-400 transition-colors">
                        <Repeat className="w-4 h-4" /> 22
                      </button>
                      <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" /> 89
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}