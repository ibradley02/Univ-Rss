<template>
    <div class="row" v-if="user.event">
        <div class="col-sm-12">
            <div class="panel panel-default panel-style">
                <div class="panel-heading">
                    <h4>Local Events</h4>
                </div>
                <div class="panel-body">
                    <div v-for="e in events">
                        <h6>{{ e.title }}</h6>
                        <h6>{{ e.venue_name }}</h6>
                        <h6>{{ e.venue_address }}</h6>
                        <h6>{{ e.city_name }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'event',
        data() {
            return {
            }
        },
        methods: {
            getEvents() {
                this.$store.dispatch('getEvents')
            }
        },
        computed: {
            events() {
                return this.$store.state.events
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

    .panel-body {
        margin-right: .3vw;
        overflow-y: auto;
        max-height: 25vh;
        text-align: left;
    }

    .panel-style {
        margin: 0 auto;
    }
    
    .panel,
    .panel-heading,
    .panel-footer {
        background-color: rgba(0, 0, 0, 0.151);
        color: white;
        border: none

    }
</style>