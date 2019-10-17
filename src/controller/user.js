const Cadastro = require('../model/Cadastro');
const status = require('http-status');

exports.criar = (request, response, next) =>{
    const nome = request.body.nome;
    const login = request.body.login;
    const email = request.body.email;
    const senha = request.body.senha;

    Cadastro.create({
        nome,
        login,
        email,
        senha,
    })
    .then(()=>{
        response.status(status.CREATED).send()
    }).catch((error) => next(error));
}
exports.buscarTodos = (request, response, next) => {
    Cadastro.findAll()
    .then(pessoas => response.json({
        error: false,
        data: pessoas
    }))
    .catch(error => response.json({
        error: true,
        data:[],
        error: error
    }))

}

exports.login = (request, response, next) =>{
    const senha = request.body.senha
}