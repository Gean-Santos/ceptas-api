const express = require('express');
const controller = require('../controller/eventoAnimal');

const router = express.Router();


router.get('/eventosanimal/todos', controller.buscarTodos);

router.post('/eventosanimal/registrar', controller.criar);

router.put('/eventosanimal/:id', controller.atualizar);

//router.delete('/entidadesApreensao/:id', controller.excluir)

module.exports = router;