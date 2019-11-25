const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const status = require('http-status');

const routesFuncionarios = require('./routes/funcionarios');
const routesPessoas = require('./routes/pessoas');
const routesAnimais = require('./routes/animais');
const routesEspecies = require('./routes/especies')

//const sequelize = require('./database/database');
const cors = require('cors');


const port = process.env.PORT || 3003
const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/ceptas', routesFuncionarios);
app.use('/ceptas', routesPessoas);
app.use('/ceptas', routesAnimais);
app.use('/ceptas', routesEspecies);

app.get('/ceptas', function (req, res, next) {
    res.send('Welcome to the CePTAS API')
  })


app.use((request, response, next) =>{
    response.status(status.NOT_FOUND).send()
});

app.use((error, response, next) =>{
    response.status(status.INTERNAL_SERVER_ERROR).json({ error })
});

    app.set('port', port)

    const server = http.createServer(app)

    server.listen(port)



