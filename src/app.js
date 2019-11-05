const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const status = require('http-status');
const router = require('./routes/users');
const sequelize = require('./database/database');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/ceptas', router);

app.get('/', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })


app.use((request, response, next) =>{
    response.status(status.NOT_FOUND).send()
});

app.use((error, request, response, next) =>{
    response.status(status.INTERNAL_SERVER_ERROR).json({ error })
});

sequelize.sync().then(() => {
    const port = process.env.PORT || 3000

    app.set('port', port)

    const server = http.createServer(app)

    server.listen(port)

})

