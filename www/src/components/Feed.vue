<template>
    <div>
        <form type="submit" @submit.prevent="submitFeed">
            <div class="form-group">
                <input type="text"  class="form-control" placeholder="Feed URL" v-model="feed.url">
            </div>
        </form>
        <!-- <div v-for="items in feeds">
            <div class="panel panel-default col-xs-12 col-md-4">
                <div class="panel-heading">
                    <h3>{{items.title}}</h3>
                </div>
                <div class="panel-body">
                    <img :src="items.enclosure.link">
                    <div v-html="items.description"></div>
                    <a :href="items.link" target="_blank">Article link</a>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'feed',
        data() {
            return {
                feed: {
                    url: ''
                }
            }
        },
        methods: {
            submitFeed() {
                this.$store.dispatch('addFeed', this.feed)
                this.feed = {
                    url: ''
                }
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            },
            feeds() {
                return this.$store.state.feeds
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
    button{
        color: black;
    }
</style>