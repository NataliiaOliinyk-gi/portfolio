import type { FC } from "react";

import styles from "./ProjectCard.module.css";

export interface IProjectCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

const ProjectCard: FC<IProjectCardProps> = ({
  id,
  image,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>

      <div className={styles.imageBox}>
        <img src={image} alt={id} className={styles.image} />
      </div>

      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProjectCard;
