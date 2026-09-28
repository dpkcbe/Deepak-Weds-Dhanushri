'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language';
import { GoldDivider, FloralCorner, PetalDecor } from './decorative';

export default function CoupleSection() {
  const { t } = useLanguage();

  return (
    <section
      id="couple"
      className="relative min-h-screen flex items-center justify-center py-20 paper-texture overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(34,47,82,0.03) 0%, transparent 70%)',
        }}
      />

      <PetalDecor className="absolute top-20 left-10 w-16 h-16 text-royal/20 animate-float-soft" />
      <PetalDecor className="absolute bottom-20 right-10 w-20 h-20 text-gold/20 animate-float-soft" />

      <div className="relative z-10 max-w-4xl w-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <p className="font-body text-xs sm:text-sm tracking-[0.4em] uppercase text-gold-deep mb-4">
            {t('couple_title')}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-royal">
            {t('couple_title')}
          </h2>
        </motion.div>

        {/* Single Couple Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative max-w-lg mx-auto mb-12 group"
        >
          <div
            className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.3), transparent)' }}
          />
          <div
            className="relative w-full max-h-[520px] rounded-3xl overflow-hidden border-2 luxury-shadow flex items-center justify-center bg-royal/5"
            style={{ borderColor: 'rgba(212,175,55,0.4)' }}
          >
            {/* Ambient blurred photo fill */}
            <img
              src="couple.jpg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.dataset.retried) {
                  target.dataset.retried = 'true';
                  target.src = '/Deepak-Weds-Dhanushri/couple.jpg';
                }
              }}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110"
              aria-hidden="true"
            />
            {/* Full uncropped image */}
            <img
              src="couple.jpg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.dataset.retried) {
                  target.dataset.retried = 'true';
                  target.src = '/Deepak-Weds-Dhanushri/couple.jpg';
                }
              }}
              alt="Deepak and Dhanushri"
              className="relative z-10 max-h-[520px] w-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background: 'linear-gradient(180deg, transparent 70%, rgba(34,47,82,0.15) 100%)',
              }}
            />
          </div>
          <FloralCorner className="absolute -bottom-3 -right-3 w-20 h-20 text-gold/50" />
          <FloralCorner className="absolute -top-3 -left-3 w-20 h-20 text-gold/50" flip />
        </motion.div>

        {/* Couple Names & Descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3
            className="font-script text-5xl sm:text-6xl gold-gradient-text mb-6"
            style={{ lineHeight: 1.4, paddingTop: '0.1em', paddingBottom: '0.1em', overflow: 'visible' }}
          >
            Deepak &amp; Dhanushri
          </h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-center mb-10">
            <div className="glass p-6 rounded-2xl">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-deep mb-2">
                {t('couple_groom')} — Deepak
              </p>
              <p className="font-serif-lux text-base sm:text-lg text-muted-foreground italic">
                {t('couple_deepak_desc')}
              </p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-deep mb-2">
                {t('couple_bride')} — Dhanushri
              </p>
              <p className="font-serif-lux text-base sm:text-lg text-muted-foreground italic">
                {t('couple_dhanushri_desc')}
              </p>
            </div>
          </div>

          <GoldDivider className="mb-8" />
          <blockquote
            className="font-script text-3xl sm:text-4xl text-royal mb-2"
            style={{ lineHeight: 1.4, paddingTop: '0.1em', paddingBottom: '0.1em' }}
          >
            {t('couple_quote')}
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

