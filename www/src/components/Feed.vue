<template>
    <div class="row">
        <!-- BEGIN MODAL -->
        <div id="editFeedModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal EDIT FEED WINDOW -->
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="col-sm-3">
                            <a @click="toggleFormState">
                                <i class="fa fa-search"></i> Search Feeds
                            </a>
                        </div>
                        <div class="col-sm-3">
                            <a @click="toggleCreateFeedState">
                                <i class="fa fa-plus"></i> Create Feed
                            </a>
                        </div>
                        <div class="col-sm-4">
                            <a @click="toggleCreateFormState">
                                <i class="fa fa-plus"></i> Create Category
                            </a>
                        </div>
                        <div class="col-sm-2">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
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
                                </form>
                            </div>
                            <div>
                                <div class="input">
                                    <form type="submit" @submit.prevent="createFeed">
                                        <div class="form-group">
                                            <label>Create Feed:</label>
                                            <input type="text" class="form-control" placeholder="Feed Name" v-model="feed.name">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Feed URL" v-model="feed.url">
                                        </div>
                                        <div class="form-group">
                                            <button type="submit">SUBMIT</button>
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
                            </form>
                        </div>
                        <div v-for="result in searchResults">
                            <h6>{{result.name}}
                                <i class="fa fa-plus" style="color: green"></i>
                            </h6>
                        </div>
                    </div>
                    <!-- MODAL CLOSE -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger btn-center" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'feed',
        data() {
            return {
                searchFormActive: true,
                createFormActive: true,
                createFeedActive: true,
                search: {
                    name: ''
                },
                category: {
                    name: '',
                    creatorId: ''
                },
                feed: {
                    name: '',
                    url: ''
                }
            }
        },
        mounted() {
            this.$store.dispatch('getCategories')
        },
        methods: {
            // submitFeed() {
            //     this.$store.dispatch('addFeed', this.feed)
            //     this.feed = {
            //         url: ''
            //     }
            // },
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
                this.$store.dispatch('searchFeeds', { name: this.search.name })
                this.search.name = ''
            },
            createFeed() {
                var newFeed = {
                    name: this.feed.name,
                    url: this.feed.url
                }
                this.$store.dispatch('addFeed', newFeed)
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
    input {
        width: 80%;
        text-align: center;
        margin: 0 auto;
    }

    button {
        color: black;
    }
</style>