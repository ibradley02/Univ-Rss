<template>
<div>
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
</form>
</div>
</template>

<script>
    export default {
        data() {
            return {
                register: {
                    name: '',
                    email: '',
                    username: '',
                    image: '',
                    password: ''
                }
            }
        },
        methods: {
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
        }
    }
</script>

<style>
</style>