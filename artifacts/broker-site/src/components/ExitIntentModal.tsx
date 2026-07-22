import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('exit_intent_seen');
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasSeenModal) {
        setIsOpen(true);
        localStorage.setItem('exit_intent_seen', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Pieteikums nosūtīts', { description: 'Sazināsimies ar jums tuvākajā laikā.' });
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0A3250]/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl p-8 lg:p-12 overflow-hidden border border-[#E2EDF3]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6DA4CC]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#0A3250]/50 hover:text-[#0A3250] hover:bg-[#E2EDF3] rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-extrabold text-[#0A3250] mb-4 tracking-tight leading-tight">
                Pagaidiet — pirms dodaties!
              </h2>
              <p className="text-lg text-[#0A3250]/70 mb-8 font-medium leading-relaxed">
                Iegūstiet bezmaksas konsultāciju 15 minūtēs. Mūsu eksperts paskaidros, vai faktorings ir piemērots jūsu situācijai.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="space-y-3">
                  <Label htmlFor="exit-phone" className="text-[#0A3250] font-bold ml-1 text-base">Tālrunis</Label>
                  <Input
                    id="exit-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+371 20000000"
                    className="border-[#0A3250]/10 focus:border-[#6DA4CC] h-14 bg-[#E2EDF3]/30 text-lg rounded-xl shadow-inner transition-colors hover:bg-[#E2EDF3]/50"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-[#6DA4CC] hover:bg-[#5a8fb8] text-white font-extrabold text-xl py-6 h-auto rounded-xl shadow-lg mt-4 transition-transform hover:-translate-y-1">
                  Saņemt zvanu
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
