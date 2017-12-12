<template>
    <div class="row text-center" v-if="user.quote">
        <div class="col-sm-4 col-sm-offset-4">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div><p>"{{quote.quote}}"</p></div>
                    <div><h5>-{{quote.author}}</h5></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'quote',
        data() {
            return {}
        },
        computed: {
            quote() {
                return this.$store.state.quote
            },
            user() {
                return this.$store.state.user
            }
        }
    }

</script>

<style scoped>

</style>