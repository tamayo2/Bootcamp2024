import express from "express";
import connection from "./DBConnection.js"; 
const app = express();
const port = 3000;

import userRoutes from "./src/routes/usersRoutes.js";
import typesRoutes from "./src/routes/typesRoutes.js";
import abilitiesRoutes from "./src/routes/abilitiesRoutes.js";
app.use(express.json()); 

app.use("/users", userRoutes);
app.use("/types", typesRoutes);
app.use("/abilities", abilitiesRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

export default app;
