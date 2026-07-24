'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language';
import FloatingParticles from './floating-particles';
import { GoldFlourish, FloralCorner, Monogram } from './decorative';

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToContent = () => {
    document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center paper-texture overflow-hidden"
    >
      {/* Background floral watercolor */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] opacity-[0.08]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(34,47,82,0.3) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.06]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(212,175,55,0.4) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Floral corners */}
      <FloralCorner className="absolute top-8 left-8 w-24 h-24 md:w-40 md:h-40" />
      <FloralCorner className="absolute top-8 right-8 w-24 h-24 md:w-40 md:h-40" flip />
      <FloralCorner className="absolute bottom-8 left-8 w-24 h-24 md:w-40 md:h-40" flip />
      <FloralCorner className="absolute bottom-8 right-8 w-24 h-24 md:w-40 md:h-40" />

      <FloatingParticles count={20} />

      {/* Soft light rays */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(212,175,55,0.04) 60deg, transparent 120deg, rgba(34,47,82,0.03) 180deg, transparent 240deg, rgba(212,175,55,0.04) 300deg, transparent 360deg)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="flex justify-center mb-6"
        >
          <Monogram className="text-gold" size={90} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-body text-xs sm:text-sm tracking-[0.4em] uppercase text-royal/70 mb-6"
        >
          {t('hero_together_with')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif-lux text-base sm:text-lg italic text-muted-foreground mb-4"
        >
          {t('hero_request_honor')}
        </motion.p>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex flex-col items-center gap-2 my-8"
        >
          <h1
            className="font-script text-6xl sm:text-7xl md:text-8xl gold-gradient-text"
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(212,175,55,0.15))',
              lineHeight: 1.3,
              paddingTop: '0.15em',
              paddingBottom: '0.15em',
              overflow: 'visible',
            }}
          >
            Deepak
          </h1>
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="font-script text-4xl sm:text-5xl text-gold-deep"
            style={{ lineHeight: 1.4, paddingTop: '0.1em', paddingBottom: '0.1em' }}
          >
            &amp;
          </motion.div>
          <h1
            className="font-script text-6xl sm:text-7xl md:text-8xl gold-gradient-text"
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(212,175,55,0.15))',
              lineHeight: 1.3,
              paddingTop: '0.15em',
              paddingBottom: '0.15em',
              overflow: 'visible',
            }}
          >
            Dhanushri
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center mb-6"
        >
          <GoldFlourish className="w-48 h-12" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-heading text-xl sm:text-2xl text-royal tracking-wide mb-2"
        >
          {t('hero_reception_invitation')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-serif-lux text-lg sm:text-xl text-muted-foreground mb-1"
        >
          14 November 2026
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-serif-lux text-base sm:text-lg text-muted-foreground mb-10"
        >
          Aadrika Hall, Coimbatore
        </motion.p>

        {/* Open Invitation button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          onClick={scrollToContent}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group relative px-10 py-4 rounded-full overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, hsl(222 56% 22%) 0%, hsl(222 40% 35%) 100%)',
            boxShadow: '0 10px 40px rgba(34,47,82,0.3)',
          }}
        >
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.3) 0%, transparent 100%)',
            }}
          />
          <span className="relative font-body text-sm tracking-[0.2em] uppercase text-ivory">
            {t('open_invitation')}
          </span>
        </motion.button>

      </div>
    </section>
  );
}
