import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import menuItems from "./menuItems";

import type { IMenuItem } from "./menuItems";

import styles from "./Menu.module.css";

const Menu: FC = () => {
  const { t } = useTranslation("nav");

  const element = menuItems.map(({ id, href, labelKey }: IMenuItem) => (
    <li key={id}>
      <NavLink to={href} className={styles.link}>
        {t(labelKey)}
      </NavLink>
    </li>
  ));

  return (
    <div>
      <ul className={styles.menu}>{element}</ul>
    </div>
  );
};

export default Menu;
