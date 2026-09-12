import React, { useState } from 'react';
import { Sparkles, Users, Music, Shield, Check, Volume2 } from 'lucide-react';
import { ROOMS } from '../data/mockData';

export const RoomGallery: React.FC = () => {
  const [activeRoomId, setActiveRoomId] = useState<string>(ROOMS[0].id);

  const activeRoom = ROOMS.find((r) => r.id === activeRoomId) || ROOMS[0];

  return (
    <section id="rooms" className="py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRIVATE & LUXURY SPACES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            프라이빗 룸 & 공간 안내
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4">
            모든 룸은 완벽한 방음과 독립된 프라이빗 동선으로 설계되었습니다. <br className="hidden sm:inline" />
            1인 혼술부터 대규모 생일 파티까지 최상의 안락함과 음향 시설을 제공합니다.
          </p>
        </div>

        {/* Room Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {ROOMS.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveRoomId(room.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeRoomId === room.id
                  ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20'
                  : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Active Room Featured Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm overflow-hidden">
          {/* Image preview with gradient overlay */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-950 border border-zinc-800 group">
            <img
              src={activeRoom.image}
              alt={`건대 W 프라이빗 룸 - ${activeRoom.name} (${activeRoom.subtitle})`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                {activeRoom.tag}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs text-amber-400 font-medium">{activeRoom.subtitle}</span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury">{activeRoom.name}</h3>
            </div>
          </div>

          {/* Details column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs text-amber-400 font-semibold mb-1">
                <Users className="w-3.5 h-3.5" />
                <span>권장 인원: {activeRoom.capacity}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-serif-luxury">
                {activeRoom.name}
              </h3>
              <p className="text-sm text-zinc-300 mt-2.5 leading-relaxed">
                {activeRoom.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                공간 특장점 및 설비
              </h4>
              <ul className="space-y-2.5">
                {activeRoom.features.map((feat, i) => (
                  <li key={i} className="flex items-start text-xs sm:text-sm text-zinc-200">
                    <Check className="w-4 h-4 text-amber-400 mr-2.5 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>독립 방음 시공 및 100% 사생활 보호</span>
              </div>
              <span className="text-amber-400 font-bold">룸비 0원</span>
            </div>
          </div>
        </div>

        {/* Thumbnail quick grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              onClick={() => setActiveRoomId(room.id)}
              className={`relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer border transition-all ${
                activeRoomId === room.id
                  ? 'border-amber-500 shadow-md shadow-amber-500/20 ring-2 ring-amber-500/30'
                  : 'border-zinc-800 hover:border-zinc-700 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={room.image}
                alt={room.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 flex flex-col justify-end">
                <span className="text-[11px] font-bold text-white truncate">{room.name}</span>
                <span className="text-[10px] text-amber-300/80 truncate">{room.capacity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
