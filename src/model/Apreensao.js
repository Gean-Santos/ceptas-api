const Sequelize = require('sequelize');
const sequelize = require('../database');

const Apreensao = sequelize.define('Apreensao',{
    id_apreensao:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
    },
    historico_completo:{
        allowNull: false,
        type: Sequelize.STRING(800),
        validate:{
            len: [2,800]
        }
    },
    local_captura:{
        allowNull: false,
        type: Sequelize.STRING(80),
        validate:{
            len: [2,80]
        }
    },
    id_entidade_apreensao:{
        allowNull: false,
        type: Sequelize.INTEGER(6),
        validate:{
            len: [1,6]
        }
    },
    id_tipo_apreensao:{
        allowNull: false,
        type: Sequelize.INTEGER(6),
        validate:{
            len: [1,6]
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
},{freezeTableName:true});

module.exports = Apreensao;