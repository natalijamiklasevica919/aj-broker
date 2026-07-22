import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StatsStrip } from '@/components/StatsStrip';
import { TrustBadges } from '@/components/TrustBadges';
import { Services } from '@/components/Services';
import { Benefits } from '@/components/Benefits';
import { HowItWorks } from '@/components/HowItWorks';
import { Testimonials } from '@/components/Testimonials';
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
        <StatsStrip />
        <TrustBadges />
        <Services />
        <Benefits />
        <HowItWorks />
        <Testimonials />
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
