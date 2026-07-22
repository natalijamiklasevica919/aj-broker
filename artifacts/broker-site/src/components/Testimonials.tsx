import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Обратились с проблемой кассового разрыва — нам быстро подобрали два предложения от разных факторов. Выбрали оптимальное. Процесс занял меньше недели.",
    author: "Алексей К.",
    role: "Финансовый директор",
    company: "Торговая компания"
  },
  {
    quote: "Долго не решались на факторинг, думали это сложно. Брокер объяснил всё простым языком и сопроводил на каждом этапе.",
    author: "Марина С.",
    role: "Владелец",
    company: "Производственное предприятие"
  },
  {
    quote: "Нам нужно было финансирование на закупку крупной партии. Нашли фактора с условиями лучше, чем у нашего банка.",
    author: "Дмитрий Н.",
    role: "Коммерческий директор",
    company: "Оптовый поставщик"
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="testimonials"
      ref={ref}
      className="py-20 lg:py-28 bg-white"
      data-testid="section-testimonials"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0A3250] mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-lg lg:text-xl text-[#0A3250]/70 max-w-3xl mx-auto">
            Что говорят компании, которым мы помогли получить финансирование
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-[#E2EDF3]/50 p-8 rounded-2xl relative card-hover border border-[#6DA4CC]/10"
              data-testid={`testimonial-${i}`}
            >
              <Quote className="w-12 h-12 text-[#6DA4CC]/20 absolute top-6 right-6" />
              <div className="mb-6 relative z-10">
                <p className="text-[#0A3250]/80 leading-relaxed italic text-lg">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-auto">
                <h4 className="font-bold text-[#0A3250] text-lg">{t.author}</h4>
                <p className="text-[#6DA4CC] font-medium text-sm">{t.role}</p>
                <p className="text-[#0A3250]/60 text-sm mt-1">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
