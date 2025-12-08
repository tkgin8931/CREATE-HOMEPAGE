"use client"
import { ArrowUpRight, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

interface Mission {
  name: string;
  // timeOnOrbit: string;
  caption: string;
  image: string;
  launchSchedule: string;
}

interface Statistics {
  ongoing: number;
  completed: number;
  succeeded: number;
}

export default function OngoingMissions() {
  const { t } = useLanguage();

  const missions: Mission[] = [
    {
      name: t.topPage.ongoing.missions[0].name,
      // timeOnOrbit: t.topPage.ongoing.missions[0].time,
      caption: t.topPage.ongoing.missions[0].caption,
      image: "/IMG_7241.jpg", // Rocket Launch
      launchSchedule: "2026.03"
    },
    {
      name: t.topPage.ongoing.missions[1].name,
      // timeOnOrbit: t.topPage.ongoing.missions[1].time,
      caption: t.topPage.ongoing.missions[1].caption,
      image: "/IMG_0260.jpg", // Avionics
      launchSchedule: "2026.08"
    },
    {
      name: t.topPage.ongoing.missions[2].name,
      // timeOnOrbit: t.topPage.ongoing.missions[2].time,
      caption: t.topPage.ongoing.missions[2].caption,
      image: "/gse.jpg", // GSE
      launchSchedule: "2026.11"
    }
  ];

  const statistics: Statistics = {
    ongoing: 5,
    completed: 21,
    succeeded: 16
  };

  return (
    <section className="bg-black py-32 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-end">
          {/* Title */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-500"></div>
              <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase">CURRENT OPERATIONS</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              {t.topPage.ongoing.title.split(' ').map((word, i) => (
                <span key={i}>{word}<br /></span>
              ))}
            </h2>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              {t.topPage.ongoing.description}
            </p>
          </div>

          {/* Big Stats */}
          <div className="lg:col-span-5 flex justify-between items-end border-b border-white/20 pb-8">
            <div className="flex flex-col">
              <span className="text-7xl md:text-9xl font-light leading-none tracking-tighter text-white">
                {statistics.ongoing}
              </span>
              <span className="text-sm font-mono tracking-widest uppercase text-gray-500 mt-2">
                {t.topPage.ongoing.stats.active}
              </span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-4xl md:text-6xl font-light leading-none text-gray-600">
                {statistics.completed}
              </span>
              <span className="text-sm font-mono tracking-widest uppercase text-gray-600 mt-2">
                {t.topPage.ongoing.stats.launches}
              </span>
            </div>
          </div>
        </div>

        {/* Mission List - Alternating Split Layout */}
        <div className="space-y-32">
          {missions.map((mission, index) => (
            <div key={mission.name} className="group relative">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Image Section (Alternating) */}
                <div className={`lg:col-span-7 relative aspect-[4/3] overflow-hidden rounded-sm ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <Image
                    src={mission.image}
                    alt={mission.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content Section */}
                <div className="lg:col-span-5 relative">
                  <div className="absolute -left-4 -top-12 text-9xl font-bold text-white/5 select-none -z-10 font-mono">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>

                  <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {mission.name}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-lg mb-10 border-l-2 border-white/10 pl-6">
                    {mission.caption}
                  </p>

                  {/* Launch Schedule */}
                  <div className="mb-10 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-emerald-500" />
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wider font-mono mb-1">Scheduled Launch</div>
                        <div className="text-2xl font-bold text-white font-mono">{mission.launchSchedule}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group/btn cursor-pointer">
                    <div className="h-px w-12 bg-white/30 group-hover/btn:w-24 transition-all duration-300" />
                    <a href="/ProjectsPage" className="text-sm font-mono tracking-widest uppercase group-hover/btn:text-emerald-400 transition-colors">View Mission</a>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover/btn:text-emerald-400 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}