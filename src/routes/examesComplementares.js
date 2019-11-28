const express = require('express');
const controller = require('../controller/exameComplementar');

const router = express.Router();


router.get('/examescomplementares/todos', controller.buscarTodos);

router.post('/examescomplementares/registrar', controller.criar);

router.put('/examescomplementares/:id', controller.atualizar);

//router.delete('/entidadesApreensao/:id', controller.excluir)

module.exports = router;