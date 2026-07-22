import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const representatives = [
  {
    region: 'Москва и МО',
    name: '[Имя представителя]',
    phone: '[+7 (___) ___-__-__]',
    email: '[email@domain.com]',
  },
  {
    region: 'Санкт-Петербург и ЛО',
    name: '[Имя представителя]',
    phone: '[+7 (___) ___-__-__]',
    email: '[email@domain.com]',
  },
  {
    region: 'Центральный ФО',
    name: '[Имя представителя]',
    phone: '[+7 (___) ___-__-__]',
    email: '[email@domain.com]',
  },
  {
    region: 'Юг России',
    name: '[Имя представителя]',
    phone: '[+7 (___) ___-__-__]',
    email: '[email@domain.com]',
  },
];

export function Representatives() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="representatives"
      ref={ref}
      className="py-20 lg:py-28 bg-white"
      data-testid="section-representatives"
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
            data-testid="text-representatives-title"
          >
            Региональные представители
          </h2>
          <p
            className="text-lg lg:text-xl text-[#0A3250]/70 max-w-3xl mx-auto"
            data-testid="text-representatives-subtitle"
          >
            Найдите представителя в вашем регионе
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {representatives.map((rep, index) => (
            <motion.div
              key={rep.region}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#E2EDF3] rounded-lg p-8 border border-[#6DA4CC]/20"
              data-testid={`card-representative-${index}`}
            >
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#6DA4CC] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#0A3250]"
                  data-testid={`text-representative-region-${index}`}
                >
                  {rep.region}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span
                    className="text-[#0A3250]/70"
                    data-testid={`text-representative-name-${index}`}
                  >
                    {rep.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#6DA4CC]" />
                  <span
                    className="text-[#0A3250]/70"
                    data-testid={`text-representative-phone-${index}`}
                  >
                    {rep.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#6DA4CC]" />
                  <span
                    className="text-[#0A3250]/70"
                    data-testid={`text-representative-email-${index}`}
                  >
                    {rep.email}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
