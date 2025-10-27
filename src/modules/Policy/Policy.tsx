import type { FC } from "react";
import { useTranslation } from "react-i18next";

import {
  linkify, linkifyText,
  replacePlaceholders,
} from "./helper";

import styles from "./Policy.module.css";

type PolicySection = {
  heading: string;
  body: string[];
};

export interface IPolicyProps {
  hostName: string;
  hostProvider?: string;
  hostPrivacyUrl?: string;
  className?: string;
};

const Policy: FC<IPolicyProps> = (props) => {
  const { t } = useTranslation("policy");

  const title = t("title");
  const updated = t("updated");
  const intro = t("intro", { returnObjects: true }) as string[];
  const sections = t("sections", { returnObjects: true }) as PolicySection[];

  return (
    <main className={styles.policy}>
      <h2>{title}</h2>
      {updated && <p><em>{updated}</em></p>}

      {intro?.map((p, i) => (
        <p key={`intro-${i}`}>{linkify(replacePlaceholders(p, props))}</p>
      ))}

      {sections?.map((sec, si) => (
        <section key={`sec-${si}`}>
          {sec.heading && <h3>{replacePlaceholders(sec.heading, props)}</h3>}
          {sec.body?.map((p, pi) => (
            <p
              key={`p-$${si}-$${pi}`}
              dangerouslySetInnerHTML={{
                __html: linkifyText(replacePlaceholders(p, props)),
              }}
            />
          ))}
        </section>
      ))}
    </main>
  );
};

export default Policy;
