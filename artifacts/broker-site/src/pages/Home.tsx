import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Benefits } from '@/components/Benefits';
import { HowItWorks } from '@/components/HowItWorks';
import { Representatives } from '@/components/Representatives';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { StickyContactBar } from '@/components/StickyContactBar';
import { ExitIntentModal } from '@/components/ExitIntentModal';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#6DA4CC]/30">
      <ExitIntentModal />
      <AnnouncementBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Benefits />
        <HowItWorks />
        <Representatives />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
      <StickyContactBar />
    </div>
  );
}
