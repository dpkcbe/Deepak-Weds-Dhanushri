'use client';

import { motion } from 'framer-motion';

export function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold-deep" />
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="text-gold"
        initial={{ rotate: -90, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <path
          d="M20 4 L24 16 L36 20 L24 24 L20 36 L16 24 L4 20 L16 16 Z"
          fill="currentColor"
          opacity="0.9"
        />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
      </motion.svg>
      <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold-deep" />
    </div>
  );
}

export function FloralCorner({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      className={`text-gold/40 ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <path
        d="M10 10 C 20 20, 30 25, 40 22 C 35 30, 38 40, 30 42 C 40 45, 48 38, 50 28 C 52 40, 48 52, 38 55 C 50 55, 60 48, 62 35 C 58 50, 50 62, 35 65 C 50 62, 65 55, 72 40 C 65 58, 50 72, 28 72 C 45 70, 62 62, 70 48 C 60 65, 42 75, 18 75 C 35 72, 50 65, 58 52 C 45 68, 25 78, 8 75 C 25 72, 40 65, 48 52 C 35 65, 15 70, 5 65 C 18 62, 28 55, 32 45 C 20 55, 8 52, 5 42 C 15 45, 22 40, 25 30 C 15 35, 8 30, 10 10 Z"
        fill="currentColor"
        opacity="0.5"
      />
      <circle cx="22" cy="22" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="45" cy="35" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function GoldFlourish({ className = '' }: { className?: string }) {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 200 60"
      fill="none"
      className={`text-gold ${className}`}
    >
      <path
        d="M100 30 C 120 10, 140 10, 150 25 C 155 15, 170 15, 175 28 M100 30 C 80 10, 60 10, 50 25 C 45 15, 30 15, 25 28"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="100" cy="30" r="4" fill="currentColor" />
      <circle cx="150" cy="25" r="2" fill="currentColor" />
      <circle cx="50" cy="25" r="2" fill="currentColor" />
      <circle cx="175" cy="28" r="2.5" fill="currentColor" />
      <circle cx="25" cy="28" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function Monogram({ className = '', size = 80 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-great-vibes), cursive"
        fontSize="28"
        fill="currentColor"
      >
        D &amp; D
      </text>
    </svg>
  );
}

export function PetalDecor({ className = '' }: { className?: string }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className={className}>
      <g opacity="0.6">
        <ellipse cx="30" cy="20" rx="6" ry="12" fill="currentColor" opacity="0.3" />
        <ellipse cx="40" cy="30" rx="6" ry="12" fill="currentColor" opacity="0.3" transform="rotate(72 40 30)" />
        <ellipse cx="30" cy="40" rx="6" ry="12" fill="currentColor" opacity="0.3" transform="rotate(144 30 40)" />
        <ellipse cx="20" cy="30" rx="6" ry="12" fill="currentColor" opacity="0.3" transform="rotate(216 20 30)" />
        <ellipse cx="30" cy="30" rx="6" ry="12" fill="currentColor" opacity="0.3" transform="rotate(288 30 30)" />
        <circle cx="30" cy="30" r="4" fill="currentColor" opacity="0.5" />
      </g>
    </svg>
  );
}
