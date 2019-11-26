const Recinto = require('../model/Recinto');

exports.criar = async(request, response) =>{
    const recinto = request.body.descricaoRecinto;
    const local = request.body.localRecinto;

    try {
    if(await Recinto.findOne({where:{ds_recinto:recinto}}))
        return response.status(404).json('O recinto já foi cadastrado')


    await Recinto.create({
        ds_recinto:recinto,
        ds_local: local
    })
    return response.json('Cadastrado com sucesso')
    } catch (err) {
        return response.status(500).send({error: 'Não foi possível cadastrar o recinto'})
    }
}

exports.atualizar = async(request, response) =>{
    const id_recinto = request.params.id;
    const recinto = request.body.descricaoRecinto;
    const local = request.body.localRecinto;
    await Recinto.update({
        ds_recinto:recinto,
        ds_local: local
    },{where:
        {id_recinto:id_recinto}
    })
    .then(() => response.status(200).send({response:'OK'}))
    .catch((err) => response.status(404).send({error:'Recinto não encontrado'}));
}

exports.buscarTodos = async(request, response) => {

     await Recinto.findAll({
        attributes: ['id_recinto', 'ds_recinto']
     })
    .then(recintos => response.json({
        recintos: recintos,
    }))
    .catch(error => response.json({
        error: true,
        recintos:[],
        error: error
    }))
}