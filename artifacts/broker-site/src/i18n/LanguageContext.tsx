import { createContext, useContext, useState } from 'react';
import { translations, type Lang } from './translations';

const LanguageContext = createContext<{ lang: Lang; t: (typeof translations)[Lang]; setLang: (l: Lang) => void } | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
