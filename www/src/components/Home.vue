<template>
  <div class="col-sm-12 text-center background">
    <navbar></navbar>
    <div class="row">
      <div class="col-sm-12">
        <div class="main row">
          <div class="col-sm-12">
            <div class="sidebar-container">
              <sidebar></sidebar>
            </div>
            <div class="grid">
              <grid-layout :layout="layout" :col-num="16" :row-height="30" :is-draggable="true" :is-resizable="true" :vertical-compact="true"
                :margin="[10, 10]" :use-css-transforms="true">
                <grid-item class="grid-cell" v-for="item in layout" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :source="item.source" :ttle="item.title" :imageLink="item.imageLink"
                  @resize="resize" @move="move" @resized="resized" @moved="moved">
                  <h2>
                    {{item.title}}
                  </h2>
                  <p>{{item.source}}</p>
                  <img :src="item.imageLink" alt="">
                 <p>{{item.text}}</p>
                </grid-item>
              </grid-layout>
            </div>
            <router-view/>
          </div>
        </div>
      </div>
    </div>
    <div class="quote">
      <quote></quote>
    </div>
    <div class="todo">
      <todo></todo>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar'
  import Weather from './Weather'
  import Todo from './Todo'
  import Quote from './Quote'
  import Profile from './Profile'
  import Navbar from './Navbar'
  import VueGridLayout from 'vue-grid-layout'
  var GridLayout = VueGridLayout.GridLayout;
  var GridItem = VueGridLayout.GridItem;
  export default {
    data() {
      return {
        layout: [{
          "x": 2,
          "y": 0,
          "w": 4,
          "h": 4,
          "i": "0",
          
        }, {
          "x": 6,
          "y": 0,
          "w": 4,
          "h": 8,
          "i": "1",
          "source": "Fox News",
          "text": "Alabama Senate election: Doug Jones wins in major upset, Roy Moore won't yet concede",
          "title": "BAMA",
          "imageLink": "http://cdn.cnn.com/cnnnext/dam/assets/171206200235-doug-jones---9-small-169.jpg" 
        }, {
          "x": 10,
          "y": 0,
          "w": 4,
          "h": 4,
          "i": "2"
        }],
      }
    },
    name: 'Home',
    components: {
      GridLayout,
      GridItem,
      Weather,
      Sidebar,
      Todo,
      Quote,
      Profile,
      Navbar
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      move: function (i, newX, newY) {
        console.log("MOVING i=" + i + ", X=" + newX + ", Y=" + newY);
      },
      resize: function (i, newH, newW) {
        console.log("RESIZING i=" + i + ", H=" + newH + ", W=" + newW);
      },
      moved: function (i, newX, newY) {
        console.log("### MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
      },
      resized: function (i, newH, newW, newHPx, newWPx) {
        console.log("### RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
      },
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

  .todo {
    position: fixed;
    bottom: 0px;
    right: 1px;
    min-width: 20vw;
  }

  .menu {
    cursor: pointer;
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

  .quote {
    position: fixed;
    bottom: 0px;
    left: 1px;
    max-width: 75vw;
  }

  .main {
    display: flex;
    margin-top: 10vh;
  }

  .sidebar-container {
    display: relative;
    position: fixed;
    z-index: 99999;
  }

  .main-body {
    flex-grow: 1;
  }

 

  .vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
  }

  .vue-grid-item.resizing {
    opacity: 0.9;
  }

  .vue-grid-item.static {
    background: #cce;
  }

  .vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 24px;
  }

  .vue-grid-item .minMax {
    font-size: 12px;
  }

  .vue-grid-item .add {
    cursor: pointer;
  }
</style>