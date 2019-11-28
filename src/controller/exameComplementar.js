const ExameComplementar = require('../model/ExameComplementar');

exports.criar = async(request, response, next) =>{
    const especificacaoExame = request.body.especificacaoExame;
    const resultadoExame = request.body.resultadoExame;
    const idExameFisico = request.body.idExameFisico;
    try {

    await ExameComplementar.create({
        especificacao_exame: especificacaoExame,
        resultado_exame: resultadoExame,
        id_exame_fisico: idExameFisico,
    })
    return response.json('Cadastrado com sucesso')
    } catch (err) {
        return response.status(500).send({error: err})
    }
}

exports.atualizar = async(request, response) =>{
    const especificacaoExame = request.body.especificacaoExame;
    const resultadoExame = request.body.resultadoExame;
    const idExameFisico = request.body.idExameFisico;
    const idExameComplementar = request.params.id;
    await ExameComplementar.update({
        especificacao_exame: especificacaoExame,
        resultado_exame: resultadoExame,
        id_exame_fisico: idExameFisico,
    },{where:
        {id_exame_complementar:idExameComplementar}
    })
    .then(() => response.status(200).send({response:'OK'}))
    .catch((err) => response.status(404).send({error:'Exame complementar não encontrado'}));
}

exports.buscarTodos = async(request, response) => {

     await ExameComplementar.findAll()
    .then(exames => response.json({
        exames: exames,
    }))
    .catch(error => response.json({
        error: true,
        exames:[],
        error: error
    }))
}
