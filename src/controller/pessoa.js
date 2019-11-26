const Pessoa = require('../model/Pessoa');

exports.criar = async(request, response) =>{
    const nome = request.body.nome;
    const tipo_pessoa = request.body.tipo_pessoa;
    const email = request.body.email;
    const genero = request.body.genero;
    const telefone = Number(request.body.telefone);
    const endereco = request.body.endereco;
    const tipo_endereco = request.body.tipo_endereco;
    const cep = request.body.cep;
    const bairro = request.body.bairro;
    const cidade = request.body.cidade;
    const uf = request.body.uf;
    const id_documento = request.body.id_documento;

    try{
            const pessoa = await Pessoa.create({
                nm_pessoa:nome,
                tp_pessoa:tipo_pessoa,
                ds_email:email,
                genero_pessoa:genero,
                telefone_pessoa:telefone,
                endereco_pessoa:endereco,
                tp_endereco:tipo_endereco,
                nu_cep:cep,
                bairro_endereco:bairro,
                cidade_endereco:cidade,
                uf_endereco:uf,
                id_documento,
            })
            return response.json({
                pessoa
            })
        
    }catch(err){
        return response.status(404).send({error: err})
    }
}
exports.buscarTodos = async(request, response) => {
    await Pessoa.findAll()
    .then(pessoas => response.json({
        data: pessoas
    }))
    .catch(error => response.json({
        error: true,
        data:[],
        error: error
    }))

}

exports.buscarPessoa = async(request, response) => {
    const email = request.params.email;
    await Pessoa.findOne({
        where:{ds_email: email,},
        attributes: ['id_pessoa', 'ds_email']
    })
    .then(pessoa => response.json(pessoa))
    .catch(()=> response.status(404).json({erro: 'Email não cadastrado'}))
}

