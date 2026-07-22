import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nācāmies ar naudas plūsmas problēmu — ātri tika atlasīti divi piedāvājumi no dažādiem faktoriem. Izvēlējāmies optimālo. Process aizņēma mazāk par nedēļu.",
    author: "Andris K.", role: "Finanšu direktors", company: "Tirdzniecības uzņēmums"
  },
  {
    quote: "Ilgi vilcinājāmies ar faktoringu — domājām, ka tas ir sarežģīti. Brokeris paskaidroja visu vienkāršā valodā un pavadīja katrā posmā.",
    author: "Marina S.", role: "Īpašniece", company: "Ražošanas uzņēmums"
  },
  {
    quote: "Vajadzēja finansējumu lielas partijas iepirkšanai. Atrada faktoru ar nosacījumiem, kas bija labāki nekā mūsu bankā.",
    author: "Dmitrijs N.", role: "Komercdirektors", company: "Vairumtirdzniecības uzņēmums"
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" ref={ref} className="py-24 lg:py-32 bg-[#E2EDF3]/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0A3250] mb-6 tracking-tight">
            Klientu atsauksmes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-10 rounded-[2rem] relative shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#6DA4CC]/30 hover:-translate-y-2 flex flex-col"
            >
              <Quote className="w-16 h-16 text-[#6DA4CC]/10 absolute top-8 right-8" />
              <div className="mb-10 relative z-10 flex-grow pt-4">
                <p className="text-[#0A3250]/80 leading-relaxed italic text-lg font-medium">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-[#E2EDF3]">
                <h4 className="font-bold text-[#0A3250] text-xl">{t.author}</h4>
                <p className="text-[#6DA4CC] font-bold text-sm mt-1 uppercase tracking-wider">{t.role}</p>
                <p className="text-[#0A3250]/50 text-sm mt-1 font-medium">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
