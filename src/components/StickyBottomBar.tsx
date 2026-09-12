import React from 'react';
import { Phone, MessageCircle, Calculator, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface StickyBottomBarProps {
  onOpenReservation: () => void;
  onOpenCalculator?: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenReservation }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#09090b]/95 backdrop-blur-md border-t border-zinc-800 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs shadow-md shadow-amber-500/20 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-current mb-0.5" />
          <span>전화문의</span>
        </a>

        {/* Kakao Button */}
        <a
          href={CONTACT_INFO.kakaoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 rounded-xl bg-[#FEE500] text-[#191919] font-bold text-xs active:scale-95 transition-transform shadow-md"
        >
          <img src="/kakaotalk.jpg" alt="" className="w-4 h-4 rounded object-cover mb-0.5" />
          <span>카톡상담</span>
        </a>

        {/* Reservation Button */}
        <button
          type="button"
          onClick={onOpenReservation}
          className="flex flex-col items-center justify-center py-2 rounded-xl bg-zinc-800 text-amber-300 border border-amber-500/40 font-bold text-xs active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-amber-400" />
          <span>빠른예약</span>
        </button>
      </div>
    </div>
  );
};
