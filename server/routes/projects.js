import { Router } from "express";
import { sql } from "../db.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`
      SELECT p.*, COALESCE(array_agg(t.name ORDER BY t.sort_order) FILTER (WHERE t.name IS NOT NULL), '{}') AS tags
      FROM projects p
      LEFT JOIN project_technologies pt ON pt.project_id = p.id
      LEFT JOIN technologies t ON t.id = pt.technology_id
      GROUP BY p.id
      ORDER BY p.sort_order
    `;
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

export default router;