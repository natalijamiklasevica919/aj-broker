import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, TrendingUp, Shield, Target, Sliders, Scale, Award } from 'lucide-react';

const benefits = [
  {
    id: '01',
    icon: Zap,
    title: 'Мгновенная ликвидность',
    description: 'Быстрый доступ к средствам вместо ожидания оплаты от покупателей',
  },
  {
    id: '02',
    icon: TrendingUp,
    title: 'Улучшение денежного потока',
    description: 'Легко покрывайте текущие расходы и инвестируйте в развитие',
  },
  {
    id: '03',
    icon: Shield,
    title: 'Снижение рисков',
    description: 'Анализируем финансовое состояние ваших покупателей',
  },
  {
    id: '04',
    icon: Target,
    title: 'Фокус на бизнесе',
    description: 'Занимайтесь развитием, а не выбиванием долгов',
  },
  {
    id: '05',
    icon: Sliders,
    title: 'Гибкие решения',
    description: 'Подбираем условия под конкретные потребности вашего бизнеса',
  },
  {
    id: '06',
    icon: Scale,
    title: 'Нейтральность',
    description: 'Мы не связаны ни с одной факторинговой компанией — выбираем лучшее для вас',
  },
  {
    id: '07',
    icon: Award,
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
          <p className="text-lg lg:text-xl text-[#0A3250]/70 max-w-3xl mx-auto">
            Преимущества работы с профессиональным брокером
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            // Make the first and last cards wide
            const isWide = index === 0 || index === benefits.length - 1;
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#E2EDF3]/30 border border-[#6DA4CC]/20 rounded-3xl p-8 card-hover relative overflow-hidden group ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
                data-testid={`card-benefit-${index}`}
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <benefit.icon className="w-32 h-32 text-[#6DA4CC]" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#6DA4CC]/10 flex items-center justify-center mb-6 border border-[#6DA4CC]/20">
                    <benefit.icon className="w-7 h-7 text-[#6DA4CC]" />
                  </div>
                  
                  <h3
                    className="text-2xl font-bold text-[#0A3250] mb-3"
                    data-testid={`text-benefit-title-${index}`}
                  >
                    {benefit.title}
                  </h3>
                  
                  <p
                    className="text-[#0A3250]/70 text-lg leading-relaxed mt-auto"
                    data-testid={`text-benefit-description-${index}`}
                  >
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
