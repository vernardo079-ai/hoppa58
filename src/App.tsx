import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KeyValues } from './components/KeyValues';
import { RoomGallery } from './components/RoomGallery';
import { FirstTimerGuide } from './components/FirstTimerGuide';
import { VipServices } from './components/VipServices';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ReservationSection } from './components/ReservationSection';
import { RecruitmentSection } from './components/RecruitmentSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { KakaoFloatingButton } from './components/KakaoFloatingButton';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<string>('whisky-standard');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-amber-400 selection:text-zinc-950 pb-16 md:pb-0">
      {/* Top Fixed Navbar */}
      <Navbar
        onOpenReservation={() => scrollToSection('reservation')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onOpenReservation={() => scrollToSection('reservation')}
        />

        {/* 2. Core 4 Principles */}
        <KeyValues />

        {/* 3. Luxury Private Rooms Gallery */}
        <RoomGallery />

        {/* 4. First-timer & Solo Visitor Guide */}
        <FirstTimerGuide />

        {/* 5. VIP Benefits & Sedan Pickup Service */}
        <VipServices />

        {/* 6. Real Customer Reviews */}
        <ReviewsSection />

        {/* 7. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 8. Real-time Reservation & Pickup Booking Form */}
        <ReservationSection
          initialPackage={selectedPackage}
        />

        {/* 9. Recruitment Section */}
        <RecruitmentSection />

        {/* 10. Location & Directions */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* KakaoTalk Floating Quick Action Button */}
      <KakaoFloatingButton />

      {/* Mobile Sticky Bottom Quick Action Bar */}
      <StickyBottomBar
        onOpenReservation={() => scrollToSection('reservation')}
      />
    </div>
  );
}
