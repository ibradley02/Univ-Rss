<template>
    <div class="row" v-if="user.event">
        <div class="col-sm-12" >
            <div class="panel panel-default panel-style">
                <div class="panel-heading">
                    <h4>Local Events</h4>
                </div>
                <div class="panel-body" v-bind:style="{maxHeight: height + 'px'}">
                    <div v-for="e in events">
                        <h5 class="title">{{ e.title }}</h5>
                        <ul>
                            <li>{{ e.venue_name }}</li>
                            <li>
                                {{ e.venue_address }} 
                                <p>{{ e.city_name }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'event',
        props: ["i"],
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
            height(){
                return this.$store.state.height[this.i]
            },
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
        /* max-height: 25vh; */
        text-align: left;
    }

    .panel-style {
        margin: 0 auto;
    }

    .panel,
    .panel-heading,
    .panel-footer {
        background-color: rgba(0, 0, 0, 0);
        color: white;
        border: none
    }
</style>