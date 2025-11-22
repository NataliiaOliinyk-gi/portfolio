import type { FC } from "react";

import styles from "./ProjectBlock.module.css";

interface IProjectBlockProps {
  title: string;
  text: string;
  classNameTitle?: string;
  classNameText?: string;
}

const ProjectBlock: FC<IProjectBlockProps> = ({
  title,
  text,
  classNameTitle,
  classNameText,
}) => {
  return (
    <div className={styles.block} >
      <p className={`${styles.blockTitle} ${classNameTitle ?? ""}`}>{title}</p>
      <p className={`${styles.blockText} ${classNameText ?? ""}`}>{text}</p>
    </div>
  );
};

export default ProjectBlock;
