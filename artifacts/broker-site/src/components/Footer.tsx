import { useLanguage } from '@/i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A3250] text-[#E2EDF3] py-20 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6DA4CC]/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-extrabold mb-6 text-white tracking-tight">AJ Broker</h3>
            <p className="text-[#E2EDF3]/70 leading-relaxed font-medium text-lg">
              {t.footer_tagline}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-6 text-white tracking-tight">{t.footer_nav_title}</h4>
            <nav className="space-y-4">
              <button onClick={() => scrollToSection('services')} className="block text-[#E2EDF3]/70 hover:text-white transition-colors font-medium">{t.nav_services}</button>
              <button onClick={() => scrollToSection('how-it-works')} className="block text-[#E2EDF3]/70 hover:text-white transition-colors font-medium">{t.nav_how}</button>
              <button onClick={() => scrollToSection('representatives')} className="block text-[#E2EDF3]/70 hover:text-white transition-colors font-medium">{t.nav_representatives}</button>
              <button onClick={() => scrollToSection('contact')} className="block text-[#E2EDF3]/70 hover:text-white transition-colors font-medium">{t.nav_cta}</button>
            </nav>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-6 text-white tracking-tight">{t.footer_contact_title}</h4>
            <div className="space-y-4 text-[#E2EDF3]/70 font-medium">
              <p>{t.footer_location}</p>
              <p>{t.footer_email}</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="border-t border-white/10 pt-8 space-y-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <p className="text-[#E2EDF3]/40 text-sm leading-relaxed font-medium">
              {t.footer_disclaimer}
            </p>
            <p className="text-[#E2EDF3]/60 font-medium text-sm">{t.footer_copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
