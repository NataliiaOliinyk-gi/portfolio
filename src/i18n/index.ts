import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Базові ресурси можна частково імпортувати одразу
import enCommon from "../locales/en/common.json";
import enNav from "../locales/en/nav.json";
import enFooter from "../locales/en/footer.json";
import enHome from "../locales/en/home.json";
import enSeo from "../locales/en/seo.json";

import deCommon from "../locales/de/common.json";
import deNav from "../locales/de/nav.json";
import deFooter from "../locales/de/footer.json";
import deHome from "../locales/de/home.json";
import deSeo from "../locales/de/seo.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "de",
    supportedLngs: ["de", "en"],
    ns: ["common", "nav","footer", "home", "seo"],
    defaultNS: "common",
    resources: {
      en: { common: enCommon, nav: enNav, footer: enFooter, home: enHome, seo: enSeo },
      de: { common: deCommon, nav: deNav, footer: deFooter, home: deHome, seo: deSeo },
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