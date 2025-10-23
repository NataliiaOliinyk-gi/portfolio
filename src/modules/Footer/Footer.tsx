import type { FC } from "react";

import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";
import FooterMenu from "./FooterMenu/FooterMenu";
import FooterIcons from "./FooterIcons/FooterIcons";

import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer>
      <SectionLayout>
        <FooterMenu />
        <FooterIcons />
      </SectionLayout>
      <div className={styles.footerBox}>
        <p className={styles.text}>© 2025 Nataliia Oliinyk</p>
      </div>
    </footer>
  );
};

export default Footer;
