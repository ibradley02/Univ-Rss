<template>
    <div id="app">
        <!-- <div id="topNav">

        </div> -->
        <div class="container-fluid">
            <div class="row">
                <nav class="navbar navbar-default navbar-fixed-top myNavbar">
                    <!-- WEBSITE NAME -->
                    <div class="navbar-text col-xs-12" style="font-family: 'Rock Salt', cursive">
                        <div class="row">
                            <div class="col-xs-1">
                                <button type="button" class="sidebar-button glyphicon glyphicon-th pull-left" data-toggle="offcanvas"></button>
                            </div>
                            <div class="col-xs-10">
                                <router-link class="text-center" :to="'/'">
                                    <h3>Univ-rss</h3>
                                </router-link>
                            </div>
                        </div>
                    </div>


                    <!-- FORMS -->
                    <!-- <login></login> -->

                </nav>
                <!-- <signup></signup> -->
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
    //   import Login from './Login'
    //   import Signup from './Signup'
    export default {
        name: 'navbar',
        components: {
            //   Login,
            //   Signup
        },
    }

</script>



<style>
    .myNavbar {
        background-color: #95ccf6
    }

    .sidebar-button{
        display: flex;
        justify-content: center;
        align-content: center;
    }
</style>