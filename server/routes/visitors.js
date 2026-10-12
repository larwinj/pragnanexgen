import express from "express";
import { handleVisitors } from "../lib/visitorCounter.js";

// Local development route mirroring api/visitors.js.
const router = express.Router();

router.all("/", (req, res) => handleVisitors(req, res));

export default router;
