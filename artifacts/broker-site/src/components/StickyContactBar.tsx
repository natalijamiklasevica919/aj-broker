import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';

export function StickyContactBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (!contactSection) return;
      
      const scrollPosition = window.scrollY;
      const contactPosition = contactSection.offsetTop - window.innerHeight;
      
      setIsVisible(scrollPosition > 600 && scrollPosition < contactPosition);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A3250]/95 backdrop-blur-xl border-t border-[#6DA4CC]/30 shadow-[0_-10px_40px_rgba(10,50,80,0.3)]"
        >
          <div className="container mx-auto px-4 py-4 lg:py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-extrabold text-lg lg:text-xl tracking-tight">
              {t.sticky_text}
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-[#6DA4CC] hover:bg-[#5a8fb8] text-white font-extrabold w-full sm:w-auto px-10 py-6 h-auto text-lg rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
            >
              {t.sticky_cta}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
