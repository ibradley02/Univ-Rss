<template>
    <nav id="sidebar">
        <div class="sidebar-header">
            <h1 class="univ-rss">UNIV
                <i class="fa fa-rss"></i>
            </h1>
            <div class="col-xs-12">
                <img class="userImage" :src="user.image" at="User Image"></img>
            </div>
            <div class="col-xs-6 col-xs-offset-3">
                <h3>
                    {{user.name}}
                </h3>
            </div>
            <h6>{{user.email}}</h6>
            <button type="button" class="btn btn-danger logout" @click="logout">
                <i class="fa fa-power-off"></i> Logout</button>
        </div>
        <div class="scrollable">
            <ul class="list-unstyled components">
                <li>
                    <router-link to="Home">
                        <i class="fa fa-home"></i> Home</router-link>
                </li>
                <li>
                    <router-link to="Profile">
                        <i class="fa fa-cog"></i> Profile</router-link>
                </li>
                <li>
                    <a href="#feedSubmenu" data-toggle="collapse" aria-expanded="false">
                        <i class="fa fa-feed"></i> Feeds</a>
                    <ul class="collapse list-unstyled" id="feedSubmenu">
                        <li v-if="searchFormActive">
                            <a @click="toggleFormState">
                                <i class="fa fa-search"></i> Search</a>
                        </li>
                        <li v-else>
                            <form type="submit" @submit.prevent="searchFeeds">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search Feeds" v-model="search.body">
                                </div>
                            </form>
                            <span>
                                <button @click="toggleFormState">
                                    <i class="fa fa-remove"></i>
                                </button>
                            </span>
                        </li>
                        <li v-for="result in searchResults">
                            <h6>{{result.url}}
                                <i class="fa fa-plus" style="color: green"></i>
                            </h6>
                        </li>
                        <li v-for="category in categories">
                            <div class="categoryStyle">
                                <a href="#categorySubmenu" data-toggle="collapse" aria-expanded="false">
                                    {{category.name}}
                                </a>
                            </div>
                            <div class="delete">
                                <i class="fa fa-remove pull-right" @click="removeCategory(category._id)"></i>
                            </div>
                        </li>
                        <li v-if="createFormActive">
                            <a @click="toggleCreateFormState">
                                <i class="fa fa-plus"></i> Create Category</a>
                        </li>
                        <li v-else>
                            <div class="input">
                                <form type="submit" @submit.prevent="createCategory">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Add Category" v-model="category.name">
                                    </div>
                                </form>
                            </div>
                            <span>
                                <button @click="toggleCreateFormState">
                                    <i class="fa fa-remove"></i>
                                </button>
                            </span>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#componentSubmenu" data-toggle="collapse" aria-expanded="false">
                        <i class="fa fa-briefcase"></i> Components</a>
                    <ul class="collapse list-unstyled" id="componentSubmenu">
                        <li>
                            <a @click="setClock">
                                <i class="fa fa-clock-o"></i> Clock</a>
                        </li>
                        <li>
                            <a @click="setTodo">
                                <i class="fa fa-list-ol"></i> To-Do</a>
                        </li>
                        <li>
                            <a @click="setWeather">
                                <i class="fa fa-snowflake-o"></i> Weather</a>
                        </li>
                        <li>
                            <a @click="setQuote">
                                <i class="fa fa-commenting"></i> Inspirational Quote</a>
                        </li>
                        <li>
                            <a @click="setEvent">
                                <i class="fa fa-calendar"></i> Local Events</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import Feed from './Feed'
    export default {
        name: 'sidebar',
        data() {
            return {
                searchFormActive: true,
                createFormActive: true,
                search: {
                    body: ''
                },
                category: {
                    name: '',
                    creatorId: ''
                }
            }
        },

        components: {
            Feed
        },
        mounted() {
            this.$store.dispatch('getCategories')
        },
        methods: {
            searchFeeds() {
                this.$store.dispatch('searchFeeds', { url: this.search.body })
                this.search.body = ''
            },
            submitFeed() {
                this.$store.dispatch('addFeed', this.create.body)
                this.feed = {
                    url: ''
                }
            },
            createCategory() {
                var newCategory = {
                    creatorId: this.user._id,
                    name: this.category.name
                }
                this.$store.dispatch('createCategory', newCategory)
                this.category = {
                    name: '',
                    creatorId: ''
                }
            },
            removeCategory(category) {
                this.$store.dispatch('removeCategory', category)
            },
            toggleFormState() {
                this.searchFormActive = !this.searchFormActive
            },
            toggleCreateFormState() {
                this.createFormActive = !this.createFormActive
            },
            logout() {
                this.$store.dispatch('logout')
            },
            setClock() {
                var updateClock = {
                    userId: this.user._id,
                    clock: !this.user.clock
                }
                this.$store.dispatch('updateClock', updateClock)
            },
            setTodo() {
                var updateTodo = {
                    userId: this.user._id,
                    todo: !this.user.todo
                }
                this.$store.dispatch('updateTodo', updateTodo)
            },
            setWeather() {
                // $('#weather').toggleClass('active')
                var updateWeather = {
                    userId: this.user._id,
                    weather: !this.user.weather
                }
                this.$store.dispatch('updateWeather', updateWeather)
            },
            setQuote() {
                var updateQuote = {
                    userId: this.user._id,
                    quote: !this.user.quote
                }
                this.$store.dispatch('updateQuote', updateQuote)
            },
            setEvent() {
                var updateEvent = {
                    userId: this.user._id,
                    event: !this.user.event
                }
                this.$store.dispatch('updateEvent', updateEvent)
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            },
            searchResults() {
                return this.$store.state.searchResults
            },
            feeds() {
                return this.$store.state.feeds
            },
            categories() {
                return this.$store.state.categories
            }
        }
    }
</script>

<style scoped>
    input {
        width: 80%;
        text-align: center;
        margin: 0 auto;
    }

    .input {
        display: inline-flex;
    }

    form {
        display: inline-flex;
    }

    span {
        display: inline-flex;
        color: black;
    }

    a {
        cursor: pointer;
    }

    h1 {
        margin-bottom: 2vh;
    }

    .scrollable {
        overflow-y: auto;
        max-height: 45vh;

    }

    ::-webkit-scrollbar {
        width: 1em;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3)
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgb(95, 94, 94);
        outline: 1px solid slategray;
    }



    .fa-cog {
        cursor: pointer;
    }

    .userImage {
        border-radius: 50%;
        height: 12rem;
        width: 12rem;
    }


    #sidebar.active {
        transform: translateX(255px);
        transition: .7s ease-in-out;
        opacity: 1;
    }

    a[aria-expanded="false"]::before,
    a[aria-expanded="true"]::before {
        content: '\e259';
        position: relative;
        right: 20px;
        font-family: 'Glyphicons Halflings';
        font-size: 0.6em;
    }

    a[aria-expanded="true"]::before {
        content: '\e260';
        position: relative;
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

    .categoryStyle{
        display: inline-flex;
    }
    .delete{
        display: inline-flex;
        color: white;
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
        background: rgba(0, 0, 0, 0.9);
        color: #fff;
        min-width: 250px;
        max-width: 250px;
        min-height: 90vh;
        z-index: 99999 !important;
        margin-left: -270px;
        /* animation-name: fadeOutLeft; */
        /* animation: 1s 0s 0.5 fadeOut; */
        transform: translateX(0);
        transition: .7s ease-in-out;
        opacity: 0;
        /* transition: all 0.3s; */
    }

    /* .fadeIn {
        animation-name: fadeIn;
        animation: 1s 0s 0.5 fadeIn;
    } */

    .fadeOut {
        animation-name: fadeOut;
        animation: 1s 0s 0.5 fadeOut;
    }

    #sidebar .sidebar-header {
        padding-top: 1px;
        padding-bottom: 1px;
        padding-right: 20px;
        padding-left: 20px;
        /* padding: 1px 20px 20px 20px; */
        /* background: rgba(0, 0, 0, 0.7); */
    }

    #sidebar ul.components {
        padding: 0px 0;
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