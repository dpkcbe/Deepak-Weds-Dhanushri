'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, Heart, Loader2, Send } from 'lucide-react';
import { useLanguage } from '@/lib/language';
import { supabase } from '@/lib/supabase-client';
import { GoldDivider, FloralCorner, PetalDecor } from './decorative';

const schema = z.object({
  name: z.string().min(1, 'required'),
  phone: z.string().min(10, 'invalid_phone'),
  guests: z.number().min(1).max(20),
  attending: z.enum(['yes', 'no']),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function RsvpSection() {
  const { t, lang } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { guests: 1, attending: 'yes' },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError(false);
    try {
      const { error: dbError } = await supabase.from('rsvp').insert({
        name: data.name,
        phone: data.phone,
        guests: data.guests,
        attending: data.attending,
        message: data.message || null,
      });

      if (dbError) throw dbError;

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 6000);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/60 border border-gold/20 text-royal placeholder:text-muted-foreground/50 font-body text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/15 transition-all';

  return (
    <section
      id="rsvp"
      className="relative min-h-screen flex items-center justify-center py-20 paper-texture overflow-hidden"
    >
      <PetalDecor className="absolute top-10 left-10 w-16 h-16 text-gold/15 animate-float-soft" />
      <PetalDecor className="absolute bottom-10 right-10 w-20 h-20 text-royal/15 animate-float-soft" />

      <div className="relative z-10 max-w-xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs sm:text-sm tracking-[0.4em] uppercase text-gold-deep mb-4">
            RSVP
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-royal mb-4 flex flex-col items-center justify-center text-center w-full">
            {t('rsvp_title').split('\n').map((line, i) => (
              <span key={i} className="block text-center w-full">{line}</span>
            ))}
          </h2>
          <p className="font-serif-lux text-lg italic text-muted-foreground">
            {t('rsvp_subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <FloralCorner className="absolute -top-4 -left-4 w-12 h-12 text-gold/30 z-10" />
          <FloralCorner className="absolute -bottom-4 -right-4 w-12 h-12 text-gold/30 z-10" flip />

          <div className="glass rounded-3xl p-8 sm:p-10 luxury-shadow">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  {/* Confetti */}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: i % 2 === 0 ? 'rgba(212,175,55,0.6)' : 'rgba(34,47,82,0.4)',
                        left: '50%',
                        top: '50%',
                      }}
                      initial={{ x: 0, y: 0, opacity: 1 }}
                      animate={{
                        x: (Math.random() - 0.5) * 400,
                        y: (Math.random() - 0.5) * 400 - 100,
                        opacity: [1, 1, 0],
                        rotate: Math.random() * 360,
                      }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                    />
                  ))}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))',
                      border: '2px solid rgba(212,175,55,0.4)',
                    }}
                  >
                    <Check className="w-10 h-10 text-gold-deep" />
                  </motion.div>
                  <h3 className="font-heading text-3xl text-royal mb-3">
                    {t('rsvp_success_title')}
                  </h3>
                  <p className="font-serif-lux text-lg italic text-muted-foreground">
                    {t('rsvp_success_message')}
                  </p>
                  <Heart className="w-6 h-6 text-gold mt-4" fill="rgba(212,175,55,0.3)" />
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-body tracking-wider uppercase text-royal/70 mb-2">
                      {t('rsvp_name')}
                    </label>
                    <input
                      {...register('name')}
                      className={inputClass}
                      placeholder={t('rsvp_name')}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive mt-1">{t('rsvp_required')}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-body tracking-wider uppercase text-royal/70 mb-2">
                      {t('rsvp_phone')}
                    </label>
                    <input
                      {...register('phone')}
                      className={inputClass}
                      placeholder="+91 98765 43210"
                      type="tel"
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive mt-1">{t('rsvp_invalid_phone')}</p>
                    )}
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-xs font-body tracking-wider uppercase text-royal/70 mb-2">
                      {t('rsvp_guests')}
                    </label>
                    <input
                      {...register('guests', { valueAsNumber: true })}
                      type="number"
                      min={1}
                      max={20}
                      className={inputClass}
                    />
                  </div>

                  {/* Attending */}
                  <div>
                    <label className="block text-xs font-body tracking-wider uppercase text-royal/70 mb-2">
                      {t('rsvp_attending')}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          value="yes"
                          {...register('attending')}
                          className="peer sr-only"
                        />
                        <div className="px-4 py-3 rounded-xl border border-gold/20 text-center text-sm font-body text-royal peer-checked:border-gold peer-checked:bg-gold/10 transition-all">
                          {t('rsvp_yes')}
                        </div>
                      </label>
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          value="no"
                          {...register('attending')}
                          className="peer sr-only"
                        />
                        <div className="px-4 py-3 rounded-xl border border-gold/20 text-center text-sm font-body text-royal peer-checked:border-gold peer-checked:bg-gold/10 transition-all">
                          {t('rsvp_no')}
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-body tracking-wider uppercase text-royal/70 mb-2">
                      {t('rsvp_message')}
                    </label>
                    <textarea
                      {...register('message')}
                      className={`${inputClass} resize-none`}
                      rows={3}
                      placeholder={t('rsvp_message_placeholder')}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-destructive text-center">{t('rsvp_error')}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-body tracking-[0.15em] uppercase text-ivory transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, hsl(222 56% 22%) 0%, hsl(222 40% 35%) 100%)',
                      boxShadow: '0 10px 40px rgba(34,47,82,0.25)',
                    }}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t('rsvp_submitting')}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t('rsvp_submit')}
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <GoldDivider className="mt-12" />
      </div>
    </section>
  );
}
