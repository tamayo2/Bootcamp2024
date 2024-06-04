import Sequelize from 'sequelize';
export const sequelize = new Sequelize('libreria', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});