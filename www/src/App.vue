<template>
  <div id="app" class="container-fluid background" :style="{ 'background-image': 'url(' + user.background + ')' }">
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
      Login,
    },
    mounted() {
      this.$store.dispatch('authenticate')
      this.$store.dispatch('getWeather')
      this.$store.dispatch('getTodos')
      this.$store.dispatch('getEvents')
      this.$store.dispatch('getQuote')
      this.$store.dispatch('getBoards')
    },
    computed:{
      user(){
        return this.$store.state.user
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .background {
    background: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    margin: 0px 0px 0px 0px;
    min-height: 100vh;
  }

</style>