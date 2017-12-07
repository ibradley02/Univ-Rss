var server = require('./config/dev-server')

let mongoose = require('mongoose')
let connection = mongoose.connection

mongoose.connect(process.env.CONNECTIONSTRING, {
    useMongoClient: true,
    keepAlive: { socketOptions: { keepALive: 300000, connectTimeoutMS: 30000} }
});

connection.on('error', console.error.bind(console, 'connection error'))

connection.once('open', function() {
    server.listen(process.env.PORT, function () {
        console.log(`Running on port: ${process.env.PORT}`)
    })
})