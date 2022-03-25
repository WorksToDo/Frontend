<template>
  <div>
    <TodoForm @saveTodo="saveTodo($event)" />
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import API from '~/api/api'
import TodoForm from '~/components/TodoForm.vue'
import TodoList from '~/components/TodoList.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    TodoForm, TodoList
  },
  data () {
    return {
      todos: []
    }
  },
  async mounted () {
    this.todos = await API.getTodoList()
  },
  methods: {
    async saveTodo (todo: any) {
      await API.addTodo(todo)
      this.todos = await API.getTodoList()
    }
  }
})
</script>
<style>
  body{
    background-color: #92A9BD;
  }
</style>
