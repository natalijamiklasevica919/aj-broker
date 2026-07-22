import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { question: "Kāda ir atšķirība starp brokeri un faktoringa uzņēmumu?", answer: "Faktoringa uzņēmums tieši finansē jūsu darījumus un uzņemas kredītrisku. Brokeris ir neatkarīgs konsultants, kas analizē jūsu situāciju un atlasa labākos nosacījumus no daudziem faktoriem. Mūsu pakalpojumi klientam ir bezmaksas." },
  { question: "Cik maksā jūsu pakalpojumi?", answer: "Konsultācija un piedāvājumu atlase jums ir pilnīgi bezmaksas. Mēs saņemam atlīdzību no faktoringa uzņēmuma tikai pēc veiksmīga darījuma noslēgšanas." },
  { question: "Cik ātri var saņemt finansējumu?", answer: "Pēc pieteikuma saņemšanas mēs sniedzam pirmos piedāvājumus 1 darba dienas laikā. Pilna darījuma noformēšana ar faktoru parasti aizņem no 3 līdz 7 darba dienām." },
  { question: "Vai faktorings ir piemērots mazajiem uzņēmumiem?", answer: "Jā. Lielākā daļa faktoringa uzņēmumu strādā ar biznesu, kas darbojas vismaz 6 mēnešus. Finansējuma apjoma prasības sākas no dažiem desmitiem tūkstošu eiro." },
  { question: "Mēs strādājam ar pircējiem no citām valstīm — vai tas ir problēma?", answer: "Nē. Lielākā daļa mūsu partneruzņēmumu strādā ar debitoriem visā Eiropas Savienībā un ārpus tās." },
  { question: "Kādi dokumenti ir nepieciešami sākumam?", answer: "Pirmajā posmā pietiek aizpildīt pieteikumu un pastāstīt par savu situāciju. Dokumentus pieprasa konkrētais faktoringa uzņēmums izskatīšanas stadijā." }
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" ref={ref} className="py-24 lg:py-32 bg-[#E2EDF3] relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0A3250] mb-6 tracking-tight">
            Bieži uzdotie jautājumi
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-[2rem] shadow-xl p-8 lg:p-12 border border-white/50"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-[#0A3250]/10 border-b last:border-0">
                <AccordionTrigger className="text-left text-lg lg:text-xl font-extrabold text-[#0A3250] hover:text-[#6DA4CC] hover:no-underline py-6 data-[state=open]:text-[#6DA4CC] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#0A3250]/70 text-lg leading-relaxed pb-6 font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
