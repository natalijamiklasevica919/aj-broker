import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export function StatsStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();
  const { t } = useLanguage();

  const stats = [
    { value: t.stats_1_value, label: t.stats_1_label },
    { value: t.stats_2_value, label: t.stats_2_label },
    { value: t.stats_3_value, label: t.stats_3_label },
    { value: t.stats_4_value, label: t.stats_4_label },
  ];

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <section ref={ref} className="bg-[#0A3250] py-16 lg:py-20 relative z-20 overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A3250] via-[#1a4a6b]/50 to-[#0A3250] opacity-50 pointer-events-none"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1, ease: 'easeOut' } }
              }}
              className="flex flex-col items-center justify-center text-center px-4 pt-10 md:pt-0 first:pt-0"
            >
              <span className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6DA4CC] mb-3 tracking-tighter drop-shadow-sm">
                {stat.value}
              </span>
              <span className="text-sm lg:text-base text-[#E2EDF3]/80 font-bold uppercase tracking-widest max-w-[200px] leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
