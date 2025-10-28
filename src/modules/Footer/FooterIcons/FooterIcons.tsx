import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { getContactItems } from "../../../shared/data/contact.items";

import styles from "./FooterIcons.module.css";

const FooterIcons: FC = () => {
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
    .filter((i) => i.icon)
    .map(({ key, title, href, icon }) => {
      return (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
            title={title}
            className={styles.iconLink}
          >
            <div className={styles.iconBox}>
              <img src={icon!} alt={title} className={styles.iconImg} />
            </div>
          </a>
        </li>
      );
    });

  return (
    <div className={styles.contsiner}>
      <ul className={styles.menu}>{elements}</ul>
    </div>
  );
};

export default FooterIcons;
