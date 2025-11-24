import type { FC } from "react";
import { useState } from "react";

import Logo from "../../shared/components/Logo/Logo";
import Menu from "./Menu/Menu";
import Preferences from "./Preferences/Preferences";

import styles from "./Header.module.css";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.nav}>
      <Logo />

      <div className={styles.center}>
        <Menu isOpen={isMenuOpen} onNavigate={closeMenu} />
      </div>

      <div className={styles.right}>
        <Preferences />

        <button
          type="button"
          className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
