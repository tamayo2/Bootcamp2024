import { sequelize } from "../config/config.js";
import { DataTypes } from "sequelize";
import User from "./userModel.js";
import Libro from "./libroModel.js";

const Comentario = sequelize.define("Comentario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  id_libro: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Libro,
      key: "id",
    },
  },
  comentario: {
    type: DataTypes.TEXT,
  },
  puntuacion: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Comentario;
