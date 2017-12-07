<template>
    <div>
        <div class="wrapper">
            <nav id="sidebar" class="collapse animated fadeInLeft">
                <div class="sidebar-header">
                    <img class="userImage" :src="user.image" at="User Image"></img>
                    <h3>
                        {{user.name}}
                    </h3>
                    <h6>{{user.email}}</h6>
                </div>
                <ul class="list-unstyled components">
                    <li class="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <!-- Link with dropdown items -->
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Page</a>
                            </li>
                            <li>
                                <a href="#">Page</a>
                            </li>
                            <li>
                                <a href="#">Page</a>
                            </li>
                        </ul>

                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                </ul>
            </nav>

            <div id="content">

            </div>

        </div>

    </div>

</template>

<script>
    export default {
        name: 'sidebar',
        toggleClass: false,
        components: {

        },
        methods: {
            toggelSidebar() {

            }


        },
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }

</script>



<style scoped>
    .userImage {
        border-radius: 50%;
        max-height: 12rem;
        max-width: 12rem;
    }

    .wrapper {
        display: flex;
        align-items: stretch;

    }

    #sidebar {
        min-width: 250px;
        max-width: 250px;
        min-height: 100vh;
        z-index: 99999;
    }

    #sidebar.active {
        margin-left: -250px;
    }

    a[data-toggle="collapse"] {
        position: relative;
    }

    a[aria-expanded="false"]::before,
    a[aria-expanded="true"]::before {
        content: '\e259';
        display: block;
        position: absolute;
        right: 20px;
        font-family: 'Glyphicons Halflings';
        font-size: 0.6em;
    }

    a[aria-expanded="true"]::before {
        content: '\e260';
    }

    @media (max-width: 768px) {
        #sidebar {
            margin-left: -250px;
        }
        #sidebar.active {
            margin-left: 0;
        }
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: #fafafa;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 1.1em;
        font-weight: 300;
        line-height: 1.7em;
        color: #999;
    }

    a,
    a:hover,
    a:focus {
        color: inherit;
        text-decoration: none;
        transition: all 0.3s;
    }

    #sidebar {
        /* don't forget to add all the previously mentioned styles here too */
        background: rgba(0, 1, 3, 1);
        color: #fff;
        /* transition: all 0.3s; */
    }

    .fadeIn{
        animation-name: fadeIn;
        animation: 1s 0s 0.5 fadeIn;
    }

    #sidebar .sidebar-header {
        padding: 20px;
        background: rgb(0, 1, 2);
    }

    #sidebar ul.components {
        padding: 20px 0;
        border-bottom: 0px;
    }

    #sidebar ul p {
        color: #fff;
        padding: 10px;
    }

    #sidebar ul li a {
        padding: 10px;
        font-size: 1.1em;
        display: block;
    }

    #sidebar ul li a:hover {
        color: black;
        background: #fff;
    }

    #sidebar ul li.active>a,
    a[aria-expanded="true"] {
        color: #fff;
        background: rgba(0, 1, 3, 1);
    }

    ul ul a {
        font-size: 0.9em !important;
        padding-left: 30px !important;
        background: rgba(0, 1, 3, 0.521);
    }
</style>



<!-- <div id="mySidebar">
        <div class="overlay"></div>
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
                        <i class="fa fa-soccer-ball-o"></i> Sports</a>
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
    </div> -->