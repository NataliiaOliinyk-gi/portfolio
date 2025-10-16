import type { FC, ReactNode } from "react";

import Title from "../Title/Title";

import styles from "./SectionLayout.module.css";

interface ISectionLayoutProps {
  children: ReactNode;
  title?: string;
}

const SectionLayout: FC<ISectionLayoutProps> = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {title && <Title text={title} />}
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
