import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Search, Users, Banknote } from 'lucide-react';
import factoringImage from '@assets/connectf_factoring.png';

const steps = [
  { icon: FileText, title: '1. Pieteikums', description: 'Iesniedzat pieteikumu un pastāstāt par savu situāciju' },
  { icon: Search, title: '2. Analīze', description: 'Mēs izpētām jūsu rēķinus, pircējus un vajadzības' },
  { icon: Users, title: '3. Atlase', description: 'Atlasām labākos piedāvājumus no faktoringa partneruzņēmumiem' },
  { icon: Banknote, title: '4. Finansējums', description: 'Jūs saņemat naudu kontā no izvēlētā faktora' },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E2EDF3]/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0A3250] mb-6 tracking-tight">
            Kā mēs <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DA4CC] to-[#0A3250]">strādājam</span>
          </h2>
          <p className="text-lg lg:text-xl text-[#0A3250]/70 max-w-2xl mx-auto font-medium">
            Vienkāršs process — no pieteikuma līdz finansējumam
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex gap-6 items-start group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#E2EDF3] group-hover:bg-[#6DA4CC] transition-colors duration-500 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-lg group-hover:scale-110 transform">
                  <step.icon className="w-8 h-8 text-[#0A3250] group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="pt-1">
                  <h3 className="text-2xl font-extrabold text-[#0A3250] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#0A3250]/70 text-lg leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6DA4CC]/20 to-[#E2EDF3] rounded-[2rem] transform translate-x-6 translate-y-6 pointer-events-none"></div>
            <div className="bg-white rounded-[2rem] shadow-2xl p-6 lg:p-10 relative z-10 border border-[#E2EDF3]/50">
              <img
                src={factoringImage}
                alt="Faktoringa shēma"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
