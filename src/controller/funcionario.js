const Funcionario = require('../model/Funcionario');

exports.criar = async(request, response) =>{
    const numero_matricula = request.body.numero_matricula;
    const chefe = request.body.chefe;
    const cargo = request.body.cargo;
    const data_admissao = request.body.data_admissao;
    const data_nascimento = request.body.data_nascimento;
    const login = request.body.login;
    const senha = request.body.senha;
    const id_pessoa = request.body.id_pessoa;
    
    try{
        if(await Funcionario.findOne({where:{id_pessoa}}))
            return response.status(404)
            .send({error: 'O funcionário já foi cadastrado'})

       const funcionario =  await Funcionario.create({
            nu_matricula:numero_matricula,
            chefe_funcionario:chefe,
            nm_cargo:cargo,
            dt_admissao:Date(data_admissao),
            dt_nascimento:Date(data_nascimento),
            login_funcionario:login,
            senha_funcionario:senha,
            id_pessoa,
        })
        return response.json({
            funcionario
        })
        
    }catch(err){
        return response.status(404).send({error: err})
    }
}
exports.atualizar = async(request, response) =>{
    const idFuncionario = request.params.id;
    const numero_matricula = request.body.numero_matricula;
    const chefe = request.body.chefe;
    const cargo = request.body.cargo;
    const data_admissao = request.body.data_admissao;
    const data_nascimento = request.body.data_nascimento;
    const login = request.body.login;
    const senha = request.body.senha;
    const idPessoa = request.body.id_pessoa;
    await Funcionario.update({
            nu_matricula:numero_matricula,
            chefe_funcionario:chefe,
            nm_cargo:cargo,
            dt_admissao:data_admissao,
            dt_nascimento:data_nascimento,
            login_funcionario:login,
            senha_funcionario:senha,
            id_pessoa:idPessoa,
        },{where:
            {id_funcionario:idFuncionario}
        })
        .then(() => response.status(200).send({response:'OK'}))
        .catch((err) => response.status(400).send({error:'Funcionário não encontrado'}));
}

exports.deletar = async(request, response) => {
    const idFuncionario = request.params.id;
    await Funcionario.findByPk(idFuncionario)
    .then((funcionario)=>{
         return funcionario.destroy()
    })
    .then(()=> response.status(200).send({response:'Deletado'}))
    .catch(err => response.status(404).send({error:'Funcionário não encontrado'}))
}

exports.buscarTodos = async(request, response) => {
    await Funcionario.findAll()
    .then(pessoas => response.json({
        funcionarios: pessoas
    }))
    .catch(error => response.json({
        error: true,
        funcionarios:[],
        error: error
    }))

}

exports.login = async(request, response) =>{
    try {
        const {usuario, senha} = request.body
        const user = await Funcionario.findOne({
            where:{
                login_funcionario:usuario,
                senha_funcionario:senha
            }
        })

        if(!user)
        return response.status(404).send({error: 'User not found'})

        if(await senha !== user.senha_funcionario)
        return response.status(401).send({error: 'Invalid password'})

        user.senha = undefined
        response.send({
            user, 
        })
    } catch (err) {
        return response.status(400).send({error: 'Invalid data'})
    }
}