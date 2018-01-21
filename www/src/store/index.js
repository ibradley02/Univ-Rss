import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import $ from 'jquery'
import index from 'vue';
let base = window.location.host.indexOf('localhost') > -1 ? '//localhost:3000/' : '/'

let api = axios.create({
  baseURL: base + 'api/',
  timeout: 20000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: base,
  timeout: 5000,
  withCredentials: true
})

vue.use(vuex)

var store = new vuex.Store({
  state: {
    boards: [],
    todos: [],
    activeBoard: {},
    error: {},
    oauth: {},
    user: {},
    weather: {},
    events: {},
    quote: {},
    feeds: {},
    height: {},
    searchResults: {},
    categories: {}
  },
  mutations: {
    setHeight(state, payload) {
      vue.set(state.height, payload.i, payload.height)
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    handleError(state, err) {
      state.error = err
    },
    setUser(state, data) {
      state.user = data
      // state.oauth = data
    },
    setWeather(state, data) {
      state.weather = data
    },
    setEvent(state, data) {
      state.events = data
    },
    setTodos(state, data) {
      state.todos = data
    },
    setQuote(state, data) {
      state.quote = data
    },
    setFeeds(state, data) {
      console.log("setFeeds: ", data)
      state.feeds = data
    },
    setSearchResults(state, data) {
      state.searchResults = data.data
    },
    setCategories(state, data) {
      state.categories = data
    }
  },
  actions: {
    //*********BOARDS**********/
    getBoards({ commit, dispatch }) {
      api('userboards')
        .then(res => {
          dispatch('modBoards', res.data.data)
          // dispatch('setHeight', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    modBoards({ commit, dispatch }, boards) {
      var newBoards = []
      var newIndex = 0
      for (var i = 0; i < boards.length; i++) {
        var board = boards[i];
        board.i = newIndex.toString()
        newBoards.push(board)
        newIndex++
      }
      commit('setBoards', newBoards)
      dispatch('setHeight', newBoards)
    },
    setHeight({ commit, dispatch }, payload) {
      if (Array.isArray(payload)) {
        for (let i = 0; i < payload.length; i++) {
          var item = payload[i];
          if (item.component == "events") {
            var test = {}
            test.height = ((item.h * 39) - 80)
            test.i = item.i
            commit('setHeight', test)
            return
          }
        }
      }
      commit('setHeight', payload)
    },
    createBoard({ commit, dispatch }, payload) {
      api.post('boards', payload)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeBoard({ commit, dispatch }, board) {
      api.delete('boards/' + board._id)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    updateBoard({ commit, dispatch }, payload) {
      commit('setBoards', payload)


      // api.put('boards/' + payload.boardId , payload)
      // .then(res => {
      //   dispatch('getBoards', res.data.data)
      // })
      // .catch(err => {
      //   commit('handleError', err)
      // })
    },
    saveLayout({ commit, diapatch }, ) {
      var boards = store.state.boards
      for (let i = 0; i < boards.length; i++) {
        var board = boards[i];
        api.put('boards/' + board._id, board)
          .then(res => {
          })
          .catch(err => {
            commit('handleError', err)
          })
      }
    },
    upadeLayout({ commit, dispatch }, layout) {
      commit('setLayout', layout)
    },

    // USER LOGIN/REGISTER/LOGOUT
    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          if (!res.data.error) {
            dispatch('getAll')
            commit('setUser', res.data.data)
            router.push({ name: 'Home' })
          } else {
            commit('handleError', res.data)
          }
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    register({ commit, dispatch }, payload) {
      if (payload.image === '') {
        delete payload.image
      }
      auth.post('register', payload)
        .then(res => {
          commit('setUser', res.data.data)
          dispatch('authenticate')
        })
    },
    authenticate({ commit, dispatch }) {
      auth('authenticate')
        .then(res => {
          dispatch('getAll')
          commit('setUser', res.data.data)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          router.push({ name: 'Login' })
        })
    },
    googleAuthenticate({ commit, dispatch }, newData) {
      auth('authenticate')
        .then(res => {
          dispatch('getAll')
          if(res.data.data.name == undefined){
            res.data.data.name = newData.ig
            res.data.data.image = newData.Paa
            dispatch('updateProfile', res.data.data)
            commit('setUser', res.data.data)
            router.push({ name: 'Home' })
          }else{

            commit('setUser', res.data.data)
            router.push({ name: 'Home' })
          }
        })
        .catch(err => {
          router.push({ name: 'Login' })
        })
    },
    getAll({commit, dispatch}){
      dispatch('getWeather')
      dispatch('getTodos')
      dispatch('getEvents')
      dispatch('getQuote')
      dispatch('getBoards')
      dispatch('getFeedsByUser')
    },
    getCal({ commit, dispatch }) {
      api('/g-cal').then(res => console.log("calender: ", res)).catch(err => console.log(err))
    },
    authenticateProfile({ commit, dispatch }) {
      auth('authenticate')
        .then(res => {
          commit('setUser', res.data.data)
        })
        .catch(err => {
          router.push({ name: 'Login' })
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          commit('setUser', {})
          commit('setBoards', [])
          router.push({ name: 'Login' })
        })

    },

    // Google oAuth2
    getGoogleUser({ commit, dispatch }, token) {
      // dispatch("fixUser", token.w3)
      api('/google/' + token.Zi.access_token)
        .then(res => {
          dispatch('googleAuthenticate', token.w3)
        })
        .catch(commit('handleError', Error))
    },
    // fixUser({ commit, dispatch }, data) {
    //   var newData = {
    //     name: data.ig,
    //     image: data.Paa
    //   }
    //   commit("setGoogleUser", newData)
    // },

    // Weather
    getWeather({ commit, dispatch }) {
      // Get position if possible **Not possible on Chrome 50**
      navigator.geolocation.getCurrentPosition(function (position) {
        if (position) {
          var location = {
            lat: position.coords.latitude,
            long: position.coords.longitude
          }

        }
        api('/weather/' + location.lat + '/' + location.long)
          .then(res => {
            var number = res.data.main.temp;
            var factor = Math.pow(10, 0);
            var test = Math.round(number * factor) / factor;
            res.data.main.temp = test;
            commit('setWeather', res.data)
          })
          .catch(commit('handleError', Error))
      })


    },

    // Events
    getEvents({ commit, dispatch }) {
      navigator.geolocation.getCurrentPosition(function (position) {
        if (position) {
          var location = {
            lat: position.coords.latitude,
            long: position.coords.longitude
          }

        }
        api('/event/' + location.lat + '/' + location.long)
          .then(res => {
            console.log("events: ", res.data.events)
            dispatch('modifyEventTime', res.data.events.event)
          })
          .catch(commit('handleError', Error))
      })
    },
    modifyEventTime({ commit, dispatch }, data) {
      var newData = []
      var newTime = ""
      // loop to find the time in event
      for (let i = 0; i < data.length; i++) {
        var time = data[i].start_time;
        // Function to change time
        (function () {
          var D = new Date('2011-06-02T09:34:29+02:00');
          if (!D || +D !== 1307000069000) {
            Date.fromISO = function (s) {
              var day, tz,
                rx = /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/,
                p = rx.exec(s) || [];
              if (p[1]) {
                day = p[1].split(/\D/);
                for (var i = 0, L = day.length; i < L; i++) {
                  day[i] = parseInt(day[i], 10) || 0;
                };
                day[1] -= 1;
                day = new Date(Date.UTC.apply(Date, day));
                if (!day.getDate()) return NaN;
                if (p[5]) {
                  tz = (parseInt(p[5], 10) * 60);
                  if (p[6]) tz += parseInt(p[6], 10);
                  if (p[4] == '+') tz *= -1;
                  if (tz) day.setUTCMinutes(day.getUTCMinutes() + tz);
                }
                return day;
              }
              return NaN;
            }
            // shim implemented;
          }
          else {
            Date.fromISO = function (s) {
              return new Date(s);
            }
            //native ISO Date implemented;
          }
        })()
        // call Function to change time
        newTime = Date.fromISO(time).toLocaleString();
        // insert new time in event and push to newData
        data[i].start_time = newTime
        newData.push(data[i])
      }
      commit('setEvent', newData)
    },

    // Todos
    getTodos({ commit, dispatch }) {
      api('/usertodos')
        .then(res => {
          commit('setTodos', res.data.data)
        })
        .catch(commit('handleError', Error))
    },
    addTodo({ commit, dispatch }, todo) {
      api.post('/todos', todo)
        .then(res => {
          dispatch('getTodos')
        })
    },
    removeTodo({ commit, dispatch }, id) {
      api.delete('/todos/' + id)
        .then(res => {
          dispatch('getTodos')
        })
    },

    // Quote
    getQuote({ commit, dispatch }) {
      api('/quote')
        .then(res => {
          commit('setQuote', res.data)
        })
        .catch(commit('handleError', Error))
    },

    // Profile
    updateProfile({ commit, dispatch }, payload) {
      if (payload.image === '') {
        delete payload.image
      }
      if (payload.name === '') {
        delete payload.name
      }
      if (payload.background === '') {
        delete payload.background
      }
      if (payload.password === '') {
        delete payload.password
      }
      api.put('/users/' + payload._id, payload)
        .then(res => {
          dispatch('authenticateProfile')
        })
    },

    // TOGGLE COMPONENTS
    updateClock({ commit, dispatch }, payload) {
      api.put('/users/' + payload.userId, payload)
        .then(res => {
          dispatch('authenticate')
        })
    },
    updateTodo({ commit, dispatch }, payload) {
      api.put('/users/' + payload.userId, payload)
        .then(res => {
          dispatch('authenticate')
        })
    },
    updateWeather({ commit, dispatch }, payload) {
      api.put('/users/' + payload.userId, payload)
        .then(res => {
          dispatch('authenticate')
        })
    },
    updateQuote({ commit, dispatch }, payload) {
      api.put('/users/' + payload.userId, payload)
        .then(res => {
          dispatch('authenticate', res.data)
        })
    },
    updateEvent({ commit, dispatch }, payload) {
      api.put('/users/' + payload.userId, payload)
        .then(res => {
          dispatch('authenticate')
        })
    },

    // FEEDS
    searchFeeds({ commit, dispatch }, payload) {
      api.post('searchFeed', payload)
        .then(res => {
          console.log("feed search: ", res.data)
          commit('setSearchResults', res.data)
        })
    },
    getFeedsByUser({ commit, dispatch }) {
      api('/feeds')
        .then(res => {
          console.log("feed get: ", res)
          commit('setFeeds', res.data)
        })
    },
    // addUserFeed({ commit, dispatch }, payload) {
    //   api.put('/updatefeed', payload)
    //   .then(res => {
    //     console.log("updated feed: ", res)
    //     commit("setFeeds", res.data)
    //     dispatch("getFeedsByUser")
    //   })
    // },
    // getUserFeeds({ commit, dispatch }) {
     
    //   api('/user-feeds')
    //     .then(res => {
    //       console.log("user feeds: ", res.data)
    //       dispatch('getFeeds')
    //     })
    // },
    addFeed({ commit, dispatch }, feed) {
      api.post('/feeds', feed)
        .then(res => {
          console.log("add feed: ", res.data)
          commit("setFeeds", res.data)
          dispatch('getFeedsByUser')
        })
    },
    createCategory({ commit, dispatch }, payload) {
      api.post('categories', payload)
        .then(res => {
          dispatch('getCategories')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getCategories({ commit, dispatch }) {
      api('usercategories')
        .then(res => {
          console.log("feed category: ", res.data)
          commit('setCategories', res.data.data)
        })
        .catch(commit('handleError', Error))
    },
    removeCategory({ commit, dispatch }, id) {
      api.delete('/categories/' + id)
        .then(res => {
          dispatch('getCategories')
        })
    },
  }
})


export default store