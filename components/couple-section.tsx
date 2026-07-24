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

      <div className="relative z-10 max-w-5xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs sm:text-sm tracking-[0.4em] uppercase text-gold-deep mb-4">
            {t('couple_title')}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-royal">
            {t('couple_title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative mb-8">
              <div
                className="absolute -inset-3 rounded-full opacity-30 blur-2xl"
                style={{ background: 'radial-gradient(circle, rgba(34,47,82,0.3), transparent)' }}
              />
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2"
                style={{ borderColor: 'rgba(212,175,55,0.4)' }}
              >
                <img
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Deepak R"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 50%, rgba(34,47,82,0.15) 100%)',
                  }}
                />
              </div>
              <FloralCorner className="absolute -bottom-2 -right-2 w-16 h-16 text-gold/50" />
            </div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-deep mb-2">
              {t('couple_groom')}
            </p>
            <h3 className="font-script text-5xl sm:text-6xl gold-gradient-text mb-3"
              style={{ lineHeight: 1.4, paddingTop: '0.1em', paddingBottom: '0.1em', overflow: 'visible' }}
            >
              Deepak
            </h3>
            <p className="font-serif-lux text-base sm:text-lg text-muted-foreground italic max-w-xs">
              {t('couple_deepak_desc')}
            </p>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative mb-8">
              <div
                className="absolute -inset-3 rounded-full opacity-30 blur-2xl"
                style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.3), transparent)' }}
              />
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2"
                style={{ borderColor: 'rgba(212,175,55,0.4)' }}
              >
                <img
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dhanushri V S"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 50%, rgba(212,175,55,0.15) 100%)',
                  }}
                />
              </div>
              <FloralCorner className="absolute -bottom-2 -left-2 w-16 h-16 text-gold/50" flip />
            </div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-deep mb-2">
              {t('couple_bride')}
            </p>
            <h3 className="font-script text-5xl sm:text-6xl gold-gradient-text mb-3"
              style={{ lineHeight: 1.4, paddingTop: '0.1em', paddingBottom: '0.1em', overflow: 'visible' }}
            >
              Dhanushri
            </h3>
            <p className="font-serif-lux text-base sm:text-lg text-muted-foreground italic max-w-xs">
              {t('couple_dhanushri_desc')}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <GoldDivider className="mb-8" />
          <blockquote className="font-script text-3xl sm:text-4xl text-royal mb-2"
            style={{ lineHeight: 1.4, paddingTop: '0.1em', paddingBottom: '0.1em' }}
          >
            {t('couple_quote')}
          </blockquote>
          <div className="flex justify-center gap-8 mt-4">
            <span className="font-script text-2xl text-gold-deep opacity-70"
              style={{ lineHeight: 1.4, paddingTop: '0.1em', paddingBottom: '0.1em' }}
            >
              Deepak
            </span>
            <span className="text-gold text-xl self-center">❤</span>
            <span className="font-script text-2xl text-gold-deep opacity-70"
              style={{ lineHeight: 1.4, paddingTop: '0.1em', paddingBottom: '0.1em' }}
            >
              Dhanushri
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
