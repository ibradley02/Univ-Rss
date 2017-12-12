<template>
    <div v-if="user.weather" class="pull-right">
        <div class="col-sm-12">
                <div class="panel-body text-center" v-if="weather.weather">
                    <div class="icon">
                        <img :src="'http://openweathermap.org/img/w/'+ weather.weather[0].icon +'.png'">
                    </div>
                    <div class="temp">
                        <h4>{{weather.main.temp}}°F</h4>
                    </div>
                    <h4>{{weather.name}}</h4>
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
    .panel-body{
        color: white;
    }
</style>