const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Documento = sequelize.define('Documento',{
    id_documento:{
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER(30)
    },
    tp_documento:{
        allowNull: false,
        type:Sequelize.STRING(25)
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