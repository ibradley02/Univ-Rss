<template>
    <div id="weather" class="weather-panel animated fadeInLeftBig" v-if="user.weather">
        <div v-if="weather.weather">
            <div class="icon">
                <img :src="'http://openweathermap.org/img/w/'+ weather.weather[0].icon +'.png'">
            </div>
            <div class="temp">
                <h4>{{weather.main.temp}}°F</h4>
            </div>
            <p>{{weather.name}}</p>
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
            },
            user() {
                return this.$store.state.user
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
    .weather-panel{
        margin-right: .3vw;
        opacity: 1;
        /* transform: translate(0); */
        /* transition: .3s ease-in-out;  */

    }
    /* .weather-panel{
        opacity:0;
        transform: translate(-86vw,90vh);
        transition: .3s ease-in-out;
    } */
</style>