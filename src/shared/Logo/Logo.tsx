import type { FC } from "react";
import { Link } from "react-router-dom";

import logo from "../../../public/logo/logo.png";

import styles from "./Logo.module.css";



const Logo: FC = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" className={styles.logo}/>
    </Link>
  );
};

export default Logo;
