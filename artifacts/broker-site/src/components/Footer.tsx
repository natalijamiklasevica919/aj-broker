export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <footer className="bg-[#0A3250] text-white py-16" data-testid="footer">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4" data-testid="text-footer-logo">
              FinBroker
            </h3>
            <p className="text-white/70 leading-relaxed" data-testid="text-footer-tagline">
              Ваш надёжный партнёр в получении факторингового финансирования
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-nav-title">
              Навигация
            </h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('services')}
                className="block text-white/70 hover:text-white transition-colors"
                data-testid="button-footer-services"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block text-white/70 hover:text-white transition-colors"
                data-testid="button-footer-how-it-works"
              >
                Как мы работаем
              </button>
              <button
                onClick={() => scrollToSection('representatives')}
                className="block text-white/70 hover:text-white transition-colors"
                data-testid="button-footer-representatives"
              >
                Региональные представители
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-white/70 hover:text-white transition-colors"
                data-testid="button-footer-contact"
              >
                Оставить заявку
              </button>
            </nav>
          </div>

          {/* Contact Placeholders */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-contact-title">
              Контакты
            </h4>
            <div className="space-y-2 text-white/70">
              <p data-testid="text-footer-phone">Телефон: [указывается позже]</p>
              <p data-testid="text-footer-email">Email: [указывается позже]</p>
            </div>
          </div>

          {/* Empty column for balance */}
          <div></div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 space-y-4">
          <p className="text-white/70 text-sm" data-testid="text-footer-copyright">
            © 2025 FinBroker. Все права защищены.
          </p>
          <p className="text-white/50 text-xs leading-relaxed max-w-4xl" data-testid="text-footer-disclaimer">
            FinBroker является брокером и не является кредитной организацией. Мы не выдаём займы и кредиты. Финансирование предоставляется партнёрскими факторинговыми компаниями.
          </p>
        </div>
      </div>
    </footer>
  );
}
