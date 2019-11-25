const express = require('express')
const controller = require('../controller/especie')

const router = express.Router()

//router.get('/spoilers/:id', controller.buscarUm)

router.get('/especies/todos', controller.buscarTodos)

router.post('/especies/cadastrar', controller.criar)

//router.put('/animais/:id', controller.atualizar)

//router.delete('/animais/:id', controller.excluir)

module.exports = router