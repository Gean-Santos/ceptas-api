const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Cadastro = sequelize.define('pessoas',{
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome:{
        allowNull: false,
        type: Sequelize.STRING(50),
        validate:{
            len: [5,50]
        }
    },
    login:{
        allowNull: false,
        type: Sequelize.STRING(20),
        validate:{
            len: [2,20]
        }
    },
    email:{
        type: Sequelize.STRING(50),
        validate:{
            len: [2,50]
        }
    },
    senha:{
        allowNull: false,
        type: Sequelize.STRING(30),
        validate:{
            len: [2,30]
        }
    }
})

module.exports = Cadastro;