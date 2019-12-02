const Documento = require('../model/Documento');

exports.criar = async(request, response) =>{
    const numero_documento = request.body.numeroDocumento;
    const nu_documento = numero_documento.split("").filter(Number).join("");
    const tipoDocumento = request.body.tipoDocumento.toUpperCase();

    try {
    if(await Documento.findOne({where:{id_documento:nu_documento}}))
        return response.status(400).json('O documento já foi cadastrado')

    const documento = await Documento.create({
        id_documento: nu_documento,
        tp_documento:tipoDocumento
    })
    return response.json(documento.id_documento)
    
    } catch (err) {
        return response.status(500).send({error: 'Não foi possível cadastrar o documento'})
    }
}

exports.atualizar = async(request, response) =>{
    const id_documento = request.params.id;
    const tp_documento = request.body.tipoDocumento
    await Documento.update({
        tp_documento: tp_documento,
        id_documento:id_documento,
    },{where:
        {id_documento:id_documento}
    })
    .then(() => response.status(200).send({response:'OK'}))
    .catch((err) => response.status(404).send({error:'Documento não encontrado'}));
}

exports.buscarTodos = async(request, response) => {

     await Documento.findAll({
        attributes: ['id_documento', 'tp_documento']
     })
    .then(documento => response.json({
        documentos: documento,
    }))
    .catch(error => response.json({
        error: true,
        documentos:[],
        error: error
    }))
}