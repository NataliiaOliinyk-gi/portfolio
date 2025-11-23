import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Wrapper from "../../shared/components/Wrapper/Wrapper";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";
import About from "../../modules/About/About";

// import styles from "./AboutPage.module.css";

const AboutPage: FC = ()=>{
    const { t } = useTranslation(["about"]);

  return (
    <main>
      <Wrapper>
        <SectionLayout title={t("about:hero.title")}>
          <About />
        </SectionLayout>
      </Wrapper>
    </main>
  );
};

export default AboutPage;