import type { FC } from "react";

import { useInView } from "../../hooks/useInView";

import styles from "./SkillCard.module.css";

export interface ISkillCardProps {
  id: string;
  icon: string;
  text: string;
}

const SkillCard: FC<ISkillCardProps> = ({ id, icon, text }) => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <li
      ref={ref}
      className={`${styles.skillCard} ${
        isVisible ? styles.skillCardVisible : ""
      }`}
    >
      <div className={styles.cardBox}>
        <div className={styles.iconBox}>
          <img src={icon} alt={id} className={styles.iconImg} />
        </div>
        <p className={styles.title}>{id}</p>
      </div>
      <p>{text}</p>
    </li>
  );
};

export default SkillCard;
