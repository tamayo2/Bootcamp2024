// index.js

import express from "express";
import connection from "./DBConnection.js"; // Asegúrate de ajustar la ruta de acuerdo a la ubicación de tu archivo de conexión
const app = express();
const port = 3000;

// const userRouter = require("./src/routes/usersRoutes.js");
// Usar el router de usuarios
import userRoutes from "./src/routes/usersRoutes.js";
import typesRoutes from "./src/routes/typesRoutes.js";
import abilitiesRoutes from "./src/routes/abilitiesRoutes.js";
app.use(express.json()); // Para parsear JSON en las peticiones

app.use("/users", userRoutes);
app.use("/types", typesRoutes);
app.use("/abilities", abilitiesRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

export default app;
