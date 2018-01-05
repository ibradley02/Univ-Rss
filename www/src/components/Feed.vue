<template>
    <div>
        <form type="submit" @submit.prevent="submitFeed">
            <div class="form-group">
                <input type="text"  class="form-control" placeholder="Feed URL" v-model="feed.url">
            </div>
        </form>
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