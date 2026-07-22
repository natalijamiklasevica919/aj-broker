import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';

export function QuickLeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена', {
      description: 'Мы свяжемся с вами в ближайшее время.',
      duration: 5000,
    });
    setFormData({ name: '', phone: '', company: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass rounded-2xl p-6 lg:p-8 shadow-2xl w-full max-w-md mx-auto"
      data-testid="quick-lead-form"
    >
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Получить бесплатную консультацию
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="quick-name" className="text-white/90">
            Имя
          </Label>
          <Input
            id="quick-name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Иван Иванов"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white focus:ring-white h-12"
            required
            data-testid="input-quick-name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quick-phone" className="text-white/90">
            Телефон
          </Label>
          <Input
            id="quick-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+7 (999) 000-00-00"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white focus:ring-white h-12"
            required
            data-testid="input-quick-phone"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quick-company" className="text-white/90">
            Компания / ИНН
          </Label>
          <Input
            id="quick-company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="ООО Ромашка"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white focus:ring-white h-12"
            required
            data-testid="input-quick-company"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-white text-[#0A3250] hover:bg-[#E2EDF3] h-12 text-base font-semibold mt-4 group"
          data-testid="button-quick-submit"
        >
          Узнать условия
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <p className="text-xs text-white/50 text-center mt-4">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>
    </motion.div>
  );
}
