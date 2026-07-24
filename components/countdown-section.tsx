'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language';
import { GoldDivider } from './decorative';

const TARGET_DATE = new Date('2026-11-14T18:30:00+05:30').getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = TARGET_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    done: false,
  };
}

function FlipUnit({ value, label }: { value: number; label: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [flipKey, setFlipKey] = useState(0);

  useEffect(() => {
    if (value !== displayValue) {
      setDisplayValue(value);
      setFlipKey((k) => k + 1);
    }
  }, [value, displayValue]);

  const padded = String(displayValue).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 rounded-2xl overflow-hidden glass-gold flex items-center justify-center"
      >
        {/* Divider line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gold/20 -translate-y-1/2 z-10" />

        {/* Single number with flip animation */}
        <AnimatePresence mode="popLayout">
          <motion.span
            key={flipKey}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-royal"
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{ transformOrigin: 'center', position: 'absolute' }}
          >
            {padded}
          </motion.span>
        </AnimatePresence>

        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ boxShadow: 'inset 0 0 20px rgba(212,175,55,0.1)' }}
        />
      </div>
      <span className="font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const { t } = useLanguage();
  const timeLeft = useMemo(() => getTimeLeft(), []);
  const [time, setTime] = useState(timeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="countdown"
      className="relative min-h-screen flex items-center justify-center py-20 paper-texture overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-body text-xs sm:text-sm tracking-[0.4em] uppercase text-gold-deep mb-4"
        >
          {t('hero_save_the_date')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl text-royal mb-4"
        >
          {t('countdown_title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif-lux text-lg sm:text-xl italic text-muted-foreground mb-12"
        >
          {t('countdown_subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center gap-3 sm:gap-6 md:gap-8 mb-12"
        >
          <FlipUnit value={time.days} label={t('days')} />
          <FlipUnit value={time.hours} label={t('hours')} />
          <FlipUnit value={time.minutes} label={t('minutes')} />
          <FlipUnit value={time.seconds} label={t('seconds')} />
        </motion.div>

        <GoldDivider className="mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Deepak%20%26%20Dhanushri%20-%20Wedding%20Reception&dates=20261114T130000Z/20261114T153000Z&details=Reception%20at%20Aadrika%20Hall%2C%20Coimbatore&location=Aadrika%20Hall%2C%20Annapoorna%2C%20VCS%20Nagar%2C%20Thudiyalur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641029"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-sm font-body tracking-wide border border-gold/30 text-royal hover:bg-gold/10 transition-all duration-300 hover:scale-105"
          >
            {t('add_google_cal')}
          </a>
          <a
            href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20261114T130000Z%0ADTEND:20261114T153000Z%0ASUMMARY:Deepak %26 Dhanushri - Wedding Reception%0ADESCRIPTION:Reception at Aadrika Hall, Coimbatore%0ALOCATION:Aadrika Hall, Coimbatore%0AEND:VEVENT%0AEND:VCALENDAR"
            download="wedding-reception.ics"
            className="px-6 py-3 rounded-full text-sm font-body tracking-wide border border-gold/30 text-royal hover:bg-gold/10 transition-all duration-300 hover:scale-105"
          >
            {t('add_apple_cal')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
