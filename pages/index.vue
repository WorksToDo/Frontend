<template>
  <div>
    <TodoForm @saveTodo="saveTodo($event)"/>
    <TodoList :todos="todos"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import API from '~/api/api'

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      todos: []
    }
  },
  methods: {
    async saveTodo (todo: any) {
      await API.addTodo({
        task: todo
      })
      this.todos = await API.getTodoList()
    }
  },
  async created () {
    this.todos = await API.getTodoList()
  }
})
</script>
<style>
  body{
    background-color: #92A9BD;
  }
</style>
