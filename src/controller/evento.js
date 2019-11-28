const Evento = require('../model/Evento');

exports.criar = async(request, response, next) =>{
    const dataEvento = request.body.dataEvento;
    const horaEvento = request.body.horaEvento;
    const dataSaida = request.body.dataSaida;
    const tipoEvento = request.body.tipoEvento;
    const ri = request.body.ri;
    const nuSf = request.body.nuSf;
    const idRecinto = request.body.idRecinto;
    const idDestino = request.body.idRecinto;
    const idTipoApreensao = request.body.idTipoApreensao;
    const idApreensao = request.body.idApreensao;
    const idFuncionario = request.body.idFuncionario;

    try {

    await Evento.create({
	    dt_evento:dataEvento,
        hr_evento: horaEvento,
        dt_saida: dataSaida,
        tp_evento: tipoEvento,
        RI:ri,
        nu_sf: nuSf, 
        id_recinto: idRecinto, 
        id_destino: idDestino,
        id_tipo_apreensao:idTipoApreensao,
        id_apreensao: idApreensao,
        id_funcionario:idFuncionario

    })
    return response.json('Cadastrado com sucesso')
    } catch (err) {
        return response.status(500).send({error: err})
    }
}

exports.atualizar = async(request, response) =>{
    const dataEvento = request.body.dataEvento;
    const horaEvento = request.body.horaEvento;
    const dataSaida = request.body.dataSaida;
    const tipoEvento = request.body.tipoEvento;
    const ri = request.body.ri;
    const nuSf = request.body.nuSf;
    const idRecinto = request.body.idRecinto;
    const idDestino = request.body.idRecinto;
    const idTipoApreensao = request.body.idTipoApreensao;
    const idApreensao = request.body.idApreensao;
    const idFuncionario = request.body.idFuncionario;
    const idEvento = request.params.id;
    await Evento.update({
        dt_evento:dataEvento,
        hr_evento: horaEvento,
        dt_saida: dataSaida,
        tp_evento: tipoEvento,
        RI:ri,
        nu_sf: nuSf, 
        id_recinto: idRecinto, 
        id_destino: idDestino,
        id_tipo_apreensao:idTipoApreensao,
        id_apreensao: idApreensao,
        id_funcionario:idFuncionario
    },{where:
        {id_evento:idEvento}
    })
    .then(() => response.status(200).send({response:'OK'}))
    .catch((err) => response.status(404).send({error:'Evento não encontrado'}));
}

exports.buscarTodos = async(request, response) => {

     await Evento.findAll()
    .then(eventos => response.json({
        eventos: eventos,
    }))
    .catch(error => response.json({
        error: true,
        eventos:[],
        error: error
    }))
}
