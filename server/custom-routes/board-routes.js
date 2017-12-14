let Users = require('../models/user')
let request = require('request')
let YUI = require('yui').use('yql', 'dataschema', 'datatype')

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
<<<<<<< HEAD
                request('http://api.eventful.com/rest/events/search?&where='+ req.params.lat +','+ req.params.long + '&within=25&app_key=j8PNS6tcSztxdnWS', function (error, response, body) {
                
                var mySchema = {
                    metaFields: { total: "//search/total_items" },
                    resultListLocator: "//search/events/event",
                    resultFields: [{key: "title", locator: "//search/events/event/title"}, {key: "description", locator: "//search/events/event/description"}, {key: "url", locator: "//search/events/event/url"}]
                }
                var myOutput = YUI.DataSchema.XML.apply(mySchema, body)
                console.log(myOutput)
=======
                request('http://api.eventful.com/json/events/search?&where='+ req.params.lat +','+ req.params.long + '&within=25&app_key=j8PNS6tcSztxdnWS', function (error, response, body) {
                    console.log('error:', error)
                    console.log('statusCode:', response && response.statusCode)
                res.send(body)
>>>>>>> 936da6ef6f1b77070840cf0df1284784246b49ff
                // '&app_key='+@key
                // j8PNS6tcSztxdnWS
            }).then(res.send(body)
        )
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