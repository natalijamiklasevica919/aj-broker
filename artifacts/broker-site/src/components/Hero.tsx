import heroImage from '@assets/connectf_hero.webp';
import { QuickLeadForm } from './QuickLeadForm';
import { CheckCircle2, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-20 lg:pt-32"
      data-testid="section-hero"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Факторинг"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A3250]/90 lg:bg-gradient-to-r lg:from-[#0A3250]/95 lg:via-[#0A3250]/80 lg:to-[#0A3250]/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
              data-testid="text-hero-title"
            >
              Ваш надёжный партнёр в получении <span className="text-[#6DA4CC]">финансирования</span>
            </h1>
            <p
              className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-medium"
              data-testid="text-hero-subtitle"
            >
              Анализируем вашу ситуацию и подбираем наилучшее предложение среди 30+ ведущих факторинговых компаний. Получите деньги на развитие бизнеса без скрытых комиссий.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6DA4CC]/20 flex items-center justify-center border border-[#6DA4CC]/30">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA4CC]" />
                </div>
                <span className="text-white font-medium">Бесплатно</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6DA4CC]/20 flex items-center justify-center border border-[#6DA4CC]/30">
                  <Clock className="w-5 h-5 text-[#6DA4CC]" />
                </div>
                <span className="text-white font-medium">За 1 день</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6DA4CC]/20 flex items-center justify-center border border-[#6DA4CC]/30">
                  <MapPin className="w-5 h-5 text-[#6DA4CC]" />
                </div>
                <span className="text-white font-medium">По всей России</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:justify-self-end w-full">
            <QuickLeadForm />
          </div>

        </div>
      </div>

      {/* Animated Gradient Overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A3250] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
