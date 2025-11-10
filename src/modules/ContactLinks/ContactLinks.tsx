import type { FC } from "react";

import { useTranslation } from "react-i18next";

import DownloadIcon from "../../shared/components/icons/DownloadIcon";

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
  const resume = items.find((i) => i.key === "resume")!;

  return (
    <div>
      <div className={styles.ctaWrap} aria-label={tCtas("linksIntro")}>
        <p className={styles.linksIntro}>{tCtas("linksIntro")}</p>
        
        <a
          className={styles.resumeBtn}
          href={resume.href}
          {...(resume.download ? { download: resume.download } : {})}
        >
          {resume.title}
          <DownloadIcon />
        </a>

        
        <div className={styles.twoCols}>
          <div className={styles.col}>
            <a
              className={styles.linkBtn}
              href={email.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {email.title}
            </a>
            <a
              className={styles.linkBtn}
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {whatsapp.title}
            </a>
          </div>

          <div className={styles.col}>
            <a
              className={styles.linkBtn}
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {github.title}
            </a>
            <a
              className={styles.linkBtn}
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkedin.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;
