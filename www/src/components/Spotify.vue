<template>
    <div class="row">
        <!-- BEGIN MODAL -->

        <div id="spotifyModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal EDIT FEED WINDOW -->
                <div class="modal-content">
                    <div class="modal-header">
                        <i class="fa fa-times pull-right" data-dismiss="modal"></i>
                    </div>
                    <!-- CREAT CATEGORY FORM -->
                    <div class="modal-body">

                        <div>
                            <div class="input">
                                <form>
                                    <div class="form-group">
                                        <label>Insert Spotify Playlist Link Here:</label>
                                        <input type="url" class="form-control" v-model="spotify.link" placeholder="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWT6MhXz0jw61">
                                    </div>
                                    <div class="form-group">
                                        <label>Playlist Name</label>
                                        <input type="text" class="form-control" v-model="spotify.title" placeholder="Playlist Name Here">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- MODAL CLOSE -->
                    <div class="modal-footer" style="text-align: center">
                        <button class="btn btn-default btn-center" @click="createSpotify" data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "profile",
        data() {
            return {
                spotify: {}
            }
        },

        components: {

        },
        methods: {

            createSpotify() {
                var boards = this.$store.state.boards.length
                var create = true
                var spotify = this.spotify
                var res = spotify.link.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
                if (res == null) {
                    create = false
                    return
                }
                var url1 = ""
                var url2 = ""
                for (var i = 0; i < spotify.link.length; i++) {
                    var char = spotify.link[i];
                    if(url1 != "https://open.spotify.com"){
                        url1 += char
                    }else{
                        url2 += char
                    }
                }
                if (create) {
                    this.newBoard = {
                        x: 7,
                        y: 0,
                        w: 3,
                        h: 10,
                        i: boards.toString(),
                        component: "spotify",
                        mediaLink: url1 + "/embed" + url2,
                        title: spotify.title
                    }

                    this.$store.dispatch('createBoard', this.newBoard)
                    this.spotify = {}
                }
            }


        },
        computed: {

        }
    }


</script>

<style>
    #login {
        display: none;
    }

    #loggedin {
        display: none;
    }

    #spotifyModal {
        z-index: 99999
    }
</style>