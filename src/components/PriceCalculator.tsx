import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, Phone, MessageSquare, ArrowRight, CheckCircle2, Users, Clock, Wine, Info } from 'lucide-react';
import { DRINK_PACKAGES, SYSTEM_RATES, CONTACT_INFO } from '../data/mockData';

interface PriceCalculatorProps {
  onBookWithEstimate?: (estimateDetails: {
    packageId: string;
    headcount: number;
    hours: number;
    hostsCount: number;
    totalPrice: number;
    perPersonPrice: number;
  }) => void;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({ onBookWithEstimate }) => {
  const [headcount, setHeadcount] = useState<number>(1);
  const [hours, setHours] = useState<number>(2);
  const [selectedPkgId, setSelectedPkgId] = useState<string>('whisky-12y');
  const [hostsCount, setHostsCount] = useState<number>(1);

  // When headcount changes, update hostsCount default to 1:1 matching
  const handleHeadcountChange = (count: number) => {
    setHeadcount(count);
    setHostsCount(count); // Default 1 host per guest
  };

  const selectedPackage = useMemo(() => {
    return DRINK_PACKAGES.find((p) => p.id === selectedPkgId) || DRINK_PACKAGES[0];
  }, [selectedPkgId]);

  // Calculations
  const drinkPrice = selectedPackage.price;
  const tcTotal = hostsCount * hours * SYSTEM_RATES.tcPerHour;
  const waiterTip = SYSTEM_RATES.waiterTip;
  const roomCharge = SYSTEM_RATES.roomCharge; // 0
  const totalPrice = drinkPrice + tcTotal + waiterTip + roomCharge;
  const perPersonPrice = Math.round(totalPrice / headcount);

  const formatKRW = (val: number) => val.toLocaleString('ko-KR') + '원';

  const handleBookNow = () => {
    if (onBookWithEstimate) {
      onBookWithEstimate({
        packageId: selectedPkgId,
        headcount,
        hours,
        hostsCount,
        totalPrice,
        perPersonPrice
      });
    }
  };

  return (
    <section id="calculator" className="py-20 bg-[#0c0c10] relative border-t border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>REAL-TIME TRANSPARENT ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            내 방문 예상 주대 <span className="text-amber-400">실시간 계산기</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base mt-3">
            인원수, 시간, 주류를 선택하시면 정찰제 기준 예상 금액이 즉시 계산됩니다. <br className="hidden sm:inline" />
            계산된 금액 외에 불필요한 추가금은 0원입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            {/* Step 1: Headcount */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-white flex items-center">
                  <Users className="w-4 h-4 text-amber-400 mr-2" />
                  1. 방문 인원수
                </label>
                <span className="text-xs text-amber-400 font-medium">
                  {headcount === 1 ? '1인 혼술 (조용하고 프라이빗)' : `${headcount}인 모임`}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => handleHeadcountChange(num)}
                    className={`py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      headcount === num
                        ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/30 scale-[1.02]'
                        : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                    }`}
                  >
                    {num === 5 ? '5인+' : `${num}명`}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Duration (Hours) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-white flex items-center">
                  <Clock className="w-4 h-4 text-amber-400 mr-2" />
                  2. 예상 이용 시간
                </label>
                <span className="text-xs text-zinc-400">
                  T/C 시간당 {formatKRW(SYSTEM_RATES.tcPerHour)}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((hr) => (
                  <button
                    key={hr}
                    type="button"
                    onClick={() => setHours(hr)}
                    className={`py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      hours === hr
                        ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/30 scale-[1.02]'
                        : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                    }`}
                  >
                    {hr}시간
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Drink Package */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-white flex items-center">
                  <Wine className="w-4 h-4 text-amber-400 mr-2" />
                  3. 주류 세트 선택
                </label>
                <span className="text-xs text-amber-400">과일+마른안주+음료 무제한</span>
              </div>
              <div className="space-y-2.5">
                {DRINK_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      selectedPkgId === pkg.id
                        ? 'bg-amber-500/10 border-amber-500/70 text-white shadow-sm'
                        : 'bg-zinc-800/60 border-zinc-700/60 text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          selectedPkgId === pkg.id
                            ? 'border-amber-400 bg-amber-400'
                            : 'border-zinc-500'
                        }`}
                      >
                        {selectedPkgId === pkg.id && (
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
                        )}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold flex items-center space-x-2">
                          <span>{pkg.name}</span>
                          {pkg.popular && (
                            <span className="text-[10px] bg-amber-500 text-zinc-950 px-1.5 py-0.2 rounded font-bold">
                              인기
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-zinc-400">{pkg.bottleInfo}</div>
                      </div>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-amber-300 font-serif-luxury">
                      {formatKRW(pkg.price)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Hosts Match Count Adjustment */}
            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-400">선수 매칭 인원수 (기본 1:1 매칭)</span>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setHostsCount(Math.max(1, hostsCount - 1))}
                  className="w-7 h-7 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold flex items-center justify-center"
                >
                  -
                </button>
                <span className="font-bold text-white px-2">{hostsCount}명</span>
                <button
                  type="button"
                  onClick={() => setHostsCount(hostsCount + 1)}
                  className="w-7 h-7 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Result Column (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-[#0e0e12] border-2 border-amber-500/50 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
              <div>
                <span className="text-xs font-semibold text-amber-400">ESTIMATED SUMMARY</span>
                <h3 className="text-lg font-bold text-white">상세 견적 내역서</h3>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                정찰제 적용
              </span>
            </div>

            {/* Breakdown lines */}
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 pb-5 border-b border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">
                  주류 세트 ({selectedPackage.name})
                </span>
                <span className="font-semibold text-white">{formatKRW(drinkPrice)}</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-zinc-400">파트너 T/C</span>
                  <span className="text-[11px] text-zinc-500 block">
                    선수 {hostsCount}명 × {hours}시간 (시간당 6만)
                  </span>
                </div>
                <span className="font-semibold text-white">{formatKRW(tcTotal)}</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-zinc-400">웨이터 봉사료</span>
                  <span className="text-[11px] text-zinc-500 block">테이블당 1회 고정</span>
                </div>
                <span className="font-semibold text-white">{formatKRW(waiterTip)}</span>
              </div>

              <div className="flex items-center justify-between text-emerald-400">
                <span className="font-medium">단독 룸 이용료</span>
                <span className="font-bold">0원 (시간 무제한 무료)</span>
              </div>

              <div className="flex items-center justify-between text-emerald-400">
                <span className="font-medium">특선안주 & 맥주/음료</span>
                <span className="font-bold">0원 (무제한 리필)</span>
              </div>
            </div>

            {/* Total Display */}
            <div className="py-5">
              <div className="text-xs text-zinc-400 mb-1">총 예상 결제 금액</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-serif-luxury tracking-tight">
                {formatKRW(totalPrice)}
              </div>

              {headcount > 1 && (
                <div className="mt-2 text-xs text-zinc-400 flex items-center justify-between bg-zinc-800/50 px-3 py-2 rounded-lg border border-zinc-700/50">
                  <span>1인당 분담 예상 금액 ({headcount}인) :</span>
                  <span className="font-bold text-white text-sm">
                    약 {formatKRW(perPersonPrice)}
                  </span>
                </div>
              )}
            </div>

            {/* Reassurance text */}
            <div className="p-3 rounded-xl bg-zinc-800/40 border border-zinc-800 text-[11px] text-zinc-400 space-y-1 mb-6">
              <div className="flex items-center text-amber-400 font-semibold">
                <Info className="w-3.5 h-3.5 mr-1 shrink-0" />
                <span>건대 W 정찰제 안심 약속</span>
              </div>
              <p>실제 방문 시 위 금액 그대로 정직하게 이용하시게 됩니다. (카드/현금/계좌이체 동일 환영)</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleBookNow}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>이 견적으로 빠른 예약 / 문의</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-xs transition-colors flex items-center justify-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>견적 내용 실시간 전화 상담</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
