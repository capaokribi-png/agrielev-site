import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  fr: {
    "nav.product": "Produit",
    "nav.pricing": "Offres",
    "nav.pledge": "Engagement 5%",
    "nav.partners": "Partenaires",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.openApp": "Ouvrir CuniSmart",

    "hero.eyebrow": "AGRITECH · ÉLEVAGE · AFRIQUE",
    "hero.launch": "LANCEMENT OFFICIEL",
    "hero.launchWhen": "C'est aujourd'hui",
    "hero.title": "Pilotez votre élevage avec CuniSmart.",
    "hero.subtitle": "Le premier logiciel d'élevage hors-ligne pour l'Afrique. Rappels automatiques, Mobile Money natif, label qualité. Gratuit pour commencer.",
    "hero.ctaApp": "Ouvrir CuniSmart",
    "hero.ctaWa": "Parler sur WhatsApp",
    "hero.trust": "🇨🇲 Cameroun · 🇧🇯 Bénin · Paiement Mobile Money local · Marque en cours de protection OAPI (17 pays)",
    "hero.badge.oapi": "OAPI",
    "hero.badge.oapiSub": "Marque protégée",
    "hero.badge.pledge": "5%",
    "hero.badge.pledgeSub": "Reversés à l'AgriTech",
    "hero.badge.money": "MTN · OM",
    "hero.badge.moneySub": "Mobile Money",
    "hero.badge.offline": "100% OFFLINE",


    "why.kicker": "Pourquoi CuniSmart",
    "why.title": "Trois raisons de démarrer aujourd'hui",
    "why.1.title": "Ne rien oublier",
    "why.1.body": "Saillies, palpations, sevrages : chaque étape est rappelée automatiquement.",
    "why.2.title": "Savoir ce qui rapporte",
    "why.2.body": "Marge par animal, décisions guidées par les chiffres et non par l'intuition.",
    "why.3.title": "Prouver ses résultats",
    "why.3.body": "Historique fiable et rapport financier prêts pour la banque et vos partenaires.",

    "product.kicker": "Produit",
    "product.title": "CuniSmart, la boîte à outils complète de l'éleveur",
    "product.try": "Essayer gratuitement",
    "product.f1.title": "Moteur de reproduction automatique",
    "product.f1.body": "Saillies, palpations, mise-bas, sevrages calculés pour vous.",
    "product.f2.title": "100% hors-ligne",
    "product.f2.body": "Fonctionne sans internet. Synchronisation dès que le réseau revient.",
    "product.f3.title": "Multi-espèces",
    "product.f3.body": "Lapin, porc, bovin, chèvre, volaille — un seul outil pour tout suivre.",
    "product.f4.title": "Nutrition locale",
    "product.f4.body": "Rations formulées à partir d'ingrédients disponibles près de chez vous.",
    "product.f5.title": "Rapport financier OHADA",
    "product.f5.body": "Un compte de résultat clair, inspiré du référentiel OHADA.",
    "product.f6.title": "Traçabilité QR",
    "product.f6.body": "Étiquettes QR et label « Certifié CuniSmart » pour vos acheteurs.",
    "product.label.title": "Label Qualité CuniSmart",
    "product.label.body": "Un standard de traçabilité et de confiance pour vos acheteurs et partenaires.",

    "pricing.kicker": "Offres",
    "pricing.title": "Un prix juste, pensé pour l'Afrique",
    "pricing.free.name": "Gratuit",
    "pricing.free.price": "0 FCFA",
    "pricing.free.desc": "Cheptel de base, rappels essentiels, hors-ligne.",
    "pricing.free.cta": "Commencer",
    "pricing.pro.name": "Pro",
    "pricing.pro.price": "9 500 FCFA/AN",
    "pricing.pro.badge": "Le plus choisi",
    "pricing.pro.desc": "Tout Gratuit + sauvegarde cloud, traçabilité QR, niveaux experts.",
    "pricing.pro.cta": "Passer Pro",
    "pricing.super.name": "Multi-Élevage Super PRO",
    "pricing.super.price": "30 000 FCFA/AN",
    "pricing.super.desc": "Tout Pro + multi-espèces complet, formations certifiantes, rapport banque.",
    "pricing.super.cta": "Choisir Super PRO",
    "pricing.pay": "Paiement par Mobile Money : 🇨🇲 MTN MoMo / Orange Money · 🇧🇯 MTN MoMo",
    "pricing.referral": "🎁 Parrainage : gagnez 500 FCFA par filleul Pro et 1 000 FCFA par filleul Super PRO",
    "pricing.label": "Tous les plans incluent le support WhatsApp et le label CuniSmart.",

    "b2b.kicker": "Offre B2B",
    "b2b.title": "CuniSmart Marque — pour coopératives, ONG et franchises",
    "b2b.body": "Licence institutionnelle annuelle à partir de 700 000 FCFA/an : comptes membres, formation, tableau de bord réseau et label qualité.",
    "b2b.partners": "Réseaux partenaires : SCOOPS CAPAO · franchises d'élevage",
    "b2b.cta": "Discuter d'un partenariat",

    "pledge.kicker": "Notre engagement",
    "pledge.title": "L'Engagement 5%",
    "pledge.body": "AgriElev reverse 5% de chaque abonnement payé pour soutenir l'AgriTech et les agriculteurs africains — formation, équipement de jeunes éleveurs et projets locaux. Chaque abonné fait grandir toute la filière.",
    "pledge.note": "Bilan publié chaque année",

    "about.kicker": "À propos",
    "about.title": "Plus qu'une app : un éditeur de logiciels AgriTech",
    "about.1.title": "Développer",
    "about.1.body": "Des applications qui marchent partout — légères, rapides et hors-ligne.",
    "about.2.title": "Éduquer & former",
    "about.2.body": "Formations et certification intégrées, en français simple et langues locales.",
    "about.3.title": "Accompagner",
    "about.3.body": "Déploiement terrain avec les coopératives et les projets partenaires.",
    "about.footer": "Fondée par un éleveur, à Kribi, Cameroun.",

    "cta.title": "Prêt à gagner plus avec votre élevage ?",
    "cta.app": "Ouvrir CuniSmart",
    "cta.wa.cm": "🇨🇲 +237 696 603 209",
    "cta.wa.bj": "🇧🇯 Bénin : +229 90 11 39 15",

    "footer.tagline": "Logiciels & applications AgriTech pour l'Afrique",
    "footer.nav": "Naviguer",
    "footer.product": "Produit",
    "footer.contact": "Contact",
    "footer.terms": "Conditions d'utilisation",
    "footer.privacy": "Politique de confidentialité",
    "footer.copy": "© 2026 AgriElev SARL — Cameroun · CuniSmart, par AgriElev",

    "signature": "CuniSmart, par AgriElev",
    "waMessage": "Bonjour AgriElev, je découvre CuniSmart et je souhaite en savoir plus.",
  },
  en: {
    "nav.product": "Product",
    "nav.pricing": "Pricing",
    "nav.pledge": "5% Pledge",
    "nav.partners": "Partners",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.openApp": "Open CuniSmart",

    "hero.eyebrow": "AGRITECH · LIVESTOCK · AFRICA",
    "hero.launch": "OFFICIAL LAUNCH",
    "hero.launchWhen": "Live today",
    "hero.title": "Run your farm with CuniSmart.",
    "hero.subtitle": "The first offline-first livestock software built for Africa. Automatic reminders, native Mobile Money, quality label. Free to start.",
    "hero.ctaApp": "Open CuniSmart",
    "hero.ctaWa": "Chat on WhatsApp",
    "hero.trust": "🇨🇲 Cameroon · 🇧🇯 Benin · Local Mobile Money payment · Trademark filing in progress with OAPI (17 countries)",
    "hero.badge.oapi": "OAPI",
    "hero.badge.oapiSub": "Trademark filed",
    "hero.badge.pledge": "5%",
    "hero.badge.pledgeSub": "Given back to AgriTech",
    "hero.badge.money": "MTN · OM",
    "hero.badge.moneySub": "Mobile Money",
    "hero.badge.offline": "100% OFFLINE",


    "why.kicker": "Why CuniSmart",
    "why.title": "Three reasons to start today",
    "why.1.title": "Forget nothing",
    "why.1.body": "Matings, palpations, weanings — every step is reminded automatically.",
    "why.2.title": "Know what pays",
    "why.2.body": "Margin per animal, decisions driven by numbers instead of guesswork.",
    "why.3.title": "Prove your results",
    "why.3.body": "Trustworthy history and a financial report ready for the bank and partners.",

    "product.kicker": "Product",
    "product.title": "CuniSmart, the farmer's complete toolkit",
    "product.try": "Start free",
    "product.f1.title": "Automatic breeding engine",
    "product.f1.body": "Matings, palpations, kindling and weaning calculated for you.",
    "product.f2.title": "100% offline",
    "product.f2.body": "Works without internet. Syncs automatically when signal returns.",
    "product.f3.title": "Multi-livestock",
    "product.f3.body": "Rabbits, pigs, cattle, goats, poultry — one tool for the whole herd.",
    "product.f4.title": "Local nutrition",
    "product.f4.body": "Rations built from ingredients available near your farm.",
    "product.f5.title": "OHADA financial report",
    "product.f5.body": "A clear profit & loss report inspired by the OHADA standard.",
    "product.f6.title": "QR traceability",
    "product.f6.body": "QR tags and the “Certified CuniSmart” label for your buyers.",
    "product.label.title": "CuniSmart Quality Label",
    "product.label.body": "A traceability and trust standard for your buyers and partners.",

    "pricing.kicker": "Pricing",
    "pricing.title": "A fair price, built for Africa",
    "pricing.free.name": "Free",
    "pricing.free.price": "0 FCFA",
    "pricing.free.desc": "Basic herd management, essential reminders, offline.",
    "pricing.free.cta": "Start free",
    "pricing.pro.name": "Pro",
    "pricing.pro.price": "9,500 FCFA/YEAR",
    "pricing.pro.badge": "Most chosen",
    "pricing.pro.desc": "Everything in Free + cloud backup, QR traceability, expert levels.",
    "pricing.pro.cta": "Go Pro",
    "pricing.super.name": "Multi-Livestock Super PRO",
    "pricing.super.price": "30,000 FCFA/YEAR",
    "pricing.super.desc": "Everything in Pro + full multi-livestock, certified training, bank-ready report.",
    "pricing.super.cta": "Choose Super PRO",
    "pricing.pay": "Mobile Money payment: 🇨🇲 MTN MoMo / Orange Money · 🇧🇯 MTN MoMo",
    "pricing.referral": "🎁 Referral: earn 500 FCFA per Pro referral and 1,000 FCFA per Super PRO referral",
    "pricing.label": "All plans include WhatsApp support and the CuniSmart label.",

    "b2b.kicker": "B2B offer",
    "b2b.title": "CuniSmart Brand — for cooperatives, NGOs and franchises",
    "b2b.body": "Annual institutional licence from 700,000 FCFA/year: member accounts, training, network dashboard and quality label.",
    "b2b.partners": "Partner networks: SCOOPS CAPAO · livestock franchises",
    "b2b.cta": "Discuss a partnership",

    "pledge.kicker": "Our commitment",
    "pledge.title": "The 5% Pledge",
    "pledge.body": "AgriElev gives back 5% of every paid subscription to support African AgriTech and farmers — training, equipping young farmers and local projects.",
    "pledge.note": "Report published every year",

    "about.kicker": "About",
    "about.title": "More than an app: an AgriTech software company",
    "about.1.title": "Build",
    "about.1.body": "Apps that run everywhere — light, fast and offline-first.",
    "about.2.title": "Educate & train",
    "about.2.body": "Built-in training and certification in plain language and local tongues.",
    "about.3.title": "Support",
    "about.3.body": "Field deployment together with cooperatives and partner projects.",
    "about.footer": "Founded by a farmer, in Kribi, Cameroon.",

    "cta.title": "Ready to earn more from your farm?",
    "cta.app": "Open CuniSmart",
    "cta.wa.cm": "🇨🇲 +237 696 603 209",
    "cta.wa.bj": "🇧🇯 Benin: +229 90 11 39 15",

    "footer.tagline": "AgriTech software & apps for Africa",
    "footer.nav": "Navigate",
    "footer.product": "Product",
    "footer.contact": "Contact",
    "footer.terms": "Terms of use",
    "footer.privacy": "Privacy policy",
    "footer.copy": "© 2026 AgriElev SARL — Cameroon · CuniSmart, by AgriElev",

    "signature": "CuniSmart, by AgriElev",
    "waMessage": "Hello AgriElev, I discovered CuniSmart and would like to know more.",
  },
};

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: "fr",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = sessionStorage.getItem("agrielev-lang") as Lang | null;
    if (saved === "fr" || saved === "en") {
      setLangState(saved);
    } else {
      const browser = navigator.language?.toLowerCase() ?? "fr";
      setLangState(browser.startsWith("en") ? "en" : "fr");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    sessionStorage.setItem("agrielev-lang", l);
    setLangState(l);
  };

  const t = (k: string) => translations[lang][k] ?? translations.fr[k] ?? k;

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);

export const waLink = (phone: string, msg: string) =>
  `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;

export const APP_URL = "https://cunismart.com";
export const WA_CM = "237696603209";
export const WA_BJ = "22990113915";
