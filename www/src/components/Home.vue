<template>
  <div class="col-sm-12 text-center background" :style="{ 'background-image': 'url(' + user.background + ')' }">
    <navbar></navbar>
    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <!-- <a id="sidebarCollapse" data-toggle="collapse" data-target="#sidebar">
            <i class="fa fa-4x fa-bars menu pull-left" aria-hidden="true"></i>
          </a> -->
        </div>
        <div class="main row">
          <div class="col-sm-12">
            <div class="sidebar-container">
              <sidebar></sidebar>
            </div>
            <!-- <div class="grid">
              <grid-layout :layout="layout" :col-num="16" :row-height="30" :is-draggable="true" :is-resizable="true" :vertical-compact="true"
                :margin="[10, 10]" :use-css-transforms="true">
                <grid-item class="grid-cell" v-for="item in layout" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i"
                  @resize="resize" @move="move" @resized="resized" @moved="moved">
                  <button>
                    {{item.i}}
                  </button>
                </grid-item>
              </grid-layout>
            </div> -->
            <div class="row main-body">
              <div class="col-sm-12">
                <quote></quote>
                <todo></todo>
              </div>
              <router-view/>
            </div>
          </div>
        </div>
      </div>
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
          "x": 0,
          "y": 0,
          "w": 4,
          "h": 4,
          "i": "0"
        }, {
          "x": 4,
          "y": 0,
          "w": 4,
          "h": 4,
          "i": "1"
        }, {
          "x": 8,
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
        console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
      },
      resize: function (i, newH, newW) {
        console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW);
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

  .background {
    background: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    margin: 0px 0px 0px 0px;
    height: 100vh;
  }

  /* .vue-grid-layout {
    background: #eee;
  } */

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