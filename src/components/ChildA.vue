<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: String
}>()
const emit = defineEmits<{
  (event: 'changeEvent'): void
  (event: 'updateEvent', ev: MouseEvent, id: number): void
}>()
const count = ref(0)
const add = function() {
  count.value++
}

const updateCount = (ev: MouseEvent) => {
  // console.log('子组件处理异步任务后同步给父组件', ev)
  setTimeout(() => {
    emit('updateEvent', ev, 10000)
  }, 2000)
}

defineExpose({
  add,
})
</script>
<template>
  <div>
    <h1>子组件A</h1>
    <!-- <h1>{{ props.title }}</h1> -->
    <div>父组件传过来的值: {{ props.title }}</div>
    <div>
      <span>子组件计数: {{ count }}</span>
    </div>
    <button @click="add">
      +1
    </button>
    <button @click="updateCount($event)">
      子传父
    </button>
  </div>
</template>

<style>
</style>
