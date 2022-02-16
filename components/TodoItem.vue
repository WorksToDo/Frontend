/* eslint-disable vue/require-prop-types */
<template>
  <div class="todo-item">
    {{ item.todo }}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      id: Number,
      todo: String
    }
  }
}
</script>
