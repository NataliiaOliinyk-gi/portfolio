import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Wrapper from "../../shared/components/Wrapper/Wrapper";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";
import MyProjects from "../../modules/MyProjects/MyProjects";

const MyProjectsPage: FC = () => {
  const { t } = useTranslation(["projects"]);

  return (
    <main>
      <Wrapper>
        <SectionLayout title={t("projects:hero.title")}>
          <MyProjects />
        </SectionLayout>
      </Wrapper>
    </main>
  );
};

export default MyProjectsPage;
