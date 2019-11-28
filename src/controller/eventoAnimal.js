const EventoAnimal = require('../model/EventoAnimal');

exports.criar = async(request, response, next) =>{
    const dataEventoAnimal = request.body.dataEventoAnimal;
    const tipoEventoAnimal = request.body.tipoEventoAnimal;
    const idExameFisico = request.body.idExameFisico;
    const idExameComplementar = request.body.idExameComplementar;
    const fotoAnimal = request.body.fotoAnimal;
    const observacao = request.body.observacao;
    const idEvento = request.body.idEvento;
    const idAnimal = request.body.idAnimal;
    const idFuncionario = request.body.idFuncionario;

    try {

    await Evento.create({
	    dt_evento_animal:dataEventoAnimal,
        tp_evento_animal: tipoEventoAnimal,
        id_evento: idEvento,
        id_exame_fisico: idExameFisico,
        id_exame_complementar: idExameComplementar, 
        foto_animal: fotoAnimal, 
        observacao: observacao,
        id_animal:idAnimal,
        id_funcionario:idFuncionario

    })
    return response.json('Cadastrado com sucesso')
    } catch (err) {
        return response.status(500).send({error: err})
    }
}

exports.atualizar = async(request, response) =>{
    const dataEventoAnimal = request.body.dataEventoAnimal;
    const tipoEventoAnimal = request.body.tipoEventoAnimal;
    const idExameFisico = request.body.idExameFisico;
    const idExameComplementar = request.body.idExameComplementar;
    const fotoAnimal = request.body.fotoAnimal;
    const observacao = request.body.observacao;
    const idEvento = request.body.idEvento;
    const idAnimal = request.body.idAnimal;
    const idFuncionario = request.body.idFuncionario;
    const idEventoAnimal = request.params.id;
    await EventoAnimal.update({
        dt_evento_animal:dataEventoAnimal,
        tp_evento_animal: tipoEventoAnimal,
        id_evento: idEvento,
        id_exame_fisico: idExameFisico,
        id_exame_complementar: idExameComplementar, 
        foto_animal: fotoAnimal, 
        observacao: observacao,
        id_animal:idAnimal,
        id_funcionario:idFuncionario
    },{where:
        {id_evento_animal:idEventoAnimal}
    })
    .then(() => response.status(200).send({response:'OK'}))
    .catch((err) => response.status(404).send({error:'Evento Animal não encontrado'}));
}

exports.buscarTodos = async(request, response) => {

     await EventoAnimal.findAll()
    .then(eventos => response.json({
        eventos: eventos,
    }))
    .catch(error => response.json({
        error: true,
        eventos:[],
        error: error
    }))
}
