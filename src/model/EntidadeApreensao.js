const Sequelize = require('sequelize');
const sequelize = require('../database');

const EntidadeApreensao = sequelize.define('Entidade_Apreensao',{
    id_entidade_apreensao:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
    },
    tp_entidade_apreensao:{
        allowNull: false,
        type: Sequelize.STRING(50),
    },
    nm_entidade_apreensao:{
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

module.exports = EntidadeApreensao;