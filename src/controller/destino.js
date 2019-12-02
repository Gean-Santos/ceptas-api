const Destino = require('../model/Destino');

exports.criar = async(request, response, next) =>{
    const descricaoDestino = request.body.descricaoDestino;
    const tipoDestino = request.body.tipoDestino;
    const dataSaida = request.body.dataSaida;
    const estadoAnimal = request.body.estadoAnimal;
    const idAnimal = request.body.idAnimal

    try {
    if(await Destino.findOne({where:{ds_destino:descricaoDestino}}))
        return response.status(400).json('O destino já foi cadastrado')

    await Destino.create({
        ds_destino: descricaoDestino,
        tp_destino: tipoDestino,
        dt_saida: dataSaida,
        estado_animal: estadoAnimal,
        id_animal: idAnimal,

    })
    return response.json('Cadastrado com sucesso')
    } catch (err) {
        return response.status(500).send({error: err})
    }
}

exports.atualizar = async(request, response) =>{
    const descricaoDestino = request.body.descricaoDestino;
    const tipoDestino = request.body.tipoDestino;
    const dataSaida = request.body.dataSaida;
    const estadoAnimal = request.body.estadoAnimal;
    const idAnimal = request.body.idAnimal
    const idDestino = request.params.id;
    await Destino.update({
        ds_destino: descricaoDestino,
        tp_destino: tipoDestino,
        dt_saida: dataSaida,
        estado_animal: estadoAnimal,
        id_animal: idAnimal,
    },{where:
        {id_destino:idDestino}
    })
    .then(() => response.status(200).send({response:'OK'}))
    .catch((err) => response.status(404).send({error:'Destino não encontrado'}));
}

exports.buscarTodos = async(request, response) => {

     await Destino.findAll({ limit: 10, order: [['updatedAt', 'DESC']]})
    .then(destino => response.json({
        destinos: destino,
    }))
    .catch(error => response.json({
        error: true,
        destinos:[],
        error: error
    }))
}
