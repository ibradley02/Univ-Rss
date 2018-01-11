<template>
    <form type="submit" @submit.prevent="addUserFeed">
        <div class="form-group" :v-model="feedprop">
            <h6>{{feedprop.name}}</h6>
        </div>
        <!-- adds feed to the users account -->
        <div v-if="categoryList" class="col-sm-3 dropdown-style" title="choose category">
            <div class="form-group">
                <select class="text-center row" v-model="feedprop.categoryId">
                    <!-- <option class="col-sm-3" selected>Select Category</option> -->
                    <option class="col-sm-3" v-for="category in categories" :value="category._id">{{category.name}}</option>
                </select>
            </div>
            <div class="form-group">
                <button type="submit">Add Feed</button>
            </div>
        </div>
        <div v-else>
            <i class="fa fa-plus" style="color: green" @click="toggleCategoryList"></i>
        </div>
    </form>

</template>
<script>
    export default {
        name: 'result',
        data() {
            return {
                categoryList: false,
            }
        },
        mounted() {

        },
        props: ['feedprop'],
        methods: {
            toggleCategoryList() {
                this.categoryList = !this.categoryList
            },
            addUserFeed() {
                var userFeed = {
                    // name: this.feed.name,
                    _id: this.feedprop._id,
                    categoryId: this.feedprop.categoryId
                }
                this.$store.dispatch('addUserFeed', userFeed)
                this.userFeed = {
                    name: '',
                    url: '',
                    categoryId: ''
                }
            },

        },
        computed: {
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

    button{
        color: black;
    }
</style>