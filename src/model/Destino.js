const Sequelize = require('sequelize');
const sequelize = require('../database');

const Destino = sequelize.define('Destino',{
    id_destino:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(6)
    },
    ds_destino:{
        allowNull: false,
        type: Sequelize.STRING(60)
    },
    tp_destino:{
        allowNull: false,
        type: Sequelize.STRING(50)
    },
    dt_saida:{
        allowNull: false,
        type: Sequelize.DATE(6),
    },
    estado_animal:{
        allowNull: false,
        type: Sequelize.STRING(50)
    },
    id_animal:{
        allowNull: false,
        type: Sequelize.INTEGER(6)
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

module.exports = Destino;