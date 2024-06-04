import { sequelize } from "../config/config.js";


const syncModels = async () => {
  await sequelize.sync({ force: false });
  console.log("Los modelos se vincularon correctamente");
};

export { syncModels };
