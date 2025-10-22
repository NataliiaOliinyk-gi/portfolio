import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";

import footerMenuItems from "./footerMenuItems";

import type { IFooterMenuItem } from "./footerMenuItems";

import styles from "./Footer.module.css";

const Footer: FC = () => {
  const { t } = useTranslation("footer");

  const element = footerMenuItems.map(
    ({ id, href, labelKey }: IFooterMenuItem) => (
      <li key={id}>
        <NavLink to={href} className={styles.link}>
          {t(labelKey)}
        </NavLink>
      </li>
    )
  );

  return (
    <footer>
      <SectionLayout>
        <div>
          <ul className={styles.menu}>{element}</ul>
        </div>
      </SectionLayout>
      <div className={styles.footerBox}>
        <p className={styles.text}>© 2025 Nataliia Ollinyk</p>
      </div>
    </footer>
  );
};

export default Footer;
