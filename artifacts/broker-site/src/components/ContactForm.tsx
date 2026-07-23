import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', amount: '', description: '' });
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.contact_toast_title, { description: t.contact_toast_desc });
    setFormData({ name: '', company: '', phone: '', email: '', amount: '', description: '' });
  };

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-[#0A3250] relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#6DA4CC] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#E2EDF3] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              {t.contact_title}
            </h2>
            <p className="text-xl text-[#E2EDF3]/80 mb-6 leading-relaxed font-medium">
              {t.contact_subtitle}
            </p>
            <p className="text-xl text-[#E2EDF3]/80 mb-12 leading-relaxed font-medium">
              {t.contact_why_title}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#6DA4CC]/20 flex items-center justify-center shrink-0 border border-[#6DA4CC]/30 shadow-inner">
                  <CheckCircle2 className="w-7 h-7 text-[#6DA4CC]" />
                </div>
                <div className="pt-1">
                  <h4 className="text-white font-extrabold text-xl mb-2 tracking-tight">{t.contact_why_1_title}</h4>
                  <p className="text-[#E2EDF3]/70 text-lg font-medium">{t.contact_why_1_desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#6DA4CC]/20 flex items-center justify-center shrink-0 border border-[#6DA4CC]/30 shadow-inner">
                  <CheckCircle2 className="w-7 h-7 text-[#6DA4CC]" />
                </div>
                <div className="pt-1">
                  <h4 className="text-white font-extrabold text-xl mb-2 tracking-tight">{t.contact_why_2_title}</h4>
                  <p className="text-[#E2EDF3]/70 text-lg font-medium">{t.contact_why_2_desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#6DA4CC]/20 flex items-center justify-center shrink-0 border border-[#6DA4CC]/30 shadow-inner">
                  <CheckCircle2 className="w-7 h-7 text-[#6DA4CC]" />
                </div>
                <div className="pt-1">
                  <h4 className="text-white font-extrabold text-xl mb-2 tracking-tight">{t.contact_why_3_title}</h4>
                  <p className="text-[#E2EDF3]/70 text-lg font-medium">{t.contact_why_3_desc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full">
            <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-2xl p-8 lg:p-12 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#6DA4CC]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="space-y-3 relative z-10">
                <Label htmlFor="name" className="text-[#0A3250] font-bold text-base ml-1">{t.contact_label_name}</Label>
                <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border-[#0A3250]/10 focus:border-[#6DA4CC] h-14 bg-[#E2EDF3]/30 text-lg rounded-xl shadow-inner transition-colors hover:bg-[#E2EDF3]/50" required />
              </div>
              <div className="space-y-3 relative z-10">
                <Label htmlFor="company" className="text-[#0A3250] font-bold text-base ml-1">{t.contact_label_company}</Label>
                <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="border-[#0A3250]/10 focus:border-[#6DA4CC] h-14 bg-[#E2EDF3]/30 text-lg rounded-xl shadow-inner transition-colors hover:bg-[#E2EDF3]/50" required />
              </div>
              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-[#0A3250] font-bold text-base ml-1">{t.contact_label_phone}</Label>
                  <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="border-[#0A3250]/10 focus:border-[#6DA4CC] h-14 bg-[#E2EDF3]/30 text-lg rounded-xl shadow-inner transition-colors hover:bg-[#E2EDF3]/50" required />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-[#0A3250] font-bold text-base ml-1">{t.contact_label_email}</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="border-[#0A3250]/10 focus:border-[#6DA4CC] h-14 bg-[#E2EDF3]/30 text-lg rounded-xl shadow-inner transition-colors hover:bg-[#E2EDF3]/50" required />
                </div>
              </div>
              <div className="space-y-3 relative z-10">
                <Label htmlFor="amount" className="text-[#0A3250] font-bold text-base ml-1">{t.contact_label_amount}</Label>
                <Select value={formData.amount} onValueChange={(value) => setFormData({ ...formData, amount: value })} required>
                  <SelectTrigger id="amount" className="border-[#0A3250]/10 focus:border-[#6DA4CC] h-14 bg-[#E2EDF3]/30 text-lg rounded-xl shadow-inner transition-colors hover:bg-[#E2EDF3]/50">
                    <SelectValue placeholder={t.contact_amount_placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lidz_10k">{t.contact_amount_1}</SelectItem>
                    <SelectItem value="10k_50k">{t.contact_amount_2}</SelectItem>
                    <SelectItem value="50k_200k">{t.contact_amount_3}</SelectItem>
                    <SelectItem value="virs_200k">{t.contact_amount_4}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3 relative z-10">
                <Label htmlFor="description" className="text-[#0A3250] font-bold text-base ml-1">{t.contact_label_desc}</Label>
                <Textarea id="description" placeholder={t.contact_desc_placeholder} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="border-[#0A3250]/10 focus:border-[#6DA4CC] min-h-[120px] bg-[#E2EDF3]/30 resize-none text-lg rounded-xl shadow-inner transition-colors hover:bg-[#E2EDF3]/50" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-[#0A3250] hover:bg-[#1a4a6b] text-white font-extrabold text-xl py-6 h-16 shadow-xl hover:shadow-2xl transition-all mt-6 rounded-xl hover:-translate-y-1 relative z-10">
                {t.contact_submit}
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-[#0A3250]/60 mt-6 font-bold tracking-wide relative z-10">
                <Clock className="w-5 h-5" />
                <span>{t.contact_response_time}</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
