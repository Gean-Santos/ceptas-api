module.exports = {
    development:{
        database:{
            host: 'localhost',
            port: 3306,
            name: 'bd_teste_CEPTAS',
            dialect: 'mysql',
            user: 'root',
            password: 'G3@n1234'
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }        
    }
}