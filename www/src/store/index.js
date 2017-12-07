import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from 'router'

let base = window.location.host.indexOf('localhost') > -1 ? '//localhost:3000/' : '/'

let api = axios.create({
  baseURL: base + 'api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: base,
  timeout: 2000,
  withCredentials: true
})

vue.use(vuex)

var store = new vuex.Store({
  state: {
    boards: [],
    activeBoard: {},
    error: {},
    user: {}
  },
  mutations: {
    handleError(state, err) {
      state.error = err
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts
    login({ commit, dispatch }, payload) {
      auth.post('login', payload)
        .then(res => {
            debugger
          commit('setUser', res.data.data)
        //   dispatch('getBoards')
        })
        .catch(err => {
          commit('handleError', err.response.data)
        })
    },

    register({ commit, dispatch }, payload) {
        debugger
      if (payload.image === '') {
        delete payload.image
      }
      auth.post('register', payload)
        .then(res => {
          commit('setUser', res.data.data)
        })
    },

    authenticate({ commit, dispatch }) {
      auth('authenticate')
        .then(res => {
          commit('setUser', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },

    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          commit('setUser', {})
          dispatch('getBoards')
          console.log(res)
        })

    },

    //Error

    handleError({ commit, dispatch }, err) {
      commit('handleError', err)
    }
  }

})


export default store