<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import ChildA from '~/components/ChildA.vue'
import { useMouse } from '~/composables/Mouse'

const { x, y } = useMouse()
const childAData = reactive({
  title: 'A组件使用了子组件',
  count: 0,
})
console.log(x, y)

const onChildUpdate = (ev: MouseEvent, data: number) => {
  console.log(ev)
  childAData.count = data
}

const childA = ref()
onMounted(() => {
  console.log('ref', childA)
})
function callChildMethod() {
  console.log('父组件调用了子组件的方法')
  childA.value.add()
}
</script>
<template>
  <div>
    <h1>A页面</h1>
    <div>鼠标位置：{{ x }},{{ y }}</div>
    <label>父传子：</label>
    <input v-model="childAData.title" type="text">
    <div>子传父的值：{{ childAData.count }}</div>
    <button @click="callChildMethod">
      父调子的方法
    </button>
    <ChildA ref="childA" :title="childAData.title" @update-event="onChildUpdate" />
  </div>
</template>

<style>
</style>
