const express = require('express');
const controller = require('../controller/entidadeApreensao');

const router = express.Router();


router.get('/entidadesApreensao/todos', controller.buscarTodos);

router.post('/entidadesApreensao/registrar', controller.criar);

router.put('/entidadesApreensao/:id', controller.atualizar);

//router.delete('/entidadesApreensao/:id', controller.excluir)

module.exports = router;