const express = require('express')
const controller = require('../controller/tipoApreensao')

const router = express.Router()


router.get('/tiposApreensao/todos', controller.buscarTodos)

router.post('/tiposApreensao/registrar', controller.criar)

router.put('/tiposApreensao/:id', controller.atualizar)

//router.delete('/recintos/:id', controller.excluir)

module.exports = router