const Apreensao = require('../model/Apreensao');

exports.criar = async(request, response, next) =>{
    const historicoCompleto = request.body.historicoCompleto;
    const localCaptura = request.body.localCaptura;
    const idEntidadeApreensao = request.body.idEntidadeApreensao;
    const idTipoApreensao = request.body.idTipoApreensao;

    try {
    if(await Apreensao.findOne({where:{historico_completo:historicoCompleto}}))
        return response.status(400).json('A apreensão já foi cadastrada')

    await Apreensao.create({
        historico_completo:historicoCompleto,
        local_captura: localCaptura,
        id_entidade_apreensao: idEntidadeApreensao,
        id_tipo_apreensao: idTipoApreensao,

    })
    return response.json('Cadastrado com sucesso')
    } catch (err) {
        return response.status(500).send({error: err})
    }
}

exports.atualizar = async(request, response) =>{
    const historicoCompleto = request.body.historicoCompleto;
    const localCaptura = request.body.localCaptura;
    const idEntidadeApreensao = request.body.idEntidadeApreensao;
    const idTipoApreensao = request.body.idTipoApreensao;
    const idApreensao = request.params.id;
    await Apreensao.update({
        historico_completo:historicoCompleto,
        local_captura: localCaptura,
        id_entidade_apreensao: idEntidadeApreensao,
        id_tipo_apreensao: idTipoApreensao,
    },{where:
        {id_apreensao:idApreensao}
    })
    .then(() => response.status(200).send({response:'OK'}))
    .catch((err) => response.status(404).send({error:'Apreensão não encontrada'}));
}

exports.buscarTodos = async(request, response) => {

     await Apreensao.findAll({ limit: 10, order: [['updatedAt', 'DESC']]})
    .then(apreensao => response.json({
        apreensoes: apreensao,
    }))
    .catch(error => response.json({
        error: true,
        apreensoes:[],
        error: error
    }))
}
