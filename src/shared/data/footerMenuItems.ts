import type { FooterKey } from "../../i18n/keys"; 

export interface IFooterMenuItem {
  id: string;
  href: string;
  labelKey: FooterKey;
}

const footerMenuItems: IFooterMenuItem[] = [
  {
    id: "home",
    href: "/",
    labelKey: "home"
  },
  {
    id: "contact",
    href: "/contact",
    labelKey: "contact"
  },
  {
    id: "policy",
    href: "/policy",
    labelKey: "policy"
  },
];

export default footerMenuItems;
