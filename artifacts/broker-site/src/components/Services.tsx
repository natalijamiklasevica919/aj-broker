import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, ShoppingCart, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      title: t.services_1_title,
      description: t.services_1_desc,
    },
    {
      icon: ShoppingCart,
      title: t.services_2_title,
      description: t.services_2_desc,
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0A3250] mb-6 tracking-tight">
            {t.services_title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DA4CC] to-[#0A3250]">{t.services_title_highlight}</span>
          </h2>
          <p className="text-lg lg:text-xl text-[#0A3250]/70 max-w-2xl mx-auto font-medium leading-relaxed">
            {t.services_subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#E2EDF3]/30 rounded-[2rem] p-10 lg:p-14 shadow-sm hover:shadow-2xl border border-transparent hover:border-[#6DA4CC]/30 transition-all duration-500 hover:-translate-y-2 group flex flex-col relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#6DA4CC]/10 rounded-full blur-3xl group-hover:bg-[#6DA4CC]/20 transition-all duration-500 pointer-events-none"></div>
              
              <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-[#6DA4CC] to-[#0A3250] flex items-center justify-center flex-shrink-0 shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#0A3250] mb-6 leading-tight tracking-tight">
                {service.title}
              </h3>
              <p className="text-[#0A3250]/80 leading-relaxed mb-10 flex-grow text-lg font-medium">
                {service.description}
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center text-[#6DA4CC] font-extrabold text-xl group/btn hover:text-[#0A3250] transition-colors mt-auto tracking-tight"
              >
                {t.services_learn_more}
                <ArrowRight className="w-6 h-6 ml-2 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
