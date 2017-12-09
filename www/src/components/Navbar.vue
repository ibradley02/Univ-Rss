<template>
    <div class="row text-center">
        <nav class="navbar navbar-default navbar-fixed-top myNavbar">
            <div class="col-sm-2 sidebar-button">
                <a id="sidebarCollapse" data-toggle="collapse" data-target="#sidebar">
                    <i class="fa fa-4x fa-bars menu" aria-hidden="true"></i>
                </a>
            </div>
            <div class="col-sm-8">
                <h1 class="univ-rss">UNIV <i class="fa fa-rss"></i></h1>
            </div>
            <div class="col-sm-2 pull-right sidebar-button">
                <h4>Welcome, {{user.name}}</h4>
                <button type="button" class="btn btn-danger logout" @click="logout">Logout</button>
            </div>
        </nav>
    </div>
</template>


<script>
    export default {
        name: 'navbar',
        methods: {
            logout() {
                this.$store.dispatch('logout')
            }
        },
        components: {
        },
        computed:{
            user(){
                return this.$store.state.user
            }
        }
    }

</script>



<style>
@import url('https://fonts.googleapis.com/css?family=Bungee');
    .univ-rss{
        font-family: 'Bungee', cursive;
    }
    .myNavbar {
        background-color: rgba(0, 1, 3, 1);
        color: white;
        display: flex;
        margin-bottom: 0px;
    }

    .navbar{
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

    .logout{
        margin-bottom: 2vh
    }

    .menu{
        color: white;
        margin-top: 2vh;
    }
</style>