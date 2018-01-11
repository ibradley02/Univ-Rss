<template>
    <div class="row">
        <div v-for="items in feeds">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: 'rssfeed',
        data() {
            return {
                feed: {
                    name: '',
                    url: ''
                }
            }
        },
        mounted() {

        },
        methods: {

        },
        computed: {
            feeds() {
                return this.$store.state.feeds
            }
        }
    }
</script>

<style scoped>
</style>