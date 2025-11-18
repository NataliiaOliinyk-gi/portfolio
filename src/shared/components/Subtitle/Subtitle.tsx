import type { FC } from "react";

import styles from "./Subtitle.module.css";

interface ISubtitleProps {
  text: string;
}

const Subtitle: FC<ISubtitleProps> = ({ text }) => {
  return <h4 className={styles.subtitle}>{text}</h4>;
};

export default Subtitle;
