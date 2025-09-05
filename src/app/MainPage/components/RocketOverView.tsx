import React from 'react';

interface Specification {
  label: string;
  value: string;
}

const specifications: Specification[] = [
  { label: "ALTITUDE", value: " -- m" },
  { label: "LENGTH", value: "-- mm" },
  { label: "WEIGHT", value: "-- kg" }
];

export default function RocketOverview() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl text-white lg:text-7xl font-light mb-12 tracking-wide">
              C-83LM <br />「キーちゃん」
            </h2>
            <div className="space-y-8">
              {specifications.map((spec) => (
                <div key={spec.label} className="flex justify-between items-center border-b border-gray-800 pb-6">
                  <span className="text-sm lg:text-base font-normal tracking-wider text-gray-400">
                    {spec.label}
                  </span>
                  <span className="text-lg lg:text-xl font-mono font-light text-white/60">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="aspect-[3/4] bg-cover bg-center bg-no-repeat rounded-lg shadow-2xl"
              style={{ backgroundImage: `url(/83.jpg)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}