import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Container from "../../shared/components/Container/Container";
import ButtonLinks from "../../shared/components/ButtonLinks/ButtonLinks";
import ProjectImageBox from "../../shared/components/ProjectImageBox/ProjectImageBox";
import ProjectLink from "../../shared/components/ProjectLink/ProjectLink";
import ProjectBlock from "../../shared/components/ProjectBlock/ProjectBlock";

import projectItems, { type ProjectId } from "../../shared/data/projectItems";

import styles from "./Project.module.css";

type ProjectBaseKey = `items.${ProjectId}`;

interface IProjectProps {
  id: ProjectId;
}

const Project: FC<IProjectProps> = ({ id }) => {
  const { t } = useTranslation(["projects"]);

  const project = projectItems.find((p) => p.id === id);
  if (!project) return null;

  const baseKey: ProjectBaseKey = `items.${id}`;

  const tUnsafe = t as unknown as (
    key: string,
    options?: Record<string, unknown>
  ) => string;

  const getOptional = (key: string): string => {
    const value = tUnsafe(key);
    return value === key ? "" : value;
  };

  const tech = getOptional(`${baseKey}.technologies`);
  const techFE = getOptional(`${baseKey}.frontend`);
  const techBE = getOptional(`${baseKey}.backend`);
  const techDB = getOptional(`${baseKey}.database`);

  const hasSplitTech = !!(techFE || techBE || techDB);

  const description = t(`${baseKey}.descriptionProject`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[];

  const features = t(`${baseKey}.features`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[];

  return (
    <Container>
      <div className={styles.mainBox}>
        {description && description.length > 0 && (
          <ul className={styles.descriptionList}>
            {description.map((item, index) => (
              <li key={index} className={styles.description}>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.imageWrapper}>
          <p className={styles.imageHint}>{t("projects:project.hint")}</p>
          <ProjectImageBox src={project.imageFS} id={id} />
        </div>
      </div>

      <div className={styles.project}>
        <ProjectBlock
          title={t("projects:project.goal")}
          text={t(`${baseKey}.goal`)}
        />

        {hasSplitTech ? (
          <div className={styles.block}>
            <p className={styles.blockTitle}>{t("project.technologies")}</p>

            {techFE && (
              <ProjectBlock
                title={t("projects:project.frontend")}
                text={techFE}
                classNameTitle={styles.techBlockTitle}
                classNameText={styles.techBlockText}
              />
            )}

            {techBE && (
              <ProjectBlock
                title={t("projects:project.backend")}
                text={techBE}
                classNameTitle={styles.techBlockTitle}
                classNameText={styles.techBlockText}
              />
            )}

            {techDB && (
              <ProjectBlock
                title={t("projects:project.database")}
                text={techDB}
                classNameTitle={styles.techBlockTitle}
                classNameText={styles.techBlockText}
              />
            )}
          </div>
        ) : (
          tech && (
            <ProjectBlock
              title={t("projects:project.technologies")}
              text={tech}
            />
          )
        )}

        {features && features.length > 0 && (
          <div className={styles.block}>
            <p className={styles.blockTitle}>
              {t("projects:project.features")}
            </p>
            <ul className={styles.featuresList}>
              {features.map((item, index) => (
                <li key={index} className={styles.featureItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <ProjectBlock
          title={t("projects:project.initial")}
          text={t(`${baseKey}.initial`)}
        />
        <ProjectBlock
          title={t("projects:project.sequence")}
          text={t(`${baseKey}.sequence`)}
        />
        <ProjectBlock
          title={t("projects:project.problems")}
          text={t(`${baseKey}.problems`)}
        />
        <ProjectBlock
          title={t("projects:project.learn")}
          text={t(`${baseKey}.learn`)}
        />

        {project.testData && (
          <ProjectBlock
            title={t("projects:project.testData")}
            text={project.testData}
          />
        )}

        <div className={styles.imageWrapper}>
          <p className={styles.imageHint}>{t("projects:project.hint")}</p>
          <div className={styles.imageContainer}>
            <ProjectImageBox src={project.imageFS2} id={id} />
            <ProjectImageBox src={project.imageFS3} id={id} />
          </div>
        </div>

        <div className={styles.linksBox}>
          <ProjectLink to={project.link} text={t("projects:project.btn1")} />
          <ProjectLink to={project.gitHub} text={t("projects:project.btn2")} />
          {project.gitHub2 && (
            <ProjectLink
              to={project.gitHub2}
              text={t("projects:project.btn3")}
            />
          )}
        </div>

        <div className={styles.btnLinkBox}>
          <ButtonLinks
            href="/projects"
            text={t("projects:hero.cta2")}
            className={styles.btnLink}
          />
          <ButtonLinks
            href="/contact"
            text={t("projects:hero.cta")}
            className={styles.btnLink}
          />
        </div>
      </div>
    </Container>
  );
};

export default Project;
