import type { FC } from "react";
import { NavLink } from "react-router-dom";

import menuItems from "./menuItems";

import type { IMenuItem } from "./menuItems";

import styles from "./Menu.module.css";

const element = menuItems.map(({ id, href, text }: IMenuItem) => (
  <li key={id}>
    <NavLink to={href} className={styles.link}>
      {text}
    </NavLink>
  </li>
));

const Menu: FC = () => {
  return (
    <div>
      <ul className={styles.menu}>{element}</ul>
    </div>
  );
};

export default Menu;
