import type { FC } from "react";
import { useTranslation } from "react-i18next";

import ButtonResume from "../../shared/components/ButtonResume/ButtonResume";
import ButtonLinks from "../../shared/components/ButtonLinks/ButtonLinks";

import styles from "./HomeLinks.module.css";

const HomeLinks: FC = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className={styles.btnBox}>
      <div className={styles.linksBtnBox}>
        <ButtonLinks href="/projects" text={t("home:hero.cta1")} />
        <ButtonLinks href="/contact" text={t("home:hero.cta2")} />
      </div>
      <div className={styles.resumeBox}>
        <ButtonResume />
      </div>
    </div>
  );
};

export default HomeLinks;
