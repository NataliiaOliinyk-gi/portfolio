import type { FC } from "react";
import { Link } from "react-router-dom";

import EastIcon from "../Icons/EastIcon";

import styles from "./ProjectLink.module.css";

interface IProjectLinkProps {
  to: string;
  text: string;
}

const ProjectLink: FC<IProjectLinkProps> = ({ to, text }) => {
  return (
    <Link to={to} target="_blank" className={styles.link}>
      <p>{text}</p>
      <EastIcon />
    </Link>
  );
};

export default ProjectLink;
