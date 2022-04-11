<script setup lang="ts">
import { ref } from 'vue'
const light = ref([
  { color: 'red', on: false },
  { color: 'yellow', on: false },
  { color: 'green', on: false },
])
</script>
<template>
  <h1>123123</h1>
  div
  <div class="traffic-lights">
    <div class="light-cursor light light-color-red" />
    <div class="light light-color-yellow" />
    <div class="light light-color-green" />
  </div>
</template>
<style>
/* @import '~/style.css'; */
</style>
