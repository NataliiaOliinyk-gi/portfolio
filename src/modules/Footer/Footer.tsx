import type { FC } from "react";
import { NavLink } from "react-router-dom";

import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";

import footerMenuItems from "./footerMenuItems";

import type { IFooterMenuItem } from "./footerMenuItems";

import styles from "./Footer.module.css";

const element = footerMenuItems.map(({ id, href, text }: IFooterMenuItem) => (
  <li key={id}>
    <NavLink to={href} className={styles.link}>
      {text}
    </NavLink>
  </li>
));

const Footer: FC = () => {
  return (
    <footer>
      <SectionLayout>
        <div>
          <ul className={styles.menu}>{element}</ul>
        </div>
      </SectionLayout>
      <div className={styles.footerBox}>
        <p className={styles.text}>
          © 2025 Nataliia Ollinyk
        </p>
      </div>
    </footer>
  )
};

export default Footer;
