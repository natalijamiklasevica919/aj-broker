import { QuickLeadForm } from './QuickLeadForm';
import { CheckCircle2, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-20 lg:pt-32 overflow-hidden bg-[#0A3250]" data-testid="section-hero">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#6DA4CC] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#1a4a6b] rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-[#6DA4CC] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob animation-delay-4000"></div>
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6DA4CC]/40 bg-[#6DA4CC]/10 backdrop-blur-md mb-8 shadow-inner shadow-white/5">
              <span className="text-[#E2EDF3] text-sm font-bold tracking-wider uppercase">Faktoringa brokeris Baltijā</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
              Jūsu uzticamais <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DA4CC] to-[#E2EDF3] drop-shadow-sm">partneris</span> darījumu finansēšanā
            </h1>
            
            <p className="text-lg md:text-xl text-[#E2EDF3]/90 mb-10 leading-relaxed font-medium">
              Mēs esam brokeris — nefinansējam paši, bet atrodam jums labākos faktoringa nosacījumus no 30+ pārbaudītiem partneriem. Bez slēptām komisijām.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-4 mb-10">
              <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-2xl backdrop-blur-sm border border-white/10 shadow-lg">
                <CheckCircle2 className="w-5 h-5 text-[#6DA4CC]" />
                <span className="text-white font-bold tracking-wide">Bezmaksas</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-2xl backdrop-blur-sm border border-white/10 shadow-lg">
                <Clock className="w-5 h-5 text-[#6DA4CC]" />
                <span className="text-white font-bold tracking-wide">1 darba dienā</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-2xl backdrop-blur-sm border border-white/10 shadow-lg">
                <MapPin className="w-5 h-5 text-[#6DA4CC]" />
                <span className="text-white font-bold tracking-wide">Visa Baltija</span>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A3250] bg-gradient-to-br from-[#6DA4CC] to-[#1a4a6b] flex items-center justify-center text-xs font-bold text-white shadow-md relative z-10 hover:z-20 hover:scale-110 transition-transform">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-[#E2EDF3]/80 font-bold tracking-wide">
                Jau uzticās 500+ uzņēmumi
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:justify-self-end w-full"
          >
            <QuickLeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
