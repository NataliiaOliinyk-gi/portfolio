import type { FC } from "react";

import Logo from "../../shared/components/Logo/Logo";
import Menu from "./Menu/Menu";
import Preferences from "./Preferences/Preferences";

import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.nav}>
      <Logo />
      <Menu />
      <Preferences />
    </header>
  );
};

export default Header;
