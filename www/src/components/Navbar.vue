<template>
    <div class="row text-center">
        <nav class="navbar navbar-default navbar-fixed-top myNavbar">
            <div class="text-left sidebar-button col-sm-6">
                <a id="sidebarCollapse" data-toggle="collapse" data-target="#sidebar">
                    <i class="fa fa-4x fa-bars menu" aria-hidden="true"></i>
                </a>
            </div>
            <div class="weather col-sm-6">
                <weather></weather>
            </div>
        </nav>
    </div>
</template>


<script>
    import Weather from './Weather'
    export default {
        name: 'navbar',
        methods: {
        },
        components: {
            Weather
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
        margin-top: 2vh;
        margin-left: 2vw;
    }
</style>