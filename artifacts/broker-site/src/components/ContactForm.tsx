import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    amount: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success toast
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      amount: '',
      description: '',
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 lg:py-28 bg-[#E2EDF3]"
      data-testid="section-contact"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl lg:text-5xl font-bold text-[#0A3250] mb-4"
            data-testid="text-contact-title"
          >
            Оставить заявку
          </h2>
          <p
            className="text-lg lg:text-xl text-[#0A3250]/70 max-w-3xl mx-auto"
            data-testid="text-contact-subtitle"
          >
            Опишите вашу ситуацию — мы подберём оптимальное решение
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8 lg:p-12 space-y-6"
            data-testid="form-contact"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#0A3250] font-semibold">
                Имя
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-[#6DA4CC]/30 focus:border-[#6DA4CC]"
                required
                data-testid="input-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-[#0A3250] font-semibold">
                Компания
              </Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="border-[#6DA4CC]/30 focus:border-[#6DA4CC]"
                required
                data-testid="input-company"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#0A3250] font-semibold">
                  Телефон
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-[#6DA4CC]/30 focus:border-[#6DA4CC]"
                  required
                  data-testid="input-phone"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#0A3250] font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-[#6DA4CC]/30 focus:border-[#6DA4CC]"
                  required
                  data-testid="input-email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount" className="text-[#0A3250] font-semibold">
                Примерная сумма финансирования
              </Label>
              <Select
                value={formData.amount}
                onValueChange={(value) => setFormData({ ...formData, amount: value })}
                required
              >
                <SelectTrigger
                  id="amount"
                  className="border-[#6DA4CC]/30 focus:border-[#6DA4CC]"
                  data-testid="select-amount"
                >
                  <SelectValue placeholder="Выберите сумму" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="до 1 млн">до 1 млн</SelectItem>
                  <SelectItem value="1-5 млн">1–5 млн</SelectItem>
                  <SelectItem value="5-20 млн">5–20 млн</SelectItem>
                  <SelectItem value="более 20 млн">более 20 млн</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-[#0A3250] font-semibold">
                Описание ситуации
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="border-[#6DA4CC]/30 focus:border-[#6DA4CC] min-h-[120px]"
                required
                data-testid="textarea-description"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#6DA4CC] hover:bg-[#5a8fb8] text-white font-semibold text-lg py-6 h-auto"
              data-testid="button-submit"
            >
              Отправить заявку
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
