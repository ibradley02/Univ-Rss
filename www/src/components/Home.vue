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
              <grid-layout :layout="boards" :col-num="16" :row-height="30" :is-draggable="true" :is-resizable="true" :vertical-compact="true"
                :margin="[10, 10]" :use-css-transforms="true">
                <grid-item class="grid-cell grid-style scrollable" v-for="item in boards" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i"
                  :source="item.source" @resize="resize" @move="move" @resized="resized" @moved="moved">
                  <i @click="removeBoard(item)" class="fa fa-times pull-right"></i>
                  <h3>
                    {{item.title}}
                  </h3>
                  <p>{{item.source}}</p>
                  <div v-if="item.imageLink">
                    <img :src="item.imageLink" alt="">
                  </div>
                  <div v-if="item.mediaLink">
                    <iframe :src="item.mediaLink " width='200' height='300' frameborder='0' allowtransparency='true'></iframe>
                  </div>
                  <!-- <p>{{item._id}}</p> -->
                  <div v-if="item.i == 0" id="event">
                    <event :i="item.i"></event>
                  </div>
                </grid-item>
              </grid-layout>
            </div>
            <router-view/>
          </div>
        </div>
      </div>
    </div>
    <div>
      <feed></feed>
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
  import Event from './Event'
  import Quote from './Quote'
  import Profile from './Profile'
  import Navbar from './Navbar'
  import VueGridLayout from 'vue-grid-layout'
  import Feed from './Feed'
  var GridLayout = VueGridLayout.GridLayout;
  var GridItem = VueGridLayout.GridItem;
  export default {
    data() {
      return {
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
      Event,
      Profile,
      Navbar,
      Feed
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      boards() {
        return this.$store.state.boards
      },
    },
    watch: {
      boards: function () {
        this.layout = this.boards
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
        $("#save-layout").removeClass("active")
        // this.$store.dispatch('updateBoard', {boardId: this.boards[i]._id, x: newX, y: newY})
        this.$store.dispatch('saveLayout')
      },
      resized: function (i, newH, newW, newHPx, newWPx) {
        console.log("### RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
        this.$store.dispatch('setHeight', { i: i, height: newHPx - 100 })
        this.$store.dispatch('saveLayout')
      },
      removeBoard(board) {
        this.$store.dispatch('removeBoard', board)
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

  .image-style>>>.wp-post-image {
    height: 35vh !important;
    width: 20vw !important;

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

  .grid-style {
    color: white;
    background-color: rgba(5, 0, 0, 0.25);
    outline: none !important;
    border: none !important;
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
    /* background: #ccc; */
    border: 1px solid white;
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

  .fa-times {
    padding-right: 10px;
    padding-top: 10px
  }
</style>