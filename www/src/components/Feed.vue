<template>
    <div>
        <form type="submit" @submit.prevent="submitFeed">
            <div class="form-group">
                <label for="Feed">Feed</label>
                <input type="text" placeholder="Feed URL Here" v-model="feed.url">
            </div>
            <div class="form-group">
                <button type="submit">Submit</button>
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
                this.$store.dispatch('submitFeed', this.feed)
                this.feed = {
                    url: ''
                }
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }
</script>

<style>
    input {
        width: 25%;
        text-align: center;
    }
</style>