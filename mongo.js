const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const env = {
    dbName: 'nsa-fire',
    key: process.env.COSMOSDB_PASSWORD,
    port: process.env.COSMOSDB_PORT
}

function connect() {
    return mongoose.connect(process.env.COSMOSDB_URI)
}


module.exports = {
    connect
}