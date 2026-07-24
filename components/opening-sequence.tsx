'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language';

export default function OpeningSequence({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const { t } = useLanguage();

  const handleOpen = () => {
    setVisible(false);
    setTimeout(() => onComplete(), 900);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 100%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating golden particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${2 + (i % 4)}px`,
                height: `${2 + (i % 4)}px`,
                background: 'radial-gradient(circle, rgba(212,175,55,0.8) 0%, rgba(212,175,55,0) 70%)',
                left: `${(i * 3.33) % 100}%`,
                top: `${(i * 7.1) % 100}%`,
              }}
              animate={{ y: [0, -50, 0], x: [0, ((i % 3) - 1) * 30, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: (i % 4) * 0.7, ease: 'easeInOut' }}
            />
          ))}

          {/* Ambient glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Main content */}
          <motion.div
            className="relative flex flex-col items-center gap-10 px-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Monogram */}
            <motion.div
              className="flex items-center gap-4"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-great-vibes), cursive',
                  fontSize: 'clamp(52px, 12vw, 80px)',
                  lineHeight: 1.2,
                  color: '#d4af37',
                }}
              >
                D
              </span>
              <motion.span
                style={{ fontSize: '22px', color: '#c0392b', lineHeight: 1 }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                ❤
              </motion.span>
              <span
                style={{
                  fontFamily: 'var(--font-great-vibes), cursive',
                  fontSize: 'clamp(52px, 12vw, 80px)',
                  lineHeight: 1.2,
                  color: '#d4af37',
                }}
              >
                D
              </span>
            </motion.div>

            {/* Thin gold line */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.7))' }} />
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#d4af37' }} />
              <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.7))' }} />
            </motion.div>

            {/* Names */}
            <motion.div
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-poppins), sans-serif',
                  fontSize: 'clamp(11px, 2vw, 14px)',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,215,160,0.55)',
                }}
              >
                Deepak &amp; Dhanushri
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-poppins), sans-serif',
                  fontSize: 'clamp(10px, 1.8vw, 12px)',
                  letterSpacing: '0.25em',
                  color: 'rgba(245,215,160,0.35)',
                  textTransform: 'uppercase',
                }}
              >
                14 · 11 · 2026
              </p>
            </motion.div>

            {/* CTA button */}
            <motion.button
              onClick={handleOpen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                position: 'relative',
                padding: '14px 48px',
                borderRadius: '999px',
                border: '1px solid rgba(212,175,55,0.45)',
                background: 'rgba(212,175,55,0.08)',
                color: '#d4af37',
                fontFamily: 'var(--font-poppins), sans-serif',
                fontSize: '13px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
            >
              {/* Shimmer sweep */}
              <motion.span
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '60%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)',
                  pointerEvents: 'none',
                }}
                animate={{ left: ['−100%', '200%'] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' }}
              />
              {t('open_invitation')}
            </motion.button>

            {/* Subtle hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: 'rgba(245,215,160,0.3)',
                marginTop: '-20px',
              }}
            >
              {t('tap_to_open')}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
