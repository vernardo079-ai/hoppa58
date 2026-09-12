import React from 'react';
import { Check, Sparkles, AlertCircle, HelpCircle, Phone } from 'lucide-react';
import { DRINK_PACKAGES, SYSTEM_RATES, CONTACT_INFO } from '../data/mockData';

interface PricingSectionProps {
  onSelectPackage: (pkgId: string) => void;
  onOpenCalculator: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage, onOpenCalculator }) => {
  const formatKRW = (num: number) => num.toLocaleString('ko-KR') + '원';

  return (
    <section id="pricing" className="py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>100% NO HIDDEN COST GUARANTEE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            투명한 정찰제 주대 & 시스템
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4">
            건대 W는 입장 전 안내드린 정찰 가격 외에 추가금이나 룸비를 절대 받지 않습니다. <br className="hidden sm:inline" />
            부담 없는 합리적인 가격으로 품격 있는 시간을 누려보세요.
          </p>
        </div>

        {/* 3 Core System Cards (T/C, Room fee, Waiter fee) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
          <div className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center flex flex-col justify-center items-center">
            <span className="text-xs text-zinc-400 font-medium">선수 타임차지 (T/C)</span>
            <div className="text-2xl sm:text-3xl font-bold text-amber-300 font-serif-luxury mt-1">
              60,000<span className="text-sm font-sans text-zinc-400">원 / 1시간</span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">1인 1시간 기준 정찰제 (연장 시 동일)</p>
          </div>

          <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-center flex flex-col justify-center items-center relative overflow-hidden">
            <span className="absolute top-2 right-2 text-[10px] font-bold bg-amber-400 text-zinc-950 px-2 py-0.5 rounded-full">
              W 특별 혜택
            </span>
            <span className="text-xs text-amber-200 font-medium">룸 이용료 (Room Charge)</span>
            <div className="text-2xl sm:text-3xl font-bold text-white font-serif-luxury mt-1">
              0<span className="text-sm font-sans text-zinc-300">원 (무료)</span>
            </div>
            <p className="text-xs text-amber-300/80 mt-1">시간 제한 없는 럭셔리 룸 100% 무료</p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center flex flex-col justify-center items-center">
            <span className="text-xs text-zinc-400 font-medium">웨이터 서빙 봉사료</span>
            <div className="text-2xl sm:text-3xl font-bold text-amber-300 font-serif-luxury mt-1">
              50,000<span className="text-sm font-sans text-zinc-400">원 / 테이블</span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">방문 1회당 테이블 고정 (추가 없음)</p>
          </div>
        </div>

        {/* Drink Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {DRINK_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border-2 border-amber-500/70 shadow-2xl shadow-amber-500/10'
                  : 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 text-xs font-black tracking-wider uppercase shadow-md">
                  BEST POPULAR
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-amber-400">{pkg.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">{pkg.description}</p>

                <div className="pb-6 mb-6 border-b border-zinc-800">
                  <div className="text-xs text-zinc-400">세트 주대</div>
                  <div className="text-3xl font-extrabold text-white font-serif-luxury tracking-tight mt-1">
                    {formatKRW(pkg.price)}
                  </div>
                  <div className="text-xs text-amber-300/90 mt-1 font-medium">
                    {pkg.bottleInfo}
                  </div>
                </div>

                {/* Included Features */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    기본 포함 서비스 내역
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.included.map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-amber-400 mr-2 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                  }`}
                >
                  이 세트로 예약하기
                </button>
                <button
                  onClick={onOpenCalculator}
                  className="w-full py-2 rounded-lg text-xs text-zinc-400 hover:text-amber-300 transition-colors"
                >
                  예상 총 금액 계산해보기 →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Banner & Call Option */}
        <div className="rounded-2xl p-6 sm:p-8 bg-zinc-900/80 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                방문 전 주대나 시스템에 대해 궁금한 점이 있으신가요?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                언제든 전화나 문자 주시면 담당 실장이 인원수와 시간에 맞춘 정확한 총 견적을 1원 단위까지 솔직하게 안내해 드립니다.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenCalculator}
              className="flex-1 md:flex-none px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs sm:text-sm font-semibold transition-colors"
            >
              주대 계산기 열기
            </button>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex-1 md:flex-none px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/20 transition-colors flex items-center justify-center space-x-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>전화로 주대 문의</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
