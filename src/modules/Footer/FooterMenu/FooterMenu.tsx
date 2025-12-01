import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import footerMenuItems from "../../../shared/data/footerMenuItems";

import type { IFooterMenuItem } from "../../../shared/data/footerMenuItems";

import styles from "./FooterMenu.module.css";

const FooterMenu: FC = () => {
  const { t } = useTranslation("footer");

  const elements = footerMenuItems.map(
    ({ id, href, labelKey }: IFooterMenuItem) => (
      <li key={id}>
        <NavLink to={href} className={styles.link}>
          {t(labelKey)}
        </NavLink>
      </li>
    )
  );

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>{elements}</ul>
    </div>
  );
};

export default FooterMenu;
