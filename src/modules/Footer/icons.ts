import LinkedInIcon from "../../assets/icons/linkedin-112.svg";
import GitHubIcon from "../../assets/icons/github-logo-6532.svg";
import WhatsappIcon from "../../assets/icons/whatsapp-logo-4453.svg";
import MailIcon from "../../assets/icons/mail-142.svg";

import type { TFunction } from "i18next";

export interface IIconsMenu {
  title: string;
  href: string;
  icon: string;
}

const PHONE_E164 = "380632961519";
const MAIL_TO = "nataliia.oliinyk.de@gmail.com";

/** Побудова href для WhatsApp (локалізований текст) */
const buildWhatsappHref = (tWa: TFunction<"contactWhatsapp">): string => {
  const text = tWa("whatsappTemplate");
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(text)}`;
};

/** Побудова href для Mail
 * mode = "gmail" відкриває веб-Gmail (рекомендовано, якщо mailto не працює)
 * mode = "mailto" використовує системний поштовий клієнт
 */
const buildMailHref = (
  tMail: TFunction<"contactMail">,
  mode: "gmail" | "mailto" = "gmail"
): string => {
  const subject = tMail("subject");
  const body = tMail("body");

  if (mode === "gmail") {
    // веб-Gmail compose
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: MAIL_TO,
      su: subject,
      body,
    });
    return `https://mail.google.com/mail/?${params.toString()}`;
  }

  // класичний mailto:
  return `mailto:${MAIL_TO}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

/** 
 * Головний конструктор меню іконок 
 * 
*/
const getIconsMenu = (
  tWa: TFunction<"contactWhatsapp">,
  tMail: TFunction<"contactMail">,
  mailMode: "gmail" | "mailto" = "gmail"
): IIconsMenu[] => {
  return [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/nataliia--oliinyk/",
      icon: LinkedInIcon,
    },
    {
      title: "GitHub",
      href: "https://github.com/NataliiaOliinyk-gi",
      icon: GitHubIcon,
    },
    {
      title: "Whatsapp",
      href: buildWhatsappHref(tWa),
      icon: WhatsappIcon,
    },
    {
      title: "Mail",
      href: buildMailHref(tMail, mailMode),
      icon: MailIcon,
    },
  ];
};

export default getIconsMenu;
