export type SkillItemKey =
  | "javascript"
  | "typescript"
  | "react"
  | "html"
  | "css"
  | "sass"
  | "nodejs"
  | "express"
  | "mysql"
  | "postgresql"
  | "mongodb"
  | "git"
  | "github"
  | "docker"
  | "linux";

export interface ISkillsItem {
  id: string;
  icon: string;
  labelKey: SkillItemKey;
}

const skillsItems: ISkillsItem[] = [
  {
    id: "JavaScript",
    icon: "icon",
    labelKey: "javascript",
  },
  {
    id: "TypeScript",
    icon: "icon",
    labelKey: "typescript",
  },
  {
    id: "React",
    icon: "icon",
    labelKey: "react",
  },
  {
    id: "HTML",
    icon: "icon",
    labelKey: "html",
  },
  {
    id: "CSS",
    icon: "icon",
    labelKey: "css",
  },
  {
    id: "Sass",
    icon: "icon",
    labelKey: "sass",
  },
  {
    id: "Node.js",
    icon: "icon",
    labelKey: "nodejs",
  },
  {
    id: "Express",
    icon: "icon",
    labelKey: "express",
  },
  {
    id: "Docker",
    icon: "icon",
    labelKey: "docker",
  },
  {
    id: "MySQL",
    icon: "icon",
    labelKey: "mysql",
  },
  {
    id: "PostgreSql",
    icon: "icon",
    labelKey: "postgresql",
  },
  {
    id: "MongoDB",
    icon: "icon",
    labelKey: "mongodb",
  },
  {
    id: "Git",
    icon: "icon",
    labelKey: "git",
  },
  {
    id: "GitHub",
    icon: "icon",
    labelKey: "github",
  },
  {
    id: "Linux",
    icon: "icon",
    labelKey: "linux",
  },
];

export default skillsItems;
