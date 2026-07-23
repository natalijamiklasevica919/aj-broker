import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function QuickLeadForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', company: '' });
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.form_toast_title, {
      description: t.form_toast_desc,
      duration: 5000,
    });
    setFormData({ name: '', phone: '', company: '' });
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[2rem] p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] w-full max-w-md mx-auto relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-[2rem]"></div>
      
      <h3 className="text-3xl font-extrabold text-white mb-8 text-center relative z-10 tracking-tight">
        {t.form_title}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div className="space-y-2">
          <Label htmlFor="quick-name" className="text-white/90 font-bold ml-1">{t.form_name}</Label>
          <Input
            id="quick-name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t.form_name_placeholder}
            className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white focus:ring-white h-14 rounded-xl transition-all duration-300 hover:bg-white/10 text-lg shadow-inner"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quick-phone" className="text-white/90 font-bold ml-1">{t.form_phone}</Label>
          <Input
            id="quick-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={t.form_phone_placeholder}
            className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white focus:ring-white h-14 rounded-xl transition-all duration-300 hover:bg-white/10 text-lg shadow-inner"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quick-company" className="text-white/90 font-bold ml-1">{t.form_company}</Label>
          <Input
            id="quick-company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder={t.form_company_placeholder}
            className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white focus:ring-white h-14 rounded-xl transition-all duration-300 hover:bg-white/10 text-lg shadow-inner"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#6DA4CC] hover:bg-[#5a8fb8] text-white border-0 h-16 text-lg font-extrabold mt-6 shadow-[0_10px_20px_rgba(109,164,204,0.3)] rounded-xl group/btn relative overflow-hidden transition-all hover:-translate-y-1"
        >
          <span className="relative z-10 flex items-center justify-center">
            {t.form_submit}
            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </Button>

        <p className="text-xs text-white/50 text-center mt-6 font-medium">
          {t.form_privacy}
        </p>
      </form>
    </div>
  );
}
