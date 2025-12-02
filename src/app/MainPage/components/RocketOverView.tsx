"use client"
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface Specification {
  label: string;
  value: string;
  unit?: string;
}

export default function RocketOverview() {
  const { t } = useLanguage();

  const specifications: Specification[] = [
    {
      label: t.topPage.rocket.specs.altitude,
      value: "4,000",
      unit: "m"
    },
    {
      label: t.topPage.rocket.specs.length,
      value: "2,800",
      unit: "mm"
    },
    {
      label: t.topPage.rocket.specs.mass,
      value: "18.5",
      unit: "kg"
    }
  ];

  return (
    <section className="bg-black py-32 relative overflow-hidden">
      {/* Background Grid - Subtle & Darker */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* Left: Typography & Specs */}
          <div className="lg:col-span-7">
            {/* Tech Header - Minimalist */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-white/50"></div>
              <span className="text-gray-500 font-mono text-xs tracking-widest uppercase">{t.topPage.rocket.specsLabel}</span>
            </div>

            {/* Massive Title */}
            <h2 className="text-8xl lg:text-[10rem] font-bold leading-[0.8] tracking-tighter text-white mb-4">
              {t.topPage.rocket.modelName}
            </h2>
            <div className="text-2xl lg:text-3xl font-light text-gray-500 tracking-widest mb-16 pl-2 font-mono">
              {t.topPage.rocket.codeName}
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-20 pl-2">
              {t.topPage.rocket.description}
            </p>

            {/* Specs Grid - Typography Only */}
            <div className="grid grid-cols-3 gap-12 border-t border-white/10 pt-12">
              {specifications.map((spec) => (
                <div key={spec.label} className="group">
                  <div className="text-xs font-mono text-gray-600 tracking-wider mb-2 uppercase">
                    {spec.label}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter group-hover:text-gray-300 transition-colors">
                      {spec.value}
                    </span>
                    <span className="text-sm font-mono text-gray-500">
                      {spec.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual - Clean & Frameless */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-1000 ease-out">
              {/* Main Image */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(/83.jpg)` }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />

              {/* Minimalist Status Label */}
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-xs font-mono text-white tracking-widest uppercase opacity-80">{t.topPage.rocket.status}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}