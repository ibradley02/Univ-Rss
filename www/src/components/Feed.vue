<template>
    <div class="row">
        <!-- BEGIN MODAL -->
        <div id="editFeedModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal EDIT FEED WINDOW -->
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="col-sm-2 pull-right">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="col-sm-12">
                            <h3>Edit Feeds</h3>
                        </div>
                    </div>
                    <!-- CREAT CATEGORY FORM -->
                    <div class="modal-body">
                        <div>
                            <div class="input">
                                <form type="submit" @submit.prevent="createCategory">
                                    <div class="form-group">
                                        <label>Create Category</label>
                                        <input type="text" class="form-control" placeholder="Category Name" v-model="category.name">
                                    </div>
                                    <div class="form-group">
                                        <button type="submit">Create</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div class="input">
                                    <form type="submit" @submit.prevent="createFeed">
                                        <div class="form-group">
                                            <label>Create Feed:</label>
                                            <div>
                                                <!-- <div class="form-group">
                                                    <div class="col-sm-12 dropdown-style" title="choose category">
                                                        <select class="form-control text-center row" v-model="category.Id">
                                                            <option class="col-sm-12" selected disabled>Select Category</option>
                                                            <option class="col-sm-12" v-for="category in categories" :value="category._id">{{category.name}}</option>
                                                        </select>
                                                    </div>
                                                </div> -->
                                            </div>
                                            <input type="text" class="form-control" placeholder="Feed Name" v-model="feed.name">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Feed URL" v-model="feed.url">
                                        </div>
                                        <div class="form-group">
                                            <button type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form type="submit" @submit.prevent="searchFeeds">
                                <div class="form-group">
                                    <label>Search Feeds:</label>
                                    <input type="text" class="form-control" placeholder="Search Feed Name" v-model="search.name">
                                </div>
                                <div class="form-group">
                                    <button>
                                        <i class="fa fa-search"></i> Search</button>
                                </div>
                            </form>
                        </div>
                        <!-- <form type="submit" @submit.prevent="addUserFeed"> -->
                            <div v-for="result in searchResults">
                                <result :feedprop="result"></result>
                                <!-- <div class="form-group">-->
                                    <!-- <div>
                                        <h6>{{result.name}}</h6>
                                    </div> -->
                                <!--</div>
                                adds feed to the users account
                                <div v-if="categoryList" class="col-sm-3 dropdown-style" title="choose category">
                                    <div class="form-group">
                                        <select class="text-center row" v-model="feed.categoryId">
                                            <option class="col-sm-3" selected>Select Category</option>
                                            <option class="col-sm-3" v-for="category in categories" :value="category._id">{{category.name}}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit">Add Feed</button>
                                    </div>
                                </div>
                                <div v-else>
                                    <i class="fa fa-plus" style="color: green" @click="toggleCategoryList"></i>
                                </div> -->
                            </div>
                        <!-- </form> -->
                    </div>
                    <!-- MODAL CLOSE -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger btn-center close-style" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Result from './Result'
    export default {
        name: 'feed',
        data() {
            return {
                searchFormActive: true,
                createFormActive: true,
                createFeedActive: true,
                categoryList: false,
                search: {
                    name: ''
                },
                category: {
                    name: '',
                    creatorId: '',
                    Id: ''
                },
                feed: {
                    name: '',
                    url: ''
                }
            }
        },
        components: {
            Result
        },
        mounted() {
            // this.$store.dispatch('getCategories')
        },
        methods: {
            // submitFeed() {
            //     this.$store.dispatch('addFeed', this.feed)
            //     this.feed = {
            //         url: ''
            //     }
            // },
            toggleCategoryList() {
                this.categoryList = !this.categoryList
            },
            toggleFormState() {
                this.searchFormActive = !this.searchFormActive
            },
            toggleCreateFormState() {
                this.createFormActive = !this.createFormActive
            },
            toggleCreateFeedState() {
                this.createFeedActive = !this.createFeedActive
            },
            searchFeeds() {
                var feed = {
                    name: this.search.name.toLowerCase(),
                }
                this.$store.dispatch('searchFeeds', feed)
                this.search.name = ''
            },
            createFeed() {
                var newFeed = {
                    name: this.feed.name.toLowerCase(),
                    url: this.feed.url,
                }
                this.$store.dispatch('createFeed', newFeed)
                this.feed = {
                    name: '',
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
    .modal-content {
        background-color: black;
        color: white;
    }

    input {
        width: 80%;
        text-align: center;
        margin: 0 auto;
    }

    .dropdown-style {
        margin-bottom: 1em;
        text-align: center !important;
        width: 60%;
        margin: 0 auto;
        float: none;
    }

    .dropdown-menu-center {
        left: 50% !important;
        right: auto !important;
        text-align: center !important;
        transform: translate(-50%, 0) !important;
    }

    button {
        color: black;
    }

    .close {
        color: white !important;
    }

    .close-style {
        color: white !important;
    }

    .modal-fade {
        z-index: 100 !important;
    }
</style>