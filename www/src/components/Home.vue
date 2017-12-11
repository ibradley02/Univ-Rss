<template>
  <div class="col-sm-12 text-center background" :style="{ 'background-image': 'url(' + user.background + ')' }">
    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <a id="sidebarCollapse" data-toggle="collapse" data-target="#sidebar">
            <i class="fa fa-4x fa-bars menu pull-left" aria-hidden="true"></i>
          </a>
        </div>
        <div class="main row">
          <div class="col-sm-12">
            <div class="sidebar-container">
              <sidebar></sidebar>
            </div>
            <div class="main-body">
              <div class="panel-style text-center col-sm-4 col-sm-offset-5">
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

      </div>
    </div>
    <profile></profile>
  </div>
</template>

<script>
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
      Sidebar,
      Todo,
      Quote,
      Clock,
      Profile
    },
    computed: {
      user() {
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

  .menu {
    margin-left: 2vw;
    color: white;
    position: fixed;
    z-index: 1;
    top: 10px;
    left: 10px; 
  }

  .panel-style {
    color: white;
    background-color: rgba(5, 0, 0, 0.25);
    width: 15vw;
    height: 8vh;
  }

  .main {
    display: flex;
  }

  .sidebar-container {
    margin-top: 10vh;
    display: relative;
    position: fixed;
  }

  .main-body {
    flex-grow: 1;
    margin-top: 10vh;
  }

  .background {
    background: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    margin: 0px 0px 0px 0px;
  }
</style>