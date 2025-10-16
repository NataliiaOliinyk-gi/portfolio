import type { NavKey } from "../../../i18n/keys";

export interface IMenuItem {
  id: string;
  href: string;
  labelKey: NavKey;
}

const menuItems: IMenuItem[] = [
  {
    id: "home",
    href: "/",
    labelKey: "home",
  },
  {
    id: "skills",
    href: "/skills",
    labelKey: "skills",
  },
  {
    id: "projects",
    href: "/projects",
    labelKey: "projects",
  },
  {
    id: "about",
    href: "/about",
    labelKey: "about",
  },
  {
    id: "contact",
    href: "/contact",
    labelKey: "contact",
  },
];

export default menuItems;
