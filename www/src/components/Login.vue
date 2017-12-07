<template>
    <div>
        <div class="panel panel-info" v-if="loginFormActive">
            <div class="panel-heading">
                <h3>Login:</h3>
            </div>
            <div class="panel-body">
                <form type="submit" @submit.prevent="submitLogin">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" placeholder="Me@gmail.com" v-model="login.email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" placeholder="123badpassword" v-model="login.password" required>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success">
                            <span class="glyphicon glyphicon-lock"> Login</span>
                        </button>
                    </div>
                    <a class="toggle-link" @click="toggleFormState">Don't Have an Account? Signup now!</a>
                </form>
            </div>
        </div>
        <div class="panel panel-info" v-else>
            <div class="panel-heading">
                <h3>Register:</h3>
            </div>
            <div class="panel-body">
                <form type="submit" @submit.prevent="submitRegister">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" placeholder="Johnny Appleseed" v-model="register.name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" placeholder="Me@gmail.com" v-model="register.email" required>
                    </div>
                    <div class="form-group">
                        <label for="image">Image</label>
                        <input type="text" class="form-control" placeholder="Image Link Here" v-model="register.image" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" placeholder="123badpassword" v-model="register.password" required>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success">
                            <span class="glyphicon glyphicon-lock"> Register</span>
                        </button>
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

<style>
</style>