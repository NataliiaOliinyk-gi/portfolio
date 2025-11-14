import type { FC } from "react";
import { useTranslation } from "react-i18next";

import skillsItems from "../../shared/data/skillsItems";
import type { ISkillsItem } from "../../shared/data/skillsItems";

import styles from "./Skills.module.css";

const Skills: FC = () => {
  const { t } = useTranslation(["skills"]);

  const elements = skillsItems.map(({ id, icon, labelKey }: ISkillsItem) => (
      <li key={id} className={styles.skillCard}>
        <p className={styles.title}>{id}</p>
        <p>{icon}</p>
        <p>{t(`items.${labelKey}`)}</p>
      </li>
    ))

  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>{t("skills:hero.subtitle")}</p>
      <ul className={styles.skillBox}>{elements}</ul>
    </div>
  );
};

export default Skills;
