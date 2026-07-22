import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

const stats = [
  { value: '500+', label: 'обработанных заявок' },
  { value: '30+', label: 'партнёрских факторинговых компаний' },
  { value: '1 день', label: 'срок подбора предложения' },
  { value: '0 ₽', label: 'стоимость консультации' },
];

export function StatsStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={ref} 
      className="bg-[#0A3250] py-12 lg:py-16 relative z-20"
      data-testid="section-stats-strip"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  },
                },
              }}
              className="flex flex-col items-center justify-center text-center px-4 pt-8 md:pt-0 first:pt-0"
              data-testid={`stat-item-${index}`}
            >
              <span className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm lg:text-base text-white/70 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
