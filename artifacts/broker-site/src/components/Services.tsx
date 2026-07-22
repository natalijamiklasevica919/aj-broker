import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, ShoppingCart, ArrowRight } from 'lucide-react';

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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 lg:py-28 bg-[#E2EDF3] relative"
      data-testid="section-services"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg card-hover border border-transparent hover:border-[#6DA4CC]/50 group relative overflow-hidden flex flex-col"
              data-testid={`card-service-${index}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6DA4CC]/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="flex items-start gap-5 mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6DA4CC] to-[#0A3250] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#0A3250] mt-2 leading-tight"
                  data-testid={`text-service-title-${index}`}
                >
                  {service.title}
                </h3>
              </div>
              <p
                className="text-[#0A3250]/70 leading-relaxed mb-8 flex-grow text-lg"
                data-testid={`text-service-description-${index}`}
              >
                {service.description}
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center text-[#6DA4CC] font-bold text-lg group/btn hover:text-[#0A3250] transition-colors mt-auto"
                data-testid={`button-learn-more-${index}`}
              >
                Узнать подробнее
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
