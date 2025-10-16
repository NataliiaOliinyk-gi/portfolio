import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Wrapper from "../../shared/components/Wrapper/Wrapper";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";

import { useSeo } from "../../shared/hooks/useSeo";

// import styles from "./HomePage.module.css";

const HomePage: FC = () => {
  const { t } = useTranslation(["home"]);
  const projectCount = 3;
  const projectName = "Pet Online Store"
  useSeo("home.title", "home.description");
  useSeo("project.title", "project.description", { name: projectName });

  return (
    <main>
      <Wrapper>
        <SectionLayout>
          <h1>{t("home:hero.title")}</h1>
          <p>{t("home:hero.subtitle")}</p>
          <button>{t("home:hero.cta")}</button>
        </SectionLayout>
         <SectionLayout>
          <p>{t("home:stats.projects", { count: projectCount })}</p>
        </SectionLayout>
      </Wrapper>
    </main>
  );
};

export default HomePage;
