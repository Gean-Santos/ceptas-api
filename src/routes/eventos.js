const express = require('express');
const controller = require('../controller/evento');

const router = express.Router();


router.get('/eventos/todos', controller.buscarTodos);

router.post('/eventos/registrar', controller.criar);

router.put('/eventos/:id', controller.atualizar);

//router.delete('/entidadesApreensao/:id', controller.excluir)

module.exports = router;