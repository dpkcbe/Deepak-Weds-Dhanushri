'use client';

import { useState, useEffect } from 'react';
import { LanguageProvider } from '@/lib/language';
import { useLenis } from '@/lib/use-lenis';
import OpeningSequence from '@/components/opening-sequence';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import CountdownSection from '@/components/countdown-section';
import CoupleSection from '@/components/couple-section';
import ReceptionSection from '@/components/reception-section';
import VenueSection from '@/components/venue-section';
import RsvpSection from '@/components/rsvp-section';
import Footer from '@/components/footer';
import MusicToggle from '@/components/music-toggle';

function WeddingContent() {
  const [opened, setOpened] = useState(false);
  const [mounted, setMounted] = useState(false);

  useLenis();

  useEffect(() => {
    setMounted(true);
    // Prevent scroll during opening
    if (!opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [opened]);

  if (!mounted) return null;

  return (
    <>
      <OpeningSequence onComplete={() => setOpened(true)} />
      {opened && (
        <>
          <Navigation />
          <main>
            <HeroSection />
            <CountdownSection />
            <CoupleSection />
            <ReceptionSection />
            <VenueSection />
            <RsvpSection />
          </main>
          <Footer />
          <MusicToggle />
        </>
      )}
    </>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <WeddingContent />
    </LanguageProvider>
  );
}
