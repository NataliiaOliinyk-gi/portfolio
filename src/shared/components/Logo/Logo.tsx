import type { FC } from "react";
import { Link } from "react-router-dom";

// import logo from "/logo/logo.png";

import styles from "./Logo.module.css";

const logoText = "<ON />"

const Logo: FC = () => {
  return (
    <Link to="/">
      {/* <img src={logo} alt="Logo" className={styles.logo} /> */}
      <p className={styles.link}>{logoText}</p>
    </Link>
  );
};

export default Logo;
