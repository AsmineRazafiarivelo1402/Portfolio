import { Router } from "express";
import { sql } from "../db.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`SELECT * FROM technologies ORDER BY sort_order`;
    const categoriesOrder = ["front-end", "tools", "back-end", "ui-design"];
    const grouped = categoriesOrder
      .map((category) => ({
        category,
        technologies: rows.filter((r) => r.category === category),
      }))
      .filter((group) => group.technologies.length > 0);
    res.json(grouped);
  } catch (err) {
    next(err);
  }
});

export default router;