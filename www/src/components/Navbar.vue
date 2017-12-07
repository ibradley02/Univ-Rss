<template>
    <div id="app">
        <!-- <div id="topNav">

        </div> -->
        <div class="container-fluid">
            <div class="row">
                <nav class="navbar navbar-default navbar-fixed-top myNavbar">
                    <!-- WEBSITE NAME -->
                    <div class="navbar-text col-xs-12" style="font-family: 'Slabo 27px', serif">


                        <div id="content">
                            <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn pull-left" data-toggle="collapse" data-target="#sidebar">
                                <img src="https://www.tellusaboutus.com/comments/images/BK-WebComment/BB_WHOPPER-v1.png" alt="burger" style="max-height:50px;width:auto">
                            </button>
                        </div>

                        <div>
                            <button type="button" class="btn btn-danger pull-right" @click="logout">Logout</button>
                        </div>
                        <h1 class="univ-rss">Univ-rss</h1>
                    </div>
                </nav>
            </div>
            <!-- End Content Section -->
            <div class="page-content">
                <router-view></router-view>
            </div>
            <!-- End of Container -->
        </div>
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
    }

</script>



<style>
    .myNavbar {
        background-color: rgba(0, 1, 3, 1);
        color: white;
    }

    .sidebar-button {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .navbar-btn {
        background: black;
        border: 0px;
    }
</style>