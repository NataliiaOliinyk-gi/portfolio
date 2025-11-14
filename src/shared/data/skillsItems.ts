import GitHubIcon from "../../assets/icons/github.svg";
import JavaScript from "../../assets/icons/javascript.svg";
import TypeScript from "../../assets/icons/typescript.svg";
import React from "../../assets/icons/react-logo.svg";
import HTML from "../../assets/icons/html5.svg";
import CSS from "../../assets/icons/css3.svg";
import Sass from "../../assets/icons/sass.svg";
import NodeJs from "../../assets/icons/node-js.svg";
import Express from "../../assets/icons/express.svg";
import Docker from "../../assets/icons/docker.svg";
import MySQL from "../../assets/icons/mysql.svg";
import PostgreSql from "../../assets/icons/postgresql.svg";
import MongoDB from "../../assets/icons/mongodb.svg";
import Git from "../../assets/icons/git.svg";
import Linux from "../../assets/icons/linux.svg";

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
    icon: JavaScript,
    labelKey: "javascript",
  },
  {
    id: "TypeScript",
    icon: TypeScript,
    labelKey: "typescript",
  },
  {
    id: "React",
    icon: React,
    labelKey: "react",
  },
  {
    id: "HTML",
    icon: HTML,
    labelKey: "html",
  },
  {
    id: "CSS",
    icon: CSS,
    labelKey: "css",
  },
  {
    id: "Sass",
    icon: Sass,
    labelKey: "sass",
  },
  {
    id: "Node.js",
    icon: NodeJs,
    labelKey: "nodejs",
  },
  {
    id: "Express",
    icon: Express,
    labelKey: "express",
  },
  {
    id: "Docker",
    icon: Docker,
    labelKey: "docker",
  },
  {
    id: "MySQL",
    icon: MySQL,
    labelKey: "mysql",
  },
  {
    id: "PostgreSql",
    icon: PostgreSql,
    labelKey: "postgresql",
  },
  {
    id: "MongoDB",
    icon: MongoDB,
    labelKey: "mongodb",
  },
  {
    id: "Git",
    icon: Git,
    labelKey: "git",
  },
  {
    id: "GitHub",
    icon: GitHubIcon,
    labelKey: "github",
  },
  {
    id: "Linux",
    icon: Linux,
    labelKey: "linux",
  },
];

export default skillsItems;
