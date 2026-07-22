import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, ShoppingCart, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Классический факторинг',
    description:
      'Вы выставляете счёт покупателю за товары или услуги. Мы находим факторинговую компанию, которая выплатит вам до 90% суммы счёта немедленно — без долгого ожидания оплаты. Остаток вы получаете после того, как ваш покупатель рассчитается с фактором.',
  },
  {
    icon: ShoppingCart,
    title: 'Закупочный факторинг',
    description:
      'Вам нужно закупить товар, но нет возможности оплатить сразу? Мы находим партнёра, который оплатит поставщику за вас. Вы получаете товар немедленно и рассчитываетесь через 90 дней — когда реализуете продукцию.',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 lg:py-28 bg-[#E2EDF3]"
      data-testid="section-services"
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
            data-testid="text-services-title"
          >
            Виды факторинга
          </h2>
          <p
            className="text-lg lg:text-xl text-[#0A3250]/70 max-w-3xl mx-auto"
            data-testid="text-services-subtitle"
          >
            Мы подбираем для вас оптимальное решение среди проверенных партнёров
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow"
              data-testid={`card-service-${index}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-[#6DA4CC]/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-7 h-7 text-[#6DA4CC]" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#0A3250] mt-2"
                  data-testid={`text-service-title-${index}`}
                >
                  {service.title}
                </h3>
              </div>
              <p
                className="text-[#0A3250]/70 leading-relaxed mb-4"
                data-testid={`text-service-description-${index}`}
              >
                {service.description}
              </p>
              <button
                className="text-[#6DA4CC] font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                data-testid={`button-learn-more-${index}`}
              >
                Узнать подробнее
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
