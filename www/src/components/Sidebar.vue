<template>
    <div id="mySidebar">
        <div class="overlay"></div>

        <!-- <div class="container-fluid">
            <div class="row">
                <nav class="navbar navbar-inverse navbar-toggler-right navbar-fixed-bottom">
                    <div class="collapse navbar-collapse" id="navbarContent">
                        <div class="navbar-text col-xs-12">
                            <router-link class="pull-left" :to="'/'">
                                <h3>Sidebar</h3>
                            </router-link>
                        </div>
                    </div> -->
                    <!-- WEBSITE NAME -->
                <!-- </nav>
            </div> -->
            <!-- End Content Section -->
            <!-- <div class="page-content">
                <router-view></router-view>
            </div> -->


            <!-- End of Container -->
        <!-- </div> -->



       <!-- Sidebar -->
        <nav class="navbar navbar-inverse navbar-left" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        Bootstrap 3
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="glyphicon glyphicon-home"></i> Home</a>
                </li>
                <li>
                    <a href="#">
                        <i class="glyphicon glyphicon-globe"></i> News</a>
                </li>
                <li>
                    <a href="#">
                        <i class="glyphicon glyphicon-rugby"></i> Sports</a>
                </li>
                <li>
                    <a href="#">
                        <i class="glyphicon glyphicon-expand"></i> Videos</a>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="glyphicon glyphicon-glyphicon-plus"></i> News
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                        <li class="dropdown-header">News</li>
                        <li>
                            <a href="#">CNN</a>
                        </li>
                        <li>
                            <a href="#">New York Times</a>
                        </li>
                        <li>
                            <a href="#">Vice News</a>
                        </li>
                        <li>
                            <a href="#">Daily Motion</a>
                        </li>
                        <li>
                            <a href="#">Fake News</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-fw fa-bank"></i> Page four</a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-fw fa-dropbox"></i> Page 5</a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-fw fa-twitter"></i> Last page</a>
                </li>
            </ul>
        </nav>
        <!-- /#sidebar-wrapper -->

    </div>

</template>

<script>
    export default {
        name: 'sidebar',
        components: {

        },
    }

</script>



<style scoped>
    .sideNavbar {
        background-color: #f32020;
    }
</style>

</script>

<style>
</style>