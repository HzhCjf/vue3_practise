<template>
  <div>
    <h1>Home</h1>
    <button @click="router.push({
      name: 'Play'
    })">娱乐</button>
    <button @click="router.push({
      name: 'Music',
      params: {
        id: 1
      }
    })">音乐</button>
    <router-view></router-view>


    <div>
      <router-link to="/home/play">
        <button>娱乐</button>
      </router-link>
      <router-link to="/home/music">
        <button>音乐</button>
      </router-link>
    </div>

    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home'
})
</script>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style lang="less" scoped></style>