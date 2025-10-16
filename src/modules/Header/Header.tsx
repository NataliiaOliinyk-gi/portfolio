import type { FC } from "react";

import Logo from "../../shared/Logo/Logo";


import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.nav}>
      <Logo />
      <div>Menu</div>
      <div>Preferences</div>
    </header>
  );
};

export default Header;
