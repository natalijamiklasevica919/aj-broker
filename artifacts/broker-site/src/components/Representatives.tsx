import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function Representatives() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const representatives = [
    { region: 'Latvija', name: t.rep_name_placeholder, phone: '[+371 ____ ____]', email: '[epasts@domens.lv]' },
    { region: 'Francija', name: t.rep_name_placeholder, phone: '[+33 __ __ __ __ __]', email: '[email@domaine.fr]' },
    { region: 'Vācija', name: t.rep_name_placeholder, phone: '[+49 ___ _______]', email: '[email@domain.de]' },
    { region: 'Igaunija', name: t.rep_name_placeholder, phone: '[+372 ____ ____]', email: '[email@domeen.ee]' },
  ];

  return (
    <section id="representatives" ref={ref} className="py-24 lg:py-32 bg-white border-t border-[#E2EDF3]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0A3250] mb-6 tracking-tight">
            {t.rep_title}
          </h2>
          <p className="text-lg lg:text-xl text-[#0A3250]/70 max-w-2xl mx-auto font-medium">
            {t.rep_subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {representatives.map((rep, index) => (
            <motion.div
              key={rep.region}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#E2EDF3]/30 rounded-[2rem] p-8 lg:p-12 border border-[#6DA4CC]/10 hover:border-[#6DA4CC]/30 hover:bg-[#E2EDF3]/60 transition-all duration-500 hover:shadow-xl group"
            >
              <div className="flex items-center gap-5 mb-8 pb-8 border-b border-[#0A3250]/10">
                <div className="w-14 h-14 rounded-2xl bg-[#0A3250] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-[#6DA4CC] transition-colors duration-500">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0A3250] tracking-tight">{rep.region}</h3>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <span className="text-[#0A3250] font-extrabold text-lg">{rep.name}</span>
                </div>
                <div className="flex items-center gap-4 group/item">
                  <Phone className="w-5 h-5 text-[#6DA4CC] group-hover/item:text-[#0A3250] transition-colors" />
                  <span className="text-[#0A3250]/80 font-semibold text-lg">{rep.phone}</span>
                </div>
                <div className="flex items-center gap-4 group/item">
                  <Mail className="w-5 h-5 text-[#6DA4CC] group-hover/item:text-[#0A3250] transition-colors" />
                  <span className="text-[#0A3250]/80 font-semibold text-lg">{rep.email}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
