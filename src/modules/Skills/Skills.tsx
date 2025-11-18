import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Container from "../../shared/components/Container/Container";
import Subtitle from "../../shared/components/Subtitle/Subtitle";
import SkillCard from "../../shared/components/SkillCard/SkillCard";

import skillsItems from "../../shared/data/skillsItems";
import type { ISkillsItem } from "../../shared/data/skillsItems";

import styles from "./Skills.module.css";

const Skills: FC = () => {
  const { t } = useTranslation(["skills"]);

  const elements = skillsItems.map(({ id, icon, labelKey }: ISkillsItem) => (
    <SkillCard key={id} id={id} icon={icon} text={t(`items.${labelKey}`)} />
  ));

  return (
    <Container>
      <Subtitle text={t("skills:hero.subtitle")} />
      <ul className={styles.skillBox}>{elements}</ul>
    </Container>
  );
};

export default Skills;
