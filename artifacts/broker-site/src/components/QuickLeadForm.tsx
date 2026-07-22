import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';

export function QuickLeadForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', company: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Pieteikums nosūtīts', {
      description: 'Sazināsimies ar jums tuvākajā laikā.',
      duration: 5000,
    });
    setFormData({ name: '', phone: '', company: '' });
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[2rem] p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] w-full max-w-md mx-auto relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-[2rem]"></div>
      
      <h3 className="text-3xl font-extrabold text-white mb-8 text-center relative z-10 tracking-tight">
        Saņemt bezmaksas konsultāciju
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div className="space-y-2">
          <Label htmlFor="quick-name" className="text-white/90 font-bold ml-1">Vārds</Label>
          <Input
            id="quick-name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Jānis Bērziņš"
            className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white focus:ring-white h-14 rounded-xl transition-all duration-300 hover:bg-white/10 text-lg shadow-inner"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quick-phone" className="text-white/90 font-bold ml-1">Tālrunis</Label>
          <Input
            id="quick-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+371 20000000"
            className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white focus:ring-white h-14 rounded-xl transition-all duration-300 hover:bg-white/10 text-lg shadow-inner"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quick-company" className="text-white/90 font-bold ml-1">Uzņēmums / Reģ. nr.</Label>
          <Input
            id="quick-company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="SIA Ozols"
            className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white focus:ring-white h-14 rounded-xl transition-all duration-300 hover:bg-white/10 text-lg shadow-inner"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#6DA4CC] hover:bg-[#5a8fb8] text-white border-0 h-16 text-lg font-extrabold mt-6 shadow-[0_10px_20px_rgba(109,164,204,0.3)] rounded-xl group/btn relative overflow-hidden transition-all hover:-translate-y-1"
        >
          <span className="relative z-10 flex items-center justify-center">
            Uzzināt nosacījumus
            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </Button>

        <p className="text-xs text-white/50 text-center mt-6 font-medium">
          Nospiežot pogu, jūs piekrītat privātuma politikai
        </p>
      </form>
    </div>
  );
}
