import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Wrapper from "../../shared/components/Wrapper/Wrapper";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";
import Container from "../../shared/components/Container/Container";
import Subtitle from "../../shared/components/Subtitle/Subtitle";
import ButtonLinks from "../../shared/components/ButtonLinks/ButtonLinks";

import styles from "./NotFoundPage.module.css";

const NotFoundPage: FC = () => {
  const { t } = useTranslation(["notFound"]);

  return (
    <main>
      <Wrapper>
        <SectionLayout title={t("notFound:title")}>
          <Container>
            <Subtitle text={t("notFound:subtitle")} />
            <div className={styles.btnBox}>
              <ButtonLinks
                href="/"
                text={t("notFound:cta1")}
                className={styles.contactLink}
              />
              <ButtonLinks
                href="/projects"
                text={t("notFound:cta2")}
                className={styles.contactLink}
              />
            </div>
          </Container>
        </SectionLayout>
      </Wrapper>
    </main>
  );
};

export default NotFoundPage;
