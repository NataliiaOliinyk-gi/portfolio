import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Container from "../../shared/components/Container/Container";
import Subtitle from "../../shared/components/Subtitle/Subtitle";
import ButtonLinks from "../../shared/components/ButtonLinks/ButtonLinks";
import ProjectCard from "../../shared/components/ProjectCard/ProjectCard";

import projectItems from "../../shared/data/projectItems";
import type { IProjectItem } from "../../shared/data/projectItems";

import styles from "./MyProjects.module.css";

const MyProjects: FC = () => {
  const { t } = useTranslation(["projects"]);

  const elements = projectItems.map(({ id, image }: IProjectItem) => (
    <li key={id}>
      <Link to={`/projects/${id}`} className={styles.link}>
        <ProjectCard
          id={id}
          image={image}
          title={t(`projects:items.${id}.title`)}
          description={t(`projects:items.${id}.description`)}
        />
      </Link>
    </li>
  ));

  return (
    <Container>
      <div className={styles.titleBox}>
        <Subtitle text={t("projects:hero.subtitle")} />
        <ButtonLinks
          href="/contact"
          text={t("projects:hero.cta")}
          className={styles.contactLink}
        />
      </div>

      <ul className={styles.projectsBox}>{elements}</ul>
    </Container>
  );
};

export default MyProjects;
