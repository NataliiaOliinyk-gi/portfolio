import type { FC } from "react";

import styles from "./Title.module.css";

interface ITitleProps {
  text: string;
}

const Title: FC<ITitleProps> = ({ text }) => {
  return <h2 className={styles.title}>{text}</h2>;
};

export default Title;
