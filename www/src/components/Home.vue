<template>
  <div class="hello">
    <login></login>
    <signup></signup>
  </div>
</template>

<script>
import Login from './Login'
import Signup from './Signup'
export default {
  name: 'Home',
  components: {
    Login,
    Signup
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>
