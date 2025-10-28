import type { FC } from "react";

import { useTranslation } from "react-i18next";

import { getContactItems } from "../../shared/data/contact.items";

import styles from "./ContactLinks.module.css";

const ContactLinks: FC = () => {
  const { t: tCtas, i18n } = useTranslation("contact");
  const { t: tWa } = useTranslation<"contactWhatsapp">("contactWhatsapp");
  const { t: tMail } = useTranslation<"contactMail">("contactMail");

  const items = getContactItems({
    tCtas,
    tMail,
    tWa,
    locale: (i18n.resolvedLanguage || "de") as "de" | "en",
  });

  const elements = items
    .filter((i) =>
      ["email", "resume", "github", "linkedin", "whatsapp"].includes(i.key)
    )
    .map(({ key, title, href, download, newTab }) => {
      return (
        <a
          key={key}
          className={styles.linkBtn}
          href={href}
          {...(download ? { download } : {})}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          {title}
        </a>
      );
    });

  return (
    <div>
      <p className={styles.linksIntro}>{tCtas("linksIntro")}</p>

      <div role="group" aria-label={tCtas("title")}>
        <ul className={styles.linksRow}>{elements}</ul>
      </div>
    </div>
  );
};

export default ContactLinks;
