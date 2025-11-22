import type { FC } from "react";

import styles from "./ProjectImageBox.module.css";

interface IProjectImageBoxProps {
  id: string;
  src: string;
}

const ProjectImageBox: FC<IProjectImageBoxProps> = ({id, src}) => {
  return (
    <div className={styles.imageBox}>
      <img src={src} alt={id} className={styles.image} />
    </div>
  );
};

export default ProjectImageBox;
