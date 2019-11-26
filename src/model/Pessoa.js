const Sequelize = require('sequelize');
const sequelize = require('../database');

const Pessoa = sequelize.define('Pessoa',{
    id_pessoa:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nm_pessoa:{
        allowNull: false,
        type: Sequelize.STRING(100),
        validate:{
            len: [4,100]
        }
    },
    tp_pessoa:{
        allowNull: false,
        type: Sequelize.STRING(20),
        validate:{
            len: [6,20]
        }
    },
    ds_email:{
        type: Sequelize.STRING(50),
        validate:{
            len: [10,50]
        }
    },
    genero_pessoa:{
        allowNull: false,
        type: Sequelize.STRING(30),
        validate:{
            len: [2,30]
        }
    },
    telefone_pessoa:{
        allowNull: false,
        type: Sequelize.NUMBER(15)
    },
    endereco_pessoa:{
        allowNull: false,
        type: Sequelize.STRING(60),
        validate:{
            len: [5,60]
        }
    },
    tp_endereco:{
        allowNull: false,
        type: Sequelize.STRING(30),
        validate:{
            len: [2,30]
        }
    },
    nu_cep:{
        allowNull: false,
        type: Sequelize.NUMBER(8),
        validate:{
            len: [2,8]
        }
    },
    bairro_endereco:{
        allowNull: false,
        type: Sequelize.STRING(30),
        validate:{
            len: [2,30]
        }
    },
    cidade_endereco:{
        allowNull: false,
        type: Sequelize.STRING(30),
        validate:{
            len: [2,30]
        }
    },
    uf_endereco:{
        allowNull: false,
        type: Sequelize.STRING(3),
        validate:{
            len: [2,3]
        }
    },
    id_documento:{
        allowNull: false,
        type: Sequelize.NUMBER(30),
        validate:{
            len: [1,30]
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
},{freezeTableName: true });

module.exports = Pessoa;