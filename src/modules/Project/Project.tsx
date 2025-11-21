import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Container from "../../shared/components/Container/Container";
import ButtonLinks from "../../shared/components/ButtonLinks/ButtonLinks";

import projectItems, { type ProjectId } from "../../shared/data/projectItems";

import styles from "./Project.module.css";

// type ProjectBaseKey = `projects:items.${ProjectId}`;
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
          <div className={styles.imageBox}>
            <img src={project.image} alt={id} className={styles.image} />
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.block}>
          <p className={styles.blockTitle}>{t("projects:project.goal")}</p>
          <p className={styles.blockText}>{t(`${baseKey}.goal`)}</p>
        </div>

        {hasSplitTech ? (
          <div className={styles.block}>
            <p className={styles.blockTitle}>{t("project.technologies")}</p>

            {techFE && (
              <div className={styles.techBlock}>
                <p className={styles.techBlockTitle}>{t("project.frontend")}</p>
                <p className={styles.techBlockText}>{techFE}</p>
              </div>
            )}

            {techBE && (
              <div className={styles.techBlock}>
                <p className={styles.techBlockTitle}>{t("project.backend")}</p>
                <p className={styles.techBlockText}>{techBE}</p>
              </div>
            )}

            {techDB && (
              <div className={styles.techBlock}>
                <p className={styles.techBlockTitle}>{t("project.database")}</p>
                <p className={styles.techBlockText}>{techDB}</p>
              </div>
            )}
          </div>
        ) : (
          tech && (
            <div className={styles.block}>
              <p className={styles.blockTitle}>{t("project.technologies")}</p>
              <p className={styles.blockText}>{tech}</p>
            </div>
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

        <div className={styles.block}>
          <p className={styles.blockTitle}>{t("projects:project.initial")}</p>
          <p className={styles.blockText}>{t(`${baseKey}.initial`)}</p>
        </div>

        <div className={styles.block}>
          <p className={styles.blockTitle}>{t("projects:project.sequence")}</p>
          <p className={styles.blockText}>{t(`${baseKey}.sequence`)}</p>
        </div>

        <div className={styles.block}>
          <p className={styles.blockTitle}>{t("projects:project.problems")}</p>
          <p className={styles.blockText}>{t(`${baseKey}.problems`)}</p>
        </div>

        <div className={styles.block}>
          <p className={styles.blockTitle}>{t("projects:project.learn")}</p>
          <p className={styles.blockText}>{t(`${baseKey}.learn`)}</p>
        </div>

        {project.testData && (
          <div className={styles.block}>
            <p className={styles.blockTitle}>
              {t("projects:project.testData")}
            </p>
            <p className={styles.blockText}>{project.testData}</p>
          </div>
        )}

        <div className={styles.buttonsBox}>
          <ButtonLinks
            href={project.link}
            text={t("projects:project.btn1")}
            target="_blank"
            className={styles.projectLink}
          />
          <ButtonLinks
            href={project.gitHub}
            text={t("projects:project.btn2")}
            target="_blank"
            className={styles.projectLink}
          />
          {project.gitHub2 && (
            <ButtonLinks
              href={project.gitHub2}
              text={t("projects:project.btn3")}
              target="_blank"
              className={styles.projectLink}
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
