const express = require('express')
const controller = require('../controller/animal')

const router = express.Router()

router.post('/animais/animal', controller.buscarUm)

router.get('/animais/todos', controller.buscarTodos)

router.post('/animais/registrar', controller.criar)

router.put('/animais/:id', controller.atualizar)

//router.delete('/animais/:id', controller.excluir)

module.exports = router