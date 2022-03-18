
<template>
  <div class="todo-item">
    {{ item.task }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'TodoItem',
  props: {
    item: {
      type: Object
    }
  }
})
</script>
