<template>
    <div class="row">
        <div class="col-xs-3 pull-right">
            <div class="panel panel-default panel-style">
                <div class="panel-body text-center" v-if="weather.weather">
                    <div class="icon">
                        <img :src="'http://openweathermap.org/img/w/'+ weather.weather[0].icon +'.png'">
                    </div>
                    <div class="temp">
                        <h5>{{weather.main.temp}}°F</h5>
                    </div>
                    <h5>{{weather.name}}</h5>
                </div>
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
        computed: {
            weather() {
                return this.$store.state.weather
            }
        }
    }

</script>

<style scoped>
    .temp {
        display: inline-block;
    }
    .icon {
        display: inline-block;
    }
</style>