import type { FC } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Skills.module.css";

const Skills: FC = () => {
  const { t } = useTranslation(["skills"]);

  return (
    <div>
      <p>Skills</p>
      <p className={styles.subtitle}>{t("title")}</p>
    </div>
  );
};

export default Skills;
