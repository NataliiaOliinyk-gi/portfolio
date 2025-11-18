import type { FC } from "react";

import styles from "./ButtonLinks.module.css";

interface IButtonLinksProps {
  href: string;
  text: string;
  className?: string;
}

const ButtonLinks: FC<IButtonLinksProps> = ({ href, text, className }) => {
  return (
    <a
      className={`${styles.linkBtn} ${className ?? ""}`}
      href={href}
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default ButtonLinks;
