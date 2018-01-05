import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import $ from 'jquery'
let base = window.location.host.indexOf('localhost') > -1 ? '//localhost:3000/' : '/'

let api = axios.create({
  baseURL: base + 'api/',
  timeout: 5000,
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
    setUser(state, user) {
      state.user = user
    },
    setWeather(state, data) {
      state.weather = data
    },
    setEvent(state, data) {
      state.events = data.events.event
    },
    setTodos(state, data) {
      state.todos = data
    },
    setQuote(state, data) {
      state.quote = data
    },
    setFeeds(state, data) {
      state.feeds = data.items
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
          commit('setBoards', res.data.data)
          console.log("data: ", res.data.data)
          dispatch('setHeight', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    setHeight({ commit, dispatch }, payload) {
      if (Array.isArray(payload)){
        for (let i = 0; i < payload.length; i++) {
          var item = payload[i];
          if (item.i == 2){
           var  test = {}
            test.height = ((item.h *39) - 100)
            test.i = 2
            console.log("payload array: ", test)
            commit('setHeight', test)
            return
          }
        }
      }
 console.log("payload object : " ,payload)
      commit('setHeight', payload)
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

    createBoard({ commit, dispatch }, payload) {
      api.post('boards', payload)
        .then(res => {
          commit('setBoards', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },




    upadeLayout({ commit, dispatch }, layout) {
      commit('setLayout', layout)
    },
    //USER LOGIN/REGISTER/LOGOUT
    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          if (!res.data.error) {
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
          commit('setUser', res.data.data)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          router.push({ name: 'Login' })
        })
    },

    authenticateProfile({ commit, dispatch }) {
      auth('authenticate')
        .then(res => {
          commit('setUser', res.data.data)
          router.push({ name: 'Profile' })
        })
        .catch(err => {
          router.push({ name: 'Login' })
        })
    },


    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          commit('setUser', {})
          router.push({ name: 'Login' })
        })

    },
    //GET API DATA
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
            commit('setWeather', res.data)
          })
          .catch(commit('handleError', Error))
      })


    },
    getGoogleUser({ commit, dispatch }, token) {
      api('/google/' + token)
        .then(res => {
          dispatch('login', res.data)
        })
        .catch(commit('handleError', Error))
    },
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
            commit('setEvent', res.data)
          })
          .catch(commit('handleError', Error))
      })


    },
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
    getQuote({ commit, dispatch }) {
      api('/quote')
        .then(res => {
          commit('setQuote', res.data)
        })
        .catch(commit('handleError', Error))
    },

    //Profile
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
      api.put('/users/' + payload.userId, payload)
        .then(res => {
          dispatch('authenticateProfile')
        })
    },
    //TOGGLE COMPONENTS
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
    //FEEDS
    searchFeeds({ commit, dispatch }, payload) {
      api.post('searchFeed', payload)
        .then(res => {
          commit('setSearchResults', res.data)
        })
    },
    getFeed({ commit, dispatch }, payload) {
      api.post('feed', payload.data)
        .then(res => {
          console.log(res)
          commit('setFeeds', res.data)
        })
    },
    addFeed({ commit, dispatch }, feed) {
      api.post('/feeds', feed)
        .then(res => {
          console.log(res)
          dispatch('getFeed', res.data)
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