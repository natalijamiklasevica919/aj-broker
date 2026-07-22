import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

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
          <div className="container mx-auto px-4 py-2 flex items-center justify-center text-sm md:text-base font-medium relative">
            <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-3 text-center">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Бесплатная консультация
              </span>
              <span className="hidden md:inline text-white/50">•</span>
              <span>Подбор за 1 рабочий день</span>
              <span className="hidden md:inline text-white/50">•</span>
              <span>Работаем по всей России</span>
            </div>
            
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Закрыть"
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
