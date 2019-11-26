const Sequelize = require('sequelize');
const sequelize = require('../database');

const Documento = sequelize.define('Documento',{
    id_documento:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(7)
    },
    tp_documento:{
        allowNull: false,
        type:Sequelize.STRING(25),
        validate:{
            len: [2,25]
        }
    },
    createdAt:{
        allowNull: false,
        type: Sequelize.DATE(6)  
    },
    updatedAt:{
        allowNull: false,
        type: Sequelize.DATE(6)  
    }
},{freezeTableName: true })

module.exports = Documento;