'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/lib/language';
import { GoldDivider, FloralCorner, PetalDecor } from './decorative';

export default function ReceptionSection() {
  const { t } = useLanguage();

  return (
    <section
      id="reception"
      className="relative min-h-screen flex items-center justify-center py-20 paper-texture overflow-hidden"
    >
      <PetalDecor className="absolute top-10 right-10 w-20 h-20 text-gold/15 animate-float-soft" />
      <PetalDecor className="absolute bottom-10 left-10 w-16 h-16 text-royal/15 animate-float-soft" />

      <div className="relative z-10 max-w-2xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs sm:text-sm tracking-[0.4em] uppercase text-gold-deep mb-4">
            {t('reception_subtitle')}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-royal">
            {t('reception_title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <FloralCorner className="absolute -top-4 -left-4 w-16 h-16 text-gold/40 z-10" />
          <FloralCorner className="absolute -top-4 -right-4 w-16 h-16 text-gold/40 z-10" flip />
          <FloralCorner className="absolute -bottom-4 -left-4 w-16 h-16 text-gold/40 z-10" flip />
          <FloralCorner className="absolute -bottom-4 -right-4 w-16 h-16 text-gold/40 z-10" />

          <div
            className="glass rounded-3xl p-10 sm:p-16 luxury-shadow relative overflow-hidden"
            style={{ boxShadow: '0 0 60px rgba(212,175,55,0.1), 0 20px 60px rgba(34,47,82,0.08)' }}
          >
            {/* Glowing border effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(212,175,55,0.1), transparent 30%, transparent 70%, rgba(212,175,55,0.1))',
              }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative text-center">
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center mb-6"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(212,175,55,0.1)' }}>
                  <Calendar className="w-7 h-7 text-gold-deep" />
                </div>
              </motion.div>

              <h3 className="font-script text-5xl sm:text-6xl gold-gradient-text mb-6"
                style={{ lineHeight: 1.4, paddingTop: '0.1em', paddingBottom: '0.1em', overflow: 'visible' }}
              >
                {t('reception_title')}
              </h3>

              <GoldDivider className="mb-8" />

              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5 text-gold-deep" />
                  <p className="font-heading text-xl sm:text-2xl text-royal">
                    {t('reception_date')}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-gold-deep" />
                  <p className="font-serif-lux text-lg sm:text-xl text-muted-foreground">
                    {t('reception_time')}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-gold-deep" />
                  <p className="font-serif-lux text-lg sm:text-xl text-muted-foreground">
                    {t('reception_venue')}
                  </p>
                </div>
              </div>

              <GoldDivider className="mt-8 mb-6" />

              <p className="font-serif-lux text-base italic text-muted-foreground">
                Annapoorna, Thudiyalur, Coimbatore
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
