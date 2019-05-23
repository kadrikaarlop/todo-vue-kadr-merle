<template>
    <div>
        <input type="text" class="todo-input" placeholder="Mis mureks?" v-model="newTodo">
        <div v-for="todo in todos" :key="todo.id" class=todo-item"></div>
    </div>
</template>

<script>
    export default {
        name: "todo-list",
        data(){
            return {
                newTodo: '',
                todos: [
                    {
                        'id':1,
                        'title': 'Finish Vue Screencast',
                        'complete': false,
                    },
                    {
                        'id: 2',
                        'title': 'Take over world',
                        'completed': false,
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
.todo-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;

    &:focus {
        outline:0;
    }
}
</style>