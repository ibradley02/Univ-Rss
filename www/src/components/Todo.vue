<template>
    <div class="row" v-if="user.todo">
        <div class="col-xs-3 pull-right">
            <div class="panel panel-default panel-style">
                <div class="panel-heading">
                    <h3>Todos</h3>
                    <h4 v-if="todos.length == 0">You have nothing to do</h4>
                    <h4 v-if="todos.length == 1">You have <b>1</b> thing to do</h4>
                    <h4 v-if="todos.length > 1">You have <b>{{ todos.length }}</b> things to do</h4>
                </div>
                <div class="text-center">
                    <div class="add-list-form">
                        <div class="todos" v-for="todo in todos">
                            <span class="glyphicon glyphicon-remove-circle pull-right delete" @click="removeTodo(todo._id)"></span>
                            <h3>{{ todo.name }}</h3>
                        </div>
                    </div>
                </div>
                <div class="panel-footer">
                    <form type="submit" @submit.prevent="addTodo()">
                        <div class="form-group">
                            <input name="name" type="text" class="form-control" placeholder="Todo" v-model="todo.name" required>
                            <button type="submit" class="btn btn-success navbar-btn">Create Todo</button>
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
    span{
        cursor: pointer;
    }
    input {
        width: 60%;
        text-align: center;
        display: inline-block;
    }

    button {
        display: inline-block;
    }

    .delete {
        margin-right: 2px;
    }

    .add-list-form {
        height: 35vh;
        max-height: 30vh;
        overflow: auto;
    }
</style>