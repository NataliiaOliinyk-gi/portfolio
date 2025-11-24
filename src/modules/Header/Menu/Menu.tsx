import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import menuItems from "./menuItems";

import type { IMenuItem } from "./menuItems";

import styles from "./Menu.module.css";

interface IMenuProps {
  isOpen?: boolean;
  onNavigate?: () => void;
}

const Menu: FC<IMenuProps> = ({ isOpen = false, onNavigate }) => {
  const { t } = useTranslation("nav");

  const element = menuItems.map(({ id, href, labelKey }: IMenuItem) => (
    <li key={id}>
      <NavLink to={href} className={styles.link} onClick={onNavigate}>
        {t(labelKey)}
      </NavLink>
    </li>
  ));

  return (
    <nav className={`${styles.menuWrap} ${isOpen ? styles.menuOpen : ""}`}>
      <ul className={styles.menu}>{element}</ul>
    </nav>
  );
};

export default Menu;
