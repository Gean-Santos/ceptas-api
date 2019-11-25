const Sequelize = require('sequelize');
const sequelize = require('../database');

const Evento = sequelize.define('Evento',{
    id_evento:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(6)
    },
    dt_evento:{
        allowNull: false,
        type: Sequelize.DATEONLY
    },
    hr_evento:{
        allowNull: false,
        type: Sequelize.TIME
    },
    dt_saida:{
        allowNull: false,
        type: Sequelize.DATEONLY
    },
    tp_evento:{
        allowNull: false,
        type: Sequelize.STRING(50)
    },
    RI:{
        allowNull: false,
        type: Sequelize.NUMBER(20)
    },
    nu_sf:{
        allowNull: false,
        type: Sequelize.NUMBER(20)
    },
    id_recinto:{
        allowNull: false,
        type: Sequelize.INTEGER(20)
    },
    id_destino:{
        allowNull: false,
        type: Sequelize.INTEGER(20)
    },
    id_tipo_apreensao:{
        allowNull: false,
        type: Sequelize.INTEGER(6)
    },
    id_apreensao:{
        allowNull: false,
        type: Sequelize.INTEGER(6)
    },
    id_funcionario:{
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

module.exports = Evento;