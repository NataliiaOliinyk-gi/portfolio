import type { FC } from "react";
import { useTranslation } from "react-i18next";

import {
  linkify,
  replacePlaceholders,
} from "./helper";

// import styles from "./Policy.module.css";

type PolicySection = {
  heading: string;
  body: string[];
};

export type PolicyProps = {
  hostName: string;
  hostProvider?: string;
  hostPrivacyUrl?: string;
  className?: string; // опціонально: стилі контейнера
};

const Policy: FC<PolicyProps> = (props) => {
  const { t } = useTranslation("policy");

  const title = t("title");
  const updated = t("updated");
  const intro = t("intro", { returnObjects: true }) as string[];
  const sections = t("sections", { returnObjects: true }) as PolicySection[];

  return (
    <main className={props.className}>
      <h1>{title}</h1>
      {updated && <p><em>{updated}</em></p>}

      {intro?.map((p, i) => (
        <p key={`intro-${i}`}>{linkify(replacePlaceholders(p, props))}</p>
      ))}

      {sections?.map((sec, si) => (
        <section key={`sec-${si}`}>
          {sec.heading && <h2>{replacePlaceholders(sec.heading, props)}</h2>}
          {sec.body?.map((p, pi) => (
            <p key={`p-${si}-${pi}`}>{linkify(replacePlaceholders(p, props))}</p>
          ))}
        </section>
      ))}
    </main>
  );
};

export default Policy;
