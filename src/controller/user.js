const Cadastro = require('../model/Cadastro');
const status = require('http-status');
const bcrypt = require('bcryptjs')

exports.criar = async(request, response, next) =>{
    const nome = request.body.nome;
    const login = request.body.login;
    const email = request.body.email;
    const senha = request.body.senha;
    //const hash = bcrypt.hash(senha, 10)

    try{
        if(await Cadastro.findOne({where:{email}}))
            return response.status(404).send({error:'User already exists'})

            const cad = await Cadastro.create({
                nome,
                login,
                email,
                senha,
            })
            // .then(()=>{
            //     response.status(status.CREATED).send()
            // })

            return response.json({
                cad
            })
        
    }catch(err){
        return response.status(404).send({error: 'Registration Failed'})
    }
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

exports.login = async(request, response, next) =>{
    try {
        const {email, senha} = request.body
        const user = await Cadastro.findOne({
            where:{
                email,
            }
        })

        if(!user)
        return response.status(status.NOT_FOUND).send({error: 'User not found'})

        if(await senha !== user.senha)
        return response.status(status.NOT_FOUND).send({error: 'Invalid password'})

        user.senha = undefined
        response.send({
            user, 
        })
        next()
    } catch (err) {
        return response.status(status.BAD_REQUEST).send({error: 'Invalid data'})
    }
}