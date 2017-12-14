var env = require('./env')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var defaultErrorHandler = require('./handlers').defaultErrorHandler
var corsOptions = require('./handlers').corsOptions
var api = require('../models')
var session = require('../authentication/sessions')
var Auth = require('../authentication/auth')
var Feedly = require('feedly')

var f = new Feedly({
    client_id: 'd4600ded-885d-4173-b9ed-8f41592b1d6e',
    client_secret: 'A3H3PsHe7hDKWyzRZJb2ycIV4FwIhzE0FbEMrBKIkNvIt8Ofoqy_u0zI95xDuzRuQd2niCZboEdwN89QH2DvSJrJmum9UoWLATkDzDdZa4VfgRjJSThRYtce_gOnGEIf6_NLEDqNogwJZuSF7OhLUYoersoJgcIF6x7CVWvHms5QSJeP5eNKsXxfzlB1HGL1Ozefm9tVrA_zzlDp7vtRtvDCBRln5lg:feedlydev',
    port: 8080
})

// ENABLE ROUTES IF USING app SIDE ROUTING
// import routes from './routes'

let app = express()
let server = require('http').createServer(app)

function Validate(req, res, next) {
    // ONLY ALLOW GET METHOD IF NOT LOGGED IN 
    console.log(req.session)
    if (req.method !== 'GET' && !req.session.uid) {
        return res.status(401).send({ error: 'Please Login or Register to continue' })
    }
    return next()
}

function logger(req, res, next) {
    console.log('INCOMING REQUEST', req.url)
    next()
}

// REGISTER MIDDLEWARE
app.use(session)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '../public'))
app.use('*', logger)
app.use('*', cors(corsOptions))
app.use('/', Auth)

// LOCKS API TO REQUIRE USER AUTH
app.use(Validate)
app.use('/api', api)
app.use('/', defaultErrorHandler)

let io = require('socket.io')(server, {
    origins: '*:*'
})

io.on('connection', function (socket) {
    socket.emit('CONNECTED', {
        socket: socket.id,
        message: 'Welcome to the Jungle'
    })

    socket.on('update', (d) => {
        console.log(d)
    })

})

module.exports = server