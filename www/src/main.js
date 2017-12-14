// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
<<<<<<< HEAD
import GoogleAuth from 'vue-google-auth'


=======
import VueGridLayout from 'vue-grid-layout'
>>>>>>> e97238e7639dfe2f45ab136381470b08c4f9b902
Vue.config.productionTip = false

Vue.use(GoogleAuth, { client_id: '135687662938-dbun17i0tstqe7lidpj2j2jbkaa11eel.apps.googleusercontent.com' })
Vue.googleAuth().load()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
