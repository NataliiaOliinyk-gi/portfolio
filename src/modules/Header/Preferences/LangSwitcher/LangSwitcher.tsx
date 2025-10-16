import type { FC } from "react";
import { useTranslation } from "react-i18next";

import styles from "./LangSwitcher.module.css";

const LangSwitcher: FC = () => {
  const { i18n } = useTranslation();
  const setLang = (lng: "de" | "en") => {
    i18n.changeLanguage(lng);
  };
  const current = i18n.resolvedLanguage || i18n.language;

  return (
    <div className={styles.wrap} role="group" aria-label="Language switch">
      <button
        type="button"
        onClick={() => setLang("de")}
        aria-pressed={current === "de"}
        className={current === "de" ? styles.active : ""}
      >
        DE
      </button>
      <span className={styles.sep}>/</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={current === "en"}
        className={current === "en" ? styles.active : ""}
      >
        EN
      </button>
    </div>
  );
};

export default LangSwitcher;
