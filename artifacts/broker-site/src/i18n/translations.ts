export type Lang = 'lv' | 'en';

export const translations = {
  lv: {
    // AnnouncementBar
    announcement_free: 'Konsultācija',
    announcement_speed: 'Ātra izskatīšana',
    announcement_geo: 'Strādājam visā Eiropā',
    announcement_close: 'Aizvērt',

    // Header
    nav_services: 'Pakalpojumi',
    nav_how: 'Kā mēs strādājam',
    nav_representatives: 'Pārstāvji',
    nav_cta: 'Pieteikties',

    // Hero
    hero_badge: 'Faktoringa brokeris Eiropā',
    hero_title_1: 'Jūsu uzticamais',
    hero_title_highlight: 'partneris',
    hero_title_2: 'darījumu finansēšanā',
    hero_subtitle: 'Mēs esam brokeris — nefinansējam paši, bet atrodam jums labākos faktoringa nosacījumus no 30+ pārbaudītiem partneriem. Bez slēptām komisijām.',
    hero_badge_free: 'Bez slēptām maksām',
    hero_badge_speed: 'Ātra izskatīšana',
    hero_badge_geo: 'Visa Eiropa',
    hero_social_proof: 'Jau uzticās 500+ uzņēmumi',

    // QuickLeadForm
    form_title: 'Saņemt konsultāciju',
    form_name: 'Vārds',
    form_name_placeholder: 'Jānis Bērziņš',
    form_phone: 'Tālrunis',
    form_phone_placeholder: '+371 20000000',
    form_company: 'Uzņēmums / Reģ. nr.',
    form_company_placeholder: 'SIA Ozols',
    form_submit: 'Uzzināt nosacījumus',
    form_privacy: 'Nospiežot pogu, jūs piekrītat privātuma politikai',
    form_toast_title: 'Pieteikums nosūtīts',
    form_toast_desc: 'Sazināsimies ar jums tuvākajā laikā.',

    // StatsStrip
    stats_1_value: '500+',
    stats_1_label: 'apstrādāto pieteikumu',
    stats_2_value: '30+',
    stats_2_label: 'partneru faktoringa uzņēmumu',
    stats_3_value: 'Ātra',
    stats_3_label: 'izskatīšana',
    stats_4_value: '0 €',
    stats_4_label: 'konsultācijas izmaksas',

    // TrustBadges
    trust_title: 'Mūsu uzticamie partneri',

    // Services
    services_title: 'Faktoringa',
    services_title_highlight: 'veidi',
    services_subtitle: 'Atlasām jums optimālo risinājumu no pārbaudītiem partneriem',
    services_1_title: 'Klasiskais faktorings',
    services_1_desc: 'Jūs izrakstāt rēķinu pircējam par precēm vai pakalpojumiem. Mēs atrodam faktoringa uzņēmumu, kas nekavējoties izmaksā jums līdz 90% no rēķina summas. Atlikumu saņemat pēc tam, kad jūsu pircējs norēķinās ar faktoru.',
    services_2_title: 'Iepirkumu faktorings',
    services_2_desc: 'Jums jāiegādājas preces, bet nav iespējas maksāt uzreiz? Mēs atrodam partneri, kas samaksā piegādātājam jūsu vietā. Preces saņemat nekavējoties, un norēķināties pēc 90 dienām — kad realizēsiet produkciju.',
    services_learn_more: 'Uzzināt vairāk',

    // Benefits
    benefits_title: 'Kāpēc izvēlas mūs',
    benefits_1_title: 'Tūlītēja likviditāte',
    benefits_1_desc: 'Ātra piekļuve līdzekļiem, nevis gaidīšana pēc pircēja maksājuma',
    benefits_2_title: 'Uzlabota naudas plūsma',
    benefits_2_desc: 'Viegli segt ikdienas izdevumus un ieguldīt attīstībā',
    benefits_3_title: 'Pārredzamība',
    benefits_3_desc: 'Skaidri nosacījumi un pilnīga informācija katrā darījuma posmā',
    benefits_4_title: 'Fokuss uz biznesu',
    benefits_4_desc: 'Nodarbojieties ar attīstību, nevis parādu piedziņu',
    benefits_5_title: 'Elastīgi risinājumi',
    benefits_5_desc: 'Pielāgojam nosacījumus jūsu uzņēmuma konkrētajām vajadzībām',
    benefits_6_title: 'Neitralitāte',
    benefits_6_desc: 'Neesam saistīti ne ar vienu faktoru — izvēlamies labāko jūsu vietā',
    benefits_7_title: 'Konkurētspēja',
    benefits_7_desc: 'Tūlītēja piekļuve apgrozāmajam kapitālam ļauj piedāvāt klientiem labākus nosacījumus',

    // HowItWorks
    how_title: 'Kā mēs strādājam',
    how_subtitle: 'Vienkāršs process — no pieteikuma līdz finansējumam',
    how_1_title: 'Pieteikums',
    how_1_desc: 'Iesniedzat pieteikumu un pastāstāt par savu situāciju',
    how_2_title: 'Analīze',
    how_2_desc: 'Mēs izpētām jūsu rēķinus, pircējus un vajadzības',
    how_3_title: 'Atlase',
    how_3_desc: 'Atlasām labākos piedāvājumus no faktoringa partneruzņēmumiem',
    how_4_title: 'Finansējums',
    how_4_desc: 'Jūs saņemat naudu kontā no izvēlētā faktora',
    how_img_alt: 'Faktoringa shēma',

    // Representatives
    rep_title: 'Reģionālie pārstāvji',
    rep_subtitle: 'Atrodiet pārstāvi jūsu reģionā',
    rep_name_placeholder: '[Pārstāvja vārds]',

    // FAQ
    faq_title: 'Bieži uzdotie jautājumi',
    faq_subtitle: 'Viss, kas nepieciešams zināt par mūsu darbu un faktoringu',
    faq_1_q: 'Kāda ir atšķirība starp brokeri un faktoringa uzņēmumu?',
    faq_1_a: 'Faktoringa uzņēmums tieši finansē jūsu darījumus. Brokeris ir neatkarīgs konsultants, kas analizē jūsu situāciju un atlasa labākos nosacījumus no daudziem faktoriem.',
    faq_2_q: 'Cik maksā jūsu pakalpojumi?',
    faq_2_a: 'Konsultācija un piedāvājumu atlase jums nav jāmaksā. Mēs saņemam atlīdzību no faktoringa uzņēmuma tikai pēc veiksmīga darījuma noslēgšanas.',
    faq_3_q: 'Cik ātri var saņemt finansējumu?',
    faq_3_a: 'Pēc pieteikuma saņemšanas mūsu komanda veic ātru izskatīšanu un sniedz pirmos piedāvājumus. Pilna darījuma noformēšana ar faktoru parasti aizņem no 3 līdz 7 darba dienām.',
    faq_4_q: 'Vai faktorings ir piemērots mazajiem uzņēmumiem?',
    faq_4_a: 'Jā. Lielākā daļa faktoringa uzņēmumu strādā ar biznesu, kas darbojas vismaz 6 mēnešus. Finansējuma apjoma prasības sākas no dažiem desmitiem tūkstošu eiro.',
    faq_5_q: 'Mēs strādājam ar pircējiem no citām valstīm — vai tas ir problēma?',
    faq_5_a: 'Nē. Lielākā daļa mūsu partneruzņēmumu strādā ar debitoriem visā Eiropas Savienībā un ārpus tās.',
    faq_6_q: 'Kādi dokumenti ir nepieciešami sākumam?',
    faq_6_a: 'Pirmajā posmā pietiek aizpildīt pieteikumu un pastāstīt par savu situāciju. Dokumentus pieprasa konkrētais faktoringa uzņēmums izskatīšanas stadijā.',

    // ContactForm
    contact_title: 'Pieteikties finansējuma atlasei',
    contact_subtitle: 'Aprakstiet savu situāciju — mēs to analizēsim un atlasīsim optimālo risinājumu no desmitiem partneru.',
    contact_why_title: 'Kāpēc vērts vērsties tagad:',
    contact_why_1_title: 'Profesionāla analīze',
    contact_why_1_desc: 'Jūs nemaksājat par mūsu pakalpojumiem — komisiju maksā faktors.',
    contact_why_2_title: 'Laika ietaupījums',
    contact_why_2_desc: 'Zinām visu faktoru prasības un iesniegsim pieteikumu tikai tur, kur to apstiprinās.',
    contact_why_3_title: 'Labāki nosacījumi',
    contact_why_3_desc: 'Partneru līgumu dēļ varam panākt zemāku likmi nekā standarta.',
    contact_label_name: 'Vārds',
    contact_label_company: 'Uzņēmums / PVN numurs',
    contact_label_phone: 'Tālrunis',
    contact_label_email: 'E-pasts',
    contact_label_amount: 'Finansējuma apjoms',
    contact_amount_1: 'līdz 10 000 €',
    contact_amount_2: '10 000 – 50 000 €',
    contact_amount_3: '50 000 – 200 000 €',
    contact_amount_4: 'vairāk nekā 200 000 €',
    contact_amount_placeholder: 'Izvēlieties summu',
    contact_label_desc: 'Situācijas apraksts (neobligāts)',
    contact_desc_placeholder: 'Piemēram: nepieciešams faktorings darbam ar tīkliem...',
    contact_submit: 'Nosūtīt pieteikumu',
    contact_response_time: 'Parasti atbildam 2 stundu laikā darba laikā',
    contact_toast_title: 'Pieteikums nosūtīts',
    contact_toast_desc: 'Sazināsimies ar jums 2 stundu laikā.',

    // Footer
    footer_tagline: 'Faktoringa brokeris Eiropā',
    footer_nav_title: 'Navigācija',
    footer_contact_title: 'Kontakti',
    footer_phone_placeholder: '[norādīt vēlāk]',
    footer_email_placeholder: '[norādīt vēlāk]',
    footer_copyright: '© 2025 AJ Broker. Visas tiesības aizsargātas.',
    footer_disclaimer: 'AJ Broker ir brokeris un nav kredītiestāde. Mēs neizsniedz aizdevumus vai kredītus. Finansējumu nodrošina partneru faktoringa uzņēmumi.',

    // FloatingCTA
    floating_cta: 'Pieteikties',

    // StickyContactBar
    sticky_text: 'Gatavi sākt? Sazinieties ar mums',
    sticky_cta: 'Pieteikties',

    // ExitIntentModal
    exit_title: 'Pagaidiet — pirms dodaties!',
    exit_subtitle: 'Sazinieties ar mums. Mūsu eksperts paskaidros, vai faktorings ir piemērots jūsu situācijai.',
    exit_phone_label: 'Tālrunis',
    exit_phone_placeholder: '+371 20000000',
    exit_submit: 'Saņemt zvanu',
    exit_toast_title: 'Pieteikums nosūtīts',
    exit_toast_desc: 'Sazināsimies ar jums tuvākajā laikā.',
  },

  en: {
    // AnnouncementBar
    announcement_free: 'Consultation',
    announcement_speed: 'Fast review',
    announcement_geo: 'Operating across Europe',
    announcement_close: 'Close',

    // Header
    nav_services: 'Services',
    nav_how: 'How we work',
    nav_representatives: 'Representatives',
    nav_cta: 'Apply',

    // Hero
    hero_badge: 'Factoring broker in Europe',
    hero_title_1: 'Your trusted',
    hero_title_highlight: 'partner',
    hero_title_2: 'in business financing',
    hero_subtitle: 'We are a broker — we don\'t finance directly, but find you the best factoring terms from 30+ verified partners. No hidden fees.',
    hero_badge_free: 'No hidden fees',
    hero_badge_speed: 'Fast review',
    hero_badge_geo: 'All Europe',
    hero_social_proof: 'Trusted by 500+ companies',

    // QuickLeadForm
    form_title: 'Get a consultation',
    form_name: 'Name',
    form_name_placeholder: 'John Smith',
    form_phone: 'Phone',
    form_phone_placeholder: '+371 20000000',
    form_company: 'Company / Reg. no.',
    form_company_placeholder: 'SIA Ozols',
    form_submit: 'Learn the terms',
    form_privacy: 'By clicking, you agree to our privacy policy',
    form_toast_title: 'Application submitted',
    form_toast_desc: 'We will get in touch with you shortly.',

    // StatsStrip
    stats_1_value: '500+',
    stats_1_label: 'applications processed',
    stats_2_value: '30+',
    stats_2_label: 'partner factoring companies',
    stats_3_value: 'Fast',
    stats_3_label: 'review',
    stats_4_value: '€0',
    stats_4_label: 'consultation cost',

    // TrustBadges
    trust_title: 'Our trusted partners',

    // Services
    services_title: 'Factoring',
    services_title_highlight: 'types',
    services_subtitle: 'We select the optimal solution for you from verified partners',
    services_1_title: 'Classic factoring',
    services_1_desc: 'You issue an invoice to your buyer for goods or services. We find a factoring company that immediately pays you up to 90% of the invoice amount. You receive the remainder once your buyer settles with the factor.',
    services_2_title: 'Purchase factoring',
    services_2_desc: 'Need to buy goods but can\'t pay immediately? We find a partner who pays your supplier on your behalf. You receive the goods right away and settle the payment within 90 days — once you\'ve sold the stock.',
    services_learn_more: 'Learn more',

    // Benefits
    benefits_title: 'Why choose us',
    benefits_1_title: 'Instant liquidity',
    benefits_1_desc: 'Fast access to funds instead of waiting for buyer payments',
    benefits_2_title: 'Improved cash flow',
    benefits_2_desc: 'Easily cover daily expenses and invest in growth',
    benefits_3_title: 'Transparency',
    benefits_3_desc: 'Clear terms and full information at every stage of the transaction',
    benefits_4_title: 'Focus on business',
    benefits_4_desc: 'Concentrate on growth, not chasing debts',
    benefits_5_title: 'Flexible solutions',
    benefits_5_desc: 'We tailor terms to your company\'s specific needs',
    benefits_6_title: 'Independence',
    benefits_6_desc: 'We are not tied to any single factor — we choose the best for you',
    benefits_7_title: 'Competitiveness',
    benefits_7_desc: 'Instant access to working capital lets you offer better terms to your clients',

    // HowItWorks
    how_title: 'How we work',
    how_subtitle: 'Simple process — from application to financing',
    how_1_title: 'Application',
    how_1_desc: 'You submit an application and describe your situation',
    how_2_title: 'Analysis',
    how_2_desc: 'We review your invoices, buyers, and needs',
    how_3_title: 'Selection',
    how_3_desc: 'We select the best offers from our factoring partner companies',
    how_4_title: 'Financing',
    how_4_desc: 'You receive funds in your account from the chosen factor',
    how_img_alt: 'Factoring scheme',

    // Representatives
    rep_title: 'Regional representatives',
    rep_subtitle: 'Find a representative in your region',
    rep_name_placeholder: '[Representative name]',

    // FAQ
    faq_title: 'Frequently asked questions',
    faq_subtitle: 'Everything you need to know about working with us and factoring',
    faq_1_q: 'What is the difference between a broker and a factoring company?',
    faq_1_a: 'A factoring company directly finances your transactions. A broker is an independent consultant who analyses your situation and selects the best terms from many factors.',
    faq_2_q: 'How much do your services cost?',
    faq_2_a: 'The consultation and offer selection come at no cost to you. We receive a fee from the factoring company only after a deal is successfully concluded.',
    faq_3_q: 'How quickly can I receive financing?',
    faq_3_a: 'After receiving your application, our team carries out a fast review and presents the first offers promptly. Full transaction processing with the factor usually takes 3 to 7 business days.',
    faq_4_q: 'Is factoring suitable for small businesses?',
    faq_4_a: 'Yes. Most factoring companies work with businesses that have been operating for at least 6 months. Financing requirements start from tens of thousands of euros.',
    faq_5_q: 'We work with buyers from other countries — is that a problem?',
    faq_5_a: 'No. Most of our partner companies work with debtors across the European Union and beyond.',
    faq_6_q: 'What documents are needed to get started?',
    faq_6_a: 'At the first stage, it is enough to fill in the application and describe your situation. Documents are requested by the specific factoring company at the review stage.',

    // ContactForm
    contact_title: 'Apply for financing selection',
    contact_subtitle: 'Describe your situation — we will analyse it and select the optimal solution from dozens of partners.',
    contact_why_title: 'Why apply now:',
    contact_why_1_title: 'Professional analysis',
    contact_why_1_desc: 'You don\'t pay for our services — the factor pays the fee.',
    contact_why_2_title: 'Time savings',
    contact_why_2_desc: 'We know the requirements of all factors and will only apply where it will be approved.',
    contact_why_3_title: 'Better terms',
    contact_why_3_desc: 'Through our partner agreements, we can secure a lower rate than the standard.',
    contact_label_name: 'Name',
    contact_label_company: 'Company / VAT number',
    contact_label_phone: 'Phone',
    contact_label_email: 'Email',
    contact_label_amount: 'Financing amount',
    contact_amount_1: 'up to €10,000',
    contact_amount_2: '€10,000 – €50,000',
    contact_amount_3: '€50,000 – €200,000',
    contact_amount_4: 'more than €200,000',
    contact_amount_placeholder: 'Select amount',
    contact_label_desc: 'Brief description of your situation (optional)',
    contact_desc_placeholder: 'E.g.: need factoring to work with retail chains...',
    contact_submit: 'Submit application',
    contact_response_time: 'We usually respond within 2 hours during business hours',
    contact_toast_title: 'Application submitted',
    contact_toast_desc: 'We will get in touch within 2 hours.',

    // Footer
    footer_tagline: 'Factoring broker in Europe',
    footer_nav_title: 'Navigation',
    footer_contact_title: 'Contact',
    footer_phone_placeholder: '[to be provided]',
    footer_email_placeholder: '[to be provided]',
    footer_copyright: '© 2025 AJ Broker. All rights reserved.',
    footer_disclaimer: 'AJ Broker is a broker and is not a credit institution. We do not issue loans or credits. Financing is provided by our partner factoring companies.',

    // FloatingCTA
    floating_cta: 'Apply',

    // StickyContactBar
    sticky_text: 'Ready to start? Get in touch with us',
    sticky_cta: 'Apply',

    // ExitIntentModal
    exit_title: 'Wait — before you go!',
    exit_subtitle: 'Get in touch with us. Our expert will explain whether factoring is right for your situation.',
    exit_phone_label: 'Phone',
    exit_phone_placeholder: '+371 20000000',
    exit_submit: 'Get a call',
    exit_toast_title: 'Application submitted',
    exit_toast_desc: 'We will get in touch with you shortly.',
  },
} as const;

export type Translations = typeof translations['lv'];
