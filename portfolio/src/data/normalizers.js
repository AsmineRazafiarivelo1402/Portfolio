import { getIcon } from "./iconMap";

export const categoryTitles = {
  "front-end": "Front-end",
  tools: "Tools",
  "back-end": "Back-end",
  "ui-design": "UI Design",
};

export function normalizeTechnology(tech) {
  return {
    name: tech.name,
    icon: tech.icon || getIcon(tech.icon_name),
    svgPath: tech.svgPath || tech.svg_path || null,
    colorClass: tech.colorClass || tech.color_class,
    borderClass: tech.borderClass || tech.border_class,
  };
}

export function normalizeProject(project) {
  return {
    title: project.title,
    description: project.description,
    image: project.image || project.image_url,
    tags: project.tags || [],
    liveUrl: project.liveUrl || project.live_url,
    codeUrl: project.codeUrl || project.code_url,
  };
}

export function normalizeContact(contact) {
  return {
    label: contact.label,
    icon: contact.icon || getIcon(contact.icon_name),
    href: contact.href || contact.value,
    type: contact.type,
  };
}