import type { FC } from "react";

import { useTranslation } from "react-i18next";

import ButtonResume from "../../shared/components/ButtonResume/ButtonResume";
import ButtonLinks from "../../shared/components/ButtonLinks/ButtonLinks";

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

  const email = items.find((i) => i.key === "email")!;
  const whatsapp = items.find((i) => i.key === "whatsapp")!;
  const github = items.find((i) => i.key === "github")!;
  const linkedin = items.find((i) => i.key === "linkedin")!;

  return (
    <div>
      <div className={styles.ctaWrap} aria-label={tCtas("linksIntro")}>
        <p className={styles.linksIntro}>{tCtas("linksIntro")}</p>

        <ButtonResume />

        <div className={styles.twoCols}>
          <div className={styles.col}>
            <ButtonLinks
              href={email.href}
              text={email.title}
              className={styles.contactLink}
            />
            <ButtonLinks
              href={whatsapp.href}
              text={whatsapp.title}
              className={styles.contactLink}
            />
          </div>

          <div className={styles.col}>
            <ButtonLinks
              href={github.href}
              text={github.title}
              className={styles.contactLink}
            />
            <ButtonLinks
              href={linkedin.href}
              text={linkedin.title}
              className={styles.contactLink}
            />
          </div>
        </div>
      </div>

      <p className={styles.closing}>{tCtas("closing")}</p>
    </div>
  );
};

export default ContactLinks;
