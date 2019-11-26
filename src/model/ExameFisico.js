const Sequelize  = require('sequelize');
const sequelize = require('../database');

const ExameFisico = sequelize.define('Exame_Fisico',{
    id_exame_fisico:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(6)
    },
    estado_animal:{
        allowNull: false,
        type: Sequelize.STRING(30),
        validate:{
            len: [2,30]
        }
    },
    foto_exame_fisico:{
        allowNull: false,
        type: Sequelize.BLOB(1000),
    },
    estado_decomposicao:{
        allowNull: false,
        type: Sequelize.STRING(50),
        validate:{
            len: [2,50]
        }
    },
    peso:{
        allowNull: false,
        type: Sequelize.NUMBER(10),
        validate:{
            len: [1,10]
        }
    },
    temperatura:{
        allowNull: false,
        type: Sequelize.NUMBER(10),
        validate:{
            len: [1,10]
        }
    },
    fc_bpm:{
        allowNull: false,
        type: Sequelize.NUMBER(10),
        validate:{
            len: [1,10]
        }
    },
    fr_mpm:{
        allowNull: false,
        type: Sequelize.INTEGER(10),
        validate:{
            len: [1,10]
        }
    },
    maus_tratos:{
        allowNull: false,
        type: Sequelize.STRING(30),
        validate:{
            len: [2,30]
        }
    },
    sistema_neurologico:{
        allowNull: false,
        type: Sequelize.STRING(60),
        validate:{
            len: [2,60]
        }
    },
    sistema_respiratorio:{
        allowNull: false,
        type: Sequelize.String(60),
        validate:{
            len: [2,60]
        }
    },
    sistema_digestivo:{
        allowNull: false,
        type: Sequelize.STRING(60),
        validate:{
            len: [2,60]
        }
    },
    sistema_osteomuscular:{
        allowNull: false,
        type: Sequelize.STRING(60),
        validate:{
            len: [2,60]
        }
    },
    sistema_cardiovascular:{
        allowNull: false,
        type: Sequelize.STRING(60),
        validate:{
            len: [2,60]
        }
    },
    sistema_tegumentar:{
        allowNull: false,
        type: Sequelize.STRING(60),
        validate:{
            len: [2,60]
        }
    },
    ds_atitude:{
        allowNull: false,
        type: Sequelize.STRING(60),
        validate:{
            len: [2,60]
        }
    },
    nivel_desidratacao:{
        allowNull: false,
        type: Sequelize.STRING(60),
        validate:{
            len: [2,60]
        }
    },
    ds_estado_nutricional:{
        allowNull: false,
        type: Sequelize.STRING(60),
        validate:{
            len: [2,60]
        }
    },
    ds_domesticacao:{
        allowNull: false,
        type: Sequelize.STRING(60),
        validate:{
            len: [2,60]
        }
    },
    id_animal:{
        allowNull: false,
        type: Sequelize.INTEGER(6),
        validate:{
            len: [1,6]
        }
    },
    id_exame_complementar:{
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

module.exports = ExameFisico;