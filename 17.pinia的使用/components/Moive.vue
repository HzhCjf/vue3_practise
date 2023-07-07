<template>
    <h2>Moive</h2>
    <button @click="getMoiveList">获取电影列表</button>
    <ul>
      <li v-for="item in moiveList" :key="item.tvId">{{ item.albumName }}</li>
    </ul>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default  defineComponent({
    name:'Moive'
  })
</script>
<script lang="ts" setup>
  import {storeToRefs} from 'pinia'
  import useMoiveStore from '../store/modules/moive.ts'

  const moiveStore = useMoiveStore()
  const {moiveList} = storeToRefs(moiveStore)
  const {getMoiveList} = moiveStore
</script>

<style lang="less" scoped>
  
</style>