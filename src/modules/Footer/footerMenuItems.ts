import { nanoid } from "nanoid";

export interface IFooterMenuItem {
  id: string;
  href: string;
  text: string;
}

const footerMenuItems: IFooterMenuItem[] = [
  {
    id: nanoid(),
    href: "/",
    text: "Startseite",
  },
  {
    id: nanoid(),
    href: "/contact",
    text: "Kontakt",
  },
  {
    id: nanoid(),
    href: "/datenschutz",
    text: "Datenschutzerklärung",
  },
];

export default footerMenuItems;
