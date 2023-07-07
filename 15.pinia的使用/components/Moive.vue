<template>
  <div>
    <h2>Moive</h2>
    <button @click="getMoiveList">获取电影列表</button>
    <ul>
      <li v-for="item in moiveList" :key="item.tvId">{{ item.albumName }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default  defineComponent({
    name:'Moive'
  })
</script>
<script lang="ts" setup>
  import useMoiveStore from '../store/modules/moive'
  import { storeToRefs } from 'pinia';
  const moiveStore = useMoiveStore()
  const {moiveList} = storeToRefs(moiveStore)
  const {getMoiveList} = moiveStore

</script>

<style lang="less" scoped>
  
</style>