'use client';

import { LanguageProvider } from '@/lib/language';
import { useLenis } from '@/lib/use-lenis';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import CountdownSection from '@/components/countdown-section';
import ReceptionSection from '@/components/reception-section';
import RsvpSection from '@/components/rsvp-section';
import Footer from '@/components/footer';

function WeddingContent() {
  useLenis();

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <CountdownSection />
        <ReceptionSection />
        <RsvpSection />
      </main>
      <Footer />
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
