import React from 'react';
import { Phone, MessageCircle, Calculator, Sparkles, Shield, Car, Users, GlassWater } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenCalculator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#09090b]">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-amber-700/8 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-zinc-800/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Subtle Pattern Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
        {/* Live Status Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 shadow-lg shadow-amber-500/5 mb-6 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-zinc-200">
            실시간 운영 안내 : <span className="text-amber-400">금일 에이스 출근 50명+</span> 정상 영업중
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-xs text-zinc-400 hidden sm:inline">20:00 - 익일 06:00</span>
        </div>

        {/* Brand Main Title */}
        <div className="space-y-3 mb-6">
          <p className="font-serif-luxury text-sm md:text-base tracking-[0.2em] text-amber-400/90 font-semibold">
            건대 1등 여성전용 호스트바 · 건대 W
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            가장 세련되고 정직한 밤 <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent font-serif-luxury drop-shadow-sm">
              건대 W 호스트클럽
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 font-normal leading-relaxed pt-2">
            건대입구역 도보 5분, 바가지 걱정 없는 <strong className="text-amber-300 font-medium">100% 투명 정찰제</strong>와 <strong className="text-amber-300 font-medium">룸비 0원</strong>. <br className="hidden sm:inline" />
            엄선된 50여 명의 훈남 에이스 라인업과 프라이빗 럭셔리 룸에서 온전한 힐링을 선사합니다.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto mb-12">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 font-bold text-base shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>24H 전화 문의 · {CONTACT_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-zinc-800/90 hover:bg-zinc-700/90 border border-amber-500/30 hover:border-amber-500/60 text-amber-300 font-semibold text-base transition-all flex items-center justify-center space-x-2 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>온라인 빠른 예약 / 픽업 신청</span>
          </button>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm text-left flex items-start space-x-3 hover:border-amber-500/40 transition-colors">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-zinc-200">100% 정찰제</h3>
              <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                숨겨진 추가 요금 Zero, 계산 전 전액 투명 확인
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm text-left flex items-start space-x-3 hover:border-amber-500/40 transition-colors">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <GlassWater className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-zinc-200">룸 이용료 0원</h3>
              <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                시간 무제한 룸비 무료, 맥주/음료/안주 무제한
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm text-left flex items-start space-x-3 hover:border-amber-500/40 transition-colors">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-zinc-200">50+ 에이스 라인업</h3>
              <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                다양한 매력의 훈남들, 무제한 맞춤 초이스
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm text-left flex items-start space-x-3 hover:border-amber-500/40 transition-colors">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-zinc-200">고급 세단 무료 픽업</h3>
              <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                서울 전지역 픽업 지원 및 전용 무료 발렛
              </p>
            </div>
          </div>
        </div>

        {/* Solo Visit Reassurance Notice */}
        <div className="mt-8 text-xs text-zinc-400 max-w-lg mx-auto bg-amber-950/20 border border-amber-500/20 rounded-full py-2 px-4 flex items-center justify-center space-x-2">
          <span className="text-amber-400 font-semibold">TIP</span>
          <span>혼자 방문하시는 1인 고객이 40% 이상입니다. 부담 없이 편안하게 오세요!</span>
        </div>
      </div>
    </section>
  );
};
