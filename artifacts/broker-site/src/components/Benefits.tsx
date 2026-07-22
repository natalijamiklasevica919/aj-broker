import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  {
    number: '01',
    title: 'Мгновенная ликвидность',
    description: 'Быстрый доступ к средствам вместо ожидания оплаты от покупателей',
  },
  {
    number: '02',
    title: 'Улучшение денежного потока',
    description: 'Легко покрывайте текущие расходы и инвестируйте в развитие',
  },
  {
    number: '03',
    title: 'Снижение рисков',
    description: 'Анализируем финансовое состояние ваших покупателей',
  },
  {
    number: '04',
    title: 'Фокус на бизнесе',
    description: 'Занимайтесь развитием, а не выбиванием долгов',
  },
  {
    number: '05',
    title: 'Гибкие решения',
    description: 'Подбираем условия под конкретные потребности вашего бизнеса',
  },
  {
    number: '06',
    title: 'Нейтральность',
    description: 'Мы не связаны ни с одной факторинговой компанией — выбираем лучшее для вас',
  },
  {
    number: '07',
    title: 'Конкурентоспособность',
    description: 'Немедленный доступ к оборотному капиталу позволяет предлагать лучшие условия клиентам',
  },
];

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="benefits"
      ref={ref}
      className="py-20 lg:py-28 bg-white"
      data-testid="section-benefits"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl lg:text-5xl font-bold text-[#0A3250] mb-4"
            data-testid="text-benefits-title"
          >
            Почему выбирают нас
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              data-testid={`card-benefit-${index}`}
            >
              <div className="relative">
                <span
                  className="text-6xl font-bold text-[#6DA4CC]/20 group-hover:text-[#6DA4CC]/30 transition-colors"
                  data-testid={`text-benefit-number-${index}`}
                >
                  {benefit.number}
                </span>
                <h3
                  className="text-xl font-bold text-[#0A3250] mt-4 mb-3"
                  data-testid={`text-benefit-title-${index}`}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-[#0A3250]/70 leading-relaxed"
                  data-testid={`text-benefit-description-${index}`}
                >
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
