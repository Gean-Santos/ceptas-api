const express = require('express')
const controllerPessoa = require('../controller/pessoa')
const controllerFuncionario = require('../controller/funcionario')

const router = express.Router()

router.get('/funcionarios', controllerFuncionario.buscarTodos);
router.post('/registrar/funcionario', controllerFuncionario.criar);
router.put('/funcionarios/:id', controllerFuncionario.atualizar);
router.delete('/funcionarios/:id', controllerFuncionario.deletar);
router.post('/login', controllerFuncionario.login);

module.exports = router