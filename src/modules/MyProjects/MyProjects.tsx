import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Container from "../../shared/components/Container/Container";
import Subtitle from "../../shared/components/Subtitle/Subtitle";

// import styles from "./MyProjects.module.css";

const MyProjects: FC = () => {

    const { t } = useTranslation(["projects"]);


  return (
    <Container >
      <Subtitle text={t("projects:hero.subtitle")} />
      
    </Container>
  );
};

export default MyProjects;
