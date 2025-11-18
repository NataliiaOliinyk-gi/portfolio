import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Container from "../../shared/components/Container/Container";
import Subtitle from "../../shared/components/Subtitle/Subtitle";
import ButtonLinks from "../../shared/components/ButtonLinks/ButtonLinks";

import styles from "./MyProjects.module.css";

const MyProjects: FC = () => {
  const { t } = useTranslation(["projects"]);

  return (
    <Container>
      <div className={styles.box}>
        <Subtitle text={t("projects:hero.subtitle")} />
        <ButtonLinks href="/contact" text={t("projects:hero.cta")} className={styles.contactLink}/>
      </div>
    </Container>
  );
};

export default MyProjects;
