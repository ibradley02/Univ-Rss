<template>
    <div class="text-center login-body col-sm-12">
        <header>
            <h2 class="univ-rss">UNIV <i class="fa fa-rss"></i></h2>
        </header>
        <div class="panel" v-if="loginFormActive">
            <div class="panel-body">
                <form type="submit" @submit.prevent="submitLogin">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" placeholder="Me@gmail.com" v-model="login.email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" placeholder="123badpassword" v-model="login.password" required>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn">Login</button>
                    </div>
                    <a class="toggle-link" @click="toggleFormState">Don't Have an Account? Signup now!</a>
                </form>
            </div>
        </div>
        <div class="panel" v-else>
            <div class="panel-body">
                <form type="submit" @submit.prevent="submitRegister">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" placeholder="Me@gmail.com" v-model="register.email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" placeholder="123badpassword" v-model="register.password" required>
                    </div>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" placeholder="Johnny Appleseed" v-model="register.name" required>
                    </div>
                    <div class="form-group">
                        <label for="image">Profile Image:</label>
                        <input type="text" class="form-control" placeholder="Image Link Here" v-model="register.image">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn">Register</button>
                    </div>
                    <a class="toggle-link" @click="toggleFormState">Already Have an Account? Login now!</a>                    
                </form>
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
                },
                register: {
                    name: '',
                    email: '',
                    username: '',
                    image: '',
                    password: ''
                },
                loginFormActive: true
            }
        },
        components: {
        },
        methods: {
            toggleFormState() {
                this.loginFormActive = !this.loginFormActive
            },
            submitLogin() {
                this.$store.dispatch('login', this.login)
                this.login = {
                    email: '',
                    password: ''
                }
            },
            submitRegister() {
                this.$store.dispatch('register', this.register)
                this.register = {
                    name: '',
                    email: '',
                    username: '',
                    image: '',
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

<style scoped>

    input{
        text-align: center;
        width: 40vw;
        display: block;
        margin: 0 auto;
    }

    .panel{
        background-color: rgb(176, 209, 222) !important;
    }

    .login-body{
        background-color: rgb(176, 209, 222) !important;
        height: 120vh;
        width: 100vw;
    }
</style>