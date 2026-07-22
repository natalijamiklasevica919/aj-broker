import { Button } from '@/components/ui/button';
import heroImage from '@assets/connectf_hero.webp';

export function Hero() {
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
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20"
      data-testid="section-hero"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A3250]/95 via-[#0A3250]/90 to-[#0A3250]/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            data-testid="text-hero-title"
          >
            Ваш надёжный партнёр в получении финансирования
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl"
            data-testid="text-hero-subtitle"
          >
            Мы — брокеры с опытом в сфере факторинга. Анализируем вашу ситуацию и подбираем наилучшее предложение среди ведущих факторинговых компаний. Кредит выдаём не мы — мы находим для вас лучшие условия.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-[#6DA4CC] hover:bg-[#5a8fb8] text-white font-semibold text-lg px-8 py-6 h-auto"
            data-testid="button-hero-cta"
          >
            Оставить заявку
          </Button>
        </div>
      </div>
    </section>
  );
}
