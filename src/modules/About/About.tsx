import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Container from "../../shared/components/Container/Container";

import Foto from "../../assets/images/image_04.png";
import CertPreviewDE from "../../assets/doc/Screen_Cert_DE.png";
import CertPreviewEN from "../../assets/doc/Screen_Cert_EN.png";

import DocDe from "../../assets/doc/ZERTIFIKAT_Nataliia_Oliinyk.pdf";
import DocEn from "../../assets/doc/CERTIFICATE_Nataliia_Oliinyk.pdf";

import styles from "./About.module.css";

export interface IPolicyProps {
  section: string[];
}

const About: FC<IPolicyProps> = ({ section }) => {
  const { t, i18n } = useTranslation("about");

  const certificateImg = i18n.language.startsWith("de")
    ? CertPreviewDE
    : CertPreviewEN;
  const certificatePdf = i18n.language.startsWith("de") ? DocDe : DocEn;

  const firstPart = section.slice(0, 3);
  const secondPart = section.slice(3);

  const firstPartElements = firstPart.map((text, i) => (
    <p key={`p1-${i}`} className={styles.text}>
      {text}
    </p>
  ));
  const secondPartElements = secondPart.map((text, i) => (
    <p key={`p2-${i}`} className={styles.text}>
      {text}
    </p>
  ));

  return (
    <Container>
      <div className={styles.mainContainer}>
        <div className={styles.flowBlock}>
          <div className={`${styles.imageBox} ${styles.floatLeft}`}>
            <img
              className={styles.imageFoto}
              src={Foto}
              alt={t("hero.alt_foto")}
            />
          </div>
          {firstPartElements}
        </div>

        <div className={styles.flowBlock}>
          <div className={`${styles.imageBox} ${styles.floatRight}`}>
            <a
              href={certificatePdf}
              target="_blank"
              rel="noreferrer"
              aria-label={t("hero.label")}
            >
              <img
                className={`${styles.imageFoto} ${styles.imageCert}`}
                src={certificateImg}
                alt={t("hero.alt_certificate")}
              />
            </a>
          </div>
          {secondPartElements}
        </div>
      </div>
    </Container>
  );
};

export default About;
