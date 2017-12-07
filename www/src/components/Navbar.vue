<template>
    <div id="app">
        <!-- <div id="topNav">

        </div> -->
        <div class="container-fluid">
            <div class="row">
                <nav class="navbar navbar-default navbar-fixed-top myNavbar">
                    <!-- WEBSITE NAME -->
                    <div class="navbar-text col-xs-12" style="font-family: 'Rock Salt', cursive">


                        <div id="content">
                            <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn pull-left" data-toggle="collapse" data-target="#sidebar">
                                <i class="glyphicon glyphicon-align-left-th"></i>
                                Toggle Sidebar
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
        background-color: #95ccf6
    }

    .sidebar-button {
        display: flex;
        justify-content: center;
        align-content: center;
    }


</style>