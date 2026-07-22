import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2 } from 'lucide-react';

export function TrustBadges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="bg-white py-12 lg:py-16 border-b border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm font-bold text-[#0A3250]/40 uppercase tracking-widest mb-8">
            Mūsu uzticamie partneri
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3 text-[#0A3250] hover:text-[#6DA4CC] transition-colors duration-300">
                <Building2 className="w-8 h-8" />
                <span className="font-extrabold text-2xl tracking-tighter">Partner {i}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
