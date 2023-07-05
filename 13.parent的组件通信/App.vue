<template>
  <div>
    <One/>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default  defineComponent({
    name:'App'
  })
</script>
<script lang="ts" setup>
  import One from '@/components/One.vue'

  defineExpose({
    count:1
  })
</script>

<style lang="less" scoped>
  
</style>