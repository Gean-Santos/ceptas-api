const Especie = require('../model/Especie');

exports.criar = async(request, response, next) =>{
    const nomePopular = request.body.nomePopular;
    const descricaoEspecie = request.body.especie;
    const grupoTaxonomico = request.body.grupoTaxonomico;
    const nomeCientifico = request.body.nomeCientifico;

    try {
    if(await Especie.findOne({where:{ds_especie: descricaoEspecie}}))
        return response.status(404).send({error: 'A especie já foi cadastrada'})

    const especie = await Especie.create({
        nm_popular:nomePopular,
        nm_cientifico: nomeCientifico,
        grupo_taxonomico: grupoTaxonomico,
        ds_especie: descricaoEspecie,

    })
    return response.json({
        especie
    })
    } catch (err) {
        return response.json({erro: 'Dados inválidos'})
    }
}

exports.buscarTodos = async(request, response) => {
    await Especie.findAll({
        attributes: ['id_especie', 'ds_especie']})
    .then(especies => response.json({
        data: especies
    }))
    .catch(error => response.json({
        error: true,
        data:[],
        error: error
    }))

}