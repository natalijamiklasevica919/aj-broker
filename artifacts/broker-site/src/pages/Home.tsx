import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StatsStrip } from '@/components/StatsStrip';
import { Services } from '@/components/Services';
import { Benefits } from '@/components/Benefits';
import { HowItWorks } from '@/components/HowItWorks';
import { Testimonials } from '@/components/Testimonials';
import { Representatives } from '@/components/Representatives';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <AnnouncementBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <StatsStrip />
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
    </div>
  );
}
