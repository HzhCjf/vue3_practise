<template>
    <h2>Count:{{ count }}</h2>
    <h2>两倍Count:{{ doubalCount }}</h2>
    <button @click="addCount">累加</button>
    <button @click="addCountN(3)">累加n</button>
    <button @click="addCountAwait(3)">延迟两秒再累加n</button>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default  defineComponent({
    name:'Count'
  })
</script>
<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import useCountStore from '../store/modules/count'

  const countStore = useCountStore()
  const {count,doubalCount} = storeToRefs(countStore)
  const {addCount,addCountN,addCountAwait} = countStore
</script>

<style lang="less" scoped>
  
</style>