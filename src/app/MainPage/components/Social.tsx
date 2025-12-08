"use client"
import { ExternalLink, Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Types matching fetchYoutubeVideos return structure
interface YoutubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  views?: string;
  publishedAt: string;
  url: string;
  duration?: string;
}

export default function Social() {
  const { t } = useLanguage();
  const [youtubeVideos, setYoutubeVideos] = useState<YoutubeVideo[]>([]);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const res = await fetch('/api/social');
        if (!res.ok) throw new Error('Failed to fetch videos');
        const videos = await res.json() as YoutubeVideo[];
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youtubeVideos.map((video) => (
              <Link href={video.url} key={video.id} target="_blank" className="group block cursor-pointer">
                <div className="relative aspect-video mb-4 overflow-hidden border border-white/10">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                  {video.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono">
                      {video.duration}
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-red-500 transition-colors">
                    {video.title}
                  </h3>
                  {video.views && (
                    <span className="text-xs font-mono text-gray-500 whitespace-nowrap">
                      {video.views} {t.topPage.social.views}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
