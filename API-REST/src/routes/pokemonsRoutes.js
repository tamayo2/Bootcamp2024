import express from "express";
const router = express.Router()

import { createPokemons, getAllPokemons } from "../controllers/pokemonsController.js";

router.post("/", createPokemons);
router.get("/", getAllPokemons);

export default router;
