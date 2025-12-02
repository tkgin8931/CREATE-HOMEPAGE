"use client"
import React, { useState } from 'react';
import { Search, ArrowUpDown, Database } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface CompletedMission {
  mission: string;
  launchSite: string;
  launchDate: string;
  payload: string;
  status: 'success' | 'failure';
}

const completedMissions: CompletedMission[] = [
  {
    mission: "C-83LM MISSION",
    launchSite: "NOSIRO,AKITA",
    launchDate: "AUG 22, 2025",
    payload: "Atmospheric Probe",
    status: "failure"
  },
  {
    mission: "C-73J MISSION",
    launchSite: "O-SIMA,TOKYO",
    launchDate: "MAR 30, 2025",
    payload: "CubeSat Prototype",
    status: "success"
  },
  {
    mission: "C-89J MISSION",
    launchSite: "O-SIMA,TOKYO",
    launchDate: "MAR 29, 2025",
    payload: "Telemetry Unit",
    status: "failure"
  },
  {
    mission: "C-73J MISSION",
    launchSite: "KADA,WAKAYAMA",
    launchDate: "SEP 28, 2024",
    payload: "Micro-Gravity Lab",
    status: "failure"
  },
  {
    mission: "C-79J MISSION",
    launchSite: "KADA,WAKAYAMA",
    launchDate: "MAR 25, 2024",
    payload: "Student Payload",
    status: "success"
  },
  {
    mission: "C-71J MISSION",
    launchSite: "O-SIMA,TOKYO",
    launchDate: "OCT 20, 2023",
    payload: "Test Mass Simulator",
    status: "success"
  },
];

type SortField = 'mission' | 'launchSite' | 'launchDate' | 'payload' | 'status';

export default function CompletedMissions() {
  const { t } = useLanguage();
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
      mission.launchSite.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mission.payload.toLowerCase().includes(searchTerm.toLowerCase())
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
    return status === 'success' ? 'text-emerald-400' : 'text-red-500';
  };

  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-white/30"></div>
              <span className="text-sm font-mono text-gray-500 tracking-widest uppercase">{t.topPage.completed.archiveLabel}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">
              {t.topPage.completed.title.split(' ').map((word, i) => (
                <span key={i}>{word}<br /></span>
              ))}
            </h2>
          </div>

          <div className="w-full lg:w-auto">
            <div className="relative group">
              <input
                type="text"
                placeholder={t.topPage.completed.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-b border-white/20 py-2 pr-12 text-lg font-mono text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors w-full lg:w-80"
              />
              <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 group-focus-within:text-white transition-colors" size={20} />
            </div>
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden lg:grid grid-cols-12 gap-4 py-3 border-b border-white/20 mb-2 text-[10px] font-mono text-gray-500 tracking-widest uppercase">
          <div className="col-span-3 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('mission')}>
            {t.topPage.completed.tableHeaders.mission} <ArrowUpDown size={10} className="inline ml-1" />
          </div>
          <div className="col-span-3 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('launchSite')}>
            {t.topPage.completed.tableHeaders.site} <ArrowUpDown size={10} className="inline ml-1" />
          </div>
          <div className="col-span-3 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('payload')}>
            PAYLOAD <ArrowUpDown size={10} className="inline ml-1" />
          </div>
          <div className="col-span-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('launchDate')}>
            {t.topPage.completed.tableHeaders.date} <ArrowUpDown size={10} className="inline ml-1" />
          </div>
          <div className="col-span-1 text-right cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('status')}>
            {t.topPage.completed.tableHeaders.status} <ArrowUpDown size={10} className="inline ml-1" />
          </div>
        </div>

        {/* Mission Rows */}
        <div className="space-y-0">
          {filteredAndSortedMissions.map((mission, index) => (
            <div
              key={`${mission.mission}-${mission.launchDate}-${index}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-4 py-4 border-b border-white/10 items-center hover:bg-white/5 transition-colors px-2 lg:px-0"
            >
              {/* Mission Name */}
              <div className="col-span-12 lg:col-span-3">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  {mission.mission}
                </span>
              </div>

              {/* Launch Site */}
              <div className="col-span-12 lg:col-span-3">
                <span className="text-xs lg:text-sm font-mono text-gray-400 tracking-wider uppercase">
                  {mission.launchSite}
                </span>
              </div>

              {/* Payload (New Column) */}
              <div className="col-span-12 lg:col-span-3">
                <span className="text-xs lg:text-sm font-mono text-gray-500 tracking-wider">
                  {mission.payload}
                </span>
              </div>

              {/* Date */}
              <div className="col-span-6 lg:col-span-2">
                <span className="text-xs lg:text-sm font-mono text-gray-500">
                  {mission.launchDate}
                </span>
              </div>

              {/* Status */}
              <div className="col-span-6 lg:col-span-1 text-right">
                <span className={`text-[10px] lg:text-xs font-mono font-bold tracking-widest uppercase ${getStatusColor(mission.status)}`}>
                  {mission.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-gray-600 tracking-widest border-t border-white/10 pt-4">
          <span>{t.topPage.completed.footer.version}</span>
          <span>
            {t.topPage.completed.footer.displaying} {filteredAndSortedMissions.length} / {completedMissions.length} RECORDS
          </span>
        </div>
      </div>
    </section>
  );
}