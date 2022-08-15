<script setup lang="ts">
import { ref } from 'vue'
interface SkillData {
  id: number
  name: string
  time: Date
  isShow: boolean
}
const listData = ref({
  data: [] as SkillData[],
})
const setList = () => {
  listData.value.data = [
    { id: 1, name: 'Coding', time: new Date(), isShow: true },
    { id: 2, name: 'Sleeping', time: new Date(), isShow: false },
    { id: 3, name: 'Reading', time: new Date(), isShow: true },
  ]
}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br>
    <div>
      <ol>
        <li v-for="item in listData.data" :key="item.id">
          {{ item.id }} - {{ item.name }} - {{ item.time }} - {{ item.isShow ? 'on' : 'off' }}
        </li>
      </ol>
    </div>
    <button @click="setList">
      setList
    </button>
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
</style>
