const express = require('express')
const controller = require('../controller/apreensao')

const router = express.Router()


router.get('/apreensoes/todas', controller.buscarTodos)

router.post('/apreensoes/registrar', controller.criar)

router.put('/apreensoes/:id', controller.atualizar)

//router.delete('/apreensoes/:id', controller.excluir)

module.exports = router