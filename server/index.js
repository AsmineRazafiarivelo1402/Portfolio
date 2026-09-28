import express from "express";
import cors from "cors";
import "dotenv/config";

import technologiesRouter from "./routes/technologies.js";
import experiencesRouter from "./routes/experiences.js";
import educationsRouter from "./routes/educations.js";
import projectsRouter from "./routes/projects.js";
import contactsRouter from "./routes/contacts.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio API running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/technologies", technologiesRouter);
app.use("/api/experiences", experiencesRouter);
app.use("/api/educations", educationsRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/contacts", contactsRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});