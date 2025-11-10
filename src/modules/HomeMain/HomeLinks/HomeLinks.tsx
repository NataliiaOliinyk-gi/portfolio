import type { FC } from "react";
import { useTranslation } from "react-i18next";

import ButtonResume from "../../../shared/components/ButtonResume/ButtonResume";

import styles from "./HomeLinks.module.css";

const HomeLinks: FC = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className={styles.btnBox}>
      <div className={styles.linksBtnBox}>
        <a
          className={styles.linkBtn}
          href="/projects"
          rel="noopener noreferrer"
        >
          {t("home:hero.cta1")}
        </a>

        <a className={styles.linkBtn} href="/contact" rel="noopener noreferrer">
          {t("home:hero.cta2")}
        </a>
      </div>
      <div className={styles.resumeBox}>
        <ButtonResume />
      </div>
    </div>
  );
};

export default HomeLinks;
