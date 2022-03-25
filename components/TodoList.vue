<template>
  <div>
    <ul v-if="todos" class="mt-3 border rounded-xl shadow-2xl">
      <TodoItem v-for="item in todos" :id="'todo'+item.id" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import TodoItem from '~/components/TodoItem'

export default Vue.extend({
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: {
    todos: []
  }
})
</script>

<style>
ul {
    display: grid;
    border-color: #264b6b;
    background-color: #264b6b;
    margin-left: 25%;
    margin-right: 25%;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-right: 3%;
    padding-left: 3%
}
li{
    text-align: left;
    color: white;
    margin: 10px;
}
</style>
