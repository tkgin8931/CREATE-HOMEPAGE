
"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function AboutUsOverview() {
  const { t } = useLanguage();

  const teams = [
    {
      name: t.aboutUs.team.roles[0].name,
      jpName: t.aboutUs.team.roles[0].jpName,
      description: t.aboutUs.team.roles[0].description,
      tasks: t.aboutUs.team.roles[0].tasks,
      image: "/79-CAD.png" // Rocket
    },
    {
      name: t.aboutUs.team.roles[1].name,
      jpName: t.aboutUs.team.roles[1].jpName,
      description: t.aboutUs.team.roles[1].description,
      tasks: t.aboutUs.team.roles[1].tasks,
      image: "/IMG_0260.jpg" // Avionics
    },
    {
      name: t.aboutUs.team.roles[2].name,
      jpName: t.aboutUs.team.roles[2].jpName,
      description: t.aboutUs.team.roles[2].description,
      tasks: t.aboutUs.team.roles[2].tasks,
      image: "/ANSYS.png" // System
    },
    {
      name: t.aboutUs.team.roles[3].name,
      jpName: t.aboutUs.team.roles[3].jpName,
      description: t.aboutUs.team.roles[3].description,
      tasks: t.aboutUs.team.roles[3].tasks,
      image: "/engine.png" // Recovery/Others
    }
  ];

  const protocols = t.aboutUs.protocols.items;

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-emerald-500/30">

      {/* 1. Mission Statement Section with Background Image */}
      <section className="relative py-48 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/61-fire.JPG"
            alt="Combustion Test"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Lighter Gradient for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          {/* Bottom Fade for seamless transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start relative z-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-emerald-500"></div>
              <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase">{t.aboutUs.mission.label}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8 text-white drop-shadow-lg">
              {t.aboutUs.mission.title}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl text-gray-200 leading-relaxed font-light drop-shadow-md">
            <p>
              <span className="text-white font-medium">{t.aboutUs.mission.description1.split('。')[0]}。</span>
              {t.aboutUs.mission.description1.split('。').slice(1).join('。')}
            </p>
            <p>
              {t.aboutUs.mission.description2}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Activity Gallery (Improved Integration) */}
      <section className="py-24 border-b border-white/10 bg-zinc-900/10">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-white/30"></div>
            <span className="text-gray-500 font-mono text-xs tracking-widest uppercase">ACTIVITY GALLERY</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 h-64 md:h-80 w-full">
          <div className="relative group overflow-hidden border-r border-white/10">
            <Image src="/CREATE-visual.jpg" alt="Activity 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="relative group overflow-hidden border-r border-white/10">
            <Image src="/IMG_5049.jpg" alt="Activity 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="relative group overflow-hidden border-r border-white/10">
            <Image src="/IMG_0854.jpg" alt="Activity 3" fill className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="relative group overflow-hidden">
            <Image src="/IMG_9052.jpg" alt="Activity 4" fill className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
        </div>
      </section>

      {/* 3. Team Structure (With Images) */}
      <section className="py-32 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-20">
            <div className="h-px w-8 bg-white/30"></div>
            <span className="text-gray-500 font-mono text-xs tracking-widest uppercase">{t.aboutUs.team.title}</span>
          </div>

          <div className="space-y-24">
            {teams.map((team, index) => (
              <div key={team.name} className="group grid md:grid-cols-12 gap-12 items-center">

                {/* Image Column (Alternating) */}
                <div className={`md:col-span-5 relative aspect-video overflow-hidden rounded-sm ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <Image
                    src={team.image}
                    alt={team.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Text Column */}
                <div className="md:col-span-7">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {team.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-mono uppercase tracking-wider mb-6">{team.jpName}</p>

                  <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light">
                    {team.description}
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {team.tasks.map((task) => (
                      <span key={task} className="text-sm font-mono text-gray-600 group-hover:text-gray-400 transition-colors">
                        / {task}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Disclosure Protocols (Clean List) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-white/30"></div>
              <span className="text-gray-500 font-mono text-xs tracking-widest uppercase">{t.aboutUs.protocols.title}</span>
            </div>
            <p className="text-2xl text-white font-light leading-tight">
              {t.aboutUs.protocols.intro}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {protocols.map((item, index) => (
              <div key={index} className="flex gap-8 items-baseline group">
                <span className="font-mono text-emerald-500/50 text-sm">0{index + 1}</span>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. External Links Footer (Minimal) */}
      <section className="py-24 px-6 border-t border-white/10 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="font-mono text-xs text-gray-600 tracking-widest uppercase">{t.aboutUs.external.label}</span>

          <a href="https://drive.google.com/drive/u/0/folders/13f8nrL5ERnGxhedMvoN59CKWNdvQr3he" className="group flex items-center gap-4 text-white hover:text-emerald-400 transition-colors">
            <span className="text-lg font-light tracking-wide">{t.aboutUs.external.linkText}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </section>

    </div>
  );
}
