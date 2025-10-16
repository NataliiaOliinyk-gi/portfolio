import { nanoid } from "nanoid";

export interface IMenuItems {
  id: string;
  href: string;
  text: string;
}

const menuItems = [
  {
    id: nanoid(),
    href: "/",
    text: "Startseite",
  },
  {
    id: nanoid(),
    href: "/skills",
    text: "Fähigkeiten",
  },
  {
    id: nanoid(),
    href: "/projects",
    text: "Projekte",
  },
  {
    id: nanoid(),
    href: "/about",
    text: "Über Mich",
  },
  {
    id: nanoid(),
    href: "/contact",
    text: "Kontakt",
  },
];

export default menuItems;
