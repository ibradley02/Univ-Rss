<template>
  <div class="col-sm-12 text-center">
    <navbar></navbar>
    <div class="row">
      <div class="main">
        <div class="sidebar-container">
          <sidebar></sidebar>
        </div>
        <div class="main-body">
          <div class="timeclock">
            <h1>
              <Clock :blink="true" />
            </h1>
          </div>
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

  .home {
    margin-top: 20vh;
  }

  .main{
    display: flex;
  }

  .timeclock {
    color: white;
    background-color: rgba(128, 128, 128, 0.514);
  }
  .sidebar-container{
    display: fixed
  }
  .main-body{
    flex-grow: 1
  }
</style>