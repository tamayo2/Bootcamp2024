import express from "express";

import { createType, getAllTypes } from "../controllers/typesController.js";

const router = express.Router();

router.post("/", createType);
router.get("/", getAllTypes);

export default router;
