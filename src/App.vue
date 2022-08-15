<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

// import { storeToRefs } from 'pinia'
// import { userMainStore } from './stores/main'

// const { name, doubleCount, doubleCountPlus, getUserById, userCounter, count } = storeToRefs(userMainStore())

// const { addCount, addCountAsync } = userMainStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <h1>{{ name }} - {{ doubleCount }} - {{ doubleCountPlus }}</h1>
      <h1>{{ getUserById(3) }}</h1>
      <h1>{{ userCounter }}</h1>
      <div>
        <p>{{ count }}</p>
        <button @click="addCount(3)">
          +3
        </button>
        <button @click="addCountAsync(3)">
          +3Async
        </button>
      </div> -->
      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/about">
          About
        </RouterLink>
        <RouterLink to="/A">
          A组件
        </RouterLink>
        <RouterLink to="/B">
          B组件
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="less">
/* @import '~/style.css'; */
/* css */
* {
  margin: 0;
  padding: 0;
}
.red {
  width: 100px;
  color: aquamarine;
}
</style>
