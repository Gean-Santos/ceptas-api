const Sequelize  = require('sequelize');
const sequelize = require('../database');

const ExameComplementar = sequelize.define('Exame_Fisico',{
    id_exame_complementar:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(6)
    },
    especificacao_exame:{
        allowNull: false,
        type: Sequelize.STRING(600)
    },
    resultado_exame:{
        allowNull: false,
        type: Sequelize.STRING(600)
    },
    id_exame_fisico:{
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
}, {freezeTableName: true});

module.exports = ExameComplementar;