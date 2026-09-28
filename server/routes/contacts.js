import { Router } from "express";
import { sql } from "../db.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`SELECT * FROM contacts ORDER BY sort_order`;
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

export default router;