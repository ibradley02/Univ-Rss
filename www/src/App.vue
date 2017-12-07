<template>
  <div id="app">
<<<<<<< HEAD
    <home></home>
    <!-- <login></login> -->
    <router-view/>
=======
    <img src="./assets/logo.png">
    <router-view></router-view>
>>>>>>> 949759511a20dfbf34bbde5d81b5b097a0b7daae
  </div>
</template>

<script>
import Login from './components/Login'
export default {
  name: 'app',
  components: {
    Login
  },
  mounted (){
    this.$store.dispatch('authenticate')
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>