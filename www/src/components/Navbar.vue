<template>
    <div class="row text-center">
        <nav class="navbar navbar-default navbar-fixed-top myNavbar">
            <div class="col-sm-2 sidebar-button">
                <a id="sidebarCollapse" data-toggle="collapse" data-target="#sidebar">
                    <img src="https://www.tellusaboutus.com/comments/images/BK-WebComment/BB_WHOPPER-v1.png" alt="burger" class="burger">
                </a>
            </div>
            <div class="col-sm-8">
                <h1 class="univ-rss">Univ-rss</h1>
            </div>
            <div class="col-sm-2 pull-right sidebar-button">
                <h4>Welcome, {{user.name}}</h4>
                <button type="button" class="btn btn-danger" @click="logout">Logout</button>
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
    .myNavbar {
        background-color: rgba(0, 1, 3, 1);
        color: white;
        display: flex;
        margin-bottom: 0px;
    }

    .burger{
        margin-top: 1vh;
        max-height: 10vh;
        max-width: 10vw;
        cursor: pointer;
    }

    .sidebar-button {
        justify-content: center;
        align-content: center;
    }

    .navbar-btn {
        background: black;
        border: 0px;
    }
</style>