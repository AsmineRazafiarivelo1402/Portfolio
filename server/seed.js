import { readFileSync } from "node:fs";
import { sql } from "./db.js";
import { technologies, experiences, educations, projects, projectLinks, contacts } from "./seedData.js";

const ddl = readFileSync("./schema.sql", "utf8");

for (const raw of ddl.split(";")) {
  const statement = raw.trim();
  if (statement) {
    await sql.query(statement);
  }
}

async function insertRows(table, columns, rows) {
  if (rows.length === 0) return 0;
  const placeholders = [];
  const values = [];
  for (let i = 0; i < rows.length; i++) {
    placeholders.push(`(${columns.map((_, j) => `$${i * columns.length + j + 1}`).join(", ")})`);
    for (const col of columns) {
      values.push(rows[i][col] ?? null);
    }
  }
  await sql.query(
    `INSERT INTO ${table} (${columns.join(", ")}) VALUES ${placeholders.join(", ")}`,
    values
  );
  return rows.length;
}

const counts = {};

counts.technologies = await insertRows(
  "technologies",
  ["name", "category", "color_class", "border_class", "icon_name", "svg_path", "sort_order"],
  technologies.map((t, i) => ({ ...t, sort_order: i }))
);

counts.experiences = await insertRows(
  "experiences",
  ["title", "organization", "url", "period", "description", "sort_order"],
  experiences.map((e, i) => ({ ...e, sort_order: i }))
);

counts.educations = await insertRows(
  "educations",
  ["title", "organization", "url", "period", "description", "sort_order"],
  educations.map((e, i) => ({ ...e, sort_order: i }))
);

counts.projects = await insertRows(
  "projects",
  ["title", "description", "image_url", "live_url", "code_url", "sort_order"],
  projects.map((p, i) => ({ ...p, sort_order: i }))
);

counts.contacts = await insertRows(
  "contacts",
  ["type", "label", "value", "icon_name", "sort_order"],
  contacts.map((c, i) => ({ ...c, sort_order: i }))
);

let linksCount = 0;
for (const link of projectLinks) {
  const [project] = await sql`SELECT id FROM projects WHERE title = ${link.projectTitle}`;
  const [tech] = await sql`SELECT id FROM technologies WHERE name = ${link.techName}`;
  if (!project || !tech) {
    console.error(`Lien ignoré (introuvable) : ${link.projectTitle} <-> ${link.techName}`);
    continue;
  }
  await sql`INSERT INTO project_technologies (project_id, technology_id) VALUES (${project.id}, ${tech.id})`;
  linksCount++;
}
counts.project_technologies = linksCount;

console.log(
  `Seed terminé : ${counts.technologies} technologies, ${counts.experiences} expériences, ` +
    `${counts.educations} formations, ${counts.projects} projets, ${counts.project_technologies} liaisons, ` +
    `${counts.contacts} contacts ✅`
);

process.exit(0);