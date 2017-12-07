<template>
    <div id="app">
        <!-- <div id="topNav">

        </div> -->
        <div class="container-fluid">
            <div class="row">
                <nav class="navbar navbar-default navbar-fixed-top myNavbar">
                    <!-- WEBSITE NAME -->
                    <div class="navbar-text col-xs-12 col-md-4" style="font-family: 'Rock Salt', cursive">
                        
                        <sidebar></sidebar>

                        <router-link class="pull-left" :to="'/'">
                            <h3>Univ-rss</h3>
                        </router-link>
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
    import Sidebar from './Sidebar'
    //   import Login from './Login'
    //   import Signup from './Signup'
    export default {
        name: 'navbar',
        components: {
            Sidebar
            //   Login,
            //   Signup
        },
    }

</script>



<style>
    .myNavbar {
        background-color: #95ccf6
    }
</style>