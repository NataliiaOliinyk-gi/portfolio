import type { FC, ReactNode } from "react";

import Title from "../Title/Title";

import styles from "./SectionLayout.module.css";

interface ISectionLayoutProps {
  children: ReactNode;
  title?: string;
}

const SectionLayout: FC<ISectionLayoutProps> = ({ children, title }) => {
  return (
    <section className={styles.sectionLayout}>
      <div className={styles.container}>
        {title && <Title text={title} />}
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
