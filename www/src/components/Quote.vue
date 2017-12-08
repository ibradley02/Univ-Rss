<template>
    <div class="row text-center">
        <div class="col-xs-3 pull-right">
            <div class="panel panel-default panel-style">
                <div class="panel-heading">
                    <h3>Quote</h3>
                </div>
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
            }
        }
    }

</script>

<style>

</style>