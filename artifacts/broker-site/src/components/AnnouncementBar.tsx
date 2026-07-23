import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-[#6DA4CC] text-white relative z-[60] overflow-hidden"
          data-testid="announcement-bar"
        >
          <div className="container mx-auto px-4 py-2.5 flex items-center justify-center text-sm md:text-base font-semibold relative">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-center tracking-wide">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                {t.announcement_free}
              </span>
              <span className="hidden md:inline text-white/50">•</span>
              <span>{t.announcement_speed}</span>
              <span className="hidden md:inline text-white/50">•</span>
              <span>{t.announcement_geo}</span>
            </div>
            
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 p-1.5 hover:bg-white/20 rounded-full transition-colors"
              aria-label={t.announcement_close}
              data-testid="button-close-announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
