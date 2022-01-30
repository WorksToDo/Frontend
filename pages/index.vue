<template>
  <div>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
<style>
  body{
    background-color: #92A9BD;
  }
</style>
