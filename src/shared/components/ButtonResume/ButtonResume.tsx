import type { FC } from "react";
import { useTranslation } from "react-i18next";

import DownloadIcon from "../../../shared/components/icons/DownloadIcon";

import { getContactItems } from "../../../shared/data/contact.items";

import styles from "./ButtonResume.module.css";

const ButtonResume: FC = () => {
  const { t: tCtas, i18n } = useTranslation("contact");
  const { t: tWa } = useTranslation<"contactWhatsapp">("contactWhatsapp");
  const { t: tMail } = useTranslation<"contactMail">("contactMail");

  const items = getContactItems({
    tCtas,
    tMail,
    tWa,
    locale: (i18n.resolvedLanguage || "de") as "de" | "en",
  });

  const resume = items.find((i) => i.key === "resume")!;
  return (
    <a
      className={styles.resumeBtn}
      href={resume.href}
      {...(resume.download ? { download: resume.download } : {})}
    >
      {resume.title}
      <DownloadIcon />
    </a>
  );
};

export default ButtonResume;
