const Sequelize = require('sequelize');
const sequelize = require('../database');

const Animal = sequelize.define('Animal',{
    id_animal:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(6)
    },
    sexo_animal:{
        allowNull: false,
        type: Sequelize.STRING(30),
        validate:{
            len: [1,30]
        }
    },
    dt_ultima_atualizacao:{
        allowNull: false, 
        type: Sequelize.DATE(6),
    },
    dt_idade_estimada:{
        allowNull: false,
        type: Sequelize.DATEONLY,
        validate:{
            len: [6,10]
        }
    },
    idade_estimada:{
        allowNull: false,
        type: Sequelize.NUMBER(10),
        validate:{
            len: [1,10]
        }
    },
    marcacao:{
        allowNull: false,
        type: Sequelize.STRING(40),
        validate:{
            len: [2,40]
        }
    },
    ds_maturidade:{
        allowNull: false,
        type: Sequelize.STRING(40),
        validate:{
            len: [2,40]
        }
    },
    risco_extincao:{
        allowNull: false,
        type: Sequelize.STRING(40),
        validate:{
            len: [1,40]
        }
    },
    id_especie:{
        allowNull: false,
        type: Sequelize.INTEGER(6),
        validate:{
            len: [1,6]
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

module.exports = Animal;