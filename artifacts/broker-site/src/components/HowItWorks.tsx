import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Search, Users, Banknote } from 'lucide-react';
import factoringImage from '@assets/connectf_factoring.png';

const steps = [
  {
    icon: FileText,
    title: 'Заявка',
    description: 'Оставляете заявку и рассказываете о вашей ситуации',
  },
  {
    icon: Search,
    title: 'Анализ',
    description: 'Мы изучаем ваши счета, покупателей и потребности',
  },
  {
    icon: Users,
    title: 'Подбор',
    description: 'Отбираем лучшие предложения от факторинговых компаний-партнёров',
  },
  {
    icon: Banknote,
    title: 'Финансирование',
    description: 'Вы получаете деньги на счёт от выбранного фактора',
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-20 lg:py-28 bg-[#E2EDF3]"
      data-testid="section-how-it-works"
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
            data-testid="text-how-it-works-title"
          >
            Как мы работаем
          </h2>
          <p
            className="text-lg lg:text-xl text-[#0A3250]/70 max-w-3xl mx-auto"
            data-testid="text-how-it-works-subtitle"
          >
            Простой процесс — от заявки до финансирования
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex gap-6 items-start"
                data-testid={`card-step-${index}`}
              >
                <div className="w-16 h-16 rounded-lg bg-[#6DA4CC] flex items-center justify-center flex-shrink-0 shadow-md">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-[#0A3250] mb-2"
                    data-testid={`text-step-title-${index}`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#0A3250]/70 leading-relaxed"
                    data-testid={`text-step-description-${index}`}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-lg shadow-xl p-4 lg:p-8">
              <img
                src={factoringImage}
                alt="Схема факторинга"
                className="w-full h-auto rounded"
                data-testid="img-factoring-scheme"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
