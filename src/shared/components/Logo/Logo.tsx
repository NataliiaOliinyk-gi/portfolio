import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";

// import logo from "/logo/logo.png";

import styles from "./Logo.module.css";

const logoText = "<ON />"

const Logo: FC = () => {

  const location = useLocation();

    const handleClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Link to="/" onClick={handleClick}>
      {/* <img src={logo} alt="Logo" className={styles.logo} /> */}
      <p className={styles.link}>{logoText}</p>
    </Link>
  );
};

export default Logo;
