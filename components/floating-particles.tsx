'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function FloatingParticles({ count = 15 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: 3 + Math.random() * 5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 5,
        drift: (Math.random() - 0.5) * 60,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: 'radial-gradient(circle, rgba(212,175,55,0.5) 0%, rgba(212,175,55,0) 70%)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, p.drift, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
