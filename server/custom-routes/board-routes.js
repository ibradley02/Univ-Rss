let Users = require('../models/user')
let request = require('request')
let Feeds = require('../models/feed')

module.exports = {
    searchFeed: {
        path: '/searchFeed',
        reqType: 'post',
        method(req, res, next) {
            let action = 'Search Feeds'
            Feeds.find({ name: req.body.name })
                .then(feeds => {
                    res.send(handleResponse(action, feeds))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    submitFeed: {
        path: '/feed',
        reqType: 'post',
        method(req, res, next) {
            let apiKey = 'u1le59ytbef1hkkspxk0ewbrd1lm3pcu1nuazvin'
            let action = 'make request to outside api and return data requested'
            request('https://api.rss2json.com/v1/api.json?rss_url=' + req.body.url + '&api_key=' + apiKey, function (error, response, body) {
                var info = JSON.parse(body)
                console.log(info)
                res.send(info)
            })
        }
    },
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
            request('http://api.eventful.com/json/events/search?&where=' + req.params.lat + ',' + req.params.long + '&within=25&when=this+week&sort_order=popularity&page_size=250&app_key=j8PNS6tcSztxdnWS', function (error, response, body) {
                console.log('error:', error)
                console.log('statusCode:', response && response.statusCode)
                res.send(body)
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
    },
    getGoogleUser: {
        path: '/google/:token',
        reqType: 'get',
        method(req, res, next) {
            let action = 'make request to outside api and return data requested'
            //aud: the client ID of the web component of the project
            //azp: the client ID of the Android app component of project
            var profileUrl = "https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token="
            var calenderUrl = "https://www.googleapis.com/calendar/v3/userinfo?alt=json&access_token="
            var authCheckUrl = "https://www.googleapis.com/oauth2/v3/tokeninfo?access_token="
            var authEmailUrl = "https://www.googleapis.com/gmail/v1/users/115581082286636298877/history?access_token="
            var tokenInfoUrl = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token='

            request(tokenInfoUrl + req.params.token , function (error, response, body) {
                body = JSON.parse(body)
                // console.log('statusCode:', response && response.statusCode)
                Users.findOneAndUpdate({ email: body.email }, body, { upsert: true }).then(user => {
                    console.log("UserObject: ", user)
                    req.session.user = user
                    req.session.oauth = body
                    req.session.access_token = req.params.token
                    req.session.uid = user._id
                    req.session.save()
                    res.send(user)

                })

            })
        }

    },
    getGoogleProfile: {
        path: '/google/:payload',
        reqType: 'get',
        method(req, res, next) {
            let action = 'make request to outside api and return data requested'
            //aud: the client ID of the web component of the project
            //azp: the client ID of the Android app component of project
            request('https://www.googleapis.com/auth/userinfo.profile/oauth2/v3/tokeninfo?access_token=' + req.params.payload, function (error, response, body) {
                console.log(body)
                console.log('error:', error)
                // console.log('statusCode:', response && response.statusCode)
                res.send(body)
            })
        }

    },
    getGoogleCalendar: {
        path: '/g-cal',
        reqType: 'get',
        method(req, res, next) {
            var calendarUrl = "https://www.googleapis.com/calendar/v3/users/me/calendarList?&alt=json&access_token=" + req.session.access_token
            // var calendarUrl = "https://content.googleapis.com/calendar/v3/primary?alt=json&key="
            // var calendarUrl = "https://content.googleapis.com/auth/userinfo.calendar/oauth2/v3/tokeninfo?alt=json&access_token=" + req.session.access_token
            // var calendarUrl = "https://www.googleapis.com/auth/drive.readonly?access_token=" + req.session.access_token
            // var calendarUrl = "https://www.googleapis.com/calendar/v2/calendarList?minAccessRole=writer&access_token=" + req.session.access_token


            // Request URL:https://content.googleapis.com/calendar/v3/calendars/primary?key=AIzaSyD-a9IF8KKYgoC3cpgS-Al7hLQDbugrDcw

            request(calendarUrl, (err, resp, body) => {
                console.log('CALENDAR?', body)
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

// https://www.googleapis.com/gmail/v1/users/115581082286636298877/history

// "scope": "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.circles.members.read https://www.googleapis.com/auth/plus.profile.agerange.read https://www.googleapis.com/auth/plus.profile.language.read https://www.googleapis.com/auth/plus.moments.write"

