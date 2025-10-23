import type { FC } from "react";
import { useTranslation } from "react-i18next";

import getIconsMenu from "../icons";
import type { IIconsMenu } from "../icons";

import styles from "./FooterIcons.module.css";

const FooterIcons: FC = () => {
  const { t: tWa } = useTranslation<"contactWhatsapp">("contactWhatsapp");
  const { t: tMail } = useTranslation<"contactMail">("contactMail");

  const iconsMenu = getIconsMenu(tWa, tMail, "gmail");

  const element = iconsMenu.map(({ title, href, icon }: IIconsMenu) => {
    return (
      <li key={title}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title}
          title={title}
          className={styles.iconLink}
        >
          <div className={styles.iconBox}>
            <img src={icon} alt={title} className={styles.iconImg} />
          </div>
        </a>
      </li>
    );
  });

  return (
    <div className={styles.contsiner}>
      <ul className={styles.menu}>{element}</ul>
    </div>
  );
};

export default FooterIcons;
