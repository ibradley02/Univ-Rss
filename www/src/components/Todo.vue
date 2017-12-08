<template>
    <div class="row">
        <div class="col-xs-3 pull-right">
            <div class="panel panel-default panel-style">
                <div class="panel-heading">
                    <h3>Todos</h3>
                </div>
                <div class="text-center">
                    <div class="add-list-form">
                        <h4 v-if="todos.length == 0">I have nothing to do</h4>
                        <h4 v-if="todos.length == 1">I have 1 thing to do</h4>
                        <h4 v-if="todos.length > 1">I have {{ todos.length }} things to do</h4>
                        </h4>
                        <form type="submit" @submit.prevent="addTodo()">
                            <div class="form-group">
                                <input name="name" type="text" class="form-control" placeholder="Todo" v-model="todo.name" required>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-success navbar-btn">Create Todo</button>
                            </div>
                        </form>
                        <div class="todos" v-for="todo in todos">
                            <span class="glyphicon glyphicon-remove-circle pull-right" @click="removeTodo(todo._id)"></span>
                            <h3>{{ todo.name }}</h3>
                        </div>
                    </div>
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
                    name: '',

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
            }

        }
    }
</script>
<style></style>