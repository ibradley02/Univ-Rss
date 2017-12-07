<template>
    <div class="login">
        <div class="navbar-form navbar-right col-xs-12 col-md-pull-1">
            <h5 class="text-danger text-center" v-if="error">Please Login to Continue</h5>
            <!-- This is where we will send the login info to the server -->
            <div v-if="user._id">
                <router-link :to="'/'">
                    <button class="logout-button" @click="logout">Logout</button>
                </router-link>
            </div>
            <div v-else>
                <form type="submit" @submit.prevent="submitLogin">
                    <!-- USERNAME INPUT FORM -->
                    <div class="form-group">
                        <input name="email" type="text" class="form-control" placeholder="Email" v-model='login.email'>
                    </div>
                    <!-- PASSWORD INPUT FORM -->
                    <div class="form-group">
                        <input name="password" type="password" class="form-control" placeholder="Password" v-model='login.password'>
                    </div>
                    <!-- LOGIN BUTTON -->
                    <div class="form-group">
                        <button type="submit" class="btn btn-default navbar-btn"><span class="glyphicon glyphicon-lock"></span> Login</button>
                    </div>
                </form>
                <!-- Trigger the sign-up modal with a button -->
                <button type="button" class="btn btn-info btn-md" style="margin-top: 1.5rem" data-toggle="modal" data-target="#signUpModal">Sign Up</button>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                login: {
                    email: '',
                    password: ''
                }
            }
        },
        components: {
        },
        methods: {
            submitLogin() {
                this.$store.dispatch('login', this.login)
                this.login = {
                    email: '',
                    password: ''
                }
            },
            logout() {
                this.$store.dispatch('logout')
            }
        },
        computed: {
            error() {
                return this.$store.state.error.message
            },
        }
    }
</script>

<style>
  
</style>