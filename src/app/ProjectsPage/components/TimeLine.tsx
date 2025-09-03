"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  image: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 2024,
    title: "C-79J",
    description: "SmokeBoll",
    image: "79-CAD.png"
  },
  {
    year: 2010,
    title: "Falcon 9",
    description: "Falcon 9 successfully completes its first flight",
    image: "71.jpg"
  },
  {
    year: 2012,
    title: "Dragon",
    description: "Dragon develops capability to deliver cargo to International Space Station",
    image: "burnig.png"
  },
  {
    year: 2013,
    title: "Grasshopper",
    description: "Grasshopper successfully demonstrates vertical landing technology",
    image: "11.jpg"
  }
];

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % timelineEvents.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="flex transition-transform duration-700 ease-in-out h-full"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {timelineEvents.map((event) => (
          <div key={event.year} className="min-w-full relative">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${event.image})` }}
            />
            <div className="absolute inset-0 bg-black/60 bg-opacity-40" />
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-8 lg:px-16">
                <div className="max-w-2xl">
                  <h2 className="text-8xl lg:text-9xl text-white font-mono font-light mb-8 tracking-wider">
                    {event.year}
                  </h2>
                  <p className="text-xl lg:text-2xl font-light text-white font-mono leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {timelineEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}