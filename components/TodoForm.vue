<template>
  <div class="mt-10 border rounded-2xl shadow-2xl h-20">
    <input id="todo-input" v-model="input" type="text" placeholder="Enter a todo..." class="border m-auto h-8 mr-2 w-80 shadow-2xl">
    <button id="save" class="border rounded-xl w-20 h-8 shadow-2xl m-auto" @click="saveTodo">
      Save
    </button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TodoForm',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    saveTodo () {
      // eslint-disable-next-line no-console
      console.log(this.input)
    }
  }
})
</script>
<style scoped>
  div {
    display: flex;
    place-content: center;
    justify-content: space-evenly;
    border-color: #264b6b;
    background-color: #264b6b;
    margin-left: 25%;
    margin-right: 25%;
    padding-right: 3%;
    padding-left: 3%
  }
  button {
    background-color: #7C99AC;
    border-color: #7C99AC;
  }
  input {
    color: rgb(255, 255, 255);
    background-color: #254a69;
    border-color: #254a69;
    caret-color: white;
  }
  input:focus {
    outline: none;
  }
</style>
