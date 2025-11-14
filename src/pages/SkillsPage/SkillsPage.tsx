import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Wrapper from "../../shared/components/Wrapper/Wrapper";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";
import Skills from "../../modules/Skills/Skills";

// import styles from "./SkillsPage.module.css";

const SkillsPage: FC = () => {
  const { t } = useTranslation(["skills"]);

  return (
    <main>
      <Wrapper>
        <SectionLayout title={t("skills:hero.title")}>
          <Skills />
        </SectionLayout>
      </Wrapper>
    </main>
  );
};

export default SkillsPage;
