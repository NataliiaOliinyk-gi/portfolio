import type { TFunction } from "i18next";
import { PHONE_E164, MAIL_TO } from "../data/contact.constants";

/** Побудова href для WhatsApp (локалізований текст) */
export const buildWhatsappHref = (
  tWa: TFunction<"contactWhatsapp">
): string => {
  const text = tWa("whatsappTemplate");
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(text)}`;
};

/** Побудова href для Mail
 * mode = "gmail" відкриває веб-Gmail (рекомендовано, якщо mailto не працює)
 * mode = "mailto" використовує системний поштовий клієнт
 */
export const buildMailHref = (
  tMail: TFunction<"contactMail">,
  mode: "gmail" | "mailto" = "gmail"
): string => {
  const subject = tMail("subject");
  const body = tMail("body");

  return mode === "gmail"
    ? `https://mail.google.com/mail/?${new URLSearchParams({
        view: "cm",
        fs: "1",
        to: MAIL_TO,
        su: subject,
        body,
      })}`
    : `mailto:${MAIL_TO}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
};
