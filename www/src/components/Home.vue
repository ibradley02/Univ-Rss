<template>
  <div class="col-sm-12 text-center background" :style="{ 'background-image': 'url(' + user.background + ')' }">
    <navbar></navbar>
    <div class="row">
      <div class="main">
        <div class="sidebar-container">
          <sidebar></sidebar>
        </div>
        <div class="main-body">
          <div class="panel panel-default panel-style text-center col-sm-4 col-sm-offset-5">
            <h1>
              <Clock :blink="true" />
            </h1>
          </div>
          <weather></weather>
          <quote></quote>
          <todo></todo>
          <router-view/>
        </div>
      </div>
    </div>
    <profile></profile>
  </div>
</template>

<script>
  import Navbar from './Navbar'
  import Sidebar from './Sidebar'
  import Weather from './Weather'
  import Todo from './Todo'
  import Quote from './Quote'
  import Clock from 'vue-digital-clock'
  import Profile from './Profile'
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
      Clock,
      Profile
    },
    computed:{
      user(){
        return this.$store.state.user
      }
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

  .background{
    background: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    
  }
</style>