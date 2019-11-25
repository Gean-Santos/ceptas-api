const Sequelize = require('sequelize');
const sequelize = require('../database')

const EventoAnimal = sequelize.define('Evento_Animal',{
    id_evento_animal:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(6)
    },
    dt_evento_animal:{
        allowNull: false,
        type: Sequelize.DATEONLY
    },
    tp_evento_animal:{
        allowNull: false,
        type: Sequelize.STRING(30)
    },
    foto_animal:{
        allowNull: false,
        type: Sequelize.BLOB
    },
    observacao:{
        allowNull: false,
        type: Sequelize.STRING(2000)
    },
    id_exame_fisico:{
        allowNull: false,
        type: Sequelize.INTEGER(6)
    },
    id_exame_complementar:{
        allowNull: false,
        type: Sequelize.INTEGER(6)
    },
    id_evento:{
        allowNull: false,
        type: Sequelize.INTEGER(6)
    },
    id_animal:{
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

module.exports = EventoAnimal;