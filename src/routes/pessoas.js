const express = require('express');
const controllerPessoa = require('../controller/pessoa');

const router = express.Router();

router.get('/pessoas', controllerPessoa.buscarTodos);
router.post('/registrar/pessoa', controllerPessoa.criar);

module.exports = router;