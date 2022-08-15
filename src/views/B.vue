<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ChildB from '~/components/ChildB.vue'

const text = ref('hello')
const child = ref()
onMounted(() => {
  console.log('ref', child.value)
  child.value.childFun()
})
const callChildMethod = () => {
  child.value.childFun(123)
}
</script>
<template>
  <div>
    <h1>B页面</h1>
    <button @click="callChildMethod">
      B组件点击按钮
    </button>
    <div>{{ text }}</div>
    <ChildB ref="child" v-model="text" />
  </div>
</template>
<style>
</style>
