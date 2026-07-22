import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "В чём разница между брокером и факторинговой компанией?",
    answer: "Факторинговая компания непосредственно финансирует ваши сделки и несёт кредитный риск. Брокер — это независимый консультант, который анализирует вашу ситуацию и подбирает наилучшие условия среди множества факторов. Наши услуги для клиента бесплатны."
  },
  {
    question: "Сколько стоят ваши услуги?",
    answer: "Консультация и подбор предложений — полностью бесплатны для вас. Мы получаем вознаграждение от факторинговой компании только после успешного заключения сделки."
  },
  {
    question: "Как быстро можно получить финансирование?",
    answer: "После получения заявки мы представляем первые предложения в течение 1 рабочего дня. Полное оформление сделки с фактором обычно занимает от 3 до 7 рабочих дней."
  },
  {
    question: "Подходит ли факторинг для малого бизнеса?",
    answer: "Да. Большинство факторинговых компаний работают с бизнесом от 6 месяцев существования. Требования по объёму финансирования начинаются от нескольких сотен тысяч рублей."
  },
  {
    question: "Мы работаем с покупателями из других регионов — это проблема?",
    answer: "Нет. Большинство наших партнёров-факторов работают с дебиторами по всей России, а некоторые — и за рубежом."
  },
  {
    question: "Какие документы нужны для начала?",
    answer: "На первом этапе достаточно заполнить заявку и рассказать о вашей ситуации. Документы запрашивает уже конкретная факторинговая компания на этапе рассмотрения."
  }
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="faq" 
      ref={ref}
      className="py-20 lg:py-28 bg-[#E2EDF3]"
      data-testid="section-faq"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0A3250] mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg lg:text-xl text-[#0A3250]/70 max-w-3xl mx-auto">
            Всё, что нужно знать о работе с нами и факторинге
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 lg:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-[#0A3250]/10 border-b last:border-0">
                <AccordionTrigger className="text-left text-lg font-semibold text-[#0A3250] hover:text-[#6DA4CC] hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#0A3250]/70 text-base leading-relaxed pb-4">
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
