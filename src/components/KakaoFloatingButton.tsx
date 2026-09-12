import React from 'react';
import { CONTACT_INFO } from '../data/mockData';

export const KakaoFloatingButton: React.FC = () => {
  return (
    <aside
      aria-label="카카오톡 실시간 상담"
      className="fixed z-50 bottom-20 right-4 md:bottom-8 md:right-8 transition-transform duration-300 hover:scale-105 active:scale-95 group"
    >
      <a
        id="kakao-floating-btn"
        href={CONTACT_INFO.kakaoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-[20px] shadow-2xl shadow-yellow-500/30 border-2 border-[#FEE500]/70 overflow-hidden bg-[#FEE500] focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
        title="카카오톡 24시간 실시간 1:1 상담 바로가기"
      >
        {/* Kakao Talk Icon Image */}
        <img
          src="/kakaotalk.jpg"
          alt="카카오톡 상담"
          className="w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Online Indicator Badge */}
        <span className="absolute top-1 right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#09090b]"></span>
        </span>
      </a>

      {/* Desktop Hover Tooltip */}
      <div className="hidden md:group-hover:flex absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3.5 py-2 rounded-xl bg-zinc-900/95 border border-amber-500/30 text-amber-300 text-xs font-semibold whitespace-nowrap shadow-xl backdrop-blur-sm pointer-events-none items-center space-x-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>24H 카톡 실시간 상담</span>
        <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 border-4 border-transparent border-l-zinc-900"></div>
      </div>
    </aside>
  );
};
