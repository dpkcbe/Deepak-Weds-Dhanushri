'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/lib/language';
import { GoldDivider, Monogram, FloralCorner } from './decorative';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative py-20 paper-texture overflow-hidden">
      <FloralCorner className="absolute top-8 left-8 w-20 h-20 text-gold/20" />
      <FloralCorner className="absolute top-8 right-8 w-20 h-20 text-gold/20" flip />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-6"
        >
          <Monogram className="text-gold" size={70} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-5xl sm:text-6xl gold-gradient-text mb-6"
          style={{ lineHeight: 1.4, paddingTop: '0.2em', paddingBottom: '0.2em', overflow: 'visible' }}
        >
          {t('footer_thank_you')}
        </motion.h2>

        <GoldDivider className="mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <span className="font-script text-4xl text-royal" style={{ lineHeight: 1.4, paddingTop: '0.1em', paddingBottom: '0.1em' }}>Deepak</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-6 h-6 text-gold" fill="rgba(212,175,55,0.5)" />
          </motion.div>
          <span className="font-script text-4xl text-royal" style={{ lineHeight: 1.4, paddingTop: '0.1em', paddingBottom: '0.1em' }}>Dhanushri</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif-lux text-lg italic text-muted-foreground mb-8"
        >
          {t('footer_message')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-xs font-body tracking-wider text-muted-foreground/60"
        >
          <span>{t('footer_made_with')}</span>
          <Heart className="w-3 h-3 text-gold/50" fill="currentColor" />
          <span>· 14 November 2026</span>
        </motion.div>
      </div>
    </footer>
  );
}
