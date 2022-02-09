<template>
  <div>
    <!-- <ul class="mt-3 border rounded-xl shadow-2xl">
      <li v-for="item in todos" :id="'todo'+item.id" :key="item.id">
        {{ item.todo }}
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  // computed: {
  //   todos () {
  //     console.log(this.$store.getters['mock/getTodos'])
  //     return this.$store.getters['mock/getTodos']
  //   }
  // }
}
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
