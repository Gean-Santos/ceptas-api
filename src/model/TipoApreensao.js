const Sequelize = require('sequelize');
const sequelize = require('../database');

const TipoApreensao = sequelize.define('Tipo_Apreensao',{
    id_tipo_apreensao:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
    },
    tipo_apreensao:{
        allowNull: false,
        type: Sequelize.STRING(50),
    },
    createdAt:{
        allowNull: false,
        type: Sequelize.DATE(6)  
    },
    updatedAt:{
        allowNull: false,
        type: Sequelize.DATE(6)  
    }
},{freezeTableName:true});

module.exports = TipoApreensao;