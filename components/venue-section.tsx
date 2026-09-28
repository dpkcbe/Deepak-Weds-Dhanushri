'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '@/lib/language';
import { GoldDivider } from './decorative';

const MAPS_LINK = 'https://maps.app.goo.gl/r86Ybki1eBwZSSpH9';
const MAPS_EMBED_SRC =
  'https://www.google.com/maps?q=Aadrika+Hall+Annapoorna+VCS+Nagar+Thudiyalur+Coimbatore&output=embed';

export default function VenueSection() {
  const { t } = useLanguage();

  return (
    <section
      id="venue"
      className="relative min-h-screen flex items-center justify-center py-20 paper-texture overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs sm:text-sm tracking-[0.4em] uppercase text-gold-deep mb-4">
            {t('venue_title')}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-royal mb-4">
            {t('venue_title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 items-stretch"
        >
          {/* Address card */}
          <div className="glass rounded-2xl p-8 luxury-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(212,175,55,0.1)' }}>
                  <MapPin className="w-6 h-6 text-gold-deep" />
                </div>
                <h3 className="font-heading text-2xl text-royal">
                  {t('reception_venue')}
                </h3>
              </div>

              <GoldDivider className="mb-6" />

              <div className="space-y-2 font-serif-lux text-lg text-muted-foreground">
                <p className="font-heading text-xl text-royal">Annapoorna</p>
                <p>VCS Nagar</p>
                <p>Thudiyalur</p>
                <p>Coimbatore</p>
                <p>Tamil Nadu – 641029</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-body tracking-wide text-ivory transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, hsl(222 56% 22%) 0%, hsl(222 40% 35%) 100%)',
                  boxShadow: '0 8px 30px rgba(34,47,82,0.25)',
                }}
              >
                <Navigation className="w-4 h-4" />
                {t('venue_navigate')}
              </a>

            </div>
          </div>

          {/* Map card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden luxury-shadow min-h-[300px]"
          >
            <iframe
              title="Venue Location"
              src={MAPS_EMBED_SRC}
              className="w-full h-full min-h-[300px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: 'grayscale(0.2) sepia(0.1) contrast(1.05)' }}
            />
            {/* Animated location pin overlay */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(212,175,55,0.3), transparent)',
                    animation: 'glow-pulse 2s infinite',
                  }}
                />
                <MapPin
                  className="w-10 h-10 text-gold-deep relative"
                  fill="rgba(212,175,55,0.3)"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
