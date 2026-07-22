import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, TrendingUp, Shield, Target, Sliders, Scale, Award } from 'lucide-react';

const benefits = [
  { id: '01', icon: Zap, title: 'Tūlītēja likviditāte', description: 'Ātra piekļuve līdzekļiem, nevis gaidīšana pēc pircēja maksājuma' },
  { id: '02', icon: TrendingUp, title: 'Uzlabota naudas plūsma', description: 'Viegli segt ikdienas izdevumus un ieguldīt attīstībā' },
  { id: '03', icon: Shield, title: 'Riska mazināšana', description: 'Analizējam jūsu pircēju finansiālo stāvokli' },
  { id: '04', icon: Target, title: 'Fokuss uz biznesu', description: 'Nodarbojieties ar attīstību, nevis parādu piedziņu' },
  { id: '05', icon: Sliders, title: 'Elastīgi risinājumi', description: 'Pielāgojam nosacījumus jūsu uzņēmuma konkrētajām vajadzībām' },
  { id: '06', icon: Scale, title: 'Neitralitāte', description: 'Neesam saistīti ne ar vienu faktoru — izvēlamies labāko jūsu vietā' },
  { id: '07', icon: Award, title: 'Konkurētspēja', description: 'Tūlītēja piekļuve apgrozāmajam kapitālam ļauj piedāvāt klientiem labākus nosacījumus' },
];

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="benefits" ref={ref} className="py-24 lg:py-32 bg-[#E2EDF3]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0A3250] tracking-tight">
            Kāpēc <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DA4CC] to-[#0A3250]">izvēlas mūs</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-fr">
          {benefits.map((benefit, index) => {
            const isWide = index === 0 || index === benefits.length - 1;
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-white group relative overflow-hidden hover:-translate-y-2 flex flex-col ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-all duration-700 group-hover:scale-125 transform origin-top-right pointer-events-none">
                  <benefit.icon className="w-64 h-64 text-[#6DA4CC]" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-[1.2rem] bg-[#E2EDF3]/80 flex items-center justify-center mb-8 text-[#6DA4CC] group-hover:bg-[#6DA4CC] group-hover:text-white transition-colors duration-500 shadow-sm">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0A3250] mb-4 tracking-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-[#0A3250]/70 text-lg leading-relaxed mt-auto font-medium">
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
