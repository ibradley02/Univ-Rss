<template>
    <div>
        <div class="panel panel-default col-xs-1 pull-right">
            <div class="panel-heading">
                <h3>Weather</h3>
            </div>
            <div class="panel-body text-center">
                <img :src="'http://openweathermap.org/img/w/'+ weather.weather[0].icon +'.png'">
                <div><h5>{{weather.name}}</h5></div>
                <div><h5>{{weather.main.temp}}</h5></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'weather',
        data() {
            return {}
        },
        mounted (){
            this.$store.dispatch('getWeather')
        },
        computed: {
            weather() {
                return this.$store.state.weather
            }
        }
    }

</script>

<style>
</style>