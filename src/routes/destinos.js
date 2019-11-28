const express = require('express');
const controller = require('../controller/destino');

const router = express.Router();


router.get('/destinos/todos', controller.buscarTodos);

router.post('/destinos/registrar', controller.criar);

router.put('/destinos/:id', controller.atualizar);

//router.delete('/entidadesApreensao/:id', controller.excluir)

module.exports = router;