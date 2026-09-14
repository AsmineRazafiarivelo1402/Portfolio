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
import { faDatabase, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import asmineImage from "../assets/images/as.png";
import profileImage from "../assets/images/profil_about.png";

export const profile = {
  name: "Asmine RAZAFIARIVELO",
  title: "Full-Stack Developer Student",
  greeting: "Hi there, welcome to my site",
  tagline: "Let’s build better software together.",
  cvLabel: "Download CV",
  resumeLabel: "Read My Resume",
};

export const bio = [
  "Hi there,I'm Asmine RAZAFIARIVELO",
  "Ecosystem software student at HEI Madagascar with a strong interest in QA.",
  "Interested in UX, accessibility, and user safety.",
  "Learning backend basics and manual/automated testing.",
  "Aiming to become a reliable QA specialist focused on quality.",
];

const tailwindPath =
  "M12 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.761.19 1.305.741 1.907 1.352C13.68 11.155 14.742 12.25 17 12.25c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.761-.19-1.305-.741-1.907-1.352C15.32 6.845 14.258 5.75 12 5.75z";

export const techCategories = [
  {
    title: "Front-end",
    technologies: [
      { name: "JavaScript", icon: faSquareJs, colorClass: "text-yellow-500", borderClass: "border-yellow-500" },
      { name: "React", icon: faReact, colorClass: "text-sky-400", borderClass: "border-sky-400" },
      { name: "HTML", icon: faHtml5, colorClass: "text-orange-500", borderClass: "border-orange-500" },
      { name: "CSS", icon: faCss3Alt, colorClass: "text-blue-500", borderClass: "border-blue-500" },
      { name: "Tailwind", svgPath: tailwindPath, colorClass: "text-sky-400", borderClass: "border-sky-400" },
    ],
  },
  {
    title: "Tools",
    technologies: [
      { name: "Postman", icon: faPaperPlane, iconSize: "text-3xl", colorClass: "text-orange-500", borderClass: "border-orange-500" },
      { name: "Git", icon: faGit, colorClass: "text-red-600", borderClass: "border-red-600" },
      { name: "GitHub", icon: faGithub, colorClass: "text-gray-300", borderClass: "border-gray-300" },
    ],
  },
  {
    title: "Back-end",
    technologies: [
      { name: "JavaScript", icon: faSquareJs, colorClass: "text-yellow-500", borderClass: "border-yellow-500" },
      { name: "NodeJS", icon: faNodeJs, colorClass: "text-green-500", borderClass: "border-green-500" },
      { name: "ExpressJS", icon: faNodeJs, colorClass: "text-gray-400", borderClass: "border-gray-400" },
      { name: "Python", icon: faPython, colorClass: "text-yellow-500", borderClass: "border-yellow-500" },
      { name: "PostgreSQL", icon: faDatabase, colorClass: "text-blue-500", borderClass: "border-blue-500" },
      { name: "Java", icon: faJava, colorClass: "text-red-500", borderClass: "border-red-500" },
    ],
  },
  {
    title: "UI Design",
    technologies: [
      { name: "Figma", icon: faFigma, colorClass: "text-pink-500", borderClass: "border-pink-500" },
    ],
  },
];

export const experiences = [
  {
    title: "Assistant Productory",
    period: "Oct 2024",
    organization: "Fireflies.mg",
    url: "http://fireflies.mg",
    description: "I was an assistant productor, responsible of CRM",
  },
  {
    title: "Developer Website",
    period: "2022-2023",
    organization: "GUERREROS CLUB MADAGASCAR",
    url: "",
    description: "Your last project in PNM. We was 5 student in group to realize it",
  },
  {
    title: "Quality Assurant",
    period: "2022-2023",
    organization: "GAMA TEXTILE MADAGASCAR",
    url: "",
    description: "I was responsable of customer command",
  },
];

export const educations = [
  {
    title: "Software Student",
    period: "2024-Actually",
    organization: "HEI MADAGASCAR",
    url: "https://hei.school/",
    description: "I am a software student",
  },
  {
    title: "Preparatory Year",
    period: "Jan-Oct 2024",
    organization: "PNM Madagascar",
    url: "https://www.passerellesnumeriques.org/fr/what-we-do/madagascar/",
    description:
      "About initialization in IT, digital technology, Project Management and public speaking",
  },
  {
    title: "High School diploma C",
    period: "2021",
    organization: "St Joseph Antsirabe",
    url: "https://web.facebook.com/antsirabeSaintjo/?locale=fr_FR&_rdc=1&_rdr",
    description: "I've been doing my high school at Antsirabe and I've got diploma C",
  },
];

export const projects = [
  {
    title: "Asmine Portfolio",
    description: "My personal portfolio website to showcase my skills and project",
    image: asmineImage,
    tags: ["React", "Tailwindcss"],
    liveUrl: "https://github.com/AsmineRazafiarivelo1402/Portfolio.git",
    codeUrl: "https://github.com/AsmineRazafiarivelo1402/Portfolio.git",
  },
  {
    title: "Projet à venir",
    description: "Ce prochain projet montrera de nouvelles compétences et idées.",
    image: profileImage,
    tags: ["React"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export const socialLinks = [
  { label: "GitHub", icon: faGithub, href: "https://github.com/AsmineRazafiarivelo1402" },
  { label: "LinkedIn", icon: faSquareLinkedin, href: "#" },
  { label: "Facebook", icon: faFacebook, href: "#" },
];

export const email = "asminerazafiarivelo@gmail.com";