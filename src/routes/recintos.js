const express = require('express')
const controller = require('../controller/recinto')

const router = express.Router()


router.get('/recintos/todos', controller.buscarTodos)

router.post('/recintos/registrar', controller.criar)

router.put('/recintos/:id', controller.atualizar)

//router.delete('/recintos/:id', controller.excluir)

module.exports = router