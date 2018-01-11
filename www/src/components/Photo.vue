<template>
    <div class="row">
        <!-- BEGIN MODAL -->

        <div id="imageModal" class="modal fade" role="dialog">
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
                                        <label>Insert Image Link Here:</label>
                                        <input type="url" class="form-control" v-model="image.link" placeholder="https://www.planwallpaper.com/static/images/cool-wallpapers_3.jpg">
                                    </div>
                                    <div class="form-group">
                                        <label>Image Name:</label>
                                        <input type="text" class="form-control" v-model="image.title" placeholder="Image Name or Title Here">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- MODAL CLOSE -->
                    <div class="modal-footer" style="text-align: center">
                        <button class="btn btn-default btn-center" @click="createImage" data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Photo",
        data() {
            return {
                image: {}
            }
        },

        components: {

        },
        methods: {

            createImage() {
                var boards = this.$store.state.boards.length
                var create = true
                var image = this.image
                var res = image.link.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
                if (res == null) {
                    create = false
                    alert("please input a valid link")
                    return
                }
                if (create) {
                    this.newBoard = {
                        x: 7,
                        y: 0,
                        w: 4,
                        h: 8,
                        i: boards.toString(),
                        component: "photo",
                        imageLink: image.link,
                        title: image.title
                    }

                    this.$store.dispatch('createBoard', this.newBoard)
                    this.picture = {}
                }
            }


        },
        computed: {

        }
    }


</script>

<style>
    #imageModal {
        z-index: 99999
    }
</style>