<template>
  <div class="col-sm-12 text-center">
    <navbar></navbar>
    <div class="row">
      <div class="main">
        <div class="sidebar-container">
          <sidebar></sidebar>
        </div>
        <div class="main-body">
          <div class="panel panel-default panel-style">
            <h1>
              <Clock :blink="true" />
            </h1>
          </div>
          <todo></todo>
          <weather></weather>
          <quote></quote>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar'
  import Sidebar from './Sidebar'
  import Weather from './Weather'
  import Todo from './Todo'
  import Quote from './Quote'
  import Clock from 'vue-digital-clock'
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
      Todo,
      Quote,
      Clock
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

  .panel-style{
    color: white;
    background-color: gray;
    width: 15vw;
    height: 15vh;
    align-content: center;
  }

  .home {
    margin-top: 20vh;
  }

  .main{
    display: flex;
  }

  .sidebar-container{
    display: fixed;
  }
  .main-body{
    flex-grow: 1
  }
</style>