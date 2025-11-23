import type { ReactNode } from "react";

import type { IPolicyProps } from "./Policy";

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

export const linkifyText = (text: string) => {
  // перетворює http/https у посилання
  return text.replace(
    /(https?:\/\/[^\s)]+)/gi,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );
};

export const replacePlaceholders = (text: string, v: IPolicyProps) =>
  text
    .replaceAll("{{contactEmail}}", v.contactEmail)
    .replaceAll("{{hostName}}", v.hostName)
    .replaceAll("{{hostProvider}}", v.hostProvider ?? "")
    .replaceAll("{{hostPrivacyUrl}}", v.hostPrivacyUrl ?? "")
    .replaceAll("{{mailName}}", v.mailName)
    .replaceAll("{{mailProvider}}", v.mailProvider)
    .replaceAll("{{parenCompany}}", v.parenCompany)
    .replaceAll("{{mailPrivacyUrl}}", v.mailPrivacyUrl);
