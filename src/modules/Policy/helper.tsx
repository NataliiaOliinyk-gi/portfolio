import type { ReactNode } from "react";

import type { PolicyProps } from "./Policy";

export const linkify = (text: string): ReactNode => {
  // робимо всі http/https посилання клікабельними
  const urlRegex = /(https?:\/\/[^\s)]+)$/gi; // простий варіант
  const parts = text.split(urlRegex);

  return parts.map((part, i) =>
    /^https?:\/\//i.test(part) ? (
      <a key={`lnk-${i}`} href={part} target="_blank" rel="noopener noreferrer">
        {part}
      </a>
    ) : (
      <span key={`txt-${i}`}>{part}</span>
    )
  );
};

export const replacePlaceholders = (text: string, v: PolicyProps) =>
  text
    .replaceAll("{{hostName}}", v.hostName)
    .replaceAll("{{hostProvider}}", v.hostProvider ?? "")
    .replaceAll("{{hostPrivacyUrl}}", v.hostPrivacyUrl ?? "");
