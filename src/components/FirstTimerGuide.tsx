import React from 'react';
import { Sparkles, Heart, Compass, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export const FirstTimerGuide: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: '편안한 사전 문의 & 픽업',
      desc: '방문 30분~1시간 전 전화나 카톡으로 연락 주시면 대기 없이 즉시 입장 가능한 룸을 확보해 드립니다. 원하실 경우 고급 세단 픽업 차량이 계신 곳으로 출발합니다.'
    },
    {
      step: '02',
      title: '프라이빗 룸 안내 & 주류 선택',
      desc: '다른 고객과의 마주침이 전혀 없는 독립 룸으로 안내해 드립니다. 스탠다드 위스키, 프리미엄 위스키, 샴페인 등 취향에 맞는 주류 세트를 선택합니다.'
    },
    {
      step: '03',
      title: '부담 없는 무제한 초이스',
      desc: '건대 W의 50여 명 에이스 선수들이 조별로 인사드립니다. 외모, 키, 대화 성향 등 마음에 드는 파트너가 나타날 때까지 부담 없이 무제한으로 초이스하실 수 있습니다.'
    },
    {
      step: '04',
      title: '기분 좋은 힐링 & 프라이빗 타임',
      desc: '선택하신 파트너와 함께 맛있는 안주와 술, 최신 노래방 시스템, 그리고 즐겁고 매너 넘치는 대화를 나누며 일상의 모든 스트레스를 날려버리세요.'
    },
    {
      step: '05',
      title: '투명한 정찰제 결제 & 안심 귀가',
      desc: '이용하신 시간만큼의 T/C와 주대만 1원 단위까지 투명하게 정산됩니다. 카드/현금/계좌이체 모두 가능하며, 안전한 귀가를 도와드립니다.'
    }
  ];

  return (
    <section id="guide" className="py-24 bg-[#0c0c10] relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>FOR FIRST-TIME VISITORS & SOLO GUESTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            처음이어도, 혼자여도 <br className="sm:hidden" />
            <span className="text-amber-400">전혀 어색하지 않습니다</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4">
            건대 W 방문 고객님의 40% 이상이 1인 혼술 고객님입니다. <br className="hidden sm:inline" />
            처음 오시는 분도 긴장 없이 편안히 즐기실 수 있도록 5단계 안심 가이드를 준비했습니다.
          </p>
        </div>

        {/* 5 Steps Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 font-serif-luxury font-bold text-sm flex items-center justify-center group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-medium">STEP {idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-800/60 flex items-center text-[11px] text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                <span>100% 안심 보장</span>
              </div>
            </div>
          ))}
        </div>

        {/* Solo Visit Reassurance Card */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-zinc-900 via-[#14141c] to-zinc-900 border border-amber-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                1인 혼술 특별 케어 프로그램
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                "혼자 가면 부담스럽거나 뻘쭘하지 않을까 걱정되시나요?"
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                전혀 걱정하지 마세요. 건대 W는 조용히 혼자 생각 정리나 힐링을 원하시는 여성 고객님들을 위해
                <strong> 1인 전용 프라이빗 아늑한 룸</strong>과 <strong>센스 있고 매너 좋은 맞춤형 파트너</strong>를 우선 배정합니다.
                대화가 어색하지 않게 물 흐르듯 편안한 분위기를 만들어 드립니다.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-zinc-300">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>복장 제한 전혀 없음 (편한 캐주얼 OK)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>술을 전혀 못 드셔도 음료로 대체 가능</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>마음에 들지 않으면 즉시 파트너 체인지 가능</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm text-center shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>1인 방문 실시간 상담</span>
              </a>
              <a
                href={CONTACT_INFO.kakaoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs text-center border border-zinc-700 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-amber-400" />
                <span>카카오톡 1:1 비밀 문의</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
