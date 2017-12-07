<template>
    <div class="panel panel-info">
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
            </form>
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