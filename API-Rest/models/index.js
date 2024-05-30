import { sequelize } from "../config/config.js";
import User from "./userModel.js";
import Libro from "./libroModel.js";
import Reserva from "./reservaModel.js";
import Comentario from "./comentario.Model.js";

const syncModels = async () => {
  await sequelize.sync({ force: false });
  console.log("All models were synchronized successfully.");
};

export { syncModels };
