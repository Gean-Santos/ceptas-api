const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const CadastroAnimal = sequelize.define('Animal',{
    id_animal:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(65)
    },
});
module.exports = CadastroAnimal;