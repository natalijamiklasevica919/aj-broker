import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Benefits } from '@/components/Benefits';
import { HowItWorks } from '@/components/HowItWorks';
import { Representatives } from '@/components/Representatives';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <HowItWorks />
        <Representatives />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
