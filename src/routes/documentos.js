const express = require('express')
const controller = require('../controller/documento')

const router = express.Router()


router.get('/documentos/todos', controller.buscarTodos)

router.post('/documentos/registrar', controller.criar)

router.put('/documentos/:id', controller.atualizar)

//router.delete('/documentos/:id', controller.excluir)

module.exports = router