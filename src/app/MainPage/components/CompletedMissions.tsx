import React, { useState } from 'react';
import { Search, ArrowUpDown } from 'lucide-react';

interface CompletedMission {
  mission: string;
  launchSite: string;
  launchDate: string;
  status: 'success' | 'failure';
}

const completedMissions: CompletedMission[] = [
  {
    mission: "C-83LM MISSION",
    launchSite: "NOSIRO,AKITA",
    launchDate: "AUGUST 22, 2025",
    status: "failure"
  },
  {
    mission: "C-73J MISSION",
    launchSite: "O-SIMA,TOKYO",
    launchDate: "MARCH 30, 2025",
    status: "success"
  },
  {
    mission: "C-89J MISSION",
    launchSite: "O-SIMA,TOKYO",
    launchDate: "MARCH 29, 2025",
    status: "failure"
  },
  {
    mission: "C-73J MISSION",
    launchSite: "KADA,WAKAYAMA",
    launchDate: "SEPTEMBER 28, 2024",
    status: "failure"
  },
  {
    mission: "C-79J MISSION",
    launchSite: "KADA,WAKAYAMA",
    launchDate: "MARCH 25, 2024",
    status: "success"
  },
  {
    mission: "C-71J MISSION",
    launchSite: "O-SIMA,TOKYO",
    launchDate: "OCTOBER 20, 2023",
    status: "success"
  },
];

type SortField = 'mission' | 'launchSite' | 'launchDate' | 'status';

export default function CompletedMissions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('launchDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const filteredAndSortedMissions = completedMissions
    .filter(mission => 
      mission.mission.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mission.launchSite.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (sortField === 'launchDate') {
        const aDate = new Date(a.launchDate).getTime();
        const bDate = new Date(b.launchDate).getTime();
        if (aDate < bDate) return sortDirection === 'asc' ? -1 : 1;
        if (aDate > bDate) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

  const getStatusColor = (status: 'success' | 'failure') => {
    return status === 'success' ? 'text-green-400' : 'text-red-400';
  };

  const getStatusDot = (status: 'success' | 'failure') => {
    return status === 'success' ? 'bg-green-400' : 'bg-red-400';
  };

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Header with Search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <h2 className="text-white text-5xl lg:text-6xl font-light mb-8 lg:mb-0 tracking-wide">
            COMPLETED MISSIONS
          </h2>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search Mission Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border border-gray-600 rounded px-6 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300 w-80"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 py-6 border-b border-gray-800 mb-8">
          <button 
            onClick={() => handleSort('mission')}
            className="flex items-center space-x-2 text-sm font-mono tracking-wider text-gray-400 hover:text-white transition-colors duration-300 text-left"
          >
            <span>MISSION</span>
            <ArrowUpDown size={14} />
          </button>
          
          <button 
            onClick={() => handleSort('launchSite')}
            className="flex items-center space-x-2 text-sm font-mono tracking-wider text-gray-400 hover:text-white transition-colors duration-300 text-left"
          >
            <span>LAUNCH SITE</span>
            <ArrowUpDown size={14} />
          </button>
        
          
          <button 
            onClick={() => handleSort('launchDate')}
            className="flex items-center space-x-2 text-sm font-mono tracking-wider text-gray-400 hover:text-white transition-colors duration-300 text-left"
          >
            <span>LAUNCH DATE</span>
            <ArrowUpDown size={14} />
          </button>
          
          <button 
            onClick={() => handleSort('status')}
            className="flex items-center space-x-2 text-sm font-mono tracking-wider text-gray-400 hover:text-white transition-colors duration-300 text-left"
          >
            <span>STATUS</span>
            <ArrowUpDown size={14} />
          </button>
        </div>

        {/* Mission Rows */}
        <div className="space-y-4">
          {filteredAndSortedMissions.map((mission, index) => (
            <div 
              key={`${mission.mission}-${mission.launchDate}-${index}`} 
              className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center py-6 border-b border-gray-800 hover:bg-gray-900 hover:bg-opacity-30 transition-colors duration-300 rounded-lg px-4"
            >
              <span className="text-base lg:text-lg font-mono tracking-wide text-gray-300">
                {mission.mission}
              </span>

              <span className="text-base lg:text-lg font-mono tracking-wider text-gray-300">
                {mission.launchSite}
              </span>
              
              <span className="text-base lg:text-lg font-mono tracking-wider text-gray-300">
                {mission.launchDate}
              </span>
              
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${getStatusDot(mission.status)}`} />
                <span className={`text-base lg:text-lg font-mono tracking-wider uppercase ${getStatusColor(mission.status)}`}>
                  {mission.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Results count */}
        <div className="mt-12 text-center">
          <span className="text-sm font-mono tracking-wider text-gray-400">
            SHOWING {filteredAndSortedMissions.length} OF {completedMissions.length} MISSIONS
          </span>
        </div>
      </div>
    </section>
  );
}