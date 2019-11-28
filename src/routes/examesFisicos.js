const express = require('express');
const controller = require('../controller/exameFisico');

const router = express.Router();


router.get('/examesfisicos/todos', controller.buscarTodos);

router.post('/examesfisicos/registrar', controller.criar);

router.put('/examesfisicos/:id', controller.atualizar);

//router.delete('/entidadesApreensao/:id', controller.excluir)

module.exports = router;