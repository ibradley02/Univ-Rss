<template>
    <div class="container text-center">
        <div class="add-list-form">
            <h4 v-if="results.length == 0">I have nothing to do</h4>
            <h4 v-if="results.length == 1">I have 1 thing to do</h4>
            <h4 v-if="results.length > 1">I have {{ results.length }} things to do</h4>
            </h4>
            <!-- <form type="submit" @submit.prevent="addTodo(result)">
                <div class="form-group">
                    <input name="name" type="text" class="form-control" placeholder="Title" v-model="result.title">
                </div>
                <div class="form-group">
                    <textarea name="content" type="text" class="form-control" placeholder="What You Going To Do?" v-model="result.content" ></textarea>
                </div> -->
                <div class="form-group">
                    <button type="submit" class="btn btn-success navbar-btn">Create Todo</button>
                </div>
            </form>
            <!-- <div class="todos" v-for="result in results">
                <span class="glyphicon glyphicon-remove-circle pull-right" @click="removeTodo(result._id)"></span>
                <li>{{ result.title }}</li> 
                <li>{{ result.content }}</li>
            </div> -->
        </div>
    </div>

</template>

<script>
    export default {
        name: 'todo',
        data() {
            return {
                result: {
                    title: '',
                    content: '',
                    
                },
                message:''
            }
        },
        mounted() {
            this.$store.dispatch('getTodos')
        },
        methods: {
            addTodo(result) {
                var todo = {
                    title: result.title,
                    content: result.content,
                }
                this.$store.dispatch('addTodo', todo)
            },
            getTodos() {
                this.$store.dispatch('getTodos')
            },
            removeTodo(todo) {
                this.$store.dispatch('removeTodo', todo)
            }

        },
        computed: {
            results() {
                return this.$store.state.results
            }

        }
    }
</script>
<style></style>