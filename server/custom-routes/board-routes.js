let Users = require('../models/user')
let request = require('request')

module.exports = {
    getWeather: {
        path: '/weather/:lat/:long',
        reqType: 'get',
        method(req, res, next) {
            let action = 'make request to outside api and return data requested'
                request('https://api.openweathermap.org/data/2.5/weather?lat=' + req.params.lat + '&lon=' + req.params.long + '&units=imperial&&appid=8d7d6f68ddb8370dd6ae5712e11ca530', function (error, response, body) {
                    console.log('error:', error)
                    console.log('statusCode:', response && response.statusCode)
                    res.send(body)
                })
        }

    },
    getEvents: {
        path: '/event/:lat/:long',
        reqType: 'get',
        method(req, res, next) {
            let action = 'make request to outside api and return data requested'
                request('http://api.eventful.com/json/events/search?&where='+ req.params.lat +','+ req.params.long + '&within=25&app_key=j8PNS6tcSztxdnWS', function (error, response, body) {
                    console.log('error:', error)
                    console.log('statusCode:', response && response.statusCode)
                res.send(body)
                // '&app_key='+@key
                // j8PNS6tcSztxdnWS
                })
        }

    },
    getQuote: {
        path: '/quote',
        reqType: 'get',
        method(req, res, next) {
            let action = 'make request to outside api and return data requested'
            request('http://quotesondesign.com/api/3.0/api-3.0.json', function (error, response, body) {
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