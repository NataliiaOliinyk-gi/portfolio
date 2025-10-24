import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Базові ресурси можна частково імпортувати одразу
import enCommon from "../locales/en/common.json";
import enNav from "../locales/en/nav.json";
import enFooter from "../locales/en/footer.json";
import enHome from "../locales/en/home.json";
import enSeo from "../locales/en/seo.json";
import enContactWhatsapp from "../locales/en/contactWhatsapp.json";
import enContactMail from "../locales/en/contactMail.json";
import enPolicy from "../locales/en/policy.json";
import enAbout from "../locales/en/about.json";
import enContact from "../locales/en/contact.json";
import enProjects from "../locales/en/projects.json";
import enSkills from "../locales/en/skills.json";
import enNotFound from "../locales/en/notFound.json";

import deCommon from "../locales/de/common.json";
import deNav from "../locales/de/nav.json";
import deFooter from "../locales/de/footer.json";
import deHome from "../locales/de/home.json";
import deSeo from "../locales/de/seo.json";
import deContactWhatsapp from "../locales/de/contactWhatsapp.json";
import deContactMail from "../locales/de/contactMail.json";
import dePolicy from "../locales/de/policy.json";
import deAbout from "../locales/de/about.json";
import deContact from "../locales/de/contact.json";
import deProjects from "../locales/de/projects.json";
import deSkills from "../locales/de/skills.json";
import deNotFound from "../locales/de/notFound.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "de",
    supportedLngs: ["de", "en"],
    ns: [
      "common",
      "nav",
      "footer",
      "home",
      "seo",
      "contactWhatsapp",
      "contactMail",
      "policy",
      "about",
      "contact",
      "projects",
      "skills",
      "notFound",
    ],
    defaultNS: "common",
    resources: {
      en: {
        common: enCommon,
        nav: enNav,
        footer: enFooter,
        home: enHome,
        seo: enSeo,
        contactWhatsapp: enContactWhatsapp,
        contactMail: enContactMail,
        policy: enPolicy,
        about: enAbout,
        contact: enContact,
        projects: enProjects,
        skills: enSkills,
        notFound: enNotFound,
      },
      de: {
        common: deCommon,
        nav: deNav,
        footer: deFooter,
        home: deHome,
        seo: deSeo,
        contactWhatsapp: deContactWhatsapp,
        contactMail: deContactMail,
        policy: dePolicy,
        about: deAbout,
        contact: deContact,
        projects: deProjects,
        skills: deSkills,
        notFound: deNotFound,
      },
    },
    interpolation: { escapeValue: false },
    returnEmptyString: false,
    detection: {
      // збереження вибору мови
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

// оновлюємо <html lang="...">
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
