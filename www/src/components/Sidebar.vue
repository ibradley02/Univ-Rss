<template>
    <nav id="sidebar" class="collapse animated fadeInLeft">
        <div class="sidebar-header">
            <h1 class="univ-rss">UNIV <i class="fa fa-rss"></i></h1>  
            <div class="col-xs-12">
                <img class="userImage" :src="user.image" at="User Image"></img>
            </div>
            <div class="col-xs-6 col-xs-offset-3">
                <h3>
                    {{user.name}}
                </h3>
            </div>
            <div class="col-xs-2 col-xs-offset-1">
                <h3>
                    <a data-toggle="modal" data-target="#profileModal">
                        <i class="fa fa-cog"></i>
                    </a>
                </h3>
            </div>
            <h6>{{user.email}}</h6>
            <button type="button" class="btn btn-danger logout" @click="logout">Logout</button>
            
        </div>
        <ul class="list-unstyled components">
            <li>
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Clock</a>
                    </li>
                    <li>
                        <a href="#">To-Do</a>
                    </li>
                    <li>
                        <a href="#">Weather</a>
                    </li>
                    <li>
                        <a href="#">Random Quote</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#feedSubmenu" data-toggle="collapse" aria-expanded="false">Feeds</a>
                <ul class="collapse list-unstyled" id="feedSubmenu">
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Sports</a>
                    </li>
                    <li>
                        <a href="#">Youtube</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'sidebar',
        toggleClass: false,
        components: {
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
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
        height: 12rem;
        width: 12rem;
    }

    #sidebar {
        min-width: 250px;
        max-width: 250px;
        min-height: 85vh;
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

    .fadeIn {
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