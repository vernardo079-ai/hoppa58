import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldAlert, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-zinc-800 text-zinc-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top brand & quick contacts row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-extrabold text-white font-serif-luxury tracking-wider">
                건대 W (CLUB W)
              </span>
              <span className="text-[10px] font-bold text-amber-400 border border-amber-500/40 rounded px-1.5 py-0.5 bg-amber-950/30">
                VIP HOST CLUB
              </span>
            </div>
            <p className="text-zinc-400 text-xs">
              건대 1등 여성전용 프라이빗 호스트클럽 · 100% 정찰제 · 50+ 에이스 라인업
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs shadow-md transition-colors flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>전화 {CONTACT_INFO.phoneDisplay}</span>
            </a>
            <a
              href={CONTACT_INFO.kakaoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-xs transition-colors flex items-center space-x-1.5 shadow-md"
            >
              <img src="/kakaotalk.jpg" alt="" className="w-4 h-4 rounded-md object-cover" />
              <span>카카오톡 1:1 상담</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              aria-label="맨 위로 이동"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Details & Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-400 text-xs leading-relaxed">
          <div className="space-y-2">
            <h4 className="font-bold text-zinc-200">위치 & 운영시간</h4>
            <p className="flex items-start space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.address}</span>
            </p>
            <p className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>영업시간 : {CONTACT_INFO.operatingHours}</span>
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-zinc-200">고객 안심 보증</h4>
            <p>· 100% 정찰제 주대 및 바가지 요금 절대 근절</p>
            <p>· 단독 프라이빗 룸 100% 무료 (시간 무제한)</p>
            <p>· 서울 전지역 고급 세단 무료 픽업 서비스 상시대기</p>
            <p>· 방문 고객 철저한 사생활 및 개인정보 비밀보호</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-zinc-200">청소년 보호 및 법률 고지</h4>
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start space-x-2 text-[11px] text-zinc-400">
              <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>
                본 업소는 청소년보호법 규정에 따라 <strong>만 19세 미만 청소년의 출입 및 고용을 엄격히 금지</strong>합니다.
                신분증 확인 절차가 진행될 수 있습니다.
              </span>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 border-t border-zinc-900 text-center text-zinc-600 text-[11px]">
          <p>© 2026 건대 W (CLUB W). All Rights Reserved. 본 사이트는 건대 W 공식 홍보 및 안내 웹사이트입니다.</p>
        </div>
      </div>
    </footer>
  );
};
