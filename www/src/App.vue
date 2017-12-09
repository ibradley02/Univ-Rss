<template>
  <div id="app" class="container-fluid style-body">
    <div class="row">
      <div v-if="this.user.name">
        <navbar></navbar>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Login from './components/Login'
  import Navbar from './components/Navbar'  
  export default {
    name: 'app',
    components: {
      Login,
      Navbar
    },
    mounted() {
      this.$store.dispatch('authenticate')
      this.$store.dispatch('getWeather')
      this.$store.dispatch('getTodos')
      this.$store.dispatch('getQuote')
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
    /* text-align: center; */
    color: #2c3e50;
  }

</style>