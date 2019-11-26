const Sequelize = require('sequelize')
const sequelize = require('../database')

const Recinto = sequelize.define('Recinto',{
    id_recinto:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER(6),
    },
    ds_recinto:{
        allowNull: false,
        type: Sequelize.STRING(50),
        validate:{
            len: [2,50]
        }
    },
    ds_local:{
        allowNull: false,
        type: Sequelize.STRING(50),
        validate:{
            len: [2,50]
        }
    },
    createdAt:{
        allowNull: false,
        type: Sequelize.DATE(6),
    },
    updatedAt:{
        allowNull: false,
        type: Sequelize.DATE(6),  
    }
},{freezeTableName: true});

module.exports = Recinto;