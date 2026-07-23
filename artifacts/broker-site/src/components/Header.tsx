import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { type Lang } from '@/i18n/translations';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

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
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A3250] shadow-[0_4px_30px_rgba(10,50,80,0.4)] backdrop-blur-md bg-opacity-95' : 'bg-[#0A3250]'}`} data-testid="header">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection('hero')} className="text-white font-extrabold text-2xl tracking-tight hover:opacity-90 transition-opacity" data-testid="button-logo">
            AJ Broker
          </button>

          <nav className="hidden lg:flex items-center gap-8" data-testid="nav-desktop">
            <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white font-semibold transition-colors">{t.nav_services}</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-white/80 hover:text-white font-semibold transition-colors">{t.nav_how}</button>
            <button onClick={() => scrollToSection('representatives')} className="text-white/80 hover:text-white font-semibold transition-colors">{t.nav_representatives}</button>
            <div className="flex items-center gap-1 border border-white/20 rounded-full p-1">
              {(['lv', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${lang === l ? 'bg-white text-[#0A3250]' : 'text-white/70 hover:text-white'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-[#6DA4CC] hover:bg-[#5a8fb8] text-white font-bold rounded-xl px-6">
              {t.nav_cta}
            </Button>
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <div className="flex items-center gap-1 border border-white/20 rounded-full p-1">
              {(['lv', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${lang === l ? 'bg-white text-[#0A3250]' : 'text-white/70 hover:text-white'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors" data-testid="button-mobile-menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-6 flex flex-col gap-4 animate-fade-in" data-testid="nav-mobile">
            <button onClick={() => scrollToSection('services')} className="text-white/90 hover:text-white font-semibold transition-colors text-left py-2 px-4 rounded-lg hover:bg-white/5">{t.nav_services}</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-white/90 hover:text-white font-semibold transition-colors text-left py-2 px-4 rounded-lg hover:bg-white/5">{t.nav_how}</button>
            <button onClick={() => scrollToSection('representatives')} className="text-white/90 hover:text-white font-semibold transition-colors text-left py-2 px-4 rounded-lg hover:bg-white/5">{t.nav_representatives}</button>
            <Button onClick={() => scrollToSection('contact')} className="bg-[#6DA4CC] hover:bg-[#5a8fb8] text-white font-bold w-full rounded-xl py-6 h-auto mt-2">
              {t.nav_cta}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
