<template>
    <div id="editProfileModal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h2>{{user.name}}'s Profile</h2>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-6 text-left">
                            <h3>Name: {{user.name}}</h3>
                            <h3>Email: {{user.email}}</h3>
                            <h3>Profile picture:
                                <img :src="user.image" class="userImage" alt="Profile Picture">
                            </h3>
                            <h3>Background Image:
                                <img :src="user.background" class="backgroundImage" alt="Background Image">
                            </h3>
                        </div>
                        <div class="col-sm-6">
                            <form type="submit" @submit.prevent="updateProfile">
                                <div class="form-group">
                                    <label for="name">Name:</label>
                                    <input type="text" class="form-control" placeholder="Johnny Appleseed" v-model="profile.name">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password:</label>
                                    <input type="text" class="form-control" placeholder="123badpassword" v-model="profile.password">
                                </div>
                                <div class="form-group">
                                    <label for="image">Profile Image:</label>
                                    <input type="text" class="form-control" placeholder="Image Link Here" v-model="profile.image">
                                </div>
                                <div class="form-group">
                                    <label for="background">Background Image:</label>
                                    <input type="text" class="form-control" placeholder="Image Link Here" v-model="profile.background">
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-default">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- MODAL CLOSE -->
                <div class="modal-footer">
                    <!-- <button type="button" class="btn btn-danger btn-center" data-dismiss="modal">Close</button> -->
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import Navbar from './Navbar'
    import Sidebar from './Sidebar'
    export default {
        name: "profile",
        data() {
            return {
                profile: {
                    name: '',
                    username: '',
                    image: '',
                    background: ''
                },
            }
        },
        components: {
            Sidebar,
            Navbar
        },
        methods: {
            updateProfile() {
                var update = {
                    userId: this.user._id,
                    name: this.profile.name,
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
    .modal-content {
        background-color: black;
        color: white;
    }
    input {
        text-align: center;
    }

    .fa {
        color: black;
    }

    .backgroundImage {
        height: 12rem;
        width: 15rem;
    }

    .userImage {
        border-radius: 50%;
        height: 12rem;
        width: 12rem;
    }

    .background {
        background: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        margin: 0px 0px 0px 0px;
        height: 100vh;
    }

    .menu {
        cursor: pointer;
        margin-left: 2vw;
        color: white;
        position: fixed;
        z-index: 1;
        top: 10px;
        left: 10px;
    }

    .sidebar-container {
        margin-top: 10vh;
        display: relative;
        position: fixed;
    }

    .panel {
        width: 50%;
        margin: 10vh auto;
    }
</style>