'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'en' | 'ta';

type Dict = Record<string, { en: string; ta: string }>;

export const translations: Dict = {
  // Nav
  nav_home: { en: 'Home', ta: 'முகப்பு' },
  nav_countdown: { en: 'Countdown', ta: 'எண்ணுதல்' },
  nav_couple: { en: 'Couple', ta: 'தம்பதியர்' },
  nav_journey: { en: 'Our Journey', ta: 'நமது பயணம்' },
  nav_reception: { en: 'Reception', ta: 'வரவேற்பு' },
  nav_venue: { en: 'Venue', ta: 'இடம்' },
  nav_gallery: { en: 'Gallery', ta: 'படத்தொகுப்பு' },
  nav_rsvp: { en: 'RSVP', ta: 'பதில்' },

  // Opening
  open_invitation: { en: 'Open Invitation', ta: 'அழைப்பைத் திறக்க' },
  enter_celebration: { en: 'Enter the Celebration', ta: 'விழாவிற்குள் நுழைய' },
  tap_to_open: { en: 'Tap to open your invitation', ta: 'உங்கள் அழைப்பைத் திறக்க தட்டவும்' },

  // Hero
  hero_reception_invitation: { en: 'Reception Invitation', ta: 'வரவேற்பு அழைப்பு' },
  hero_save_the_date: { en: 'Save the Date', ta: 'தேதியை சேமிக்க' },
  hero_together_with: { en: 'Together with their families', ta: 'தங்கள் குடும்பங்களுடன்' },
  hero_request_honor: {
    en: 'request the honor of your presence',
    ta: 'உங்கள் வருகையை வரவேற்கின்றோம்',
  },

  // Countdown
  countdown_title: { en: 'Counting Down to Forever', ta: 'நிரந்தரத்திற்கான எண்ணுதல்' },
  countdown_subtitle: {
    en: 'Every moment brings us closer to our celebration',
    ta: 'ஒவ்வொரு நொடியும் விழாவை நெருங்கச் செய்கிறது',
  },
  days: { en: 'Days', ta: 'நாட்கள்' },
  hours: { en: 'Hours', ta: 'மணிநேரம்' },
  minutes: { en: 'Minutes', ta: 'நிமிடங்கள்' },
  seconds: { en: 'Seconds', ta: 'வினாடிகள்' },

  // Couple
  couple_title: { en: 'The Couple', ta: 'தம்பதியர்' },
  couple_groom: { en: 'The Groom', ta: 'மணமகன்' },
  couple_bride: { en: 'The Bride', ta: 'மணமகள்' },
  couple_quote: {
    en: 'Two hearts, one beautiful journey.',
    ta: 'இரண்டு இதயங்கள், ஒரு அழகிய பயணம்.',
  },
  couple_deepak_desc: {
    en: 'A kind soul with a heart full of dreams, ready to embark on life\'s greatest adventure.',
    ta: 'கனவுகள் நிறைந்த இதயம் கொண்ட அன்பான ஆன்மா, வாழ்வின் மிகப்பெரிய சாதனைக்குத் தயாராக.',
  },
  couple_dhanushri_desc: {
    en: 'A graceful spirit with a smile that lights every room, stepping into a new chapter of love.',
    ta: 'ஒவ்வொரு அறையையும் ஒளரச்செய்யும் புன்னகையுடன் கூடிய கமலமான ஆன்மா, அன்பின் புதிய அத்தியாயத்திற்குள் நுழைகிறாள்.',
  },

  // Journey
  journey_title: { en: 'Our Journey', ta: 'நமது பயணம்' },
  journey_subtitle: {
    en: 'Every love story is beautiful, but ours is our favorite',
    ta: 'ஒவ்வொரு காதல் கதையும் அழகானது, ஆனால் நமது கதை நமக்கு மிகவும் பிடித்தது',
  },

  // Reception
  reception_title: { en: 'Wedding Reception', ta: 'திருமண வரவேற்பு' },
  reception_subtitle: {
    en: 'We cordially invite you to celebrate with us',
    ta: 'எங்களுடன் கொண்டாட உங்களை அன்புடன் அழைக்கிறோம்',
  },
  reception_date: { en: '14 November 2026', ta: '14 நவம்பர் 2026' },
  reception_time: { en: '6:30 PM – 8:30 PM', ta: 'மாலை 6:30 – இரவு 8:30' },
  reception_venue: { en: 'Aadrika Hall', ta: 'ஆத்ரிகா ஹால்' },

  // Venue
  venue_title: { en: 'The Venue', ta: 'இடம்' },
  venue_address: {
    en: 'Annapoorna, VCS Nagar, Thudiyalur, Coimbatore, Tamil Nadu – 641029',
    ta: 'அன்னபூர்ணா, விசிஎஸ் நகர், துடியலூர், கோயம்புத்தூர், தமிழ்நாடு – 641029',
  },
  venue_navigate: { en: 'Navigate with Google Maps', ta: 'கூகுள் வரைபடத்தில் செல்ல' },
  venue_open_maps: { en: 'Open in Google Maps', ta: 'வரைபடத்தைத் திறக்க' },

  // Gallery
  gallery_title: { en: 'Cherished Moments', ta: 'நினைவுகள்' },
  gallery_subtitle: {
    en: 'A glimpse of the moments we hold dear',
    ta: 'நாம் அன்புடன் வைத்திருக்கும் நொடிகளின் ஒரு பார்வை',
  },

  // RSVP
  rsvp_title: { en: 'Will You Join Us?', ta: 'நீங்கள்\nகலந்துகொள்வீர்களா?' },
  rsvp_subtitle: {
    en: 'Please let us know if you can make it',
    ta: 'நீங்கள் வர முடியுமா என்பதை தெரிவிக்கவும்',
  },
  rsvp_name: { en: 'Your Name', ta: 'உங்கள் பெயர்' },
  rsvp_phone: { en: 'Phone Number', ta: 'தொலைபேசி எண்' },
  rsvp_guests: { en: 'Number of Guests', ta: 'வரும் நபர்கள்' },
  rsvp_attending: { en: 'Will You Attend?', ta: 'நீங்கள் வருவீர்களா?' },
  rsvp_yes: { en: 'Yes, with pleasure', ta: 'ஆம், மகிழ்ச்சியுடன்' },
  rsvp_no: { en: 'Sadly, cannot', ta: 'இல்லை, முடியாது' },
  rsvp_message: { en: 'Special Message', ta: 'சிறப்பு செய்தி' },
  rsvp_message_placeholder: {
    en: 'Share your blessings or wishes...',
    ta: 'உங்கள் ஆசிகளைப் பகிரவும்...',
  },
  rsvp_submit: { en: 'Send Your Response', ta: 'பதிலை அனுப்பு' },
  rsvp_submitting: { en: 'Sending...', ta: 'அனுப்பப்படுகிறது...' },
  rsvp_success_title: { en: 'Thank You!', ta: 'நன்றி!' },
  rsvp_success_message: {
    en: 'We look forward to celebrating with you.',
    ta: 'உங்களுடன் கொண்டாட ஆவலுடன் காத்திருக்கிறோம்.',
  },
  rsvp_error: { en: 'Something went wrong. Please try again.', ta: 'ஏதோ தவறு நடந்தது. மீண்டும் முயற்சிக்கவும்.' },
  rsvp_required: { en: 'This field is required', ta: 'இந்த புலம் தேவை' },
  rsvp_invalid_phone: { en: 'Please enter a valid phone number', ta: 'சரியான தொலைபேசி எண்ணை உள்ளிடவும்' },

  // Calendar
  add_google_cal: { en: 'Add to Google Calendar', ta: 'கூகுள் நாட்காட்டியில் சேர்க்க' },
  add_apple_cal: { en: 'Add to Apple Calendar', ta: 'ஆபிள் நாட்காட்டியில் சேர்க்க' },

  // Footer
  footer_thank_you: { en: 'Thank You', ta: 'நன்றி' },
  footer_message: {
    en: 'Thank you for being part of our special celebration.',
    ta: 'எங்கள் சிறப்பான கொண்டாட்டத்தின் ஒரு பகுதியாக இருந்தமைக்கு நன்றி.',
  },
  footer_made_with: {
    en: 'Made with love',
    ta: 'அன்புடன் உருவாக்கப்பட்டது',
  },

  // Music
  music_tooltip: { en: 'Toggle music', ta: 'இசையை மாற்று' },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ta' : 'en'));
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang];
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
