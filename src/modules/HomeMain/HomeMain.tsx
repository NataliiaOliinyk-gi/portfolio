import type { FC } from "react";
import { useTranslation } from "react-i18next";

import LocationIcon from "../../shared/components/Icons/LocationIcon";
import FlagIcon from "../../shared/components/Icons/FlagIcon";

// import foto from "../../assets/images/image_01.png";
import foto from "../../assets/images/img_foto.png";

import styles from "./HomeMain.module.css";

const HomeMain: FC = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainBox}>
        <p className={styles.titleWelcome}>{t("home:hero.title_welcome")}</p>

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
            <p className={styles.textLocation}>{t("home:hero.location")}</p>
          </div>
          <div className={styles.item}>
            <FlagIcon />
            <p className={styles.textLocation}>{t("home:hero.text_av")}</p>
          </div>
        </div>
      </div>

      <div className={styles.imageBox}>
        <img className={styles.imageFoto} src={foto} alt="foto" />
      </div>
    </div>
  );
};

export default HomeMain;
