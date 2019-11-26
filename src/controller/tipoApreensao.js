const TipoApreensao = require('../model/TipoApreensao');

exports.criar = async(request, response) =>{
    const tipoApreensao = request.body.tipoApreensao;

    try {
    if(await TipoApreensao.findOne({where:{tipo_apreensao:tipoApreensao}}))
        return response.status(404).json('O tipo de apreensão já foi cadastrado')


    await TipoApreensao.create({
        tipo_apreensao:tipoApreensao
    })
    return response.json('Cadastrado com sucesso')
    } catch (err) {
        return response.status(500).send({error: err})
    }
}

exports.atualizar = async(request, response) =>{
    const id_tipo_apreensao = request.params.id;
    const tipoApreensao = request.body.tipoApreensao
    await TipoApreensao.update({
        tipo_apreensao: tipoApreensao,
    },{where:
        {id_tipo_apreensao:id_tipo_apreensao}
    })
    .then(() => response.status(200).send({response:'OK'}))
    .catch((err) => response.status(404).send({error:'Documento não encontrado'}));
}

exports.buscarTodos = async(request, response) => {

     await TipoApreensao.findAll({
        attributes: ['id_tipo_apreensao', 'tipo_apreensao']
     })
    .then(tipoApreensao => response.json({
        tiposApreensao: tipoApreensao,
    }))
    .catch(error => response.json({
        error: true,
        tiposApreensao:[],
        error: error
    }))
}