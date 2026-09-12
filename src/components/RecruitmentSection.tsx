import React from 'react';
import { UserCheck, Sparkles, CheckCircle2, Phone, MessageCircle, DollarSign, Home, Shield } from 'lucide-react';
import { RECRUIT_INFO, CONTACT_INFO } from '../data/mockData';

export const RecruitmentSection: React.FC = () => {
  return (
    <section id="recruit" className="py-24 bg-[#09090b] relative border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900 to-[#0e0e14] border border-amber-500/40 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RECRUITMENT · 24H RECRUITING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              건대 W와 함께할 <span className="text-amber-400">2030 에이스 & 스태프</span> 상시 모집
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base mt-3 leading-relaxed">
              건대 1등 규모와 최고 손님 유입률! 텃세 없이 서로 밀어주고 끌어주는 최고의 근무 환경에서
              당신의 가치를 인정받으세요. 초보자도 당일 바로 적응할 수 있도록 지원합니다.
            </p>
          </div>

          {/* 4 Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">당일 100% 결제</h3>
              <p className="text-xs text-zinc-400">
                그날 번 T/C와 팁은 퇴근 시 100% 당일 전액 지급합니다. 밀림 절대 Zero.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">초보자 1:1 코칭</h3>
              <p className="text-xs text-zinc-400">
                경험이 없어도 옷 스타일링, 대화법, 테이블 매너 등 친절히 가르쳐 드립니다.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">풀옵션 숙소 완비</h3>
              <p className="text-xs text-zinc-400">
                지방 거주자 또는 독립을 희망하는 분들을 위한 쾌적한 전용 숙소를 지원합니다.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">텃세 Zero 문화</h3>
              <p className="text-xs text-zinc-400">
                선수 간의 갈등이나 부당한 대우가 전혀 없는 화기애애하고 밝은 직장 분위기.
              </p>
            </div>
          </div>

          {/* Qualification list */}
          <div className="p-5 rounded-2xl bg-zinc-950/50 border border-zinc-800/80 mb-8 text-xs sm:text-sm text-zinc-300">
            <h4 className="font-bold text-amber-400 mb-2">지원 자격 & 형태</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>20세 이상 대한민국 신체 건강한 남성 (군필, 면제, 대학생 무관)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>풀타임 정직원, 주말 알바, 평일 단기 파트타임 자유 선택 가능</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>외모, 끼, 재치, 성실함 중 한 가지만 있어도 환영</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>근무 시간: 20:00 ~ 익일 06:00 (시간 조율 가능)</span>
              </div>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`tel:${RECRUIT_INFO.contactPhone}`}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>채용 담당자 직통 전화 ({RECRUIT_INFO.contactPhone})</span>
            </a>

            <a
              href={CONTACT_INFO.kakaoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-xs sm:text-sm transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-yellow-500/10"
            >
              <img src="/kakaotalk.jpg" alt="" className="w-4 h-4 rounded-md object-cover" />
              <span>카카오톡 1:1 상담 바로가기</span>
            </a>

            <span className="text-xs text-zinc-500 text-center sm:text-left">
              * 24시간 언제든 편하게 전화나 문자 남겨주세요.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
