const Sequelize = require('sequelize');
const sequelize = require('../database');

const Funcionario = sequelize.define('Funcionario',{
    id_funcionario:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nu_matricula:{
        allowNull: false,
        type: Sequelize.NUMBER(6),
    },
    chefe_funcionario:{
        allowNull: false,
        type: Sequelize.STRING(50),
        validate:{
            len: [4,50]
        }
    },
    nm_cargo:{
        type: Sequelize.STRING(50),
        validate:{
            len: [10,50]
        }
    },
    dt_admissao:{
        allowNull: false,
        type: Sequelize.DATEONLY,
    },
    dt_desligamento:{
        type: Sequelize.DATEONLY
    },
    dt_nascimento:{
        allowNull: false,
        type: Sequelize.DATEONLY,
    },
    login_funcionario:{
        allowNull: false,
        type: Sequelize.STRING(20),
        validate:{
            len: [2,20]
        }
    },
    senha_funcionario:{
        allowNull: false,
        type: Sequelize.STRING(50),
        validate:{
            len: [2,50]
        }
    },
    foto:{
        type: Sequelize.BLOB,
    },
    id_pessoa:{
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    createdAt:{
        allowNull: false,
        type: Sequelize.DATE(6)  
    },
    updatedAt:{
        allowNull: false,
        type: Sequelize.DATE(6)  
    }
},{freezeTableName: true })

module.exports = Funcionario;