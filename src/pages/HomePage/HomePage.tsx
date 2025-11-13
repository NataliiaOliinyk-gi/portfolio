import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Wrapper from "../../shared/components/Wrapper/Wrapper";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";
import HomeMain from "../../modules/HomeMain/HomeMain";
import HomeLinks from "../../modules/HomeLinks/HomeLinks";

import { useSeo } from "../../shared/hooks/useSeo";

import styles from "./HomePage.module.css";

const HomePage: FC = () => {
  const { t } = useTranslation(["home"]);
  const projectCount = 3;
  useSeo("home.title", "home.description");

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

        <SectionLayout>
          <p>{t("home:stats.projects", { count: projectCount })}</p>
        </SectionLayout>
      </Wrapper>
    </main>
  );
};

export default HomePage;
