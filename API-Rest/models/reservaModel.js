import { sequelize } from "../config/config.js";
import { DataTypes } from "sequelize";
import User from "./userModel.js";
import Libro from "./libroModel.js";

const Reserva = sequelize.define("Reserva", {
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
  fecha_reserva: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  fecha_devolucion: {
    type: DataTypes.DATE,
  },
  estado: {
    type: DataTypes.ENUM("activa", "cancelada", "completada"),
    defaultValue: "activa",
  },
});

export default Reserva;
