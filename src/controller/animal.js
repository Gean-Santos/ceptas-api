const Animal = require('../model/Animal');
const Especie = require('../model/Especie')

exports.criar = async(request, response, next) =>{
    const sexo = request.body.sexo;
    const dataIdadeEstimada = request.body.dataIdadeEstimada;
    const idadeEstimada = request.body.idadeEstimada;
    const marcacao = request.body.marcacao;
    const maturidade = request.body.maturidade;
    const riscoExtincao = request.body.riscoExtincao;
    const idEspecie = request.body.idEspecie;

    try {
    if(await Animal.findOne({where:{marcacao}}))
        return response.status(404).json('O animal já foi cadastrado')

    const animal = await Animal.create({
        sexo_animal:sexo,
        dt_ultima_atualizacao: new  Date(),
        dt_idade_estimada: dataIdadeEstimada,
        idade_estimada: idadeEstimada,
        marcacao,
        ds_maturidade: maturidade,
        risco_extincao: riscoExtincao,
        id_especie: idEspecie,

    })
    return response.json('Cadastrado com sucesso')
    } catch (err) {
        return response.status(500).send({error: err})
    }
}

exports.atualizar = async(request, response) =>{
    const sexo = request.body.sexo;
    const dataIdadeEstimada = request.body.dataIdadeEstimada;
    const idadeEstimada = request.body.idadeEstimada;
    const marcacao = request.body.marcacao;
    const maturidade = request.body.maturidade;
    const riscoExtincao = request.body.riscoExtincao;
    const idEspecie = request.body.idEspecie;
    const idAnimal = request.params.id;
    await Animal.update({
        sexo_animal:sexo,
        dt_ultima_atualizacao: new  Date(),
        dt_idade_estimada: dataIdadeEstimada,
        idade_estimada: idadeEstimada,
        marcacao,
        ds_maturidade: maturidade,
        risco_extincao: riscoExtincao,
        id_especie: idEspecie,
    },{where:
        {id_animal:idAnimal}
    })
    .then(() => response.status(200).send({response:'OK'}))
    .catch((err) => response.status(404).send({error:'Animal não encontrado'}));
}

exports.buscarTodos = async(request, response) => {

     await Animal.findAll()
    .then(animais => response.json({
        animais: animais,
    }))
    .catch(error => response.json({
        error: true,
        animais:[],
        error: error
    }))
}

exports.buscarUm = async(request, response) =>{
    try {
        const {marcacao} = request.body
        const animal = await Animal.findOne({
            where:{
                marcacao
            }
        })
        const especie = await Especie.findOne({
            where:{
                id_especie:animal.id_especie
            }
        })
        response.send({
            animal, especie
        })
    } catch (err) {
        return response.status(404).send({error: 'Animal não encontrado'})
    }
}