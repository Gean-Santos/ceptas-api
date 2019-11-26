const Sequelize = require('sequelize');
const sequelize = require('../database');

const Especie = sequelize.define('Especie',{
    id_especie:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER(6),
    },
    nm_popular:{
        allowNull: false,
        type: Sequelize.STRING(60),
        validate:{
            len: [2,60]
        }
    },
    ds_especie:{
        allowNull: false,
        type: Sequelize.STRING(80),
        validate:{
            len: [2,80]
        }
    },
    grupo_taxonomico:{
        allowNull: false,
        type: Sequelize.STRING(80),
        validate:{
            len: [2,80]
        }
    },
    nm_cientifico:{
        allowNull: false,
        type: Sequelize.STRING(80),
        validate:{
            len: [2,80]
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
},{freezeTableName: true})

module.exports = Especie;