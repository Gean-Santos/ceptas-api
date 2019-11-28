const ExameFisico = require('../model/ExameFisico');

exports.criar = async(request, response, next) =>{
    const estadoAnimal = request.body.estadoAnimal;
    const fotoExameFisico = request.body.fotoExameFisico;
    const estadoDecomposicao = request.body.estadoDecomposicao;
    const peso = request.body.peso;
    const temperatura = request.body.temperatura;
    const fcBpm = request.body.fcBpm;
    const fcMpm = request.body.fcMpm;
    const mausTratos = request.body.mausTratos;
    const sistemaNeurologico = request.body.sistemaNeurologico;
    const sistemaCardiovascular = request.body.sistemaCardiovascular;
    const sistemaRespiratorio = request.body.sistemaRespiratorio;
    const sistemaDigestivo = request.body.sistemaDigestivo;
    const sistemaOsteomuscular = request.body.sistemaOsteomuscular;
    const sistemaTegumentar = request.body.sistemaTegumentar;
    const atitude = request.body.atitude;
    const nivelDesidratacao = request.body.nivelDesidratacao;
    const estadoNutricional = request.body.estadoNutricional;
    const domesticacao = request.body.domesticacao;
    const idAnimal = request.body.idAnimal;
    const idExameComplementar = request.body.idExameComplementar;

    try {

    await ExameFisico.create({
	estado_animal: estadoAnimal,
	foto_exame_fisico: fotoExameFisico,
	estado_decomposicao: estadoDecomposicao,
	peso,
	temperatura,
	fc_bpm: fcBpm,
	fr_mpm: fcMpm,
	maus_tratos: mausTratos,
	sistema_neurologico: sistemaNeurologico,
	sistema_respiratorio: sistemaRespiratorio,
	sistema_digestivo: sistemaDigestivo,
	sistema_osteomuscular: sistemaOsteomuscular,
	sistema_cardiovascular: sistemaCardiovascular,
	sistema_tegumentar: sistemaTegumentar,
	ds_atitude: atitude,
	nivel_desidratacao: nivelDesidratacao,
	ds_estado_nutricional: estadoNutricional,
	ds_domesticacao: domesticacao,
	id_animal: idAnimal,
	id_exame_complementar: idExameComplementar,

    })
    return response.json('Cadastrado com sucesso')
    } catch (err) {
        return response.status(500).send({error: err})
    }
}

exports.atualizar = async(request, response) =>{
    const estadoAnimal = request.body.estadoAnimal;
    const fotoExameFisico = request.body.fotoExameFisico;
    const estadoDecomposicao = request.body.estadoDecomposicao;
    const peso = request.body.peso;
    const temperatura = request.body.temperatura;
    const fcBpm = request.body.fcBpm;
    const fcMpm = request.body.fcMpm;
    const mausTratos = request.body.mausTratos;
    const sistemaNeurologico = request.body.sistemaNeurologico;
    const sistemaCardiovascular = request.body.sistemaCardiovascular;
    const sistemaRespiratorio = request.body.sistemaRespiratorio;
    const sistemaDigestivo = request.body.sistemaDigestivo;
    const sistemaOsteomuscular = request.body.sistemaOsteomuscular;
    const sistemaTegumentar = request.body.sistemaTegumentar;
    const atitude = request.body.atitude;
    const nivelDesidratacao = request.body.nivelDesidratacao;
    const estadoNutricional = request.body.estadoNutricional;
    const domesticacao = request.body.domesticacao;
    const idAnimal = request.body.idAnimal;
    const idExameComplementar = request.body.idExameComplementar;
    const idExameFisico = request.params.id;
    await ExameFisico.update({
        estado_animal: estadoAnimal,
        foto_exame_fisico: fotoExameFisico,
        estado_decomposicao: estadoDecomposicao,
        peso,
        temperatura,
        fc_bpm: fcBpm,
        fr_mpm: fcMpm,
        maus_tratos: mausTratos,
        sistema_neurologico: sistemaNeurologico,
        sistema_respiratorio: sistemaRespiratorio,
        sistema_digestivo: sistemaDigestivo,
        sistema_osteomuscular: sistemaOsteomuscular,
        sistema_cardiovascular: sistemaCardiovascular,
        sistema_tegumentar: sistemaTegumentar,
        ds_atitude: atitude,
        nivel_desidratacao: nivelDesidratacao,
        ds_estado_nutricional: estadoNutricional,
        ds_domesticacao: domesticacao,
        id_animal: idAnimal,
        id_exame_complementar: idExameComplementar,
    },{where:
        {id_exame_fisico:idExameFisico}
    })
    .then(() => response.status(200).send({response:'OK'}))
    .catch((err) => response.status(404).send({error:'Exame Físico não encontrado'}));
}

exports.buscarTodos = async(request, response) => {

     await ExameFisico.findAll()
    .then(exames => response.json({
        exames: exames,
    }))
    .catch(error => response.json({
        error: true,
        exames:[],
        error: error
    }))
}
