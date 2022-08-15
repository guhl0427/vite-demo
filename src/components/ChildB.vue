<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: string
}>()
defineEmits(['update:modelValue'])
const count = ref(0)
const childFun = (data: any) => {
  // console.log('父组件调用了子组件的方法')
  count.value = data
}

// Vue <script setup>编译器宏，用于在父组件通过模板引用访问该组件时声明该组件公开的实例属性。
// <script setup>组件在默认情况下是关闭的，即<script setup>作用域内的变量不会暴露给父类，除非通过defineExpose显式地暴露。
// 这只能在<script setup>中使用，在输出中被编译掉，实际上不应该在运行时调用。
defineExpose({
  childFun,
})
</script>
<template>
  <div>
    <h1>子组件B</h1>
    <div>{{ count }}</div>
    <input
      type="text" :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>

<style>
</style>
