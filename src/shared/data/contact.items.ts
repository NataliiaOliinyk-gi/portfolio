import type { TFunction } from "i18next";

import LinkedInIcon from "../../assets/icons/linkedin.svg";
import GitHubIcon from "../../assets/icons/github.svg";
import WhatsappIcon from "../../assets/icons/whatsapp.svg";
import MailIcon from "../../assets/icons/mail.svg";

import { buildMailHref, buildWhatsappHref } from "../utils/contactLinks";

export type ContactItem = {
  key: "email" | "resume" | "github" | "linkedin" | "whatsapp";
  title: string;
  href: string;
  icon?: string;
  download?: string;
  newTab?: boolean;
};

export const getContactItems = ({
  tCtas,
  tMail,
  tWa,
  locale,
}: {
  tCtas: TFunction<"contact">;
  tMail: TFunction<"contactMail">;
  tWa: TFunction<"contactWhatsapp">;
  locale: "de" | "en";
}): ContactItem[] => {
  const resumeHref =
    locale === "de"
      ? "/cv/Nataliia_Oliinyk_Lebenslauf.pdf"
      : "/cv/Nataliia_Oliinyk_CV.pdf";
  const resumeFileName =
    locale === "de"
      ? "Nataliia_Oliinyk_Lebenslauf.pdf"
      : "Nataliia_Oliinyk_CV.pdf";

  return [
    {
      key: "email",
      title: tCtas("ctaButtons.email"),
      href: buildMailHref(tMail, "gmail"),
      icon: MailIcon,
      newTab: true,
    },
    {
      key: "resume",
      title: tCtas("ctaButtons.resume"),
      href: resumeHref,
      download: resumeFileName,
      newTab: false,
    },
    {
      key: "github",
      title: tCtas("ctaButtons.github"),
      href: "https://github.com/NataliiaOliinyk-gi",
      icon: GitHubIcon,
      newTab: true,
    },
    {
      key: "linkedin",
      title: tCtas("ctaButtons.linkedin"),
      href: "https://www.linkedin.com/in/nataliia--oliinyk/",
      icon: LinkedInIcon,
      newTab: true,
    },
    {
      key: "whatsapp",
      title: tCtas("ctaButtons.whatsapp"),
      href: buildWhatsappHref(tWa),
      icon: WhatsappIcon,
      newTab: true,
    },
  ];
};
