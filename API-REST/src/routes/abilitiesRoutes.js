import express from "express";

import { getAllAbilities, createAbilities } from "../controllers/abilitiesController.js";

const router = express.Router();

router.post("/", createAbilities);
router.get("/", getAllAbilities);

export default router;

