import React from 'react';
import { ShieldCheck, Users, EyeOff, Sparkles, CheckCircle2 } from 'lucide-react';
import { CORE_VALUES } from '../data/mockData';

export const KeyValues: React.FC = () => {
  const icons = [
    <ShieldCheck className="w-6 h-6 text-amber-400" />,
    <Users className="w-6 h-6 text-amber-400" />,
    <EyeOff className="w-6 h-6 text-amber-400" />,
    <Sparkles className="w-6 h-6 text-amber-400" />
  ];

  return (
    <section className="py-20 bg-[#0c0c10] border-t border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-serif-luxury text-xs tracking-[0.2em] text-amber-400 uppercase font-semibold mb-2">
            THE SIGNATURE STANDARDS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            건대 W가 지켜온 <span className="text-amber-400">4대 안심 원칙</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            어떤 의문이나 불안함도 남지 않도록, 고객과의 신뢰를 최우선으로 운영합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((item, idx) => (
            <div
              key={item.number}
              className="group relative p-7 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    {icons[idx]}
                  </div>
                  <span className="font-serif-luxury text-2xl font-bold text-zinc-700 group-hover:text-amber-400/50 transition-colors">
                    {item.number}
                  </span>
                </div>
                <p className="text-xs font-semibold text-amber-400/90 mb-1">{item.subtitle}</p>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/60 flex items-center text-xs text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1.5 shrink-0" />
                <span>건대 W 공식 인증 보증</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
