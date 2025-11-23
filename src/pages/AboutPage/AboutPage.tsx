import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Wrapper from "../../shared/components/Wrapper/Wrapper";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";
import Container from "../../shared/components/Container/Container";
import About from "../../modules/About/About";

import styles from "./AboutPage.module.css";

const AboutPage: FC = () => {
  const { t } = useTranslation(["about"]);

  const aboutSection = t("personal_story.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <main>
      <Wrapper>
        <SectionLayout title={t("about:hero.title")}>
          <div className={styles.titleBox}>
            <p className={styles.subtitle}>{t("about:hero.subtitle")}</p>
          </div>
          <Container>
            <p
              className={styles.hero}
              dangerouslySetInnerHTML={{ __html: t("about:hero.text") }}
            />
          </Container>
          <About section={aboutSection} />
        </SectionLayout>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
