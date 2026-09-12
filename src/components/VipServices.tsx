import React from 'react';
import { Car, Cake, Sparkles, Shield, Gift, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export const VipServices: React.FC = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6 text-amber-400" />,
      title: '서울 전지역 무료 세단 픽업',
      subtitle: 'Premium Door-to-Door Escort',
      desc: '건대, 구의, 성수는 물론 강남, 잠실, 동대문 등 서울 전역에서 출발 30분 전 예약 시 고급 세단 차량으로 고객님이 계신 곳까지 안전하게 모시러 갑니다.'
    },
    {
      icon: <Cake className="w-6 h-6 text-amber-400" />,
      title: '생일 & 기념일 스페셜 이벤트',
      subtitle: 'Birthday & Anniversary Celebration',
      desc: '생일 고객님 또는 기념일 파티 사전 예약 시 축하 샴페인 1병 무료 증정, 파티 룸 데코레이션, 그리고 특별한 축하 이벤트를 선물해 드립니다.'
    },
    {
      icon: <Shield className="w-6 h-6 text-amber-400" />,
      title: '프라이빗 100% 무료 발렛 파킹',
      subtitle: 'Private Valet Parking Service',
      desc: '자차로 방문하시는 고객님들을 위해 매장 전용 주차장과 숙련된 전담 발렛 기사가 상시대기하여 안전하고 신속한 입·출차를 도와드립니다.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: '여성 전용 럭셔리 파우더룸 완비',
      subtitle: 'Luxury Powder Room & Dyson Stylers',
      desc: '다이슨 에어랩, 명품 브랜드 향수, 가글, 헤어 케어 용품이 비치된 프라이빗 파우더룸을 자유롭게 이용하시며 언제든 완벽한 스타일을 유지하실 수 있습니다.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>VIP SPECIAL BENEFITS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            건대 W만의 <span className="text-amber-400">차별화된 VIP 혜택</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4">
            오직 고객님의 편안함과 즐거움만을 생각하며 준비한 최고급 컨시어지 서비스를 경험해 보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 group flex items-start space-x-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                {item.icon}
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-amber-400/90 tracking-wide uppercase">
                  {item.subtitle}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pickup service banner call */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-amber-950/30 via-zinc-900 to-amber-950/20 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-amber-500 text-zinc-950 font-bold shrink-0">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                지금 계신 곳으로 고급 세단 픽업 차량을 보내드릴까요?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                강남, 건대, 잠실, 성수 등 어디서든 출발 30분 전 연락 주시면 즉시 기사님이 배차됩니다.
              </p>
            </div>
          </div>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 text-sm font-bold shadow-lg shadow-amber-500/20 transition-all text-center flex items-center justify-center space-x-2 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>픽업 예약하기 ({CONTACT_INFO.phoneDisplay})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
