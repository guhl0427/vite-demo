<script setup lang="ts">
import { ref } from 'vue'
const light = ref([
  { color: 'red', on: true },
  { color: 'yellow', on: false },
  { color: 'green', on: true },
])
</script>

<template>
  <h1>hello vue</h1>
  <template v-for="item in light">
    <div class="red" v-if="item.on">{{ item.color }}</div>
  </template>
</template>

<style lang="less">
/* @import '~/style.css'; */
/* css */
* {
  margin: 0;
  padding: 0;
}

h1 {
  color: red;
}

.red {
  width: 100px;
  color: aquamarine;
}
</style>
