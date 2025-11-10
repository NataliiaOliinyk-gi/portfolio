import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Wrapper from "../../shared/components/Wrapper/Wrapper";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";
import LocationIcon from "../../shared/components/icons/LocationIcon";
import FlagIcon from "../../shared/components/icons/FlagIcon";

import { useSeo } from "../../shared/hooks/useSeo";

import foto from "../../assets/images/image_01.png";

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
          <div className={styles.mainContainer}>
            <div className={styles.mainBox}>
              <p className={styles.titleWelcome}>
                {t("home:hero.title_welcome")}
              </p>
              <div className={styles.textBox}>
                <p
                  className={styles.textHome}
                  dangerouslySetInnerHTML={{ __html: t("home:hero.text_home") }}
                />
                <p
                  className={styles.textSkills}
                  dangerouslySetInnerHTML={{
                    __html: t("home:hero.text_skills"),
                  }}
                />
                <p
                  className={styles.textSkills}
                  dangerouslySetInnerHTML={{
                    __html: t("home:hero.text_familiar"),
                  }}
                />
              </div>
              <div className={styles.locationBox}>
                <div className={styles.item}>
                  <LocationIcon />
                  <p className={styles.textLocation}>
                    {t("home:hero.location")}
                  </p>
                </div>
                <div className={styles.item}>
                  <FlagIcon />
                  <p className={styles.textLocation}>
                    {t("home:hero.text_av")}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.imageBox}>
              <img className={styles.imageFoto} src={foto} alt="foto" />
            </div>
          </div>

          <div>
            <button>{t("home:hero.cta1")}</button>
            <button>{t("home:hero.cta2")}</button>
            <button>{t("home:hero.cta3")}</button>
          </div>
        </SectionLayout>
        <SectionLayout>
          <p>{t("home:stats.projects", { count: projectCount })}</p>
        </SectionLayout>
      </Wrapper>
    </main>
  );
};

export default HomePage;
