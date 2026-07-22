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
import { toast } from 'sonner';
import { CheckCircle2, Clock } from 'lucide-react';

export function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    
    toast.success('Заявка отправлена', {
      description: 'Мы свяжемся с вами в течение 2 часов.',
    });

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
      className="py-20 lg:py-28 bg-gradient-to-br from-[#0A3250] to-[#1a4a6b] relative overflow-hidden"
      data-testid="section-contact"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#6DA4CC]/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#6DA4CC]/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl lg:text-5xl font-bold text-white mb-6"
              data-testid="text-contact-title"
            >
              Оставить заявку на подбор финансирования
            </h2>
            <p
              className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed"
              data-testid="text-contact-subtitle"
            >
              Опишите вашу ситуацию — мы бесплатно проанализируем её и подберём оптимальное решение среди десятков партнёров.
            </p>

            <div className="space-y-6 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">Почему стоит обратиться сейчас:</h3>
              
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#6DA4CC] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-lg">Бесплатный анализ</h4>
                  <p className="text-white/60">Вы не платите за наши услуги — комиссию оплачивает фактор.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#6DA4CC] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-lg">Экономия времени</h4>
                  <p className="text-white/60">Мы знаем требования всех факторов и подадим заявку только туда, где её одобрят.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#6DA4CC] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-lg">Лучшие условия</h4>
                  <p className="text-white/60">За счёт партнёрских соглашений мы можем получить ставку ниже стандартной.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 space-y-6"
              data-testid="form-contact"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#0A3250] font-semibold text-base">
                  Имя
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-[#0A3250]/10 focus:border-[#6DA4CC] h-12 bg-[#E2EDF3]/30"
                  required
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-[#0A3250] font-semibold text-base">
                  Компания / ИНН
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="border-[#0A3250]/10 focus:border-[#6DA4CC] h-12 bg-[#E2EDF3]/30"
                  required
                  data-testid="input-company"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#0A3250] font-semibold text-base">
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-[#0A3250]/10 focus:border-[#6DA4CC] h-12 bg-[#E2EDF3]/30"
                    required
                    data-testid="input-phone"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0A3250] font-semibold text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-[#0A3250]/10 focus:border-[#6DA4CC] h-12 bg-[#E2EDF3]/30"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount" className="text-[#0A3250] font-semibold text-base">
                  Примерная сумма финансирования
                </Label>
                <Select
                  value={formData.amount}
                  onValueChange={(value) => setFormData({ ...formData, amount: value })}
                  required
                >
                  <SelectTrigger
                    id="amount"
                    className="border-[#0A3250]/10 focus:border-[#6DA4CC] h-12 bg-[#E2EDF3]/30"
                    data-testid="select-amount"
                  >
                    <SelectValue placeholder="Выберите сумму" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="до 1 млн">до 1 млн рублей</SelectItem>
                    <SelectItem value="1-5 млн">1–5 млн рублей</SelectItem>
                    <SelectItem value="5-20 млн">5–20 млн рублей</SelectItem>
                    <SelectItem value="более 20 млн">более 20 млн рублей</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-[#0A3250] font-semibold text-base">
                  Краткое описание ситуации (необязательно)
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="border-[#0A3250]/10 focus:border-[#6DA4CC] min-h-[100px] bg-[#E2EDF3]/30 resize-none"
                  data-testid="textarea-description"
                  placeholder="Например: нужен факторинг для работы с сетями..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#0A3250] hover:bg-[#1a4a6b] text-white font-bold text-lg py-6 h-auto shadow-xl hover:shadow-2xl transition-all"
                data-testid="button-submit"
              >
                Отправить заявку
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-[#0A3250]/60 mt-4">
                <Clock className="w-4 h-4" />
                <span>Обычно отвечаем в течение 2 часов в рабочее время</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
