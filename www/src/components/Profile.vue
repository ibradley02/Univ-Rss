<template>
    <!-- BEGIN MODAL -->
    <div id="profileModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <!-- Modal SIGN UP WINDOW -->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title text-center">Profile Settings</h4>
                </div>
                <!-- EMAIL INPUT FORM -->
                <div class="modal-body">
                    <form type="submit" @submit.prevent="updateProfile">
                        <div class="form-group">
                            <label for="firstName">
                                <span class="glyphicon glyphicon-edit"></span> Full Name: {{user.name}}</label>
                            <input type="text" class="form-control" placeholder="ex. Johnny Appleseed" v-model="profile.name">
                        </div>
                        <div class="form-group">
                            <label for="Email">
                                <span class="glyphicon glyphicon-envelope"></span> Email: {{user.email}}</label>
                            <input type="text" class="form-control" placeholder="john.doe@gmail.com" v-model="profile.email">
                        </div>
                        <!-- USERNAME INPUT FORM -->
                        <!-- IMG INPUT FORM -->
                        <div class="form-group">
                            <label for="Username">
                                <span class="glyphicon glyphicon-picture"></span> Profile Image: </label>
                            <input type="text" class="form-control" placeholder="image url here" v-model="profile.image">
                        </div>
                        <div class="form-group">
                            <label for="firstName">
                                <span class="glyphicon glyphicon-edit"></span> Background Image:</label>
                            <input type="text" class="form-control" placeholder="ex. Johnny Appleseed" v-model="profile.background">
                        </div>
                        <!-- PASSWORD INPUT FORM -->
                        <div class="form-group">
                            <label for="Password">
                                <span class="glyphicon glyphicon-eye-open"></span> Password:</label>
                            <input type="password" class="form-control" placeholder="Password" v-model="profile.password">
                        </div>
                        <!-- SIGN UP BUTTON -->
                        <div class="form-group">
                            <button type="submit" class="btn btn-success btn-center">
                                <span class="glyphicon glyphicon-lock"></span> Save Changes </button>
                        </div>
                    </form>
                </div>
                <!-- MODAL CLOSE -->
                <div class="modal-footer">
                    <button type="submit" class="btn btn-danger" data-dismiss="modal">
                        <span class="glyphicon glyphicon-remove"></span> Close</button>
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
                profile: {
                    name: '',
                    email: '',
                    username: '',
                    image: '',
                    background: ''
                }
            }
        },
        methods: {
            updateProfile(){
                var update = {
                    userId: this.user._id,
                    name: this.profile.name,
                    email: this.profile.email,
                    password: this.profile.password,
                    image: this.profile.image,
                    background: this.profile.background
                }
                this.$store.dispatch('updateProfile', update)
                this.profile = {
                    name: '',
                    email: '',
                    username: '',
                    image: '',
                    background: ''
                }
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }  
</script>

<style scoped>
</style>