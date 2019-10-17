const express = require('express')
const controller = require('../controller/user')

const router = express.Router()

//router.get('/spoilers/:id', controller.buscarUm)

router.get('/usuarios', controller.buscarTodos)

router.post('/registrar', controller.criar)

//router.put('/spoilers/:id', controller.atualizar)

//router.delete('/spoilers/:id', controller.excluir)

module.exports = router