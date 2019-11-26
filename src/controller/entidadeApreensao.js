const EntidadeApreensao = require('../model/EntidadeApreensao');

exports.criar = async(request, response) =>{
    const tipoEntidadeApreensao = request.body.tipoEntidadeApreensao;
    const nomeEntidadeApreensao = request.body.nomeEntidadeApreensao;

    try {
    if(await EntidadeApreensao.findOne({where:{tp_entidade_apreensao:tipoEntidadeApreensao}}))
        return response.status(203).json('A Entidade de Apreensão já foi cadastrada')

    await EntidadeApreensao.create({
        tp_entidade_apreensao:tipoEntidadeApreensao,
        nm_entidade_apreensao:nomeEntidadeApreensao,
    })
    return response.json('Cadastrado com sucesso')
    } catch (err) {
        return response.status(500).send({error: 'Não foi possível cadastrar a entidade de apreensão'})
    }
}

exports.atualizar = async(request, response) =>{
    const id_entidade_apreensao = request.params.id;
    const tp_entidade_apreensao = request.body.tipoEntidadeApreensao
    await EntidadeApreensao.update({
        tp_entidade_apreensao: tp_entidade_apreensao,
    },{where:
        {id_entidade_apreensao:id_entidade_apreensao}
    })
    .then(() => response.status(200).send({response:'OK'}))
    .catch((err) => response.status(404).send({error:'Entidade de apreensão não encontrada'}));
}

exports.buscarTodos = async(request, response) => {

     await EntidadeApreensao.findAll({
        attributes: ['id_entidade_apreensao', 'tp_entidade_apreensao']
     })
    .then(entidade => response.json({
        entidadesApreensao: entidade,
    }))
    .catch(error => response.json({
        error: true,
        entidadesApreensao:[],
        error: error
    }))
}