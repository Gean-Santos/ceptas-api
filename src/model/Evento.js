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
        type: Sequelize.DATEONLY,
        validate:{
            len: [6,30]
        }
    },
    hr_evento:{
        allowNull: false,
        type: Sequelize.TIME,
        validate:{
            len: [6,30]
        }
    },
    dt_saida:{
        allowNull: false,
        type: Sequelize.DATEONLY,
        validate:{
            len: [6,30]
        }
    },
    tp_evento:{
        allowNull: false,
        type: Sequelize.STRING(50),
        validate:{
            len: [2,50]
        }
    },
    RI:{
        allowNull: false,
        type: Sequelize.NUMBER(20),
        validate:{
            len: [1,20]
        }
    },
    nu_sf:{
        allowNull: false,
        type: Sequelize.NUMBER(20),
        validate:{
            len: [1,20]
        }
    },
    id_recinto:{
        allowNull: false,
        type: Sequelize.INTEGER(20),
        validate:{
            len: [1,20]
        }
    },
    id_destino:{
        allowNull: false,
        type: Sequelize.INTEGER(20),
        validate:{
            len: [1,20]
        }
    },
    id_tipo_apreensao:{
        allowNull: false,
        type: Sequelize.INTEGER(6),
        validate:{
            len: [1,6]
        }
    },
    id_apreensao:{
        allowNull: false,
        type: Sequelize.INTEGER(6),
        validate:{
            len: [1,6]
        }
    },
    id_funcionario:{
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

module.exports = Evento;