<template>
    <div class="event-panel" v-if="user.event">
        <div v-if="event.event">
            <div class="events">
                <h4>{{event.main.temp}}°F</h4>
            </div>
            <p>{{event.name}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'event',
        data() {
            return {}
        },
        computed: {
            event() {
                return this.$store.state.event
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
    }
</style>