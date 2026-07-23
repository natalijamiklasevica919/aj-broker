import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/i18n/LanguageContext';

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const faqs = [
    { question: t.faq_1_q, answer: t.faq_1_a },
    { question: t.faq_2_q, answer: t.faq_2_a },
    { question: t.faq_3_q, answer: t.faq_3_a },
    { question: t.faq_4_q, answer: t.faq_4_a },
    { question: t.faq_5_q, answer: t.faq_5_a },
    { question: t.faq_6_q, answer: t.faq_6_a }
  ];

  return (
    <section id="faq" ref={ref} className="py-24 lg:py-32 bg-[#E2EDF3] relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0A3250] mb-6 tracking-tight">
            {t.faq_title}
          </h2>
          <p className="text-lg lg:text-xl text-[#0A3250]/70 max-w-2xl mx-auto font-medium">
            {t.faq_subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-[2rem] shadow-xl p-8 lg:p-12 border border-white/50"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-[#0A3250]/10 border-b last:border-0">
                <AccordionTrigger className="text-left text-lg lg:text-xl font-extrabold text-[#0A3250] hover:text-[#6DA4CC] hover:no-underline py-6 data-[state=open]:text-[#6DA4CC] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#0A3250]/70 text-lg leading-relaxed pb-6 font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
