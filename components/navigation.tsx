'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useLanguage } from '@/lib/language';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'hero', key: 'nav_home' },
  { id: 'countdown', key: 'nav_countdown' },
  { id: 'couple', key: 'nav_couple' },
  { id: 'reception', key: 'nav_reception' },
  { id: 'venue', key: 'nav_venue' },
  { id: 'rsvp', key: 'nav_rsvp' },
];

export default function Navigation() {
  const { t, lang, toggleLang } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
    if (latest > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 2;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{
          scaleX: scrollYProgress,
          background: 'linear-gradient(90deg, hsl(38 62% 45%), hsl(45 80% 72%), hsl(38 62% 45%))',
        }}
      />

      {/* Centering wrapper — fixed full-width, uses flex to centre the pill */}
      <div
        className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none"
        style={{ paddingLeft: '16px', paddingRight: '16px' }}
      >
        <AnimatePresence>
          {visible && (
            <motion.nav
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="pointer-events-auto"
            >
              <div
                className={cn(
                  'glass rounded-full px-4 py-2 flex items-center gap-1 luxury-shadow transition-transform duration-300',
                  scrolled ? 'scale-95' : 'scale-100'
                )}
              >
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={cn(
                      'relative px-3 py-1.5 text-xs font-body tracking-wide rounded-full transition-all duration-300 hidden sm:block whitespace-nowrap',
                      activeSection === section.id
                        ? 'text-royal'
                        : 'text-muted-foreground hover:text-royal'
                    )}
                  >
                    {t(section.key)}
                    {activeSection === section.id && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'rgba(212,175,55,0.12)' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                ))}

                {/* Mobile-only: compact label */}
                <button
                  onClick={() => scrollTo('hero')}
                  className="sm:hidden px-3 py-1.5 font-script text-lg text-royal"
                >
                  D &amp; D
                </button>

                {/* Language toggle */}
                <button
                  onClick={toggleLang}
                  className="ml-1 px-3 py-1.5 text-xs font-body tracking-wide rounded-full border border-gold/30 text-royal hover:bg-gold/10 transition-all duration-300 flex items-center gap-1"
                >
                  <span className={lang === 'en' ? 'font-semibold' : 'opacity-50'}>EN</span>
                  <span className="text-gold/40">|</span>
                  <span className={lang === 'ta' ? 'font-semibold' : 'opacity-50'}>த</span>
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
