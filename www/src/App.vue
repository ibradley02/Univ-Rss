<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Login from './components/Login'
  export default {
    name: 'app',
    components: {
      Login
    },
    mounted() {
      this.$store.dispatch('authenticate')
      this.$store.dispatch('getWeather')
      this.$store.dispatch('getTodos')
      this.$store.dispatch('getQuote')
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 71px;
  }
</style>