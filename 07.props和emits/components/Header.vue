<template>
  <div>
    <p @click="emits('changeCount')">count:{{props.count}}</p>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default  defineComponent({
    name:'Header'
  })
</script>
<script lang="ts" setup>
  // defineProps(['count'])
  const props = defineProps<{
    count:number
  }>()
  console.log(props);
  
  const emits = defineEmits<{
    (emits:'changeCount'):void
  }>()
  console.log(emits);
  
</script>

<style lang="less" scoped>
  
</style>