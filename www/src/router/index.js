import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Profile from '../components/Profile'
import store from '../store'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true}
      
    },
    {
      path: '/login',
      name: 'Login',
      component: Login

    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true}
      
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
  
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.user._id) {
        redirect: to.fullPath
        next()
    }
  } else {
      path: '/login';
      redirect: to.path
      next()
  }
})


export default router 
