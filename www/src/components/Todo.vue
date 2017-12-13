<template>
    <div class="" v-if="user.todo">
        <div class="col-sm-12">
            <div class="panel panel-default panel-style">
                <div class="panel-heading">
                    <h4>Todos</h4>
                    <h5 v-if="todos.length == 0">
                        <b>You have nothing to do</b>
                    </h5>
                    <h5 v-if="todos.length == 1">
                        <b>You have
                            <b>1</b> thing to do</b>
                    </h5>
                    <h5 v-if="todos.length > 1">
                        <b>You have
                            <b>{{ todos.length }}</b> things to do</b>
                    </h5>
                </div>
                <div class="text-center">
                    <div class="add-list-form">
                        <div class="todos" v-for="todo in todos">
                            <span class="glyphicon glyphicon-remove-circle pull-right delete" @click="removeTodo(todo._id)"></span>
                            <h5>{{ todo.name }}</h5>
                        </div>
                    </div>
                </div>
                <div class="panel-footer">
                    <form type="submit" @submit.prevent="addTodo()">
                        <div class="form-group">
                            <input name="name" type="text" class="form-control" placeholder="Add Todo" v-model="todo.name" required>
                            <!-- <button type="submit" class="btn btn-success navbar-btn">Create Todo</button> -->
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'todo',
        data() {
            return {
                todo: {
                    name: ''
                },
                message: ''
            }
        },
        methods: {
            addTodo() {
                this.$store.dispatch('addTodo', this.todo)
                this.todo = {}
            },
            getTodos() {
                this.$store.dispatch('getTodos')
            },
            removeTodo(todo) {
                this.$store.dispatch('removeTodo', todo)
            }

        },
        computed: {
            todos() {
                return this.$store.state.todos
            },
            user() {
                return this.$store.state.user
            }

        }
    }
</script>
<style scoped>
    /* *{
        border: 1px red solid;
    } */

    input {
        background-color: transparent;
        border: 2px solid white;
    }

    .panel,
    .panel-heading,
    .panel-footer {
        background-color: rgba(0, 0, 0, 0.151);
        color: white;
        border: none
    }

    span {
        cursor: pointer;
    }

    input {
        width: 60%;
        text-align: center;
        display: inline-block;
        color: white;
    }

    input::placeholder {
        color:white;
    }

    button {
        display: inline-block;
    }

    .delete {
        margin-right: 2px;
    }

    .add-list-form {
        /* height: 35vh; */
        max-height: 15vh;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.151);
    }
</style>