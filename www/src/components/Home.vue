<template>
  <div class="home">
    <navbar></navbar>
    <sidebar></sidebar>
    <weather></weather>
    <todo></todo>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './Navbar'
  import Sidebar from './Sidebar'
  import Weather from './Weather'
  import Todo from './Todo'
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    name: 'Home',
    components: {
      Weather,
      Navbar,
      Sidebar,
      Todo
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .home{
    margin-top: 20vh;
  }
</style>