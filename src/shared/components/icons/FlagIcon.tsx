import type { SVGProps } from "react";
const FlagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#5f6368"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M200-80v-760h640l-80 200 80 200H280v360h-80Zm80-440h442l-48-120 48-120H280v240Zm0 0v-240 240Z" />
  </svg>
);
export default FlagIcon;