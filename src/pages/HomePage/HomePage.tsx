import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Wrapper from "../../shared/components/Wrapper/Wrapper";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";

import HomeMain from "../../modules/HomeMain/HomeMain";
import HomeLinks from "../../modules/HomeLinks/HomeLinks";
import ContactLinks from "../../modules/ContactLinks/ContactLinks";
import Skills from "../../modules/Skills/Skills";
import MyProjects from "../../modules/MyProjects/MyProjects";
import About from "../../modules/About/About";

import { useSeo } from "../../shared/hooks/useSeo";

import styles from "./HomePage.module.css";

const HomePage: FC = () => {
  const { t } = useTranslation(["home"]);
  useSeo("home.title", "home.description");

  const aboutSection = t("home:about.text", {
    returnObjects: true,
  }) as string[];

  return (
    <main>
      <Wrapper>
        <SectionLayout title={t("home:hero.title")}>
          <div className={styles.titleBox}>
            <p className={styles.subtitle}>{t("home:hero.subtitle")}</p>
          </div>
          <HomeMain />
          <HomeLinks />
        </SectionLayout>

        <SectionLayout title={t("home:skills.title")}>
          <Skills />
        </SectionLayout>

        <SectionLayout title={t("home:projects.title")}>
          <MyProjects />
        </SectionLayout>

        <SectionLayout title={t("home:about.title")}>
          <About section={aboutSection}/>
        </SectionLayout>

        <SectionLayout title={t("home:contact.title")}>
          <ContactLinks />
        </SectionLayout>
      </Wrapper>
    </main>
  );
};

export default HomePage;
