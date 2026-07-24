'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export default function MusicToggle() {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a soft instrumental track
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0;
    // Using a royalty-free instrumental placeholder
    audio.src = 'https://www.soundjay.com/misc/sounds/bell-ringing-04.mp3';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (playing) {
      // Fade out
      const audio = audioRef.current;
      const fade = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(0, audio.volume - 0.05);
        } else {
          audio.volume = 0;
          audio.pause();
          clearInterval(fade);
        }
      }, 50);
      setPlaying(false);
    } else {
      // Fade in
      const audio = audioRef.current;
      audio.volume = 0;
      try {
        await audio.play();
        const fade = setInterval(() => {
          if (audio.volume < 0.3) {
            audio.volume = Math.min(0.3, audio.volume + 0.02);
          } else {
            clearInterval(fade);
          }
        }, 50);
        setPlaying(true);
      } catch {
        // Autoplay blocked — will try on next interaction
      }
    }
  };

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass flex items-center justify-center luxury-shadow group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={t('music_tooltip')}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, duration: 0.5 }}
    >
      {/* Vinyl animation */}
      {playing && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, rgba(34,47,82,0.1), rgba(212,175,55,0.1), rgba(34,47,82,0.1))',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      )}
      <AnimatePresence mode="wait">
        {playing ? (
          <motion.div
            key="on"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
          >
            <Volume2 className="w-6 h-6 text-royal" />
          </motion.div>
        ) : (
          <motion.div
            key="off"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
          >
            <VolumeX className="w-6 h-6 text-royal" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
