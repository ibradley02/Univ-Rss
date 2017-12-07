<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <home></home> -->
    <img src="./assets/logo.png">
    <login></login>
    <router-view/>
=======
    <home></home>
  
>>>>>>> e8b95a8ca8fbd44a08037abae3448dc0b0b17d3e
  </div>
</template>

<script>
import Login from './components/Login'
export default {
  name: 'app',
  components: {
    Login
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