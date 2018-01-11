<template>
    <div class="row text-center">
        <nav class="navbar navbar-default navbar-fixed-top myNavbar">
            <div class="text-left sidebar-button col-sm-1">
                <div id="stack" @click="toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="col-sm-10">
                <div class="panel-style text-center animated" v-if="user.clock">
                    <h1>
                        <Clock :blink="true" />
                    </h1>
                </div>
            </div>
            <div class="weather col-sm-1">
                <weather></weather>
            </div>
        </nav>
    </div>
</template>


<script>
    import Weather from './Weather'
    import Clock from 'vue-digital-clock'
    import Feed from './Feed'
    export default {
        name: 'navbar',
        data() {
            return {
                searchFormActive: true,
                search: {
                    body: ''
                }
            }
        },
        methods: {
            toggle() {
                $('#stack').toggleClass('open'),
                $('#sidebar').toggleClass('active')
            },
            searchFeeds() {
                this.$store.dispatch('searchFeeds', {url : this.search.body})
                this.search.body = ''
            },
            toggleFormState() {
                this.searchFormActive = !this.searchFormActive
            }
        },
        components: {
            Weather,
            Clock,
            Feed
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }

</script>



<style>
    @import url('https://fonts.googleapis.com/css?family=Bungee');
    .univ-rss {
        font-family: 'Bungee', cursive;
    }

    .feed {
        color: black;
    }

    .weather {
        text-align: right !important;
    }

    .myNavbar {
        background-color: rgba(0, 1, 3, 0);
        color: white;
        display: flex;
        margin-bottom: 0px;
    }

    .navbar {
        border: 0px;
    }

    .sidebar-button {
        justify-content: center;
        align-content: center;
    }

    .navbar-btn {
        background: black;
        border: 0px;
    }

    .logout {
        margin-bottom: 2vh
    }

    .menu {
        color: white;
        margin-top: .5vh;
        /* margin-left: .3vw; */
        z-index: 99999;
        cursor: pointer;
    }

    #stack {
        width: 7vh;
        height: 45px;
        position: relative;
        margin: 1.7vh 0vh;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer;
    }

    #stack span {
        height: 6px;
        width: 100%;
        display: block;
        position: absolute;
        background: white;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
    }

    #stack span:nth-child(1) {
        top: 0px;
    }

    #stack span:nth-child(2) {
        top: 17px;
    }

    #stack span:nth-child(3) {
        top: 35px;
    }

    #stack.open span:nth-child(1) {
        top: 17px;
        transform: rotate(135deg);
    }

    #stack.open span:nth-child(2) {
        opacity: 0;
        left: -40px;
    }

    #stack.open span:nth-child(3) {
        top: 17px;
        transform: rotate(-135deg);
    }
</style>