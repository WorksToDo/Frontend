
<template>
  <div class="todo-item">
    {{ item.task }}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      id: Number,
      task: String
    }
  }
}
</script>
