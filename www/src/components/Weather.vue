<template>
    <div id="weather" class="weather-panel animated fadeInRightBig row" v-if="user.weather">
        <div v-if="weather.weather">
            <div class="icon col-sm-6">
                <img :src="'http://openweathermap.org/img/w/'+ weather.weather[0].icon +'.png'">
            </div>
            <div class="temp col-sm-6">
                <h4>{{weather.main.temp}}°</h4>
            </div>
            <div class="weatherName col-sm-12 text-center">
                <h5>{{weather.name}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'weather',
        data() {
            return {
                weatherFormat: {
                    temp: 0
                }
            }
        },
        computed: {
            weather() {
                return this.$store.state.weather
            },
            user() {
                return this.$store.state.user
            }
        }
    }

</script>

<style scoped>
    .weatherName {
        margin: 0 auto !important;
        float: none;
        padding: 0 auto;
        color: lightgray;
    }

    .temp {
        display: inline-block;
    }

    .icon {
        display: inline-block;
    }

    .weather-panel {
        /* margin-right: .3vw; */
        opacity: 1;
    }
</style>