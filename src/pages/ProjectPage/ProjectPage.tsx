import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import Wrapper from "../../shared/components/Wrapper/Wrapper";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";
import Project from "../../modules/Project/Project";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import projectItems from "../../shared/data/projectItems";

import type { ProjectId } from "../../shared/data/projectItems";

type ProjectTitleKey = `projects:items.${ProjectId}.title`;

const validIds: ProjectId[] = projectItems.map((p) => p.id);

const ProjectPage: FC = () => {
  const { t } = useTranslation(["projects"]);
  const { id } = useParams<{ id: ProjectId }>();

  if (!id || !validIds.includes(id)) {
    return <NotFoundPage />;
  }

  const titleKey: ProjectTitleKey = `projects:items.${id}.title`;

  return (
    <main>
      <Wrapper>
        <SectionLayout title={t(titleKey)}>
          <Project id={id}/>
        </SectionLayout>
      </Wrapper>
    </main>
  );
};

export default ProjectPage;
