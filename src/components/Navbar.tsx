import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '프라이빗 룸', href: '#rooms' },
    { name: '첫 방문 가이드', href: '#guide' },
    { name: 'VIP 픽업 & 혜택', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: '예약 & 문의', href: '#reservation', onClick: onOpenReservation },
    { name: '오시는 길', href: '#location' },
    { name: '선수 모집', href: '#recruit' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onClick?: () => void) => {
    if (onClick) {
      onClick();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/60 to-transparent py-4'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="hidden lg:block border-b border-zinc-800/40 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center text-amber-400/90 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
              오늘 밤 정상 영업 중 (20:00 - 06:00)
            </span>
            <span className="text-zinc-600">|</span>
            <span className="inline-flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400/80 mr-1" />
              100% 정찰제 · 룸비 0원 · 철저한 사생활 비밀보장
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-zinc-400">서울 전지역 고급 세단 무료 픽업 가능</span>
            <span className="text-zinc-600">|</span>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="text-amber-300 hover:text-amber-200 font-semibold flex items-center transition-colors"
            >
              <Phone className="w-3 h-3 mr-1 text-amber-400" />
              {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[1px] shadow-lg shadow-amber-500/10">
            <div className="w-full h-full bg-[#09090b] rounded-[7px] flex items-center justify-center">
              <span className="font-serif-luxury text-xl font-bold tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors">
                W
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                건대 W
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-amber-400 border border-amber-400/30 rounded px-1.5 py-0.2 uppercase bg-amber-950/20">
                VIP LOUNGE
              </span>
            </div>
            <span className="text-[11px] text-zinc-400 tracking-wider">
              프리미엄 프라이빗 호스트클럽
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.onClick)}
              className="px-2.5 py-1.5 rounded-md hover:text-amber-300 hover:bg-zinc-800/40 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-2.5">
          <button
            onClick={onOpenReservation}
            className="px-3 py-1.5 rounded-md border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 text-xs font-semibold tracking-wide transition-colors flex items-center space-x-1"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>온라인 예약</span>
          </button>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="px-3.5 py-1.5 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all flex items-center space-x-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>24H 전화문의</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e12] border-b border-zinc-800 px-5 pt-3 pb-6 mt-3 space-y-3 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs text-zinc-400">
            <span className="flex items-center text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
              오늘 밤 20:00 - 06:00 영업중
            </span>
            <span className="text-amber-400">100% 정찰제</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.onClick)}
                className="px-3 py-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800/80 text-zinc-200 text-sm font-medium hover:border-amber-500/50 hover:text-amber-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="w-full py-2.5 px-3 rounded-lg border border-amber-500/50 bg-amber-500/10 text-amber-300 text-xs font-semibold text-center flex items-center justify-center space-x-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>전화 문의</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 text-xs font-bold text-center"
            >
              빠른 예약 신청
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
