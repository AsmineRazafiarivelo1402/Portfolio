DROP TABLE IF EXISTS contacts CASCADE;
DROP TABLE IF EXISTS project_technologies CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS educations CASCADE;
DROP TABLE IF EXISTS experiences CASCADE;
DROP TABLE IF EXISTS technologies CASCADE;

CREATE TABLE technologies (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  category    VARCHAR(50)  NOT NULL
    CHECK (category IN ('front-end', 'tools', 'back-end', 'ui-design')),
  color_class VARCHAR(50)  NOT NULL,
  border_class VARCHAR(50) NOT NULL,
  icon_name   VARCHAR(100),
  svg_path    TEXT,
  sort_order  INT DEFAULT 0
);

CREATE TABLE experiences (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(200) NOT NULL,
  organization VARCHAR(200) NOT NULL,
  url         VARCHAR(500) DEFAULT '',
  period      VARCHAR(50)  NOT NULL,
  description TEXT,
  sort_order  INT DEFAULT 0
);

CREATE TABLE educations (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(200) NOT NULL,
  organization VARCHAR(200) NOT NULL,
  url         VARCHAR(500) DEFAULT '',
  period      VARCHAR(50)  NOT NULL,
  description TEXT,
  sort_order  INT DEFAULT 0
);

CREATE TABLE projects (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(200) NOT NULL,
  description TEXT,
  image_url   VARCHAR(500) DEFAULT '',
  live_url    VARCHAR(500) DEFAULT '',
  code_url    VARCHAR(500) DEFAULT '',
  sort_order  INT DEFAULT 0
);

CREATE TABLE project_technologies (
  project_id    INT NOT NULL REFERENCES projects(id)     ON DELETE CASCADE,
  technology_id INT NOT NULL REFERENCES technologies(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, technology_id)
);

CREATE TABLE contacts (
  id         SERIAL PRIMARY KEY,
  type       VARCHAR(20) NOT NULL
    CHECK (type IN ('social', 'email')),
  label      VARCHAR(100) NOT NULL,
  value      VARCHAR(500) NOT NULL,
  icon_name  VARCHAR(100),
  sort_order INT DEFAULT 0
);