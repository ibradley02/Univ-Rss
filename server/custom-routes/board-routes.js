let Users = require('../models/user')
let request = require('request')

module.exports = {
    getWeather: {
        path: '/weather',
        reqType: 'get',
        method(req, res, next) {
            let action = 'make request to outside api and return data requested'
            request('http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35', function (error, response, body) {
                console.log('error:', error)
                console.log('statusCode:', response && response.statusCode)
                res.send(body)
            })
        }
    }
}

function handleResponse(action, data, error) {
    var response = {
        action: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}