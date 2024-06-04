import { sequelize } from "../config/config.js";
import { DataTypes } from "sequelize";

const Libro = sequelize.define("Libro", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING(100),
  },
  ano_publicacion: {
    type: DataTypes.INTEGER,
  },
  isbn: {
    type: DataTypes.STRING(20),
    unique: true,
  },
},{
  timestamps: false, 
});

export default Libro;
