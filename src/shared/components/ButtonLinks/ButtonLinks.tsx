import type { FC } from "react";

import styles from "./ButtonLinks.module.css";

interface IButtonLinksProps {
  href: string;
  text: string;
  className?: string;
  target?: string;
}

const ButtonLinks: FC<IButtonLinksProps> = ({ href, text, className, target }) => {
  return (
    <a
      className={`${styles.linkBtn} ${className ?? ""}`}
      href={href}
      rel="noopener noreferrer"
      target={target}
    >
      {text}
    </a>
  );
};

export default ButtonLinks;
