import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import type { SeoKey } from "../../i18n/keys";
import type { TOptions } from "i18next";

// type InterpValues = Record<string, string | number | boolean>;
type InterpValues = TOptions;

export const useSeo = (
  titleKey: SeoKey,
  descKey: SeoKey,
  values?: InterpValues
) => {
  const { t, i18n } = useTranslation("seo");

  useEffect(() => {
    const title = t(titleKey, values);
    const desc = t(descKey, values);
    document.title = title;

    const meta =
      document.querySelector<HTMLMetaElement>('meta[name="description"]') ??
      (() => {
        const el = document.createElement("meta");
        el.setAttribute("name", "description");
        document.head.appendChild(el);
        return el;
      })();

    meta.setAttribute("content", desc);

    // синхронізуємо lang на <html>
     document.documentElement.lang = i18n.resolvedLanguage || i18n.language;
  }, [t, i18n, titleKey, descKey, values]);
};
