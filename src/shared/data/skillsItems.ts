import type { SkillsKey } from "../../i18n/keys"; 

export interface ISkillsItems {
  id: string;
  icon: string;
  labelKey: SkillsKey;
}

const skillsItems: ISkillsItems[] = [
  {
    id: "JavaScript",
    icon: "/",
    labelKey: "javascript"
  },
  {
    id: "TypeScript",
    icon: "/",
    labelKey: "typescript"
  },
  {
    id: "React",
    icon: "/",
    labelKey: "react"
  },
  {
    id: "HTML",
    icon: "/",
    labelKey: "html"
  },
  {
    id: "CSS",
    icon: "/",
    labelKey: "css"
  },
  {
    id: "sass",
    icon: "/",
    labelKey: "sass"
  },
  {
    id: "nodejs",
    icon: "/",
    labelKey: "nodejs"
  },
  {
    id: "express",
    icon: "/",
    labelKey: "express"
  },
  {
    id: "mysql",
    icon: "/",
    labelKey: "mysql"
  },
  {
    id: "postgresql",
    icon: "/",
    labelKey: "postgresql"
  },
  {
    id: "mongodb",
    icon: "/",
    labelKey: "mongodb"
  },
  {
    id: "git",
    icon: "/",
    labelKey: "git"
  },
  {
    id: "github",
    icon: "/",
    labelKey: "github"
  },
  {
    id: "docker",
    icon: "/",
    labelKey: "docker"
  },
    {
    id: "linux",
    icon: "/",
    labelKey: "linux"
  },
];

export default skillsItems;