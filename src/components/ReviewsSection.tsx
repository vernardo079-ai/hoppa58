import React from 'react';
import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0c0c10] relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>REAL GUEST EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            건대 W를 다녀가신 <span className="text-amber-400">고객님들의 솔직 후기</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base mt-3">
            첫 방문 고객, 혼술 고객, 생일 파티 고객님들이 남겨주신 소중한 이용 경험입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-7 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-zinc-500">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">{review.name}</span>
                  <span className="text-[11px] text-amber-400">{review.type}</span>
                </div>
                <div className="flex items-center text-[11px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 mr-1" />
                  <span>방문 인증 완료</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
