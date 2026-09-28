import {
  faSquareJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faJava,
  faNodeJs,
  faPython,
  faGit,
  faGithub,
  faFigma,
  faSquareLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const iconMap = {
  js: faSquareJs,
  react: faReact,
  html: faHtml5,
  css: faCss3Alt,
  java: faJava,
  nodejs: faNodeJs,
  expressjs: faNodeJs,
  python: faPython,
  git: faGit,
  github: faGithub,
  figma: faFigma,
  postman: faPaperPlane,
  postgresql: faDatabase,
  linkedin: faSquareLinkedin,
  facebook: faFacebook,
  envelope: faEnvelope,
};

export function getIcon(iconName) {
  return iconName ? iconMap[iconName] : null;
}