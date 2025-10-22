import "i18next";
import common from "../locales/de/common.json";
import nav from "../locales/de/nav.json";
import footer from "../locales/de/footer.json";
import home from "../locales/de/home.json";
import skills from "../locales/de/skills.json";
import projects from "../locales/de/projects.json";
import about from "../locales/de/about.json";
import contact from "../locales/de/contact.json";
import policy from "../locales/de/policy.json";
import seo from "../locales/de/seo.json";


declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof common;
      nav: typeof nav;
      footer: typeof footer;
      home: typeof home;
      skills: typeof skills;
      projects: typeof projects;
      about: typeof about;
      contact: typeof contact;
      policy: typeof policy;
      seo: typeof seo;
    };
  }
}