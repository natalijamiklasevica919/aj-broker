import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A3250] shadow-lg'
          : 'bg-[#0A3250]'
      }`}
      data-testid="header"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-white font-bold text-2xl tracking-tight hover:opacity-90 transition-opacity"
            data-testid="button-logo"
          >
            FinBroker
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="nav-desktop">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white/90 hover:text-white font-medium transition-colors"
              data-testid="button-nav-services"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-white/90 hover:text-white font-medium transition-colors"
              data-testid="button-nav-how-it-works"
            >
              Как мы работаем
            </button>
            <button
              onClick={() => scrollToSection('representatives')}
              className="text-white/90 hover:text-white font-medium transition-colors"
              data-testid="button-nav-representatives"
            >
              Региональные представители
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#6DA4CC] hover:bg-[#5a8fb8] text-white font-semibold"
              data-testid="button-nav-contact"
            >
              Оставить заявку
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            className="lg:hidden pb-6 flex flex-col gap-4 animate-fade-in"
            data-testid="nav-mobile"
          >
            <button
              onClick={() => scrollToSection('services')}
              className="text-white/90 hover:text-white font-medium transition-colors text-left py-2"
              data-testid="button-mobile-services"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-white/90 hover:text-white font-medium transition-colors text-left py-2"
              data-testid="button-mobile-how-it-works"
            >
              Как мы работаем
            </button>
            <button
              onClick={() => scrollToSection('representatives')}
              className="text-white/90 hover:text-white font-medium transition-colors text-left py-2"
              data-testid="button-mobile-representatives"
            >
              Региональные представители
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#6DA4CC] hover:bg-[#5a8fb8] text-white font-semibold w-full"
              data-testid="button-mobile-contact"
            >
              Оставить заявку
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
