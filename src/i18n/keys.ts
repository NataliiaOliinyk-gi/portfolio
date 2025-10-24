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
import contactWhatsapp from "../locales/de/contactWhatsapp.json";
import contactMail from "../locales/de/contactMail.json";
import notFound from "../locales/de/notFound.json";

export type CommonKey = keyof typeof common;
export type NavKey = keyof typeof nav;
export type FooterKey = keyof typeof footer;
export type HomeKey = keyof typeof home;
export type SkillsKey = keyof typeof skills;
export type ProjectsKey = keyof typeof projects;
export type AboutKey = keyof typeof about;
export type ContactKey = keyof typeof contact;
export type PolicyKey = keyof typeof policy;
export type ContactWhatsappKey = keyof typeof contactWhatsapp;
export type ContactMailKey = keyof typeof contactMail;
export type NotFoundKey = keyof typeof notFound;

/** Листові ключі: лише кінцеві, без батьківських */
type LeafKeys<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? `${K}.${LeafKeys<T[K]>}`
        : K;
    }[keyof T & string]
  : never;

export type SeoKey = LeafKeys<typeof seo>;
// -> "home.title" | "home.description" | "project.title" | "project.description"
