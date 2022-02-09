<template>
  <div class="mt-10 border rounded-xl shadow-2xl">
    <input id="todo-input" v-model="todoInp" type="text" placeholder="Enter a todo..." class="border h-8 mr-2 w-80 shadow-2xl">
    <button id="save-button" class="border rounded-xl w-28 h-8 shadow-2xl" @click="saveTodo">
      Save
    </button>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'TodoForm',
  data () {
    return {
      todoInp: ''
      // count: 3
    }
  },
  methods: {
    saveTodo () {
      // API.post(this.todoInp)
    }
  }
})
</script>
<style scoped>
  div {
    display: flex;
    border-color: #264b6b;
    background-color: #264b6b;
    margin-left: 25%;
    margin-right: 25%;
    padding-right: 3%;
    padding-left: 3%
  }
  button {
    margin-left: 15%;
    margin-top: 5%;
    margin-bottom: 5%;
    background-color: #7C99AC;
    border-color: #7C99AC;
  }
  input {
    margin-top: 5%;
    margin-bottom: 5%;
    color: rgb(255, 255, 255);
    background-color: #254a69;
    border-color: #254a69;
    caret-color: white;
  }
  input:focus {
    outline: none;
  }
</style>
