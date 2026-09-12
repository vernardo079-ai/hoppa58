import React, { useState } from 'react';
import { MapPin, Navigation, Car, Train, Clock, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CONTACT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 bg-[#0c0c10] relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>LOCATION & DIRECTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            오시는 길 & <span className="text-amber-400">발렛 안내</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4">
            건대입구역 2번 출구에서 도보 5분 거리의 프라이빗한 곳에 위치하고 있습니다. <br className="hidden sm:inline" />
            차량 이용 시 100% 무료 발렛 파킹과 서울 전지역 무료 픽업을 지원합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Map & Address Card */}
          <div className="lg:col-span-7 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            {/* Styled Map Graphic & Landmark Container */}
            <div className="relative rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 overflow-hidden mb-6 aspect-[16/10] flex flex-col justify-between">
              {/* Map grid simulation lines */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />

              <div className="flex items-center justify-between relative z-10">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                  건대 메인 상권 인근
                </span>
                <span className="text-xs text-zinc-400 font-medium flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  연중무휴 20:00 - 06:00
                </span>
              </div>

              {/* Central Map Pin Graphic */}
              <div className="text-center relative z-10 my-auto">
                <div className="relative inline-block">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto animate-pulse">
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center font-bold text-lg shadow-lg shadow-amber-500/50 font-serif-luxury">
                      W
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mt-3 font-serif-luxury tracking-wide">
                  건대 W (CLUB W)
                </h3>
                <p className="text-xs text-amber-300/90 mt-0.5">건대입구역 2번 출구 도보 5분</p>
              </div>

              {/* Bottom Address display & copy button */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-zinc-800/80 bg-zinc-950/70 -mx-6 -mb-6 p-4">
                <div className="text-xs text-zinc-300 flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-medium">{CONTACT_INFO.address}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 flex items-center space-x-1 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">복사완료</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>주소 복사</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Map shortcut buttons */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://map.naver.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold text-center flex items-center justify-center space-x-1 transition-colors"
              >
                <span>네이버 지도</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
              <a
                href="https://map.kakao.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold text-center flex items-center justify-center space-x-1 transition-colors"
              >
                <span>카카오맵</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
              <a
                href="https://tmap.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold text-center flex items-center justify-center space-x-1 transition-colors"
              >
                <span>티맵 네비</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Transit & Valet Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Subway */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                <Train className="w-4 h-4" />
                <span>지하철 이용 시</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <strong>2호선 / 7호선 건대입구역 2번 출구</strong>로 나오셔서 건대 맛의 거리 메인 골목 방면으로 직진, 도보 약 5분 소요됩니다.
                도착 5분 전 연락 주시면 출구 앞 또는 매장 입구에서 마중 나가 친절히 에스코트해 드립니다.
              </p>
            </div>

            {/* Vehicle & Valet */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                <Car className="w-4 h-4" />
                <span>자차 이용 & 무료 발렛 파킹</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                건대 W 전용 주차장이 마련되어 있어 주차 걱정 없이 방문하실 수 있습니다.
                도착 직전 전화 주시면 전담 발렛 기사가 나와 안전하게 차량을 인수 및 주차해 드립니다. <strong>(발렛비 100% 무료)</strong>
              </p>
            </div>

            {/* Premium Pickup Escort */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900 to-zinc-900 border border-amber-500/30 space-y-3">
              <div className="flex items-center space-x-2 text-amber-300 font-bold text-sm">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>서울 전지역 고급 세단 무료 픽업</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                계신 위치(강남, 잠실, 성수, 건대 등)에서 이동이 번거로우신가요?
                출발 30분 전 전화 주시면 편안한 고급 세단 차량으로 모시러 갑니다.
              </p>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>픽업 차량 요청 : {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
