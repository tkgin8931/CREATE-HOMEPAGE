

interface Mission {
  name: string;
  timeOnOrbit: string;
  caption: string;
  image: string;
}

interface Statistics {
  completed: number;
  landings: number;
  reflights: number;
}

const missions: Mission[] = [
  {
    name: "C-103J MISSION",
    timeOnOrbit: "T+10D 01:30:54",
    caption: "March 2026",
    image: "https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg"
  },
  {
    name: "C-97J MISSION", 
    timeOnOrbit: "T+32D 16:32:54",
    caption: "AUGUST 2026",
    image: "https://images.pexels.com/photos/796220/pexels-photo-796220.jpeg"
  },
  {
    name: "C-101J MISSION",
    timeOnOrbit: "T+5D 12:00:00",
    caption: "NOVEMBER 2026",
    image: "https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg"
  }
];

export default function OngoingMissions() {
  const statistics : Statistics = {
    completed: 20,
    landings: 20,
    reflights: 20
  };


  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Statistics */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
          <h2 className="text-white text-4xl lg:text-6xl font-light mb-8 lg:mb-0 tracking-wide">
            ONGOING MISSIONS
          </h2>
          
          <div className="flex flex-row gap-4 sm:gap-12 lg:gap-16 justify-center items-center">
            <div className="text-center">
              <div className="flex justify-center mb-1 text-white/70">
                {/* 数字のサイズをsm以下で小さく */}
                {statistics.completed.toString().split('').map((digit, index) => (
                  <span key={index} className="inline-block bg-gray-900 border border-gray-700 rounded px-2 py-1 mx-0.5 font-mono text-base sm:text-2xl">
                    {digit}
                  </span>
                ))}
              </div>
              <span className="text-[10px] sm:text-xs font-mono tracking-wider text-gray-400">
                COMPLETED MISSIONS
              </span>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-1 text-white/70">
                {statistics.landings.toString().split('').map((digit, index) => (
                  <span key={index} className="inline-block bg-gray-900 border border-gray-700 rounded px-2 py-1 mx-0.5 font-mono text-base sm:text-2xl">
                    {digit}
                  </span>
                ))}
              </div>
              <span className="text-[10px] sm:text-xs font-mono tracking-wider text-gray-400">
                TOTAL LANDINGS
              </span>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-1 text-white/70">
                {statistics.reflights.toString().split('').map((digit, index) => (
                  <span key={index} className="inline-block bg-gray-900 border border-gray-700 rounded px-2 py-1 mx-0.5 font-mono text-base sm:text-2xl">
                    {digit}
                  </span>
                ))}
              </div>
              <span className="text-[10px] sm:text-xs font-mono tracking-wider text-gray-400">
                TOTAL REFLIGHTS
              </span>
            </div>
          </div>
        </div>

        {/* Mission Table Header */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-6 border-b border-gray-800 mb-8">
          <span className="text-lg font-mono tracking-wider text-gray-400">MISSION</span>
          <span className="text-lg font-mono tracking-wider text-gray-400">TIME ON-ORBIT</span>
          <span className="text-lg font-mono tracking-wider text-gray-400 lg:col-span-2">CAPTION</span>
        </div>

        {/* Mission Rows */}
        <div className="space-y-8 text-gray-400">
          {missions.map((mission) => (
            <div key={mission.name} className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center py-6 border-b border-gray-800 hover:bg-gray-900 hover:bg-opacity-30 transition-colors duration-300 rounded-lg px-4">
              <div className="flex items-center space-x-6">
                {/* <div 
                  className="w-20 h-14 bg-cover bg-center bg-no-repeat rounded"
                  style={{ backgroundImage: `url(${mission.image})` }}
                /> */}
                <span className="text-lg font-mono tracking-wide">
                  {mission.name}
                </span>
              </div>
              
              <span className="text-lg font-mono tracking-wider text-green-400">
                {mission.timeOnOrbit}
              </span>
              
              <span className="text-lg font-mono tracking-wider lg:col-span-2">
                {mission.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}