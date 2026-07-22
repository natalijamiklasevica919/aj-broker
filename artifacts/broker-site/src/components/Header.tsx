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
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A3250] shadow-[0_4px_30px_rgba(10,50,80,0.4)] backdrop-blur-md bg-opacity-95' : 'bg-[#0A3250]'}`} data-testid="header">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection('hero')} className="text-white font-extrabold text-2xl tracking-tight hover:opacity-90 transition-opacity" data-testid="button-logo">
            FinBroker
          </button>

          <nav className="hidden lg:flex items-center gap-8" data-testid="nav-desktop">
            <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white font-semibold transition-colors">Pakalpojumi</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-white/80 hover:text-white font-semibold transition-colors">Kā mēs strādājam</button>
            <button onClick={() => scrollToSection('representatives')} className="text-white/80 hover:text-white font-semibold transition-colors">Pārstāvji</button>
            <Button onClick={() => scrollToSection('contact')} className="bg-[#6DA4CC] hover:bg-[#5a8fb8] text-white font-bold rounded-xl px-6">
              Pieteikties
            </Button>
          </nav>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" data-testid="button-mobile-menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-6 flex flex-col gap-4 animate-fade-in" data-testid="nav-mobile">
            <button onClick={() => scrollToSection('services')} className="text-white/90 hover:text-white font-semibold transition-colors text-left py-2 px-4 rounded-lg hover:bg-white/5">Pakalpojumi</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-white/90 hover:text-white font-semibold transition-colors text-left py-2 px-4 rounded-lg hover:bg-white/5">Kā mēs strādājam</button>
            <button onClick={() => scrollToSection('representatives')} className="text-white/90 hover:text-white font-semibold transition-colors text-left py-2 px-4 rounded-lg hover:bg-white/5">Pārstāvji</button>
            <Button onClick={() => scrollToSection('contact')} className="bg-[#6DA4CC] hover:bg-[#5a8fb8] text-white font-bold w-full rounded-xl py-6 h-auto mt-2">
              Pieteikties
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
